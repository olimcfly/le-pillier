import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Conseillère Immobilier Indépendante',
      location: 'Lyon',
      content: 'Depuis que j\'ai rejoint Le Pillier, mes leads ont augmenté de 60%. Les outils de prospection Google Maps sont exceptionnels !',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Thomas Martin',
      role: 'Agent Immobilier',
      location: 'Marseille',
      content: 'Le CRM sur mesure m\'a permis de mieux organiser mon travail. Je recommande vivement cette plateforme complète.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sophie Laurent',
      role: 'Négociatrice Immobilière',
      location: 'Toulouse',
      content: 'Les stratégies marketing du Pillier ont transformé ma visibilité locale. Mes campagnes Facebook génèrent maintenant des résultats concrets.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Pierre Rousseau',
      role: 'Conseiller Immobilier',
      location: 'Nice',
      content: 'La machine à leads fonctionne parfaitement. J\'ai doublé mon chiffre d\'affaires en 6 mois grâce aux outils du Pillier.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Isabelle Moreau',
      role: 'Agent Immobilier Indépendant',
      location: 'Bordeaux',
      content: 'Le support client est remarquable et la communauté très active. C\'est plus qu\'un outil, c\'est un véritable écosystème.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Julien Petit',
      role: 'Négociateur Immobilier',
      location: 'Nantes',
      content: 'Les formations et webinaires m\'ont énormément aidé à perfectionner mes techniques de vente. Investissement très rentable !',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos membres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment Le Pillier a transformé l'activité de centaines de conseillers immobiliers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 opacity-50" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Note moyenne basée sur <strong>500+ avis vérifiés</strong>
            </p>
            <p className="text-gray-600">
              Rejoignez une communauté de professionnels qui réussissent grâce au Pillier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;