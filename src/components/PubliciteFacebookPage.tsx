import React from 'react';
import { 
  Smartphone, 
  Video, 
  Target, 
  Heart, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Star,
  Eye,
  Play,
  Camera,
  BarChart3,
  Zap,
  MapPin,
  Calendar
} from 'lucide-react';

const PubliciteFacebookPage = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Visibilité Ciblée Locale",
      description: "Tu touches précisément les propriétaires de ta zone géographique avec un message adapté."
    },
    {
      icon: Heart,
      title: "Connexion Émotionnelle",
      description: "Tu créés du lien et de la confiance avant même le premier contact grâce à la vidéo."
    },
    {
      icon: Users,
      title: "Audience Qualifiée",
      description: "Tu attrapes l'attention des vendeurs potentiels au moment où ils scrollent."
    },
    {
      icon: TrendingUp,
      title: "Retour Mesurable",
      description: "Tu pistes chaque lead généré et optimises en continu pour maximiser ton ROI."
    }
  ];

  const deliverables = [
    {
      icon: Video,
      title: "Vidéo Publicitaire Professionnelle",
      description: "Création d'une vidéo de 30-60 secondes : présentation, expertise, zone d'activité, call-to-action."
    },
    {
      icon: Target,
      title: "Ciblage Géographique Précis",
      description: "Configuration audience : âge, revenus, statut propriétaire, intérêts immobiliers dans ta zone."
    },
    {
      icon: BarChart3,
      title: "Campagnes Multi-Objectifs",
      description: "3 campagnes : notoriété, trafic vers lead magnet, conversion directe avec budgets optimisés."
    },
    {
      icon: Smartphone,
      title: "Formats Adaptatifs",
      description: "Déclinaisons pour Facebook, Instagram Stories, Reels et feed avec formats optimaux."
    },
    {
      icon: Calendar,
      title: "Gestion 3 Mois + Optimisations",
      description: "Suivi quotidien, A/B tests, ajustements ciblage et créatifs pour maximiser les performances."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Briefing Stratégique",
      description: "Définition audience, message et objectifs de campagne"
    },
    {
      step: "02",
      title: "Création Vidéo",
      description: "Production de la vidéo publicitaire et déclinaisons formats"
    },
    {
      step: "03",
      title: "Configuration Campagnes",
      description: "Mise en place ciblage, budgets et tracking complet"
    },
    {
      step: "04",
      title: "Optimisation Continue",
      description: "Monitoring quotidien et ajustements pour maximiser ROI"
    }
  ];

  const campaignTypes = [
    {
      type: "Notoriété Locale",
      icon: "🎯",
      objective: "Faire connaître ton expertise",
      audience: "Propriétaires 35-65 ans, zone géographique",
      budget: "30% du budget total",
      result: "Reconnaissance et mémorisation"
    },
    {
      type: "Génération de Leads",
      icon: "🧲",
      objective: "Capter des prospects qualifiés",
      audience: "Propriétaires + intérêts vente immobilier",
      budget: "50% du budget total", 
      result: "Leads avec coordonnées"
    },
    {
      type: "Conversion Directe",
      icon: "📞",
      objective: "Générer appels et RDV",
      audience: "Retargeting + lookalike clients",
      budget: "20% du budget total",
      result: "RDV qualifiés directs"
    }
  ];

  const targetingOptions = [
    {
      category: "Démographique",
      criteria: ["Âge 35-65 ans", "Revenus moyens/élevés", "Propriétaires", "Parents de famille"],
      precision: "🎯🎯🎯"
    },
    {
      category: "Géographique", 
      criteria: ["Rayon 15-25km", "Villes ciblées", "Quartiers premium", "Exclusion zones"],
      precision: "🎯🎯🎯"
    },
    {
      category: "Intérêts",
      criteria: ["Immobilier", "Investissement", "Rénovation", "Déménagement"],
      precision: "🎯🎯"
    },
    {
      category: "Comportements",
      criteria: ["Recherches immobilières", "Visites sites immo", "Apps bancaires", "Voyages"],
      precision: "🎯🎯"
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
                <Smartphone className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Publicité Vidéo Facebook/Instagram</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Vidéo publicitaire professionnelle + campagne locale émotionnelle et ciblée 
              pour te rendre visible et connecter avec les bons vendeurs sur les réseaux sociaux.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Lancer ma Campagne Vidéo
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Campagne live sous 7 jours</span>
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
              Intercepte les propriétaires de ta zone pendant qu'ils scrollent sur Facebook et Instagram. 
              Crée une connexion émotionnelle qui transforme l'attention en confiance et en contact.
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

      {/* Types de Campagnes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎬 Types de Campagnes Vidéo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 campagnes complémentaires pour couvrir tout le parcours client : découverte, intérêt, conversion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">{campaign.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{campaign.type}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{campaign.budget}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <p><strong>Objectif :</strong> {campaign.objective}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p><strong>Audience :</strong> {campaign.audience}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-700 font-semibold">📈 {campaign.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options de Ciblage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎯 Options de Ciblage Avancées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ciblage laser pour toucher uniquement tes prospects idéaux et optimiser ton budget publicitaire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetingOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-gray-900">{option.category}</h3>
                  <p className="text-blue-600 text-sm">Précision {option.precision}</p>
                </div>
                <ul className="space-y-2">
                  {option.criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
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
              Un service complet de publicité vidéo Facebook/Instagram avec gestion professionnelle
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
              Une méthode éprouvée en 4 étapes pour créer et optimiser tes campagnes vidéo
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu interceptes tes prospects là où ils passent du temps</h3>
                    <p className="text-gray-600">2h par jour sur Facebook/Instagram : impossible de te rater.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu créés de la connexion émotionnelle avant le contact</h3>
                    <p className="text-gray-600">La vidéo humanise ta relation avec tes prospects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu optimises en continu pour un ROI maximum</h3>
                    <p className="text-gray-600">Tests A/B permanents pour améliorer tes performances.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Play className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">📱 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Vidéo pro + 3 campagnes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Gestion 3 mois complète</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Ciblage laser propriétaires</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Optimisations quotidiennes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à conquérir Facebook et Instagram ?</h2>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">297€</span>
                  <span className="text-2xl text-blue-200">/mois</span>
                </div>
                <p className="text-xl text-blue-200 mb-2">3 mois recommandés</p>
                <p className="text-sm text-gray-300">+ Budget pub 500-700€/mois</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mt-2">
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
            📱 <strong>Parfait pour créer une connexion émotionnelle et générer des leads qualifiés sur les réseaux sociaux.</strong>
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

export default PubliciteFacebookPage;