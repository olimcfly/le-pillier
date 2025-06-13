import React from 'react';
import { Map, Calculator, Wrench, Target, Megaphone, Facebook, Mail, BarChart3, Globe, FileText, Users, BookOpen, MessageSquare, Building } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Map,
      title: 'Prospection Google Maps',
      description: 'Identifiez et contactez les propriétaires directement via Google Maps avec nos outils de prospection avancés.',
      color: 'bg-blue-500'
    },
    {
      icon: BarChart3,
      title: 'CRM Sur Mesure',
      description: 'Gérez vos contacts, suivez vos prospects et optimisez votre pipeline de ventes avec notre CRM dédié.',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Machine à Leads',
      description: 'Automatisez la génération de leads qualifiés et augmentez votre taux de conversion.',
      color: 'bg-green-500'
    },
    {
      icon: Target,
      title: 'Stratégie Vidéo',
      description: 'Créez des vidéos impactantes pour présenter vos biens et développer votre personal branding.',
      color: 'bg-red-500'
    },
    {
      icon: Megaphone,
      title: 'Publicité Google Ads',
      description: 'Optimisez vos campagnes publicitaires Google pour attirer plus de vendeurs et acheteurs.',
      color: 'bg-yellow-500'
    },
    {
      icon: Facebook,
      title: 'Publicité Facebook',
      description: 'Développez votre présence sur les réseaux sociaux avec des campagnes Facebook ciblées.',
      color: 'bg-blue-600'
    },
    {
      icon: Globe,
      title: 'Google My Business',
      description: 'Optimisez votre fiche Google My Business pour améliorer votre visibilité locale.',
      color: 'bg-indigo-500'
    },
    {
      icon: Calculator,
      title: 'Comparateur de Formules',
      description: 'Aidez vos clients à choisir la meilleure offre avec notre comparateur intelligent.',
      color: 'bg-teal-500'
    },
    {
      icon: Wrench,
      title: 'Configurateur de Cartes',
      description: 'Créez des cartes de visite professionnelles personnalisées en quelques clics.',
      color: 'bg-orange-500'
    },
    {
      icon: Building,
      title: 'Mini Portail Immobilier',
      description: 'Votre propre site web immobilier avec vos annonces et votre branding.',
      color: 'bg-pink-500'
    },
    {
      icon: Mail,
      title: 'Campagnes Email',
      description: 'Automatisez vos campagnes email marketing pour fidéliser vos clients.',
      color: 'bg-cyan-500'
    },
    {
      icon: FileText,
      title: 'Flyers Partenaires',
      description: 'Créez des supports marketing professionnels pour vos partenariats.',
      color: 'bg-lime-500'
    },
    {
      icon: Users,
      title: 'Fidélisation Client',
      description: 'Développez la fidélité de vos clients avec nos outils de suivi personnalisés.',
      color: 'bg-violet-500'
    },
    {
      icon: BookOpen,
      title: 'Blog Immobilier',
      description: 'Partagez votre expertise avec un blog intégré et optimisé pour le SEO.',
      color: 'bg-rose-500'
    },
    {
      icon: Target,
      title: 'Ciblage Persona',
      description: 'Définissez et ciblez précisément vos personas pour maximiser vos conversions.',
      color: 'bg-emerald-500'
    },
    {
      icon: MessageSquare,
      title: 'Messagerie Intégrée',
      description: 'Communiquez efficacement avec vos prospects et clients via notre messagerie.',
      color: 'bg-amber-500'
    }
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tous les outils dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le Pillier vous offre un écosystème complet d'outils professionnels pour développer 
            votre activité immobilière et vous démarquer de la concurrence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Découvrir tous les outils
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;