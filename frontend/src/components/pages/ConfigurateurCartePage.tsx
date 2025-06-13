import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  Crown, 
  Calculator, 
  TrendingUp,
  Users,
  Target,
  Video,
  Zap,
  RotateCcw,
  BarChart3,
  Mail,
  MapPin,
  Smartphone,
  Search,
  BookOpen,
  Home,
  Settings,
  ArrowRight,
  ShoppingCart,
  Coffee,
  Heart,
  Info
} from 'lucide-react';

const ConfigurateurCartePage = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    { 
      id: 1, 
      name: "Avatar & Ciblage Immobilier", 
      icon: Target, 
      essential: true,
      description: "Identifie ton vendeur idéal et cible efficacement ta zone",
      price: 297,
      stripeLink: "https://buy.stripe.com/00w6oH1XW9Gbc3teWlf7i0a",
      benefits: ["Persona détaillé", "Mapping de zone", "Stratégie ciblage"],
      difficulty: "Débutant"
    },
    { 
      id: 2, 
      name: "Promesse & Offre Irrésistible", 
      icon: TrendingUp, 
      essential: true,
      description: "Crée un message unique qui différencie de tes concurrents",
      price: 297,
      stripeLink: "https://buy.stripe.com/00w5kD1XW8C75F515vf7i0b",
      benefits: ["USP différenciant", "Scripts de vente", "Positionnement unique"],
      difficulty: "Débutant"
    },
    { 
      id: 3, 
      name: "Stratégie Vidéo Réseaux Sociaux", 
      icon: Video, 
      essential: true,
      description: "Plan 90 jours + scripts TikTok, Reels, Shorts pour visibilité",
      price: 297,
      stripeLink: "https://buy.stripe.com/14A4gz320f0vgjJeWlf7i0c",
      benefits: ["Planning 90j", "50+ scripts vidéo", "Stratégie virale"],
      difficulty: "Intermédiaire"
    },
    { 
      id: 4, 
      name: "Machine à Leads Localisée", 
      icon: Zap, 
      essential: true,
      description: "Landing page + lead magnet pour générer leads 24h/24",
      price: 297,
      stripeLink: "https://buy.stripe.com/6oUfZh5a8f0vd7xaG5f7i0d",
      benefits: ["Landing page", "Lead magnet", "Tracking avancé"],
      difficulty: "Intermédiaire"
    },
    { 
      id: 5, 
      name: "Fidélisation & Conversion Automatisée", 
      icon: RotateCcw, 
      essential: false,
      description: "Emails/SMS/WhatsApp automatisés pour convertir en RDV",
      price: 297,
      stripeLink: "https://buy.stripe.com/8x2dR9gSQbOjffFg0pf7i0e",
      benefits: ["Séquences email", "SMS automation", "WhatsApp Business"],
      difficulty: "Avancé"
    },
    { 
      id: 6, 
      name: "Analyse & Optimisation", 
      icon: BarChart3, 
      essential: false,
      description: "Dashboard + 3 bilans pour optimiser performances 90 jours",
      price: 297,
      stripeLink: "https://buy.stripe.com/00wbJ1fOMdWrebB8xXf7i0f",
      benefits: ["Dashboard perso", "3 bilans", "Optimisation ROI"],
      difficulty: "Avancé"
    },
    { 
      id: 7, 
      name: "Flyers Partenaires & Prospection Éthique", 
      icon: Mail, 
      essential: false,
      description: "Flyer-calendrier cofinancé distribué 10 000 foyers",
      price: 297,
      stripeLink: "https://buy.stripe.com/aFa9AT9qodWrebBdShf7i0g",
      benefits: ["Flyer professionnel", "Distribution 10k", "Partenaires locaux"],
      difficulty: "Intermédiaire"
    },
    { 
      id: 8, 
      name: "Google My Business", 
      icon: MapPin, 
      essential: true,
      description: "Optimisation GMB + stratégie avis + extension zones",
      price: 297,
      stripeLink: "https://buy.stripe.com/4gMcN5bywf0v8Rh01rf7i0h",
      benefits: ["Optimisation GMB", "Stratégie avis", "Multi-zones"],
      difficulty: "Débutant"
    },
    { 
      id: 9, 
      name: "Publicité Vidéo Facebook/Instagram", 
      icon: Smartphone, 
      essential: false,
      description: "Campagne pub vidéo + gestion 3 mois (budget pub séparé)",
      price: 297,
      stripeLink: "https://buy.stripe.com/28E8wP5a819FffFeWlf7i0i",
      benefits: ["Campagne vidéo", "Gestion 3 mois", "Ciblage local"],
      difficulty: "Avancé"
    },
    { 
      id: 10, 
      name: "Publicité Google Ads", 
      icon: Search, 
      essential: false,
      description: "Campagne Google Ads + gestion 3 mois (budget pub séparé)",
      price: 297,
      stripeLink: "https://buy.stripe.com/4gM5kD1XW05B5F515vf7i0j",
      benefits: ["Google Ads", "Gestion 3 mois", "Recherche locale"],
      difficulty: "Avancé"
    }
  ];

  const premiumServices = [
    { 
      id: 11, 
      name: "Blog Immobilier Premium", 
      icon: BookOpen, 
      price: 1497,
      description: "Blog WordPress complet + 5 articles SEO + IA intégrée",
      stripeLink: "https://buy.stripe.com/00w7sLfOM7y37Nd9C1f7i0k",
      benefits: ["Blog WordPress", "5 articles SEO", "IA intégrée"],
      difficulty: "Premium"
    },
    { 
      id: 12, 
      name: "Mini-Portail Immobilier", 
      icon: Home, 
      price: 397,
      description: "Page vente bien + formulaire acheteur + pub ciblée",
      stripeLink: "https://buy.stripe.com/14AeVd3203hN0kL6pPf7i0l",
      benefits: ["Page de vente", "Formulaire qualifiant", "Pub ciblée"],
      difficulty: "Premium"
    },
    { 
      id: 13, 
      name: "CRM Immobilier Sur-Mesure", 
      icon: Settings, 
      price: 1997,
      description: "CRM immobilier personnalisé leads/relances/gestion",
      stripeLink: "https://buy.stripe.com/6oU4gzcCAdWr2sT29zf7i0m",
      benefits: ["CRM personnalisé", "Gestion leads", "Relances auto"],
      difficulty: "Premium"
    }
  ];

  const suggestions = [
    {
      title: "Pack Débutant Essentiel",
      modules: [1, 2, 8],
      description: "Les 3 modules indispensables pour commencer",
      clubPrice: 997
    },
    {
      title: "Pack Visibilité Complète", 
      modules: [1, 2, 3, 4, 8],
      description: "Tout pour être visible et générer des leads",
      clubPrice: 997
    },
    {
      title: "Pack Expert Marketing",
      modules: [1, 2, 3, 4, 5, 6, 8],
      description: "Solution complète avec automation et analyse",
      clubPrice: 997
    }
  ];

  const selectedModuleData = selectedModule ? 
    [...modules, ...premiumServices].find(m => m.id === selectedModule) : null;

  const selectModule = (moduleId: number) => {
    setSelectedModule(moduleId);
  };

  const proceedToCheckout = () => {
    if (selectedModuleData && selectedModuleData.stripeLink) {
      window.open(selectedModuleData.stripeLink, '_blank');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-700';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-700';
      case 'Avancé': return 'bg-orange-100 text-orange-700';
      case 'Premium': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🛒 Configurateur <span className="text-orange-400">À la Carte</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Choisis le module qui t'intéresse. Pour plusieurs modules, effectue une commande séparée pour chacun.
            </p>
            
            {selectedModule && (
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 inline-block">
                <p className="text-lg">
                  <strong>{selectedModuleData && selectedModuleData.name}</strong> • 
                  <span className="text-orange-400 font-bold"> {selectedModuleData && selectedModuleData.price.toLocaleString()}€</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 justify-center">
            <Info className="h-8 w-8 text-blue-600" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">💡 Conseil : Besoin de plusieurs modules ?</h3>
              <p className="text-gray-700">
                Le <strong>Club IMMO (997€)</strong> inclut TOUS les 10 modules + coaching mensuel + support premium
              </p>
            </div>
            <button 
              onClick={() => window.open('https://buy.stripe.com/cNi8wPdGE4lRc3t8xXf7i09', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Voir le Club IMMO
            </button>
          </div>
        </div>
      </section>

      {/* Suggestions de Packs */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Combinaisons Populaires</h2>
            <p className="text-gray-600">Ces packs sont souvent choisis ensemble, mais avec le Club IMMO tu as tout pour moins cher !</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border">
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-2">
                    {index === 0 && <Coffee className="h-8 w-8 text-green-600" />}
                    {index === 1 && <Zap className="h-8 w-8 text-blue-600" />}
                    {index === 2 && <Crown className="h-8 w-8 text-purple-600" />}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{suggestion.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{suggestion.description}</p>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-red-600">
                      À la carte: {(suggestion.modules.length * 297).toLocaleString()}€
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      Club IMMO: {suggestion.clubPrice}€
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Économie: {(suggestion.modules.length * 297 - suggestion.clubPrice).toLocaleString()}€ 🎉
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://buy.stripe.com/cNi8wPdGE4lRc3t8xXf7i09', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Prendre le Club IMMO
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Individuels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Modules de Formation (297€ chacun)</h2>
            <p className="text-lg text-gray-600">Sélectionne le module qui t'intéresse le plus</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div key={module.id} className={`bg-white p-6 rounded-xl border-2 transition-all hover:shadow-lg cursor-pointer ${
                selectedModule === module.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`} onClick={() => selectModule(module.id)}>
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedModule === module.id
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {selectedModule === module.id && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <module.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{module.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            {module.essential && (
                              <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                                Essentiel
                              </span>
                            )}
                            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(module.difficulty)}`}>
                              {module.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">297€</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{module.description}</p>

                    <div className="space-y-2">
                      {module.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Premium */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Services Premium</h2>
            <p className="text-lg text-gray-600">Solutions haut de gamme pour ton business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumServices.map((service) => (
              <div key={service.id} className={`bg-white p-6 rounded-xl border-2 transition-all hover:shadow-lg cursor-pointer ${
                selectedModule === service.id 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-300'
              }`} onClick={() => selectModule(service.id)}>
                <div className="text-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors mb-4 mx-auto ${
                      selectedModule === service.id
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {selectedModule === service.id && <div className="w-4 h-4 bg-white rounded-full"></div>}
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mb-4 w-fit mx-auto">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">{service.price.toLocaleString()}€</p>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 justify-center">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bouton de Commande Fixe */}
      {selectedModule && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {selectedModuleData && <selectedModuleData.icon className="h-6 w-6 text-blue-600" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selectedModuleData && selectedModuleData.name}</p>
                  <p className="text-sm text-gray-600">
                    Prix: <strong>{selectedModuleData && selectedModuleData.price.toLocaleString()}€</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={proceedToCheckout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Commander {selectedModuleData && selectedModuleData.price.toLocaleString()}€
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message vide */}
      {!selectedModule && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aucun module sélectionné</h3>
            <p className="text-gray-600 mb-8">Choisis le module qui t'intéresse le plus, ou opte directement pour le Club IMMO complet</p>
            
            <button
              onClick={() => window.open('https://buy.stripe.com/cNi8wPdGE4lRc3t8xXf7i09', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Rejoindre le Club IMMO (997€)
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default ConfigurateurCartePage;