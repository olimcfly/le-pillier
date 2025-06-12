import React from 'react';
import { 
  Megaphone, 
  Zap, 
  Target, 
  Crown, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Eye,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Lightbulb,
  Users,
  Award
} from 'lucide-react';

type Props = {
  setCurrentPage?: (page: string) => void;
};

const OffreMessagePage: React.FC<Props> = ({ setCurrentPage }) => {
  const benefits = [
    {
      icon: Megaphone,
      title: "Message Différenciant",
      description: "Ton offre ne ressemble plus à celle de tes concurrents."
    },
    {
      icon: Zap,
      title: "Impact Immédiat",
      description: "Tes prospects comprennent ta valeur en 5 secondes chrono."
    },
    {
      icon: Crown,
      title: "Positionnement d'Expert",
      description: "Tu deviens l'option évidente, pas une alternative parmi d'autres."
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimisée",
      description: "Plus de prises de contact grâce à un message qui déclenche l'action."
    },
    // Ajout de la Machine à Leads Localisée
    {
      icon: Zap,
      title: "Machine à Leads Localisée",
      description: "Page de capture avec bonus + tracking complet.",
      price: "297 €",
      benefit: "Tu transformes ta visibilité en prises de contact 24/7.",
      page: "machine-leads"
    }
  ];

  const deliverables = [
    {
      icon: Eye,
      title: "Audit de ton Offre Actuelle",
      description: "Analyse complète de ta posture actuelle ou construction depuis zéro si tu n'en as pas encore."
    },
    {
      icon: Target,
      title: "Promesse Forte & Crédible",
      description: "Formulation d'une promesse orientée résultat qui rassure et donne envie immédiatement."
    },
    {
      icon: Lightbulb,
      title: "Message Magnétique 5 Secondes",
      description: "Création d'un message compréhensible instantanément qui marque les esprits."
    },
    {
      icon: Award,
      title: "Positionnement Unique",
      description: "Définition de tes valeurs, ta signature et ton ton face à la concurrence."
    },
    {
      icon: MessageCircle,
      title: "Déclinaison Multi-Canaux",
      description: "Adaptation de ton message pour réseaux sociaux, pitch, pages web, flyers et supports."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit Posture",
      description: "Analyse de ton positionnement actuel et identification des axes d'amélioration"
    },
    {
      step: "02",
      title: "Promesse Magnétique",
      description: "Construction d'une promesse forte, crédible et orientée résultat"
    },
    {
      step: "03",
      title: "Message Signature",
      description: "Création de ton message unique compréhensible en 5 secondes"
    },
    {
      step: "04",
      title: "Déclinaisons",
      description: "Adaptation pour tous tes supports de communication"
    }
  ];

  const beforeAfter = [
    {
      before: "Je suis disponible pour vos projets immobiliers",
      after: "J'aide les propriétaires à vendre 20% plus cher en 60 jours grâce à ma méthode de valorisation exclusive"
    },
    {
      before: "Agent immobilier expérimenté dans votre secteur",
      after: "Le seul conseiller qui garantit une vente dans les 90 jours ou je reprends le mandat gratuitement"
    },
    {
      before: "Contactez-moi pour une estimation gratuite",
      after: "Découvrez pourquoi 9 vendeurs sur 10 choisissent ma stratégie de vente accélérée"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-500 p-4 rounded-2xl">
                <Megaphone className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-300">Offre & Message Magnétique</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto leading-relaxed">
              Construis une offre irrésistible et un message différenciant qui captent immédiatement 
              l'attention de ton vendeur idéal et créent un effet <strong>"c'est lui qu'il me faut"</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Transformer mon Message
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-orange-200">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">📌 L'Objectif</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Passe de <em>"je suis dispo pour vos projets"</em> à <strong>"voici pourquoi je suis l'option évidente 
              pour vendre votre bien, ici et maintenant."</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-orange-100 p-3 rounded-lg mb-4 w-fit">
                  <benefit.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                {/* Ajout du bouton si c'est la carte Machine à Leads */}
                {benefit.page === "machine-leads" && setCurrentPage && (
                  <button
                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                    onClick={() => setCurrentPage('machine-leads')}
                  >
                    Découvrir la Machine à Leads →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avant/Après */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">⚡ Avant / Après</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvre la différence entre un message banal et un message magnétique
            </p>
          </div>

          <div className="space-y-8">
            {beforeAfter.map((example, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-green-50 p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="bg-red-100 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-bold text-red-800 mb-2">❌ AVANT</h3>
                      <p className="text-red-700 italic">"{example.before}"</p>
                    </div>
                    <p className="text-sm text-gray-500">Message générique qui ne se démarque pas</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-bold text-green-800 mb-2">✅ APRÈS</h3>
                      <p className="text-green-700 font-semibold">"{example.after}"</p>
                    </div>
                    <p className="text-sm text-gray-500">Message différenciant qui déclenche l'action</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que tu reçois */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">💡 Ce que tu reçois</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un package complet pour créer une offre irrésistible qui te démarque de la concurrence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                  <item.icon className="h-6 w-6 text-yellow-600" />
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
      <section className="py-20 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🔄 Notre Processus</h2>
            <p className="text-xl text-orange-200 max-w-3xl mx-auto">
              Une méthode éprouvée en 4 étapes pour créer ton message magnétique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-500 text-gray-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-orange-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi c'est clé */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">🚀 Pourquoi c'est clé</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ton offre ne doit plus être "comme les autres"</h3>
                    <p className="text-gray-600">Elle doit donner envie, rassurer et déclencher une prise de contact immédiate.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu passes au niveau supérieur</h3>
                    <p className="text-gray-600">De "je suis dispo pour vos projets" à "voici pourquoi je suis l'option évidente".</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Impact immédiat sur tes résultats</h3>
                    <p className="text-gray-600">Plus de prises de contact, plus de confiance, plus de signatures.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">✅ Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Une promesse claire et attractive</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Un message impactant et mémorable</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Un positionnement solide et unique</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Une différenciation instantanée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à créer ton message magnétique ?</h2>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">297€</span>
                </div>
                <p className="text-xl text-orange-200 mb-4">Prestation unique</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Shield className="h-4 w-4" />
                  <span>Garantie satisfaction</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105">
                  Commander Maintenant
                </button>
                
                <div className="bg-orange-600/50 p-4 rounded-lg">
                  <p className="text-sm mb-2">💎 <strong>Inclus dans le Club IMMO</strong></p>
                  <p className="text-xs text-orange-200">Accès à cette formation + 12 autres modules pour seulement 97€/mois</p>
                  <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                    Rejoindre le Club IMMO
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-orange-200 mb-6">
            👉 <strong>Recommandé avant toute campagne de communication ou publicité.</strong>
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

export default OffreMessagePage;