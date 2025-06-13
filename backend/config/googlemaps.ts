/**
 * Configuration Google Maps pour Le Pillier
 * Intégration Places API, Geocoding, et prospection géographique
 */

import { Client, PlaceInputType, AddressType } from '@googlemaps/google-maps-services-js';
import axios from 'axios';

// Types pour la configuration Google Maps
export interface GoogleMapsConfig {
  apiKey: string;
  region: string;
  language: string;
  libraries: string[];
  places: {
    radius: number;
    types: string[];
    rankBy: 'prominence' | 'distance';
  };
  geocoding: {
    enabled: boolean;
    cache: boolean;
    cacheTTL: number;
  };
  rateLimit: {
    requestsPerSecond: number;
    requestsPerDay: number;
    burstLimit: number;
  };
  prospection: {
    defaultRadius: number;
    maxResults: number;
    businessTypes: string[];
    excludeTypes: string[];
  };
}

// Types pour les résultats de prospection
export interface ProspectionResult {
  placeId: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  rating?: number;
  totalRatings?: number;
  businessStatus: string;
  types: string[];
  location: {
    lat: number;
    lng: number;
  };
  openingHours?: {
    isOpen: boolean;
    periods: any[];
    weekdayText: string[];
  };
  photos?: string[];
  priceLevel?: number;
  vicinity: string;
  formattedAddress: string;
}

export interface ProspectionFilter {
  businessType?: string;
  minRating?: number;
  maxDistance?: number;
  isOpenNow?: boolean;
  priceLevel?: number[];
  hasWebsite?: boolean;
  hasPhone?: boolean;
  excludeChains?: boolean;
}

export interface GeocodeResult {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  components: {
    streetNumber?: string;
    route?: string;
    locality?: string;
    postalCode?: string;
    country?: string;
    adminArea?: string;
  };
  formattedAddress: string;
  placeId?: string;
}

// Configuration par environnement
const getGoogleMapsConfig = (): GoogleMapsConfig => {
  const env = process.env.NODE_ENV || 'development';
  
  const baseConfig: GoogleMapsConfig = {
    apiKey: process.env.GOOGLE_MAPS_API_KEY || '',
    region: process.env.GOOGLE_MAPS_REGION || 'FR',
    language: process.env.GOOGLE_MAPS_LANGUAGE || 'fr',
    libraries: ['places', 'geometry', 'geocoder'],
    places: {
      radius: parseInt(process.env.GOOGLE_MAPS_DEFAULT_RADIUS || '5000'),
      types: ['establishment'],
      rankBy: 'prominence'
    },
    geocoding: {
      enabled: process.env.GOOGLE_MAPS_GEOCODING_ENABLED !== 'false',
      cache: process.env.GOOGLE_MAPS_CACHE_ENABLED !== 'false',
      cacheTTL: parseInt(process.env.GOOGLE_MAPS_CACHE_TTL || '3600000') // 1 heure
    },
    rateLimit: {
      requestsPerSecond: parseInt(process.env.GOOGLE_MAPS_RPS || '10'),
      requestsPerDay: parseInt(process.env.GOOGLE_MAPS_RPD || '25000'),
      burstLimit: parseInt(process.env.GOOGLE_MAPS_BURST || '50')
    },
    prospection: {
      defaultRadius: parseInt(process.env.PROSPECTION_DEFAULT_RADIUS || '3000'),
      maxResults: parseInt(process.env.PROSPECTION_MAX_RESULTS || '60'),
      businessTypes: [
        'real_estate_agency',
        'establishment',
        'store',
        'point_of_interest'
      ],
      excludeTypes: [
        'gas_station',
        'parking',
        'atm',
        'hospital',
        'cemetery'
      ]
    }
  };

  // Configurations spécifiques par environnement
  switch (env) {
    case 'production':
      return {
        ...baseConfig,
        rateLimit: {
          requestsPerSecond: 50,
          requestsPerDay: 100000,
          burstLimit: 100
        },
        prospection: {
          ...baseConfig.prospection,
          maxResults: 100
        }
      };

    case 'staging':
      return {
        ...baseConfig,
        rateLimit: {
          requestsPerSecond: 20,
          requestsPerDay: 10000,
          burstLimit: 30
        }
      };

    case 'test':
      return {
        ...baseConfig,
        apiKey: 'test-api-key',
        geocoding: {
          ...baseConfig.geocoding,
          cache: false
        }
      };

    default: // development
      return baseConfig;
  }
};

