import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Calculator, 
  TrendingUp,
  Users,
  Target,
  Video,
  Zap,
  RotateCcw,
  BarChart3,
  Mail,
  MapPin,
  Smartphone,
  Search,
  BookOpen,
  Home,
  Settings,
  ArrowRight,
  Award,
  Shield
} from 'lucide-react';

interface ComparateurFormulesPageProps {
  setCurrentPage?: (page: string) => void;
}

const ComparateurFormulesPage: React.FC<ComparateurFormulesPageProps> = ({ setCurrentPage }) => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const modules = [
    { id: 1, name: "Avatar & Ciblage Immobilier", icon: Target, essential: true },
    { id: 2, name: "Promesse & Offre Irrésistible", icon: TrendingUp, essential: true },
    { id: 3, name: "Stratégie Vidéo Réseaux Sociaux", icon: Video, essential: true },
    { id: 4, name: "Machine à Leads Localisée", icon: Zap, essential: true },
    { id: 5, name: "Fidélisation & Conversion Automatisée", icon: RotateCcw, essential: false },
    { id: 6, name: "Analyse & Optimisation", icon: BarChart3, essential: false },
    { id: 7, name: "Flyers Partenaires & Prospection Éthique", icon: Mail, essential: false },
    { id: 8, name: "Google My Business", icon: MapPin, essential: true },
    { id: 9, name: "Publicité Vidéo Facebook/Instagram", icon: Smartphone, essential: false },
    { id: 10, name: "Publicité Vidéo Google Ads", icon: Search, essential: false }
  ];

  const premiumServices = [
    { id: 11, name: "Blog Immobilier Premium", icon: BookOpen, price: 1497 },
    { id: 12, name: "Mini-Portail Immobilier", icon: Home, price: 397 },
    { id: 13, name: "CRM Immobilier Sur-Mesure", icon: Settings, price: 1997 }
  ];

  const plans = [
    {
      id: 'carte',
      name: 'À la Carte',
      description: 'Choisis uniquement ce dont tu as besoin',
      price: '297€',
      priceDetail: 'par module',
      color: 'gray',
      popular: false,
      features: [
        'Accès au module choisi uniquement',
        'Support par email',
        'Accès à vie au contenu',
        'Pas d\'engagement'
      ],
      limitations: [
        'Prix total élevé si plusieurs modules',
        'Pas de vision globale',
        'Support limité',
        'Pas de coaching mensuel'
      ]
    },
    {
      id: 'mensuel',
      name: 'Club IMMO Mensuel',
      description: 'Accès complet avec engagement 12 mois',
      price: '97€',
      priceDetail: '/mois (12 mois)',
      totalPrice: '1 164€',
      color: 'blue',
      popular: true,
      features: [
        'Accès à TOUS les 10 modules',
        'Support WhatsApp personnalisé', 
        '1 coaching stratégique/mois',
        'Mises à jour continues',
        'Communauté privée',
        'Bonus outils IA inclus'
      ],
      limitations: [
        'Engagement 12 mois requis',
        'Paiement mensuel récurrent'
      ]
    },
    {
      id: 'annuel',
      name: 'Club IMMO Annuel', 
      description: 'Meilleure offre : tout en une fois',
      price: '997€',
      priceDetail: 'paiement unique',
      originalPrice: '1 164€',
      savings: '167€',
      color: 'green',
      popular: false,
      features: [
        'Accès à TOUS les 10 modules',
        'Support WhatsApp personnalisé',
        '1 coaching stratégique/mois',
        'Mises à jour continues',
        'Communauté privée', 
        'Bonus outils IA inclus',
        '🎁 Économie de 167€',
        '🎁 Module bonus exclusif'
      ],
      limitations: []
    }
  ];

  const calculateALaCarte = (essentialOnly = false) => {
    const selectedModules = essentialOnly ? modules.filter(m => m.essential) : modules;
    return selectedModules.length * 297;
  };

  const getColorClasses = (color: string, selected = false) => {
    const baseClasses = {
      gray: selected ? 'border-gray-500 shadow-lg' : 'border-gray-200',
      blue: selected ? 'border-blue-500 shadow-xl' : 'border-blue-200',
      green: selected ? 'border-green-500 shadow-lg' : 'border-green-200'
    };
    return baseClasses[color as keyof typeof baseClasses];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🎯 Choisis ta Formule <span className="text-orange-400">IMMO</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Compare les options et trouve la solution parfaite pour développer ton business immobilier
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 inline-block">
              <p className="text-sm text-blue-200">
                ⚡ <strong>Plus de 3 000€ de valeur</strong> • 📍 <strong>1 seul conseiller par zone</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calcul Économies */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6">
            <div className="text-center mb-6">
              <Calculator className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">📊 Calcul des Économies</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">5 Modules Essentiels</h3>
                <p className="text-2xl font-bold text-orange-600">{calculateALaCarte(true).toLocaleString()}€</p>
                <p className="text-sm text-gray-600">à la carte</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Tous les 10 Modules</h3>
                <p className="text-2xl font-bold text-red-600">{calculateALaCarte().toLocaleString()}€</p>
                <p className="text-sm text-gray-600">à la carte</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Club IMMO Annuel</h3>
                <p className="text-2xl font-bold">997€</p>
                <p className="text-sm">Économie: {(calculateALaCarte() - 997).toLocaleString()}€ 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparateur Principal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⚖️ Comparaison des Formules</h2>
            <p className="text-lg text-gray-600">Trouve l'option qui correspond à tes besoins et ton budget</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                  getColorClasses(plan.color, hoveredPlan === plan.id)
                } ${plan.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Recommandé
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-600 ml-2">{plan.priceDetail}</span>
                  </div>

                  {plan.totalPrice && (
                    <p className="text-sm text-gray-500 mb-2">Total: {plan.totalPrice}</p>
                  )}

                  {plan.savings && (
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                      Économie: {plan.savings}
                    </div>
                  )}

                  {plan.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">Au lieu de {plan.originalPrice}</p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Inclus :
                  </h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <X className="h-5 w-5 text-red-500" />
                      Limitations :
                    </h4>
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button 
                  onClick={() => {
                    if (plan.id === 'carte') {
                      if (setCurrentPage) {
                        setCurrentPage('configurateur-carte');
                      } else {
                        // Fallback si pas de navigation
                        alert('Configurateur à la carte - Navigation non disponible');
                      }
                    } else if (plan.id === 'mensuel') {
                      window.open('https://buy.stripe.com/eVq8wP464aKf2sTeWlf7i08', '_blank');
                    } else if (plan.id === 'annuel') {
                      window.open('https://buy.stripe.com/cNi8wPdGE4lRc3t8xXf7i09', '_blank');
                    }
                  }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white' 
                      : plan.color === 'green'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } flex items-center justify-center gap-2`}
                >
                  {plan.id === 'carte' ? 'Configurer ma sélection' : 'Choisir cette formule'}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Inclus */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Modules Inclus dans le Club IMMO</h2>
            <p className="text-lg text-gray-600">Accès complet à tout l'écosystème de formation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <module.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600">Module {module.id}</span>
                    {module.essential && (
                      <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mt-1">
                        Essentiel
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{module.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Valeur: 297€</span>
                  <Check className="h-5 w-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Premium */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💎 Services Premium (En option)</h2>
            <p className="text-lg text-gray-600">Services haut de gamme disponibles en complément</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mb-4 w-fit mx-auto">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Blog Immobilier Premium</h3>
                <p className="text-2xl font-bold text-purple-600">1 497€</p>
              </div>
              
              <button 
                onClick={() => window.open('https://buy.stripe.com/00w7sLfOM7y37Nd9C1f7i0k', '_blank')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all"
              >
                Commander - 1 497€
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mb-4 w-fit mx-auto">
                  <Home className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mini-Portail Immobilier</h3>
                <p className="text-2xl font-bold text-purple-600">397€</p>
              </div>
              
              <button 
                onClick={() => window.open('https://buy.stripe.com/14AeVd3203hN0kL6pPf7i0l', '_blank')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all"
              >
                Commander - 397€
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg mb-4 w-fit mx-auto">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">CRM Immobilier Sur-Mesure</h3>
                <p className="text-2xl font-bold text-purple-600">1 997€</p>
              </div>
              
              <button 
                onClick={() => window.open('https://buy.stripe.com/6oU4gzcCAdWr2sT29zf7i0m', '_blank')}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all"
              >
                Commander - 1 997€
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">❓ Questions Fréquentes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">💰 Puis-je changer de formule ?</h3>
              <p className="text-gray-700">Oui, tu peux upgrader de "À la carte" vers le Club IMMO à tout moment. Nous déduisons ce que tu as déjà payé.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">🔄 Et si je ne suis pas satisfait ?</h3>
              <p className="text-gray-700">Garantie satisfait ou remboursé 30 jours. Si ça ne te convient pas, on te rembourse intégralement.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">📍 Comment fonctionne l'exclusivité ?</h3>
              <p className="text-gray-700">Un seul conseiller accepté par zone géographique pour préserver la valeur de chaque membre.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Quel support j'ai ?</h3>
              <p className="text-gray-700">Support WhatsApp personnalisé + 1 coaching stratégique par mois pour les membres Club IMMO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">🚀 Prêt à transformer ton business ?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <Crown className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Club IMMO Recommandé</h3>
              <p className="text-blue-200 mb-6">La solution complète pour dominer ton marché local</p>
              <button 
                onClick={() => window.open('https://buy.stripe.com/cNi8wPdGE4lRc3t8xXf7i09', '_blank')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
              >
                Rejoindre le Club IMMO
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <Calculator className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Sélection Personnalisée</h3>
              <p className="text-blue-200 mb-6">Configure exactement ce dont tu as besoin</p>
              <button 
                onClick={() => {
                  if (setCurrentPage) {
                    setCurrentPage('configurateur-carte');
                  } else {
                    alert('Configurateur à la carte - Navigation non disponible');
                  }
                }}
                className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
              >
                Configurer à la carte
              </button>
            </div>
          </div>

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

export default ComparateurFormulesPage;