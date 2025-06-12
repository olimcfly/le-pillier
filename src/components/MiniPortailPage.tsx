import React from 'react';
import { 
  Home, 
  Users, 
  Filter, 
  TrendingUp, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Globe,
  Shield,
  Star,
  Eye,
  Camera,
  FileText,
  BarChart3,
  Zap,
  MapPin,
  Calendar,
  Settings,
  Smartphone
} from 'lucide-react';

const MiniPortailPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Valorisation Maximale du Bien",
      description: "Présentation professionnelle qui met en valeur les atouts et augmente l'attractivité."
    },
    {
      icon: Filter,
      title: "Tri des Vrais Acheteurs",
      description: "Formulaires qualifiants qui éliminent les curieux et ne gardent que les sérieux."
    },
    {
      icon: Eye,
      title: "Visibilité Ciblée Optimale",
      description: "Publicité Facebook/Instagram précise pour toucher uniquement les acheteurs potentiels."
    },
    {
      icon: Heart,
      title: "Accompagnement Vendeur",
      description: "Tu aides tes clients vendeurs tout en captant des acheteurs pour ton portefeuille."
    }
  ];

  const deliverables = [
    {
      icon: Home,
      title: "Page de Vente Dédiée au Bien",
      description: "Site web professionnel spécifique au bien avec galerie photos, descriptif, points forts et informations quartier."
    },
    {
      icon: FileText,
      title: "Formulaire Acheteur Qualifiant",
      description: "Système de contact avancé qui capture budget, critères, financement pour identifier les vrais prospects."
    },
    {
      icon: Smartphone,
      title: "Campagne Publicité Ciblée",
      description: "Pub Facebook/Instagram géolocalisée pour promouvoir le bien auprès d'acheteurs potentiels dans la zone."
    },
    {
      icon: BarChart3,
      title: "Tableau de Bord Visiteurs",
      description: "Analytics détaillé : nombre de vues, profils visiteurs, demandes reçues, taux de conversion."
    },
    {
      icon: Settings,
      title: "Configuration & Formation",
      description: "Mise en place complète + formation du vendeur pour gérer les contacts et optimiser les résultats."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit du Bien",
      description: "Analyse du bien, photos et points de valorisation"
    },
    {
      step: "02",
      title: "Création Mini-Site",
      description: "Développement de la page dédiée avec contenu optimisé"
    },
    {
      step: "03",
      title: "Publicité Ciblée",
      description: "Lancement campagne Facebook/Instagram géolocalisée"
    },
    {
      step: "04",
      title: "Suivi & Optimisation",
      description: "Monitoring performances et ajustements continus"
    }
  ];

  const targetAudiences = [
    {
      audience: "Primo-Accédants",
      icon: "🏠",
      criteria: "25-35 ans, recherche T2-T3, financement validé",
      approach: "Message sécurisant, aide financement",
      conversion: "Fort potentiel si bien adapté"
    },
    {
      audience: "Familles Établies", 
      icon: "👨‍👩‍👧‍👦",
      criteria: "35-50 ans, recherche T4-T5, revente/achat",
      approach: "Focus écoles, transports, qualité vie",
      conversion: "Décision rapide si coup de cœur"
    },
    {
      audience: "Investisseurs",
      icon: "💰",
      criteria: "Recherche rendement, zones stratégiques",
      approach: "ROI, potentiel plus-value, fiscalité",
      conversion: "Analyse financière approfondie"
    },
    {
      audience: "Downsizers",
      icon: "🏡",
      criteria: "55+ ans, recherche plus petit, sans travaux",
      approach: "Simplicité, proximité services, sécurité",
      conversion: "Visite déterminante"
    }
  ];

  const pageFeatures = [
    {
      feature: "Galerie Photos HD",
      description: "Visite virtuelle immersive avec photos professionnelles",
      impact: "🔥🔥🔥",
      benefit: "+40% temps sur la page"
    },
    {
      feature: "Descriptif Valorisant",
      description: "Présentation optimisée des atouts et points forts",
      impact: "🔥🔥🔥", 
      benefit: "Emotion et désir d'achat"
    },
    {
      feature: "Informations Quartier",
      description: "Commerces, écoles, transports, vie locale",
      impact: "🔥🔥",
      benefit: "Projection dans les lieux"
    },
    {
      feature: "Formulaire Intelligent",
      description: "Qualification automatique budget et critères",
      impact: "🔥🔥🔥",
      benefit: "Leads ultra-qualifiés"
    }
  ];

  const sellerBenefits = [
    {
      benefit: "Vente Plus Rapide",
      description: "Visibilité ciblée accélère le processus de vente",
      icon: Zap
    },
    {
      benefit: "Meilleur Prix",
      description: "Présentation valorisante justifie le prix demandé", 
      icon: TrendingUp
    },
    {
      benefit: "Acheteurs Sérieux",
      description: "Formulaire qualifiant élimine les visites inutiles",
      icon: Users
    },
    {
      benefit: "Accompagnement Pro",
      description: "Support expert tout au long du processus",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-2xl">
                <Home className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              🏠 Service Premium — <span className="text-orange-400">Mini-Portail Immobilier pour Vendeurs</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Page de vente dédiée au bien + formulaire acheteur qualifiant + publicité ciblée 
              pour aider tes vendeurs à valoriser leur bien et trier les vrais acheteurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Créer un Mini-Portail
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Mini-site live sous 7 jours</span>
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
              Aide tes vendeurs particuliers à maximiser la valeur de leur bien et attirer uniquement 
              des acheteurs sérieux, tout en captant des prospects qualifiés pour ton portefeuille.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-green-100 p-3 rounded-lg mb-4 w-fit">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences Cibles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎯 Audiences Acheteurs Ciblées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous identifions et ciblons précisément les profils d'acheteurs les plus susceptibles d'être intéressés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{audience.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{audience.audience}</h3>
                    <p className="text-green-600 font-semibold text-sm">{audience.conversion}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <p><strong>Profil :</strong> {audience.criteria}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p><strong>Message :</strong> {audience.approach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités de la Page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">✨ Fonctionnalités de la Page</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque élément est conçu pour maximiser l'engagement et la conversion des visiteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pageFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{feature.feature}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{feature.impact}</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                      {feature.benefit}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages pour le Vendeur */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎁 Avantages pour tes Vendeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un service premium qui apporte une réelle valeur ajoutée à tes clients vendeurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellerBenefits.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 p-6 rounded-2xl mb-4 mx-auto w-fit">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.benefit}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Un service complet clé en main pour valoriser les biens de tes vendeurs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <item.icon className="h-6 w-6 text-green-600" />
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🔄 Notre Processus</h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Une méthode éprouvée en 4 étapes pour créer un mini-portail qui convertit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-green-200">{step.description}</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu offres un service premium différenciant</h3>
                    <p className="text-gray-600">Tes vendeurs ont un avantage concurrentiel face aux autres.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu captures des acheteurs pour ton portefeuille</h3>
                    <p className="text-gray-600">Les visiteurs intéressés deviennent tes prospects pour d'autres biens.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu justifies tes honoraires avec de la valeur</h3>
                    <p className="text-gray-600">Service concret qui démontre ton expertise et ton investissement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Star className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">🏠 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Page professionnelle dédiée</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Formulaire qualifiant intégré</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Campagne pub ciblée</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Vendeurs satisfaits + leads captés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à valoriser les biens de tes vendeurs ?</h2>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">397€</span>
                </div>
                <p className="text-xl text-green-200 mb-4">Par bien / Prestation unique</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Shield className="h-4 w-4" />
                  <span>Garantie satisfaction</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105">
                  Commander Maintenant
                </button>
                
                <div className="bg-green-600/50 p-4 rounded-lg">
                  <p className="text-sm mb-2">🏠 <strong>Service Premium Valorisant</strong></p>
                  <p className="text-xs text-green-200">Aide concrète pour tes vendeurs + capture d'acheteurs qualifiés</p>
                  <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                    Voir exemples
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-green-200 mb-6">
            🏠 <strong>Parfait pour différencier ton service et capturer des acheteurs qualifiés pour ton portefeuille.</strong>
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

export default MiniPortailPage;