import React from 'react';
import { 
  MapPin, 
  Search, 
  Star, 
  Camera, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Phone,
  TrendingUp,
  Shield,
  Eye,
  Users,
  Navigation,
  MessageCircle,
  Globe,
  Award
} from 'lucide-react';

const GoogleMyBusinessPage = () => {
  const benefits = [
    {
      icon: Search,
      title: "Visibilité Recherches Locales",
      description: "Tu apparais en premier quand on cherche un conseiller immobilier dans ta zone."
    },
    {
      icon: Star,
      title: "Crédibilité & Confiance",
      description: "Les avis clients et photos professionnelles renforcent ta réputation locale."
    },
    {
      icon: Phone,
      title: "Appels Directs Qualifiés",
      description: "Les prospects t'appellent directement depuis Google sans intermédiaire."
    },
    {
      icon: TrendingUp,
      title: "Extension Zone d'Influence",
      description: "Tu élargis ta zone de chalandise et touches de nouveaux secteurs."
    }
  ];

  const deliverables = [
    {
      icon: MapPin,
      title: "Création/Optimisation Fiche GMB",
      description: "Configuration complète : infos, horaires, services, photos pro, description optimisée SEO local."
    },
    {
      icon: Camera,
      title: "Kit Photos Professionnelles",
      description: "Photos de ton bureau, équipe, secteur d'activité et biens vendus pour renforcer la confiance."
    },
    {
      icon: Star,
      title: "Stratégie d'Avis Clients",
      description: "Système pour collecter des avis positifs authentiques et gérer ta réputation en ligne."
    },
    {
      icon: Calendar,
      title: "Plan de Publications 3 Mois",
      description: "Calendrier de posts GMB avec actualités marché, biens vendus, conseils et événements locaux."
    },
    {
      icon: Globe,
      title: "Extension Multi-Zones",
      description: "Stratégie pour couvrir plusieurs secteurs géographiques et multiplier ta visibilité locale."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Optimisation",
      description: "Analyse de ta présence actuelle et optimisation technique"
    },
    {
      step: "02",
      title: "Contenu & Visuel",
      description: "Création photos pro et rédaction descriptions optimisées"
    },
    {
      step: "03",
      title: "Stratégie Avis",
      description: "Mise en place du système de collecte d'avis clients"
    },
    {
      step: "04",
      title: "Publication & Suivi",
      description: "Déploiement du plan éditorial et monitoring performances"
    }
  ];

  const localSeoFactors = [
    {
      factor: "Optimisation NAP",
      description: "Nom, Adresse, Téléphone cohérents partout",
      impact: "🔥🔥🔥",
      boost: "+40% visibilité"
    },
    {
      factor: "Avis Clients Positifs",
      description: "Note 4.5+ avec avis récents et détaillés",
      impact: "🔥🔥🔥",
      boost: "+60% clics"
    },
    {
      factor: "Photos Professionnelles",
      description: "Images de qualité du bureau et de l'équipe",
      impact: "🔥🔥",
      boost: "+35% engagement"
    },
    {
      factor: "Publications Régulières",
      description: "Posts hebdomadaires avec actualités locales",
      impact: "🔥🔥",
      boost: "+25% interactions"
    }
  ];

  const gmbFeatures = [
    {
      feature: "Fiche d'Établissement",
      icon: "🏢",
      description: "Infos complètes : adresse, horaires, services, photos",
      benefit: "Première impression professionnelle"
    },
    {
      feature: "Avis & Notes",
      icon: "⭐",
      description: "Système de notation et commentaires clients",
      benefit: "Preuve sociale et crédibilité"
    },
    {
      feature: "Questions-Réponses",
      icon: "❓",
      description: "FAQ automatique avec réponses aux questions fréquentes",
      benefit: "Information immédiate prospects"
    },
    {
      feature: "Posts & Actualités",
      icon: "📝",
      description: "Publications régulières : biens, conseils, événements",
      benefit: "Engagement et visibilité continue"
    },
    {
      feature: "Messagerie Directe",
      icon: "💬",
      description: "Communication directe avec prospects intéressés",
      benefit: "Conversion rapide en RDV"
    },
    {
      feature: "Statistiques Détaillées",
      icon: "📊",
      description: "Analytics : vues, clics, appels, demandes d'itinéraire",
      benefit: "Mesure ROI et optimisation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-2xl">
                <MapPin className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange-400">Google My Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Création et optimisation complète de ta fiche Google My Business + stratégie d'avis 
              + extension multi-zones pour dominer les recherches locales immobilières.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Optimiser ma Présence Locale
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Optimisation sous 5 jours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectif Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 L'Objectif</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Deviens LE conseiller immobilier que Google recommande en premier dans ta zone. 
              Capte les recherches locales et transforme la visibilité en appels qualifiés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-blue-100 p-3 rounded-lg mb-4 w-fit">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités GMB */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🔧 Fonctionnalités Google My Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous optimisons chaque fonctionnalité pour maximiser ta visibilité et tes conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gmbFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.feature}</h3>
                </div>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">✅ {feature.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs SEO Local */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 Facteurs SEO Local Optimisés</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les éléments clés que nous optimisons pour te faire remonter dans les résultats locaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {localSeoFactors.map((factor, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{factor.factor}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{factor.impact}</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                      {factor.boost}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que tu reçois */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎁 Ce que tu reçois</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un service complet d'optimisation Google My Business pour dominer tes recherches locales
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🔄 Notre Processus</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Une méthode éprouvée en 4 étapes pour optimiser ta présence Google My Business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi c'est clé */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">🚀 Pourquoi c'est clé</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu captes les recherches "conseiller immobilier près de moi"</h3>
                    <p className="text-gray-600">46% des recherches Google sont locales. Tu dois être visible.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu génères des appels directs qualifiés</h3>
                    <p className="text-gray-600">Les prospects t'appellent immédiatement depuis ta fiche Google.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu étends ta zone de chalandise</h3>
                    <p className="text-gray-600">Stratégie multi-zones pour couvrir plusieurs secteurs géographiques.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Navigation className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">🗺️ Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Top 3 recherches locales</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Note 4.5+ étoiles maintenue</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>+50% appels directs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Extension multi-zones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à dominer les recherches locales ?</h2>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">297€</span>
                </div>
                <p className="text-xl text-blue-200 mb-4">Prestation unique</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Shield className="h-4 w-4" />
                  <span>Garantie satisfaction</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105">
                  Commander Maintenant
                </button>
                
                <div className="bg-blue-600/50 p-4 rounded-lg">
                  <p className="text-sm mb-2">💎 <strong>Inclus dans le Club IMMO</strong></p>
                  <p className="text-xs text-blue-200">Accès à cette formation + 12 autres modules pour seulement 97€/mois</p>
                  <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                    Rejoindre le Club IMMO
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-blue-200 mb-6">
            🗺️ <strong>Parfait pour capter les recherches locales et générer des appels directs qualifiés.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              💬 Questions ? Contacte-moi
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all">
              📞 Appel découverte gratuit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleMyBusinessPage;