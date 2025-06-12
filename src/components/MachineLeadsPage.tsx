import React from 'react';
import { 
  Zap, 
  Target, 
  BarChart3, 
  Download, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Globe,
  MousePointer,
  Settings,
  Shield,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Mail,
  Eye
} from 'lucide-react';

const MachineLeadsPage = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Génération 24/7",
      description: "Ta machine à leads travaille même quand tu dors, week-ends compris."
    },
    {
      icon: Target,
      title: "Prospects Qualifiés",
      description: "Tu attires uniquement des vendeurs sérieux et motivés dans ta zone."
    },
    {
      icon: BarChart3,
      title: "Tracking Complet",
      description: "Tu sais exactement d'où viennent tes leads et ce qui fonctionne le mieux."
    },
    {
      icon: TrendingUp,
      title: "ROI Optimisé",
      description: "Chaque euro investi en visibilité se transforme en leads mesurables."
    }
  ];

  const deliverables = [
    {
      icon: Globe,
      title: "Landing Page Optimisée",
      description: "Page de capture ultra-performante, adaptée à ta zone et à ton image de marque."
    },
    {
      icon: Download,
      title: "Lead Magnet Immobilier",
      description: "Guide gratuit irrésistible : estimation, checklist vendeur, ou dossier marché local."
    },
    {
      icon: Settings,
      title: "Formulaires Intelligents",
      description: "Capture progressive des informations avec qualification automatique des prospects."
    },
    {
      icon: BarChart3,
      title: "Tableau de Bord Analytics",
      description: "Suivi en temps réel : taux de conversion, sources de trafic, performance par canal."
    },
    {
      icon: Smartphone,
      title: "Version Mobile Optimisée",
      description: "Expérience parfaite sur tous les appareils avec temps de chargement ultra-rapide."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Conception Landing",
      description: "Design et développement de ta page de capture sur-mesure"
    },
    {
      step: "02",
      title: "Lead Magnet",
      description: "Création du bonus irrésistible adapté à tes prospects"
    },
    {
      step: "03",
      title: "Tracking Setup",
      description: "Installation des outils d'analyse et de suivi complet"
    },
    {
      step: "04",
      title: "Optimisation",
      description: "Tests A/B et ajustements pour maximiser les conversions"
    }
  ];

  const leadMagnets = [
    {
      type: "Guide Estimation",
      icon: "📊",
      description: "\"Comment estimer son bien immobilier en 2024\"",
      conversion: "Taux de conversion : 15-25%"
    },
    {
      type: "Checklist Vendeur",
      icon: "✅",
      description: "\"Les 20 points à vérifier avant de vendre\"",
      conversion: "Taux de conversion : 20-30%"
    },
    {
      type: "Rapport Marché",
      icon: "📈",
      description: "\"Analyse du marché immobilier local 2024\"",
      conversion: "Taux de conversion : 12-20%"
    },
    {
      type: "Simulateur Prix",
      icon: "🔢",
      description: "\"Calculateur de prix de vente instantané\"",
      conversion: "Taux de conversion : 25-35%"
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
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             <span className="text-orange-400">Machine à Leads Localisée</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Landing page optimisée + lead magnet irrésistible + tracking complet 
              pour transformer ta visibilité en prises de contact 24h/24.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Créer ma Machine à Leads
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Livraison sous 10 jours</span>
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
              Arrête d'attendre que les prospects t'appellent. Crée un système automatisé 
              qui génère des leads qualifiés pendant que tu te concentres sur tes ventes.
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

      {/* Types de Lead Magnets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🧲 Types de Lead Magnets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous créons le bonus parfait selon ton marché et tes prospects. Voici les formats qui convertissent le mieux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadMagnets.map((magnet, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{magnet.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{magnet.type}</h3>
                    <p className="text-green-600 font-semibold text-sm">{magnet.conversion}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{magnet.description}</p>
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
              Un système complet clé en main pour générer et tracker tes leads automatiquement
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
              Une méthode éprouvée en 4 étapes pour construire ta machine à leads performante
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu captures des prospects pendant que tu dors</h3>
                    <p className="text-gray-600">Ta machine travaille 24h/24, même les week-ends et jours fériés.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu transformes ta visibilité en contacts concrets</h3>
                    <p className="text-gray-600">Chaque visiteur devient un prospect potentiel avec ses coordonnées.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu mesures exactement ton ROI</h3>
                    <p className="text-gray-600">Tu sais combien chaque lead te coûte et d'où il vient.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <MousePointer className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">⚡ Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Landing page qui convertit</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Lead magnet irrésistible</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Tracking complet installé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Génération leads 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à automatiser ta génération de leads ?</h2>
          
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
            ⚡ <strong>Parfait pour transformer ta visibilité en contacts concrets et mesurables.</strong>
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

export default MachineLeadsPage;