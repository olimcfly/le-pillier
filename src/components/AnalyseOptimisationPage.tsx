import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Target, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Clock,
  LineChart,
  PieChart,
  Activity,
  Shield,
  Star,
  Zap,
  Settings,
  Search,
  Users,
  MousePointer
} from 'lucide-react';

const AnalyseOptimisationPage = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Vision Claire Performance",
      description: "Tu vois exactement ce qui marche et ce qui ne marche pas dans ta stratégie."
    },
    {
      icon: Target,
      title: "Optimisations Ciblées",
      description: "Tu ajustes précisément les éléments qui impactent vraiment tes résultats."
    },
    {
      icon: TrendingUp,
      title: "Croissance Mesurable",
      description: "Tu identifies les leviers de croissance et tu les actives intelligemment."
    },
    {
      icon: Lightbulb,
      title: "Décisions Data-Driven",
      description: "Tu prends des décisions basées sur des données réelles, pas sur des intuitions."
    }
  ];

  const deliverables = [
    {
      icon: BarChart3,
      title: "Tableau de Bord Personnalisé",
      description: "Dashboard complet avec KPI immobilier : leads, conversions, sources, ROI par canal de communication."
    },
    {
      icon: Activity,
      title: "Rapport d'Analyse J+30",
      description: "Bilan détaillé des performances avec recommandations d'optimisation spécifiques à ta zone."
    },
    {
      icon: TrendingUp,
      title: "Audit Complet J+60",
      description: "Analyse approfondie des tendances, identification des opportunités et plan d'action ajusté."
    },
    {
      icon: Lightbulb,
      title: "Recommandations J+90",
      description: "Stratégie d'optimisation finale avec roadmap pour les 3 prochains mois et nouvelles actions."
    },
    {
      icon: Settings,
      title: "Outils de Suivi Automatisés",
      description: "Configuration des alertes et notifications pour suivre tes métriques importantes en temps réel."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Configuration Tracking",
      description: "Installation des outils d'analyse et définition des KPI"
    },
    {
      step: "02",
      title: "Collecte de Données",
      description: "30 jours de mesure pour établir une baseline fiable"
    },
    {
      step: "03",
      title: "Analyse & Insights",
      description: "Identification des patterns et recommandations"
    },
    {
      step: "04",
      title: "Plan d'Optimisation",
      description: "Stratégie d'amélioration continue personnalisée"
    }
  ];

  const kpiCategories = [
    {
      category: "Génération de Leads",
      icon: "📊",
      metrics: ["Nombre de leads/mois", "Coût par lead", "Sources principales", "Taux de qualification"],
      insight: "D'où viennent tes meilleurs prospects"
    },
    {
      category: "Conversion & RDV",
      icon: "🎯",
      metrics: ["Taux de conversion", "Temps de cycle", "RDV générés", "Show rate"],
      insight: "Comment optimiser ton tunnel de vente"
    },
    {
      category: "Visibilité Locale",
      icon: "📍",
      metrics: ["Impressions locales", "Clics GMB", "Appels directs", "Demandes d'itinéraire"],
      insight: "Ton impact dans ta zone géographique"
    },
    {
      category: "ROI Marketing",
      icon: "💰",
      metrics: ["Coût d'acquisition", "LTV client", "ROI par canal", "Budget optimal"],
      insight: "Rentabilité de chaque action marketing"
    }
  ];

  const reportFeatures = [
    {
      feature: "Analyse Comportementale",
      description: "Compréhension du parcours de tes prospects jusqu'à la signature",
      icon: Users
    },
    {
      feature: "Benchmarking Sectoriel",
      description: "Comparaison avec les standards du marché immobilier local",
      icon: BarChart3
    },
    {
      feature: "Prédictions Tendances",
      description: "Anticipation des évolutions de ton marché sur 3-6 mois",
      icon: TrendingUp
    },
    {
      feature: "Recommandations Actionnables",
      description: "Plan d'action concret avec priorités et timeline",
      icon: Target
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
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Analyse & Optimisation</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Tableau de bord complet + 3 bilans détaillés + recommandations sur 90 jours 
              pour savoir ce qui marche et optimiser continuellement tes résultats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Analyser mes Performances
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Dashboard live sous 48h</span>
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
              Arrête de naviguer à l'aveugle. Obtiens une vision claire de tes performances 
              pour prendre les bonnes décisions et maximiser ton retour sur investissement.
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

      {/* KPI & Métriques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📈 KPI & Métriques Suivis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous analysons tous les indicateurs qui comptent vraiment pour ton business immobilier
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {kpiCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{category.insight}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
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
              Un système complet d'analyse et d'optimisation pour piloter ta croissance
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

      {/* Fonctionnalités des Rapports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 Fonctionnalités des Rapports</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des analyses poussées pour comprendre en profondeur ton marché et tes performances
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reportFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.feature}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
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
              Une méthode éprouvée en 4 étapes pour optimiser continuellement tes performances
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu arrêtes de gaspiller ton budget</h3>
                    <p className="text-gray-600">Tu investis uniquement dans les canaux qui rapportent vraiment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu doubles tes résultats avec la même énergie</h3>
                    <p className="text-gray-600">En optimisant ce qui marche déjà, tu amplifies ton impact.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu prends toujours les bonnes décisions</h3>
                    <p className="text-gray-600">Plus d'intuitions hasardeuses, que des choix basés sur des données réelles.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <PieChart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">📊 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Dashboard temps réel personnalisé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>3 bilans détaillés sur 90 jours</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Plan d'optimisation personnalisé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>ROI amélioré de 30% minimum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à optimiser tes performances ?</h2>
          
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
            📊 <strong>Parfait pour piloter ta croissance avec des données fiables et des optimisations continues.</strong>
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

export default AnalyseOptimisationPage;