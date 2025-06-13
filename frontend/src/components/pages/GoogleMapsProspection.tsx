import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Search, 
  Target, 
  Star, 
  Phone, 
  Globe, 
  Clock, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Plus,
  Filter,
  BarChart3,
  Mail,
  Download,
  Eye,
  Users,
  Building,
  Camera,
  ExternalLink
} from 'lucide-react';

// Configuration API Google Maps
const GOOGLE_MAPS_API_KEY = 'AIzaSyCpmjXTelJATgsyjHRTTTQFedYv1yAfoWQ';

interface PlaceResult {
  placeId: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  businessStatus: string;
  photos?: string[];
  categories: string[];
  optimizationScore: number;
  issues: string[];
  opportunities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  isProspect: boolean;
  contactStatus: 'not-contacted' | 'contacted' | 'interested' | 'not-interested';
  lastContact?: string;
  notes?: string;
}

interface SearchFilters {
  category: string;
  rating: number;
  reviewCount: number;
  radius: number;
  hasWebsite: boolean;
  hasPhone: boolean;
  optimizationMin: number;
}

const GoogleMapsProspection = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('agence immobilière');
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceResult | null>(null);
  const [showPlaceModal, setShowPlaceModal] = useState(false);
  const [prospects, setProspects] = useState<PlaceResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    rating: 0,
    reviewCount: 0,
    radius: 5000,
    hasWebsite: false,
    hasPhone: false,
    optimizationMin: 0
  });
  const [showFilters, setShowFilters] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Initialisation de Google Maps
  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.google) {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: { lat: 48.8566, lng: 2.3522 }, // Paris par défaut
          zoom: 12,
          styles: [
            {
              featureType: 'poi.business',
              stylers: [{ visibility: 'on' }]
            }
          ]
        });
        setMap(mapInstance);
      }
    };

    // Charger l'API Google Maps si pas déjà chargée
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  // Analyse d'optimisation automatique
  const analyzeOptimization = (place: any): { score: number; issues: string[]; opportunities: string[] } => {
    let score = 100;
    const issues: string[] = [];
    const opportunities: string[] = [];

    // Vérification du profil
    if (!place.website) {
      score -= 20;
      issues.push('Aucun site web renseigné');
      opportunities.push('Ajouter un site web professionnel');
    }

    if (!place.formatted_phone_number) {
      score -= 15;
      issues.push('Numéro de téléphone manquant');
      opportunities.push('Renseigner un numéro de téléphone');
    }

    if (place.rating < 4.0) {
      score -= 15;
      issues.push(`Note faible: ${place.rating}/5`);
      opportunities.push('Améliorer la satisfaction client');
    }

    if (place.user_ratings_total < 10) {
      score -= 10;
      issues.push('Peu d\'avis clients');
      opportunities.push('Encourager les avis clients');
    }

    if (!place.photos || place.photos.length < 5) {
      score -= 10;
      issues.push('Peu de photos');
      opportunities.push('Ajouter plus de photos de qualité');
    }

    if (!place.opening_hours) {
      score -= 10;
      issues.push('Horaires non renseignés');
      opportunities.push('Ajouter les horaires d\'ouverture');
    }

    // Vérification de la description
    if (!place.editorial_summary) {
      score -= 10;
      issues.push('Description manquante');
      opportunities.push('Ajouter une description détaillée');
    }

    return { score: Math.max(0, score), issues, opportunities };
  };

  // Recherche de lieux
  const searchPlaces = async () => {
    if (!map || !searchLocation || !searchQuery) return;

    setIsLoading(true);
    setResults([]);

    try {
      const service = new window.google.maps.places.PlacesService(map);
      const geocoder = new window.google.maps.Geocoder();

      // Géocoder l'adresse de recherche
      const geocodeResult = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
        geocoder.geocode({ address: searchLocation }, (results, status) => {
          if (status === 'OK' && results) {
            resolve(results);
          } else {
            reject(new Error('Géocodage échoué'));
          }
        });
      });

      const location = geocodeResult[0].geometry.location;
      
      // Centrer la carte sur la zone de recherche
      map.setCenter(location);
      map.setZoom(14);

      // Recherche des lieux
      const request: google.maps.places.PlaceSearchRequest = {
        location: location,
        radius: filters.radius,
        keyword: searchQuery,
        type: 'establishment'
      };

      service.nearbySearch(request, async (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          const detailedResults: PlaceResult[] = [];

          for (const place of results.slice(0, 20)) { // Limiter à 20 résultats
            if (place.place_id) {
              try {
                // Obtenir les détails de chaque lieu
                const details = await new Promise<google.maps.places.PlaceResult>((resolve, reject) => {
                  service.getDetails({
                    placeId: place.place_id!,
                    fields: [
                      'name', 'formatted_address', 'formatted_phone_number',
                      'website', 'rating', 'user_ratings_total', 'business_status',
                      'photos', 'types', 'geometry', 'opening_hours', 'editorial_summary'
                    ]
                  }, (result, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && result) {
                      resolve(result);
                    } else {
                      reject(new Error('Détails non disponibles'));
                    }
                  });
                });

                // Analyser l'optimisation
                const analysis = analyzeOptimization(details);

                const placeResult: PlaceResult = {
                  placeId: place.place_id,
                  name: details.name || 'Nom non disponible',
                  address: details.formatted_address || '',
                  phone: details.formatted_phone_number,
                  website: details.website,
                  rating: details.rating || 0,
                  reviewCount: details.user_ratings_total || 0,
                  businessStatus: details.business_status || 'UNKNOWN',
                  photos: details.photos?.slice(0, 3).map(photo => 
                    photo.getUrl({ maxWidth: 400, maxHeight: 300 })
                  ),
                  categories: details.types || [],
                  optimizationScore: analysis.score,
                  issues: analysis.issues,
                  opportunities: analysis.opportunities,
                  coordinates: {
                    lat: details.geometry?.location?.lat() || 0,
                    lng: details.geometry?.location?.lng() || 0
                  },
                  isProspect: false,
                  contactStatus: 'not-contacted'
                };

                detailedResults.push(placeResult);

                // Ajouter un marqueur sur la carte
                const marker = new window.google.maps.Marker({
                  position: placeResult.coordinates,
                  map: map,
                  title: placeResult.name,
                  icon: {
                    url: placeResult.optimizationScore < 50 ? 
                      'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><circle cx="12" cy="12" r="10"/></svg>' :
                      placeResult.optimizationScore < 80 ?
                      'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange"><circle cx="12" cy="12" r="10"/></svg>' :
                      'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green"><circle cx="12" cy="12" r="10"/></svg>',
                    scaledSize: new window.google.maps.Size(20, 20)
                  }
                });

                marker.addListener('click', () => {
                  setSelectedPlace(placeResult);
                  setShowPlaceModal(true);
                });

              } catch (error) {
                console.error('Erreur lors de la récupération des détails:', error);
              }
            }
          }

          setResults(detailedResults);
        }
        setIsLoading(false);
      });

    } catch (error) {
      console.error('Erreur de recherche:', error);
      setIsLoading(false);
    }
  };

  // Filtrer les résultats
  const filteredResults = results.filter(place => {
    if (filters.category !== 'all' && !place.categories.includes(filters.category)) return false;
    if (place.rating < filters.rating) return false;
    if (place.reviewCount < filters.reviewCount) return false;
    if (filters.hasWebsite && !place.website) return false;
    if (filters.hasPhone && !place.phone) return false;
    if (place.optimizationScore < filters.optimizationMin) return false;
    return true;
  });

  // Ajouter aux prospects
  const addToProspects = (place: PlaceResult) => {
    const updatedPlace = { ...place, isProspect: true };
    setProspects(prev => [...prev.filter(p => p.placeId !== place.placeId), updatedPlace]);
    setResults(prev => prev.map(p => p.placeId === place.placeId ? updatedPlace : p));
  };

  // Retirer des prospects
  const removeFromProspects = (placeId: string) => {
    setProspects(prev => prev.filter(p => p.placeId !== placeId));
    setResults(prev => prev.map(p => p.placeId === placeId ? { ...p, isProspect: false } : p));
  };

  // Couleur du score d'optimisation
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 50) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🗺️ Prospection Google Maps</h1>
              <p className="text-gray-600">Trouvez et analysez vos prospects immobiliers</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                <Filter className="h-5 w-5" />
                Filtres ({filteredResults.length})
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export Prospects ({prospects.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barre de recherche */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Zone de recherche</label>
              <input
                type="text"
                placeholder="Ville, quartier, code postal..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type de business</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              >
                <option value="agence immobilière">Agences immobilières</option>
                <option value="agent immobilier">Agents immobiliers</option>
                <option value="promoteur immobilier">Promoteurs</option>
                <option value="administrateur de biens">Administrateurs de biens</option>
                <option value="syndic de copropriété">Syndics</option>
                <option value="expert immobilier">Experts immobiliers</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={searchPlaces}
                disabled={isLoading || !searchLocation}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Recherche...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Rechercher
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Filtres */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtres de Recherche</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Note minimum</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({ ...prev, rating: Number(e.target.value) }))}
                >
                  <option value={0}>Toutes</option>
                  <option value={3}>3+ étoiles</option>
                  <option value={4}>4+ étoiles</option>
                  <option value={4.5}>4.5+ étoiles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Avis minimum</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={filters.reviewCount}
                  onChange={(e) => setFilters(prev => ({ ...prev, reviewCount: Number(e.target.value) }))}
                >
                  <option value={0}>Tous</option>
                  <option value={5}>5+ avis</option>
                  <option value={10}>10+ avis</option>
                  <option value={50}>50+ avis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Score optimisation</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={filters.optimizationMin}
                  onChange={(e) => setFilters(prev => ({ ...prev, optimizationMin: Number(e.target.value) }))}
                >
                  <option value={0}>Tous</option>
                  <option value={30}>30+ (Faible)</option>
                  <option value={50}>50+ (Moyen)</option>
                  <option value={80}>80+ (Bon)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={filters.hasWebsite}
                    onChange={(e) => setFilters(prev => ({ ...prev, hasWebsite: e.target.checked }))}
                  />
                  <span className="text-sm">A un site web</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2"
                    checked={filters.hasPhone}
                    onChange={(e) => setFilters(prev => ({ ...prev, hasPhone: e.target.checked }))}
                  />
                  <span className="text-sm">A un téléphone</span>
                </label>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Carte des Résultats</h3>
              <p className="text-sm text-gray-600">
                🔴 Faible optimisation • 🟠 Moyenne • 🟢 Bonne
              </p>
            </div>
            <div ref={mapRef} className="h-96 w-full"></div>
          </div>

          {/* Résultats */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Résultats ({filteredResults.length})
              </h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredResults.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  ) : (
                    <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  )}
                  <p>{isLoading ? 'Recherche en cours...' : 'Aucun résultat. Lancez une recherche.'}</p>
                </div>
              ) : (
                <div className="space-y-4 p-4">
                  {filteredResults.map((place) => (
                    <div key={place.placeId} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{place.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{place.address}</p>
                          
                          <div className="flex items-center gap-4 text-sm">
                            {place.rating > 0 && (
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span>{place.rating} ({place.reviewCount} avis)</span>
                              </div>
                            )}
                            
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(place.optimizationScore)}`}>
                              Score: {place.optimizationScore}%
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedPlace(place);
                              setShowPlaceModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-800"
                            title="Voir détails"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          
                          {place.isProspect ? (
                            <button
                              onClick={() => removeFromProspects(place.placeId)}
                              className="text-red-600 hover:text-red-800"
                              title="Retirer des prospects"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          ) : (
                            <button
                              onClick={() => addToProspects(place)}
                              className="text-green-600 hover:text-green-800"
                              title="Ajouter aux prospects"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        {place.phone && (
                          <div className="flex items-center gap-1 text-gray-600">
                            <Phone className="h-4 w-4" />
                            <span>{place.phone}</span>
                          </div>
                        )}
                        {place.website && (
                          <div className="flex items-center gap-1 text-gray-600">
                            <Globe className="h-4 w-4" />
                            <span>Site web</span>
                          </div>
                        )}
                      </div>
                      
                      {place.issues.length > 0 && (
                        <div className="mt-2 text-xs text-orange-600">
                          <AlertTriangle className="h-3 w-3 inline mr-1" />
                          {place.issues.length} problème{place.issues.length > 1 ? 's' : ''} détecté{place.issues.length > 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Liste des prospects */}
        {prospects.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Mes Prospects ({prospects.length})
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {prospects.map((prospect) => (
                  <div key={prospect.placeId} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{prospect.name}</h4>
                        <p className="text-sm text-gray-600">{prospect.address}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(prospect.optimizationScore)}`}>
                            Score: {prospect.optimizationScore}%
                          </span>
                          <span className="text-gray-600">
                            {prospect.issues.length} opportunité{prospect.issues.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                          Contacter
                        </button>
                        <button 
                          onClick={() => removeFromProspects(prospect.placeId)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal détails lieu */}
      {showPlaceModal && selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Analyse Détaillée</h3>
                <button 
                  onClick={() => setShowPlaceModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Informations Générales</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">{selectedPlace.name}</p>
                      <p className="text-sm text-gray-600">{selectedPlace.address}</p>
                    </div>
                    
                    {selectedPlace.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{selectedPlace.phone}</span>
                      </div>
                    )}
                    
                    {selectedPlace.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <a href={selectedPlace.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          Voir le site web
                        </a>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{selectedPlace.rating}/5 ({selectedPlace.reviewCount} avis)</span>
                    </div>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(selectedPlace.optimizationScore)}`}>
                      Score d'optimisation: {selectedPlace.optimizationScore}%
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Analyse d'Optimisation</h4>
                  
                  {selectedPlace.issues.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-red-600 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Problèmes Détectés ({selectedPlace.issues.length})
                      </h5>
                      <ul className="space-y-1">
                        {selectedPlace.issues.map((issue, index) => (
                          <li key={index} className="text-sm text-red-600 flex items-start gap-2">
                            <span className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedPlace.opportunities.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-green-600 mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Opportunités ({selectedPlace.opportunities.length})
                      </h5>
                      <ul className="space-y-1">
                        {selectedPlace.opportunities.map((opportunity, index) => (
                          <li key={index} className="text-sm text-green-600 flex items-start gap-2">
                            <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-900 mb-2">💡 Angle de Prospection</h5>
                    <p className="text-sm text-blue-800">
                      {selectedPlace.optimizationScore < 50 
                        ? "Ce prospect a un potentiel d'amélioration énorme ! Proposez un audit gratuit de leur présence Google My Business."
                        : selectedPlace.optimizationScore < 80
                        ? "Bon profil avec quelques améliorations possibles. Proposez des services d'optimisation ciblés."
                        : "Profil bien optimisé. Concentrez-vous sur des services avancés ou du conseil stratégique."
                      }
                    </p>
                  </div>
                </div>
                
                {selectedPlace.photos && selectedPlace.photos.length > 0 && (
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Photos</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedPlace.photos.map((photo, index) => (
                        <img 
                          key={index}
                          src={photo} 
                          alt={`Photo ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex gap-4">
                {!selectedPlace.isProspect ? (
                  <button
                    onClick={() => {
                      addToProspects(selectedPlace);
                      setShowPlaceModal(false);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <Plus className="h-5 w-5" />
                    Ajouter aux Prospects
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      removeFromProspects(selectedPlace.placeId);
                      setShowPlaceModal(false);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <X className="h-5 w-5" />
                    Retirer des Prospects
                  </button>
                )}
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Créer Campagne Email
                </button>
                
                {selectedPlace.website && (
                  <a
                    href={selectedPlace.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Voir le site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMapsProspection;