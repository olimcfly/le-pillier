import React from 'react';
import { 
  Video, 
  Play, 
  Eye, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Camera,
  Smartphone,
  Calendar,
  Shield,
  Clock,
  Star,
  Zap,
  MapPin,
  MessageCircle,
  BarChart3
} from 'lucide-react';

const StrategieVideoPage = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Visibilité Locale Maximale",
      description: "Tu deviens LA référence immobilière dans ta zone grâce aux algorithmes."
    },
    {
      icon: Users,
      title: "Communauté Engagée",
      description: "Tu crées une audience de vendeurs potentiels qui te suivent activement."
    },
    {
      icon: TrendingUp,
      title: "Croissance Organique",
      description: "Tes contenus se diffusent naturellement et touchent de nouveaux prospects."
    },
    {
      icon: Camera,
      title: "Autorité & Expertise",
      description: "Tu te positionnes comme l'expert local que tout le monde veut consulter."
    }
  ];

  const deliverables = [
    {
      icon: Calendar,
      title: "Plan de Contenu 90 Jours",
      description: "Calendrier éditorial complet avec thématiques, formats et fréquence optimisés pour ta zone."
    },
    {
      icon: Video,
      title: "30 Scripts TikTok/Reels/Shorts",
      description: "Scripts prêts à tourner, adaptés à l'immobilier et à ta personnalité de conseiller."
    },
    {
      icon: MapPin,
      title: "Stratégie Google My Business",
      description: "Plan de publications GMB avec photos, posts et stories pour dominer les recherches locales."
    },
    {
      icon: Smartphone,
      title: "Templates & Formats Gagnants",
      description: "Modèles de vidéos qui fonctionnent : avant/après, tips, tours de biens, témoignages."
    },
    {
      icon: BarChart3,
      title: "Guide d'Analyse & Optimisation",
      description: "Comment mesurer tes performances et ajuster ta stratégie pour maximiser ton impact."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit Vidéo",
      description: "Analyse de ta présence actuelle et identification des opportunités"
    },
    {
      step: "02",
      title: "Stratégie Contenu",
      description: "Définition de ta ligne éditoriale et de tes formats signature"
    },
    {
      step: "03",
      title: "Production Scripts",
      description: "Création de 30 scripts adaptés à ta zone et ta personnalité"
    },
    {
      step: "04",
      title: "Plan de Déploiement",
      description: "Calendrier 90 jours avec fréquence et optimisations"
    }
  ];

  const platformStrategies = [
    {
      platform: "TikTok",
      icon: "🎵",
      focus: "Viralité & Jeune Public",
      content: "Trends immobiliers, tips rapides, transformations de biens"
    },
    {
      platform: "Instagram Reels",
      icon: "📸",
      focus: "Qualité & Lifestyle",
      content: "Visites virtuelles, coulisses métier, conseils vendeurs"
    },
    {
      platform: "YouTube Shorts",
      icon: "▶️",
      focus: "Éducation & Expertise",
      content: "Tutoriels, analyses marché, réponses aux questions"
    },
    {
      platform: "Google My Business",
      icon: "🗺️",
      focus: "Local & Proximité",
      content: "Actualités quartier, nouveaux biens, événements locaux"
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
                <Video className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Stratégie Vidéo Réseaux Sociaux</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Plan complet + 30 scripts pour TikTok, Reels, Shorts & Google My Business 
              sur 90 jours — pour créer de la visibilité et devenir une figure locale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Lancer ma Stratégie Vidéo
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Livraison sous 7 jours</span>
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
              Transforme ta présence digitale en machine à visibilité. Deviens LE conseiller 
              immobilier que tout le monde connaît et recommande dans ta zone.
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

      {/* Stratégies par Plateforme */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📱 Stratégies par Plateforme</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque réseau social a sa logique. Tu auras une approche spécifique et optimisée pour chacun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platformStrategies.map((platform, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{platform.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{platform.platform}</h3>
                    <p className="text-blue-600 font-semibold">{platform.focus}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{platform.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que tu reçois */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎁 Ce que tu reçois</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un package complet pour dominer les réseaux sociaux dans ton secteur immobilier
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
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
              Une méthode éprouvée en 4 étapes pour construire ta stratégie vidéo gagnante
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
                    <h3 className="font-semibold text-gray-900 mb-2">Les algorithmes travaillent pour toi</h3>
                    <p className="text-gray-600">Chaque vidéo peut toucher des milliers de personnes dans ta zone automatiquement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu crées de la confiance avant même le contact</h3>
                    <p className="text-gray-600">Les prospects te connaissent déjà quand ils t'appellent. La vente est plus facile.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu te différencies de tes concurrents</h3>
                    <p className="text-gray-600">Pendant qu'ils font du porte-à-porte, toi tu es partout sur les écrans.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Play className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">🎬 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>90 jours de contenu planifié</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>30 scripts prêts à tourner</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Visibilité locale maximale</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Autorité d'expert établie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à devenir viral dans ton secteur ?</h2>
          
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
            🎬 <strong>Parfait pour créer une présence digitale puissante et générer des leads en continu.</strong>
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

export default StrategieVideoPage;