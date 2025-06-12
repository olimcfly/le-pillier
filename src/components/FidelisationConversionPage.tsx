import React from 'react';
import { 
  RotateCcw, 
  Mail, 
  MessageCircle, 
  Smartphone, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Star,
  Zap,
  Target,
  Settings,
  Bell,
  Heart
} from 'lucide-react';

const FidelisationConversionPage = () => {
  const benefits = [
    {
      icon: RotateCcw,
      title: "Relance Automatique",
      description: "Tes prospects sont relancés au bon moment sans que tu aies à y penser."
    },
    {
      icon: TrendingUp,
      title: "Taux de Conversion +",
      description: "Tu transformes plus de leads en RDV grâce à un suivi personnalisé et constant."
    },
    {
      icon: Clock,
      title: "Gain de Temps Énorme",
      description: "Fini les relances manuelles. Tu te concentres sur tes RDV et tes ventes."
    },
    {
      icon: Target,
      title: "Suivi Personnalisé",
      description: "Chaque prospect reçoit le bon message au bon moment selon son profil."
    }
  ];

  const deliverables = [
    {
      icon: Mail,
      title: "Séquences Email Automatisées",
      description: "5 emails de suivi personnalisés avec timing optimisé pour maximiser l'engagement et les RDV."
    },
    {
      icon: MessageCircle,
      title: "Templates WhatsApp Business",
      description: "Scripts de messages WhatsApp pour relance douce, rappel RDV et nurturing de prospects."
    },
    {
      icon: Smartphone,
      title: "Campagnes SMS Ciblées",
      description: "Messages courts et impactants pour relances urgentes et confirmations de RDV."
    },
    {
      icon: Calendar,
      title: "Planning de Relances",
      description: "Calendrier automatisé : J+1, J+7, J+15, J+30 avec messages adaptés à chaque étape."
    },
    {
      icon: Settings,
      title: "Configuration CRM",
      description: "Mise en place des automatisations dans ton CRM pour un suivi fluide et efficace."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit Conversion",
      description: "Analyse de ton processus actuel et identification des points de fuite"
    },
    {
      step: "02",
      title: "Création Séquences",
      description: "Rédaction des messages personnalisés pour chaque canal"
    },
    {
      step: "03",
      title: "Configuration Outils",
      description: "Mise en place des automatisations dans tes systèmes"
    },
    {
      step: "04",
      title: "Optimisation Live",
      description: "Ajustements en temps réel selon les performances"
    }
  ];

  const channels = [
    {
      channel: "Email",
      icon: "📧",
      useCase: "Nurturing & Éducation",
      timing: "J+1, J+7, J+15, J+30",
      conversion: "Taux d'ouverture : 25-35%"
    },
    {
      channel: "WhatsApp",
      icon: "💬",
      useCase: "Relance Personnelle",
      timing: "J+3, J+10, Rappels RDV",
      conversion: "Taux de réponse : 60-80%"
    },
    {
      channel: "SMS",
      icon: "📱",
      useCase: "Urgence & Confirmation",
      timing: "J+5, J+20, Confirmations",
      conversion: "Taux de lecture : 95%+"
    }
  ];

  const automationFeatures = [
    {
      feature: "Scoring Automatique",
      description: "Classification des prospects selon leur niveau d'engagement"
    },
    {
      feature: "Triggers Comportementaux",
      description: "Messages déclenchés selon les actions du prospect"
    },
    {
      feature: "Personnalisation Dynamique",
      description: "Contenu adapté au profil et aux préférences"
    },
    {
      feature: "Reporting en Temps Réel",
      description: "Suivi des performances et ajustements automatiques"
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
                <RotateCcw className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Fidélisation & Conversion Automatisée</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Séquences d'emails, messages WhatsApp et SMS automatisés pour transformer 
              tes leads en RDV sans relance manuelle. Tu signes plus sans stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Automatiser mes Conversions
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
              Arrête de perdre des prospects par manque de suivi. Crée un système qui nurture 
              automatiquement tes leads et les transforme en clients fidèles.
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

      {/* Canaux de Communication */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📱 Canaux de Communication</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque canal a sa force. Tu utilises le bon message sur le bon canal au bon moment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{channel.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{channel.channel}</h3>
                  <p className="text-blue-600 font-semibold">{channel.useCase}</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600"><strong>Timing :</strong> {channel.timing}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-700 font-semibold">{channel.conversion}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎁 Ce que tu reçois</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un système complet de fidélisation automatisée pour maximiser tes conversions
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

      {/* Fonctionnalités d'Automatisation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">⚙️ Fonctionnalités d'Automatisation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des automatisations intelligentes qui s'adaptent au comportement de tes prospects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Settings className="h-6 w-6 text-purple-600" />
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
              Une méthode éprouvée en 4 étapes pour automatiser tes conversions
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu ne perds plus aucun prospect</h3>
                    <p className="text-gray-600">Même les prospects "tièdes" sont nurturés jusqu'à être prêts à vendre.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu multiplies tes RDV sans effort</h3>
                    <p className="text-gray-600">Le système travaille pour toi 24h/24, même pendant tes congés.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu crées une relation de confiance</h3>
                    <p className="text-gray-600">Tes prospects te voient comme un expert disponible et professionnel.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Bell className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">🔄 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>+50% de RDV générés</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>0 relance manuelle</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Suivi personnalisé automatique</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Prospects nurturés en continu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à automatiser tes conversions ?</h2>
          
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
            🔄 <strong>Parfait pour automatiser tes relances et multiplier tes RDV sans effort.</strong>
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

export default FidelisationConversionPage;