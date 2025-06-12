import React, { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  Mail, 
  Calendar,
  FileText,
  Smartphone,
  ArrowRight,
  Clock,
  Users,
  Target,
  Video,
  Zap,
  RotateCcw,
  BarChart3,
  MapPin,
  Search,
  BookOpen,
  Home,
  Settings,
  Phone,
  MessageCircle,
  Star
} from 'lucide-react';

interface PageRemerciementProps {
  setCurrentPage?: (page: string) => void;
}

const PageRemerciement: React.FC<PageRemerciementProps> = ({ setCurrentPage }) => {
  const [productInfo, setProductInfo] = useState<any>(null);

  // Simulation de récupération des infos produit depuis l'URL ou paramètres
  useEffect(() => {
    // Dans un vrai projet, vous récupéreriez ces infos depuis l'URL ou le sessionStorage
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product') || 'club-annuel';
    
    const products = {
      'club-mensuel': {
        name: 'Club IMMO Mensuel',
        price: '97€/mois',
        icon: Users,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-club-immo',
        description: 'Accompagnement complet avec accès à tous les modules',
        nextSteps: [
          'Accès immédiat à la plateforme de formation',
          'Premier coaching stratégique dans 7 jours',
          'Invitation au groupe WhatsApp privé',
          'Accès aux 10 modules de formation'
        ]
      },
      'club-annuel': {
        name: 'Club IMMO Annuel',
        price: '997€',
        icon: Users,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-club-immo',
        description: 'Accompagnement complet avec accès à tous les modules',
        nextSteps: [
          'Accès immédiat à la plateforme de formation',
          'Premier coaching stratégique dans 7 jours',
          'Invitation au groupe WhatsApp privé',
          'Accès aux 10 modules de formation',
          'Module bonus exclusif inclus'
        ]
      },
      'module-avatar': {
        name: 'Avatar & Ciblage Immobilier',
        price: '297€',
        icon: Target,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-avatar-ciblage',
        description: 'Module de formation pour identifier votre vendeur idéal',
        nextSteps: [
          'Accès au module dans les 24h',
          'Séance d\'accompagnement personnalisé',
          'Templates et outils inclus',
          'Support par email'
        ]
      },
      'module-promesse': {
        name: 'Promesse & Offre Irrésistible',
        price: '297€',
        icon: TrendingUp,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-promesse-offre',
        description: 'Module pour créer votre message différenciant',
        nextSteps: [
          'Accès au module dans les 24h',
          'Séance de création de votre offre',
          'Scripts personnalisés',
          'Support par email'
        ]
      },
      'blog-premium': {
        name: 'Blog Immobilier Premium',
        price: '1 497€',
        icon: BookOpen,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-blog-premium',
        description: 'Prestation de création de blog WordPress complet',
        nextSteps: [
          'Briefing détaillé dans 48h',
          'Développement sur 2-3 semaines',
          'Formation à l\'utilisation',
          'Maintenance 3 mois incluse'
        ]
      },
      'mini-portail': {
        name: 'Mini-Portail Immobilier',
        price: '397€',
        icon: Home,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-mini-portail',
        description: 'Prestation de création de page de vente immobilière',
        nextSteps: [
          'Briefing dans 24h',
          'Développement sous 1 semaine',
          'Configuration publicité',
          'Formation utilisation'
        ]
      },
      'crm-sur-mesure': {
        name: 'CRM Immobilier Sur-Mesure',
        price: '1 997€',
        icon: Settings,
        onboardingLink: 'https://calendly.com/lepillier/onboarding-crm-sur-mesure',
        description: 'Prestation de développement CRM personnalisé',
        nextSteps: [
          'Analyse besoins détaillée',
          'Développement sur 4-6 semaines',
          'Formation équipe complète',
          'Support technique 6 mois'
        ]
      }
    };

    setProductInfo(products[productId as keyof typeof products] || products['club-annuel']);
  }, []);

  if (!productInfo) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">Chargement...</div>
    </div>;
  }

  const IconComponent = productInfo.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Success */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-20 w-20 text-green-300 mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🎉 Commande Confirmée !
          </h1>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <IconComponent className="h-12 w-12 text-green-300" />
              <div className="text-left">
                <h2 className="text-2xl font-bold">{productInfo.name}</h2>
                <p className="text-green-200 text-lg">{productInfo.price}</p>
              </div>
            </div>
            <p className="text-green-100">{productInfo.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Mail className="h-8 w-8 text-green-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">📧 Facture Envoyée</h3>
              <p className="text-green-100">
                Votre facture a été envoyée à l'adresse email indiquée lors du paiement. 
                Vérifiez vos spams si vous ne la recevez pas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Calendar className="h-8 w-8 text-green-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">📅 Onboarding Prévu</h3>
              <p className="text-green-100">
                Un email avec votre lien de réservation pour l'appel d'onboarding 
                vous sera envoyé dans les prochaines minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  ⚠️ Important : Prestation de Service
                </h3>
                <p className="text-blue-800 mb-4">
                  <strong>Votre achat correspond à une prestation de service d'accompagnement.</strong> 
                  Nous ne vendons pas de produit physique, mais nous mettons en place avec vous 
                  l'offre choisie et vous guidons sur quoi faire.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">🎯 Ce qui vous attend :</h4>
                  <ul className="space-y-2">
                    {productInfo.nextSteps.map((step: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-800">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Prochaines Étapes</h2>
            <p className="text-lg text-gray-600">Voici ce qui va se passer maintenant</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📧 Email de Confirmation</h3>
              <p className="text-gray-600">
                Vous recevrez un email avec votre lien de réservation pour l'appel d'onboarding 
                personnalisé dans les 15 prochaines minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📞 Appel d'Onboarding</h3>
              <p className="text-gray-600">
                Réservez votre créneaux pour l'appel de mise en place. Nous configurerons 
                ensemble votre prestation selon vos besoins.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Mise en Place</h3>
              <p className="text-gray-600">
                Nous mettons en place votre solution et vous accompagnons étape par étape 
                pour optimiser vos résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💬 Questions ? Besoin d'Aide ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre équipe est là pour vous accompagner dans cette nouvelle étape
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href={productInfo.onboardingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="h-6 w-6" />
              Réserver mon Onboarding
            </a>

            <a 
              href="mailto:contact@lepillier.fr"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 py-4 px-6 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Mail className="h-6 w-6" />
              Nous Contacter
            </a>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
            <div className="flex items-center justify-center gap-4 mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Support WhatsApp</h3>
                <p className="text-gray-600">Accès direct après votre onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Home */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => setCurrentPage && setCurrentPage('home')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mx-auto transition-colors"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            Retourner à l'accueil
          </button>
        </div>
      </section>
    </div>
  );
};

export default PageRemerciement;