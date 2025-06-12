import React from 'react';
import { 
  Mail, 
  Users, 
  MapPin, 
  Heart, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Home,
  TrendingUp,
  Shield,
  Star,
  Handshake,
  Eye,
  Target,
  Building,
  Truck
} from 'lucide-react';

const FlyersPartenairesPage = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Visibilité Massive Locale",
      description: "10 000 foyers touchés dans ta zone sans démarchage agressif ni porte-à-porte."
    },
    {
      icon: Heart,
      title: "Approche Éthique & Utile",
      description: "Tu apportes de la valeur avec un calendrier pratique plutôt que de la pub invasive."
    },
    {
      icon: Handshake,
      title: "Partenariats Gagnant-Gagnant",
      description: "Tu partages les coûts avec des professionnels locaux et créez un réseau solide."
    },
    {
      icon: TrendingUp,
      title: "Retour sur Investissement",
      description: "Coût divisé par 4-5 grâce aux partenaires et impact démultiplié sur ton secteur."
    }
  ];

  const deliverables = [
    {
      icon: Calendar,
      title: "Conception Flyer-Calendrier",
      description: "Design professionnel et attrayant avec calendrier annuel, conseils immobiliers et espace partenaires."
    },
    {
      icon: Users,
      title: "Recherche & Sélection Partenaires",
      description: "Identification et approche de 4-6 professionnels locaux compatibles avec ta clientèle cible."
    },
    {
      icon: MapPin,
      title: "Ciblage Géographique Précis",
      description: "Sélection des zones de distribution optimales selon ton secteur d'activité et tes objectifs."
    },
    {
      icon: Truck,
      title: "Organisation de la Distribution",
      description: "Coordination complète : impression, logistique et distribution professionnelle sur 10 000 foyers."
    },
    {
      icon: Target,
      title: "Suivi & Mesure d'Impact",
      description: "Tracking des retours, mesure de la visibilité générée et analyse ROI de l'opération."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Stratégie Partenariats",
      description: "Identification des partenaires idéaux et négociation des accords"
    },
    {
      step: "02",
      title: "Conception Créative",
      description: "Design du flyer-calendrier avec tes infos et celles des partenaires"
    },
    {
      step: "03",
      title: "Production & Logistique",
      description: "Impression professionnelle et préparation de la distribution"
    },
    {
      step: "04",
      title: "Distribution & Suivi",
      description: "Déploiement sur 10 000 foyers et mesure des retours"
    }
  ];

  const partnerTypes = [
    {
      type: "Artisans du Bâtiment",
      icon: "🔨",
      examples: "Électricien, Plombier, Peintre, Menuisier",
      synergy: "Clients qui rénovent avant de vendre",
      contribution: "50-75€ par partenaire"
    },
    {
      type: "Services à la Personne",
      icon: "🏠",
      examples: "Femme de ménage, Jardinier, Déménageur",
      synergy: "Clients qui préparent leur vente",
      contribution: "40-60€ par partenaire"
    },
    {
      type: "Professionnels Beauté",
      icon: "💄",
      examples: "Coiffeur, Esthéticienne, Institut",
      synergy: "Clientèle féminine propriétaire",
      contribution: "60-80€ par partenaire"
    },
    {
      type: "Commerces de Proximité",
      icon: "🛒",
      examples: "Boulangerie, Pharmacie, Restaurant",
      synergy: "Visibilité quotidienne locale",
      contribution: "30-50€ par partenaire"
    }
  ];

  const distributionZones = [
    {
      zone: "Quartiers Résidentiels",
      target: "Maisons individuelles",
      priority: "⭐⭐⭐",
      penetration: "85% propriétaires"
    },
    {
      zone: "Résidences Récentes",
      target: "Appartements T3-T4",
      priority: "⭐⭐⭐",
      penetration: "70% propriétaires"
    },
    {
      zone: "Centre-Ville Ancien",
      target: "Biens de caractère",
      priority: "⭐⭐",
      penetration: "60% propriétaires"
    },
    {
      zone: "Zones Périurbaines",
      target: "Terrains + maisons",
      priority: "⭐⭐",
      penetration: "90% propriétaires"
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
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Flyers Partenaires & Prospection Éthique</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Flyer-calendrier cofinancé par des partenaires locaux, distribué à 10 000 foyers 
              pour gagner en visibilité locale sans démarchage agressif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Lancer ma Campagne Partenaires
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Distribution sous 21 jours</span>
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
              Touche massivement ta zone géographique avec une approche respectueuse et utile. 
              Crée des partenariats durables tout en générant de la visibilité qualifiée.
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

      {/* Types de Partenaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🤝 Types de Partenaires Idéaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous identifions les professionnels qui partagent ta clientèle cible pour maximiser l'impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{partner.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{partner.type}</h3>
                    <p className="text-green-600 font-semibold text-sm">{partner.contribution}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2"><strong>Exemples :</strong> {partner.examples}</p>
                <p className="text-blue-600 text-sm"><strong>Synergie :</strong> {partner.synergy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones de Distribution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🗺️ Zones de Distribution Ciblées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ciblage géographique précis selon le potentiel de propriétaires dans chaque secteur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionZones.map((zone, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-gray-900">{zone.zone}</h3>
                  <p className="text-blue-600 text-sm">{zone.target}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Priorité :</span>
                    <span className="text-sm">{zone.priority}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Propriétaires :</span>
                    <span className="text-sm font-semibold text-green-600">{zone.penetration}</span>
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
              Un service complet clé en main de la conception à la distribution finale
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
              Une méthode éprouvée en 4 étapes pour créer et distribuer ta campagne partenaires
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu touches massivement sans être intrusif</h3>
                    <p className="text-gray-600">10 000 foyers voient ton nom avec une approche respectueuse et utile.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu créés un réseau de partenaires locaux</h3>
                    <p className="text-gray-600">Des professionnels qui peuvent te recommander à leurs clients.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu divises tes coûts par 4-5</h3>
                    <p className="text-gray-600">Grâce au cofinancement, tu obtiens une visibilité massive à prix réduit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Home className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">📮 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>10 000 foyers touchés</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>4-6 partenaires locaux</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Calendrier utile conservé</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Coût divisé par 4-5</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à conquérir ta zone avec tes partenaires ?</h2>
          
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
            📮 <strong>Parfait pour gagner en visibilité locale de manière éthique et créer des partenariats durables.</strong>
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

export default FlyersPartenairesPage;