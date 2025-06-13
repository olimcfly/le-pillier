import React from 'react';
import { 
  Search, 
  Video, 
  Target, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  Star,
  Eye,
  Play,
  MousePointer,
  BarChart3,
  MapPin,
  Calendar,
  Globe
} from 'lucide-react';

const PubliciteGoogleAdsPage = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Interception Intention d'Achat",
      description: "Tu captes les prospects au moment précis où ils cherchent à vendre leur bien."
    },
    {
      icon: Target,
      title: "Leads Ultra-Qualifiés",
      description: "Tu ne paies que pour des clics de personnes qui recherchent activement un conseiller."
    },
    {
      icon: Eye,
      title: "Visibilité Immédiate",
      description: "Tu apparais en première position devant tes concurrents sur les bonnes recherches."
    },
    {
      icon: TrendingUp,
      title: "ROI Mesurable",
      description: "Tu sais exactement combien chaque lead te coûte et d'où il vient."
    }
  ];

  const deliverables = [
    {
      icon: Video,
      title: "Vidéo Publicitaire Optimisée",
      description: "Création vidéo 15-30 secondes spécialement conçue pour capter l'attention sur YouTube et réseau display."
    },
    {
      icon: Search,
      title: "Campagnes Recherche + YouTube",
      description: "2 campagnes : annonces texte sur mots-clés vendeurs + vidéos YouTube ciblage comportemental."
    },
    {
      icon: Target,
      title: "Ciblage Mots-Clés Vendeurs",
      description: "Recherche et sélection des requêtes à forte intention : 'vendre maison', 'estimation gratuite', etc."
    },
    {
      icon: MapPin,
      title: "Géolocalisation Précise",
      description: "Ciblage géographique ultra-précis : ta zone d'activité + zones d'extension stratégiques."
    },
    {
      icon: Calendar,
      title: "Gestion 3 Mois + Optimisations",
      description: "Suivi quotidien, ajustements enchères, tests créatifs et optimisations pour maximiser conversions."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Recherche Mots-Clés",
      description: "Identification des requêtes à forte intention d'achat"
    },
    {
      step: "02",
      title: "Création Campagnes",
      description: "Configuration annonces texte et vidéo avec ciblage optimal"
    },
    {
      step: "03",
      title: "Tests & Ajustements",
      description: "A/B tests créatifs et optimisations enchères"
    },
    {
      step: "04",
      title: "Scaling & ROI",
      description: "Montée en puissance des campagnes performantes"
    }
  ];

  const searchKeywords = [
    {
      category: "Intention Vente Directe",
      icon: "🔥",
      keywords: ["vendre maison rapidement", "conseiller immobilier près de moi", "estimation gratuite maison"],
      volume: "Fort volume",
      competition: "Élevée",
      intent: "🔥🔥🔥"
    },
    {
      category: "Recherche Information",
      icon: "💡",
      keywords: ["comment vendre sa maison", "prix immobilier [ville]", "frais de notaire vente"],
      volume: "Très fort volume",
      competition: "Moyenne",
      intent: "🔥🔥"
    },
    {
      category: "Problèmes Vendeurs",
      icon: "❓",
      keywords: ["maison ne se vend pas", "baisser prix vente", "vendeur particulier"],
      volume: "Moyen volume",
      competition: "Faible",
      intent: "🔥🔥🔥"
    },
    {
      category: "Concurrence Locale",
      icon: "🏆",
      keywords: ["[concurrent] avis", "meilleur agent immobilier [ville]", "[agence] commission"],
      volume: "Faible volume",
      competition: "Très faible",
      intent: "🔥🔥🔥"
    }
  ];

  const campaignTypes = [
    {
      type: "Google Search",
      icon: "🔍",
      description: "Annonces texte sur mots-clés vendeurs",
      targeting: "Mots-clés + géolocalisation",
      budget: "60% du budget total",
      result: "Leads haute intention"
    },
    {
      type: "YouTube Ads",
      icon: "📺", 
      description: "Vidéos publicitaires ciblées",
      targeting: "Intérêts + comportements + retargeting",
      budget: "30% du budget total",
      result: "Notoriété + leads"
    },
    {
      type: "Display Retargeting",
      icon: "🎯",
      description: "Bannières sur sites partenaires",
      targeting: "Visiteurs site + audiences similaires",
      budget: "10% du budget total",
      result: "Conversion visiteurs"
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
                <Search className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Publicité Vidéo Google Ads</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Campagne Google Ads complète pour capter les recherches vendeurs actives 
              avec vidéos YouTube et annonces texte géolocalisées. Tu interceptes les leads 
              au moment où ils cherchent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Intercepter les Recherches Vendeurs
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Campagne live sous 5 jours</span>
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
              Positionne-toi stratégiquement sur Google pour capter les propriétaires au moment précis 
              où ils décident de vendre. Transforme leur intention en contact qualifié.
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

      {/* Mots-Clés Stratégiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🔑 Mots-Clés Stratégiques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous ciblons les requêtes avec la plus forte intention de vente pour maximiser la qualité des leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {searchKeywords.map((keyword, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{keyword.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{keyword.category}</h3>
                    <p className="text-green-600 font-semibold text-sm">Intention {keyword.intent}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm"><strong>Exemples :</strong> {keyword.keywords.join(', ')}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600">{keyword.volume}</span>
                    <span className="text-orange-600">Concurrence {keyword.competition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Campagnes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Types de Campagnes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 campagnes complémentaires pour couvrir tout l'écosystème Google et maximiser ta visibilité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-3">{campaign.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{campaign.type}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{campaign.budget}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><strong>Format :</strong> {campaign.description}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><strong>Ciblage :</strong> {campaign.targeting}</p>
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

      {/* Ce que tu reçois */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎁 Ce que tu reçois</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un service complet de publicité Google Ads avec gestion professionnelle et optimisations
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
              Une méthode éprouvée en 4 étapes pour créer et optimiser tes campagnes Google Ads
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu captes les prospects au bon moment</h3>
                    <p className="text-gray-600">Quand ils cherchent "vendre maison", ils sont prêts à agir maintenant.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu ne paies que pour des clics qualifiés</h3>
                    <p className="text-gray-600">Budget maîtrisé avec ROI mesurable au clic près.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu prends des parts de marché à tes concurrents</h3>
                    <p className="text-gray-600">Tu apparais avant eux sur leurs propres mots-clés.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <MousePointer className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">🔍 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Campagnes Search + YouTube</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Mots-clés haute intention</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Gestion 3 mois + optimisations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>ROI mesurable et transparent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à intercepter les recherches vendeurs ?</h2>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">297€</span>
                  <span className="text-2xl text-blue-200">/mois</span>
                </div>
                <p className="text-xl text-blue-200 mb-2">3 mois recommandés</p>
                <p className="text-sm text-gray-300">+ Budget pub 500-1000€/mois</p>
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
            🔍 <strong>Parfait pour intercepter les prospects au moment de leur décision et générer des leads ultra-qualifiés.</strong>
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

export default PubliciteGoogleAdsPage;