// Classe principale Google Maps Service
export class GoogleMapsService {
  private client: Client;
  private config: GoogleMapsConfig;
  private cache: Map<string, any> = new Map();
  private requestQueue: any[] = [];
  private rateLimitCounter: { [key: string]: number } = {};

  constructor(customConfig?: Partial<GoogleMapsConfig>) {
    this.config = { ...getGoogleMapsConfig(), ...customConfig };
    
    if (!this.config.apiKey) {
      throw new Error('Google Maps API Key requis');
    }

    this.client = new Client({});
    this.initializeRateLimit();
    
    console.log('🗺️ Google Maps Service initialisé');
  }

  private initializeRateLimit() {
    // Réinitialiser les compteurs toutes les secondes
    setInterval(() => {
      const currentSecond = Math.floor(Date.now() / 1000);
      this.rateLimitCounter = {
        [`second_${currentSecond}`]: 0
      };
    }, 1000);

    // Réinitialiser le compteur quotidien
    setInterval(() => {
      const currentDay = Math.floor(Date.now() / 86400000);
      this.rateLimitCounter[`day_${currentDay}`] = 0;
    }, 86400000);
  }

  private checkRateLimit(): boolean {
    const currentSecond = Math.floor(Date.now() / 1000);
    const currentDay = Math.floor(Date.now() / 86400000);
    
    const secondKey = `second_${currentSecond}`;
    const dayKey = `day_${currentDay}`;
    
    const secondCount = this.rateLimitCounter[secondKey] || 0;
    const dayCount = this.rateLimitCounter[dayKey] || 0;
    
    if (secondCount >= this.config.rateLimit.requestsPerSecond) {
      throw new Error('Limite de requêtes par seconde dépassée');
    }
    
    if (dayCount >= this.config.rateLimit.requestsPerDay) {
      throw new Error('Limite de requêtes quotidienne dépassée');
    }
    
    // Incrémenter les compteurs
    this.rateLimitCounter[secondKey] = secondCount + 1;
    this.rateLimitCounter[dayKey] = dayCount + 1;
    
    return true;
  }

  private getCacheKey(method: string, params: any): string {
    return `${method}_${JSON.stringify(params)}`;
  }

  private getFromCache(key: string): any | null {
    if (!this.config.geocoding.cache) return null;
    
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.config.geocoding.cacheTTL) {
      return cached.data;
    }
    
