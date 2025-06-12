import React from 'react';
import { 
  Target, 
  Megaphone, 
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
  Settings
} from 'lucide-react';

interface ModulesSectionProps {
  setCurrentPage?: (page: string) => void;
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ setCurrentPage }) => {
  const modules = [
    {
      id: 1,
      icon: Target,
      title: "Avatar & Ciblage Immobilier",
      description: "Identifie ton vendeur idéal, ses freins, ses désirs et où le trouver.",
      price: "297 €",
      benefit: "Tu cibles mieux, tu gagnes du temps, tu attires les bons prospects.",
      page: "ciblage-persona"
    },
    {
      id: 2,
      icon: Megaphone,
      title: "Promesse & Offre Irrésistible",
      description: "Formule un message clair, crédible et différent de tes concurrents.",
      price: "297 €",
      benefit: "Tu crées l'effet \"c'est lui que je veux\" chez ton prospect.",
      page: "offre-message"
    },
    {
      id: 3,
      icon: Video,
      title: "Stratégie Vidéo Réseaux Sociaux",
      description: "Plan + scripts pour TikTok, Reels, Shorts & GMB sur 90 jours.",
      price: "297 €",
      benefit: "Tu crées de la visibilité, tu deviens une figure locale.",
      page: "strategie-video"
    },
    {
      id: 4,
      icon: Zap,
      title: "Machine à Leads Localisée",
      description: "Page de capture avec bonus + tracking complet.",
      price: "297 €",
      benefit: "Tu transformes ta visibilité en prises de contact 24/7.",
      page: "machine-leads"
    },
    {
      id: 5,
      icon: RotateCcw,
      title: "Fidélisation & Conversion Automatisée",
      description: "Emails, WhatsApp ou SMS pour transformer tes leads en RDV.",
      price: "297 €",
      benefit: "Tu signes plus sans avoir à relancer manuellement.",
      page: "fidelisation-conversion"
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Analyse & Optimisation",
      description: "Tableau de bord + 3 bilans + recommandations sur 90 jours.",
      price: "297 €",
      benefit: "Tu sais ce qui marche, tu ajustes, tu gagnes en efficacité.",
      page: "analyse-optimisation"
    },
    {
      id: 7,
      icon: Mail,
      title: "Flyers Partenaires & Prospection Éthique",
      description: "Flyer-calendrier cofinancé, distribué à 10 000 foyers.",
      price: "297 €",
      benefit: "Tu gagnes en visibilité locale sans démarchage agressif.",
      page: "flyers-partenaires"
    },
    {
      id: 8,
      icon: MapPin,
      title: "Google My Business",
      description: "Création, optimisation, stratégie d'avis et extension de zone.",
      price: "297 €",
      benefit: "Tu remontes dans les recherches locales + zones élargies.",
      page: "google-my-business"
    },
    {
      id: 9,
      icon: Smartphone,
      title: "Publicité Vidéo Facebook/Instagram",
      description: "Vidéo + campagne locale émotionnelle et ciblée.",
      price: "297 €/mois",
      benefit: "Tu te rends visible, tu connectes avec les bons vendeurs.",
      duration: "3 mois recommandés + budget pub 500-700€",
      page: "publicite-facebook"
    },
    {
      id: 10,
      icon: Search,
      title: "Publicité Vidéo Google Ads",
      description: "Campagne pour capter les recherches vendeurs actives.",
      price: "297 €/mois",
      benefit: "Tu interceptes des leads au moment où ils cherchent.",
      duration: "3 mois recommandés + budget pub 500-1000€",
      page: "publicite-google-ads"
    }
  ];

  const premiumServices = [
    {
      icon: BookOpen,
      title: "Blog Immobilier Premium",
      description: "Blog complet : design, nom de domaine, 5 articles SEO, IA intégrée.",
      price: "1 497 €",
      benefit: "Tu bâtis ton autorité locale, tu es trouvé sur Google.",
      page: "blog-immobilier"
    },
    {
      icon: Home,
      title: "Mini-Portail Immobilier pour Vendeurs",
      description: "Page de vente dédiée au bien + formulaire acheteur + pub ciblée.",
      price: "397 €",
      benefit: "Tu aides tes vendeurs à valoriser leur bien et à trier les vrais acheteurs.",
      page: "mini-portail"
    },
    {
      icon: Settings,
      title: "CRM Immobilier 100% sur-mesure",
      description: "Outil personnalisé pour suivre tes leads, relances, ventes et biens.",
      price: "À partir de 1 997 €",
      benefit: "Tu travailles mieux, tu gagnes du temps, tu restes organisé.",
      page: "crm-sur-mesure"
    }
  ];

  const handleModuleClick = (module: any) => {
    if (module.page && setCurrentPage) {
      setCurrentPage(module.page);
    }
  };

  const handleServiceClick = (service: any) => {
    if (service.page && setCurrentPage) {
      setCurrentPage(service.page);
    }
  };

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🧱 ÉCOSYSTÈME "VISIBILITÉ & CLIENTS IMMO"
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Pour les conseillers immobiliers indépendants qui veulent attirer des propriétaires vendeurs, 
            se rendre visibles localement, et devenir incontournables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {modules.map((module) => (
            <div key={module.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <module.icon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-blue-600">Module {module.id}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
              <p className="text-gray-600 mb-4">{module.description}</p>
              
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-green-800">🚀 {module.benefit}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{module.price}</p>
                  {module.duration && (
                    <p className="text-xs text-gray-500">{module.duration}</p>
                  )}
                </div>
                <button 
                  onClick={() => handleModuleClick(module)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🟡 Services Premium
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg mb-4">
                  <service.icon className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-orange-800">🧠 {service.benefit}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-orange-600">{service.price}</p>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  >
                    Découvrir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;