    this.cache.delete(key);
    return null;
  }

  private setCache(key: string, data: any): void {
    if (this.config.geocoding.cache) {
      this.cache.set(key, {
        data,
        timestamp: Date.now()
      });
    }
  }

  // Géocodage d'adresses
  async geocodeAddress(address: string): Promise<GeocodeResult | null> {
    const cacheKey = this.getCacheKey('geocode', { address });
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      this.checkRateLimit();

      const response = await this.client.geocode({
        params: {
          address,
          key: this.config.apiKey,
          region: this.config.region,
          language: this.config.language
        }
      });

      if (response.data.results.length === 0) {
        return null;
      }

      const result = response.data.results[0];
      const geocodeResult: GeocodeResult = {
        address,
        coordinates: {
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng
        },
        components: {
          streetNumber: result.address_components.find(c => c.types.includes('street_number'))?.long_name,
          route: result.address_components.find(c => c.types.includes('route'))?.long_name,
          locality: result.address_components.find(c => c.types.includes('locality'))?.long_name,
          postalCode: result.address_components.find(c => c.types.includes('postal_code'))?.long_name,
          country: result.address_components.find(c => c.types.includes('country'))?.long_name,
          adminArea: result.address_components.find(c => c.types.includes('administrative_area_level_1'))?.long_name
        },
        formattedAddress: result.formatted_address,
        placeId: result.place_id
      };

      this.setCache(cacheKey, geocodeResult);
      return geocodeResult;
    } catch (error) {
      console.error('❌ Erreur géocodage:', error);
      throw error;
    }
  }

  // Recherche de lieux à proximité
  async searchNearbyPlaces(
    location: { lat: number; lng: number },
    options: {
      radius?: number;
      type?: string;
      keyword?: string;
      minPriceLevel?: number;
      maxPriceLevel?: number;
      openNow?: boolean;
    } = {}
  ): Promise<ProspectionResult[]> {
    try {
      this.checkRateLimit();

      const searchParams = {
        location: `${location.lat},${location.lng}`,
        radius: options.radius || this.config.prospection.defaultRadius,
        type: options.type || 'establishment',
        key: this.config.apiKey,
        language: this.config.language,
        ...(options.keyword && { keyword: options.keyword }),
        ...(options.openNow && { opennow: true })
      };

      const response = await this.client.placesNearby({
        params: searchParams
      });

      const results: ProspectionResult[] = [];

      for (const place of response.data.results.slice(0, this.config.prospection.maxResults)) {
        // Obtenir les détails complets de chaque lieu
        const details = await this.getPlaceDetails(place.place_id!);
        if (details) {
          results.push(details);
        }
        
        // Petit délai pour éviter de dépasser les limites
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      return results;
    } catch (error) {
      console.error('❌ Erreur recherche proximité:', error);
      throw error;
    }
  }

  // Détails complets d'un lieu
  async getPlaceDetails(placeId: string): Promise<ProspectionResult | null> {
    const cacheKey = this.getCacheKey('placeDetails', { placeId });
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    try {
      this.checkRateLimit();

      const response = await this.client.placeDetails({
        params: {
          place_id: placeId,
          key: this.config.apiKey,
          language: this.config.language,
          fields: [
            'place_id',
            'name',
            'formatted_address',
            'formatted_phone_number',
            'website',
            'rating',
            'user_ratings_total',
            'business_status',
            'types',
            'geometry',
            'opening_hours',
            'photos',
            'price_level',
            'vicinity'
          ]
        }
      });

      const place = response.data.result;
      
      const result: ProspectionResult = {
        placeId: place.place_id!,
        name: place.name || 'Nom inconnu',
        address: place.vicinity || '',
        phone: place.formatted_phone_number,
        website: place.website,
        rating: place.rating,
        totalRatings: place.user_ratings_total,
        businessStatus: place.business_status || 'UNKNOWN',
        types: place.types || [],
        location: {
          lat: place.geometry?.location.lat || 0,
          lng: place.geometry?.location.lng || 0
        },
        openingHours: place.opening_hours ? {
          isOpen: place.opening_hours.open_now || false,
          periods: place.opening_hours.periods || [],
          weekdayText: place.opening_hours.weekday_text || []
        } : undefined,
        photos: place.photos?.map(photo => 
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${this.config.apiKey}`
        ),
        priceLevel: place.price_level,
        vicinity: place.vicinity || '',
        formattedAddress: place.formatted_address || ''
      };

      this.setCache(cacheKey, result);
      return result;
    } catch (error) {
      console.error('❌ Erreur détails lieu:', error);
      return null;
    }
  }

  // Prospection avancée avec filtres
  async prospectBusinesses(
    centerAddress: string,
    filters: ProspectionFilter = {}
  ): Promise<{
    results: ProspectionResult[];
    center: GeocodeResult;
    totalFound: number;
    filtered: number;
  }> {
    console.log(`🎯 Début prospection: ${centerAddress}`);
    
    // Géocoder l'adresse centrale
    const center = await this.geocodeAddress(centerAddress);
    if (!center) {
      throw new Error('Impossible de géocoder l\'adresse de départ');
    }

    // Rechercher les lieux à proximité
    let allResults = await this.searchNearbyPlaces(center.coordinates, {
      radius: filters.maxDistance || this.config.prospection.defaultRadius,
      type: filters.businessType,
      openNow: filters.isOpenNow
    });

    const totalFound = allResults.length;

    // Appliquer les filtres
    if (filters.minRating) {
      allResults = allResults.filter(r => r.rating && r.rating >= filters.minRating!);
    }

    if (filters.hasWebsite) {
      allResults = allResults.filter(r => r.website);
    }

    if (filters.hasPhone) {
      allResults = allResults.filter(r => r.phone);
    }

    if (filters.priceLevel && filters.priceLevel.length > 0) {
      allResults = allResults.filter(r => 
        r.priceLevel !== undefined && filters.priceLevel!.includes(r.priceLevel)
      );
    }

    if (filters.excludeChains) {
      // Exclure les grandes chaînes (basé sur le nombre total d'avis)
      allResults = allResults.filter(r => 
        !r.totalRatings || r.totalRatings < 1000
      );
    }

    // Exclure les types non désirés
    allResults = allResults.filter(r => 
      !r.types.some(type => this.config.prospection.excludeTypes.includes(type))
    );

    console.log(`✅ Prospection terminée: ${allResults.length}/${totalFound} résultats`);

    return {
      results: allResults,
      center,
      totalFound,
      filtered: allResults.length
    };
  }

  // Recherche par mot-clé dans une zone
  async searchByKeyword(
    location: { lat: number; lng: number },
    keyword: string,
    radius: number = 5000
  ): Promise<ProspectionResult[]> {
    try {
      this.checkRateLimit();

      const response = await this.client.textSearch({
        params: {
          query: keyword,
          location: `${location.lat},${location.lng}`,
          radius,
          key: this.config.apiKey,
          language: this.config.language
        }
      });

      const results: ProspectionResult[] = [];

      for (const place of response.data.results.slice(0, this.config.prospection.maxResults)) {
        const details = await this.getPlaceDetails(place.place_id!);
        if (details) {
          results.push(details);
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      return results;
    } catch (error) {
      console.error('❌ Erreur recherche par mot-clé:', error);
      throw error;
    }
  }

  // Calcul de distance entre deux points
  calculateDistance(
    point1: { lat: number; lng: number },
    point2: { lat: number; lng: number }
  ): number {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (point2.lat - point1.lat) * Math.PI / 180;
    const dLon = (point2.lng - point1.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // Export des résultats
  exportToCSV(results: ProspectionResult[]): string {
    const headers = [
      'Nom',
      'Adresse',
      'Téléphone',
      'Site Web',
      'Note',
      'Nombre d\'avis',
      'Statut',
      'Types',
      'Latitude',
      'Longitude'
    ];

    const rows = results.map(result => [
      result.name,
      result.formattedAddress,
      result.phone || '',
      result.website || '',
      result.rating?.toString() || '',
      result.totalRatings?.toString() || '',
      result.businessStatus,
      result.types.join(';'),
      result.location.lat.toString(),
      result.location.lng.toString()
    ]);

    return [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
  }

  // Statistiques d'utilisation
  getUsageStats() {
    return {
      config: {
        region: this.config.region,
        language: this.config.language,
        defaultRadius: this.config.prospection.defaultRadius
      },
      rateLimit: this.config.rateLimit,
      cache: {
        size: this.cache.size,
        enabled: this.config.geocoding.cache
      },
      rateLimitCounter: this.rateLimitCounter
    };
  }

  // Test de l'API
  async testApiConnection(): Promise<boolean> {
    try {
      await this.geocodeAddress('Paris, France');
      console.log('✅ Google Maps API opérationnelle');
      return true;
    } catch (error) {
      console.error('❌ Erreur Google Maps API:', error);
      return false;
    }
  }
}

// Instance globale
let googleMapsServiceInstance: GoogleMapsService | null = null;

// Factory function
export const getGoogleMapsService = (customConfig?: Partial<GoogleMapsConfig>): GoogleMapsService => {
  if (!googleMapsServiceInstance || customConfig) {
    googleMapsServiceInstance = new GoogleMapsService(customConfig);
  }
  return googleMapsServiceInstance;
};

// Initialisation avec test
export const initializeGoogleMapsService = async (customConfig?: Partial<GoogleMapsConfig>): Promise<GoogleMapsService> => {
  console.log('🗺️ Initialisation Google Maps Service...');
  
  const service = getGoogleMapsService(customConfig);
  
  // Test de l'API
  const isWorking = await service.testApiConnection();
  if (!isWorking) {
    console.warn('⚠️ Google Maps API non disponible');
  }

  console.log('✅ Google Maps Service initialisé');
  return service;
};

// Middleware Express
export const googleMapsMiddleware = (req: any, res: any, next: any) => {
  req.googleMaps = getGoogleMapsService();
  next();
};

// Export par défaut
export default getGoogleMapsService;