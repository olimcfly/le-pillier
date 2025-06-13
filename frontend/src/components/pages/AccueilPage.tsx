import React from 'react';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Play,
  Award,
  MessageCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap,
  BarChart3,
  Globe,
  Shield,
  Clock,
  Heart,
  Building,
  Camera,
  Smartphone,
  Search,
  BookOpen,
  Settings
} from 'lucide-react';

interface AccueilPageProps {
  setCurrentPage: (page: string) => void;
}

const AccueilPage: React.FC<AccueilPageProps> = ({ setCurrentPage }) => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Agent Immobilier",
      city: "Lyon",
      avatar: "👩‍💼",
      rating: 5,
      text: "Grâce au Club IMMO, j'ai doublé mon nombre de mandats en 3 mois ! Les scripts vidéo sont incroyables."
    },
    {
      name: "Pierre Martin",
      role: "Négociateur",
      city: "Marseille", 
      avatar: "👨‍💼",
      rating: 5,
      text: "Le module Avatar & Ciblage m'a permis de comprendre exactement qui sont mes clients idéaux. Game changer !"
    },
    {
      name: "Sophie Leroy",
      role: "Directrice d'Agence",
      city: "Bordeaux",
      avatar: "👩‍💼",
      rating: 5,
      text: "L'équipe complète a adopté les méthodes. Nos résultats ont explosé ! Merci Le Pillier 🚀"
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Ciblage Précis",
      description: "Identifiez votre client idéal et optimisez votre prospection"
    },
    {
      icon: TrendingUp,
      title: "Croissance Garantie",
      description: "Méthodes éprouvées pour doubler vos mandats"
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Coaching individuel et groupe WhatsApp privé"
    },
    {
      icon: BarChart3,
      title: "Résultats Mesurables",
      description: "Tracking et optimisation continue de vos performances"
    },
    {
      icon: Globe,
      title: "Présence Digitale",
      description: "Optimisation complète de votre visibilité en ligne"
    },
    {
      icon: Shield,
      title: "Méthodes Éprouvées",
      description: "Stratégies testées sur des centaines d'agents"
    }
  ];

  const stats = [
    { number: "500+", label: "Agents Accompagnés" },
    { number: "95%", label: "Taux de Satisfaction" },
    { number: "2.3x", label: "Multiplication Moyenne des Mandats" },
    { number: "24/7", label: "Support Disponible" }
  ];

  const modules = [
    {
      icon: Target,
      title: "Avatar & Ciblage",
      description: "Identifiez votre vendeur idéal",
      badge: "🔥 Populaire"
    },
    {
      icon: TrendingUp,
      title: "Promesse & Offre",
      description: "Message différenciant unique",
      badge: "✨ Essentiel"
    },
    {
      icon: Camera,
      title: "Stratégie Vidéo",
      description: "Plan 90j + scripts viraux",
      badge: "🎬 Nouveau"
    },
    {
      icon: Zap,
      title: "Machine à Leads",
      description: "Landing page + lead magnet",
      badge: "⚡ Puissant"
    },
    {
      icon: MapPin,
      title: "Google My Business",
      description: "Optimisation locale complète",
      badge: "🌟 Incontournable"
    },
    {
      icon: Smartphone,
      title: "Publicité Facebook",
      description: "Campagnes vidéo performantes",
      badge: "🎯 Avancé"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Le Pillier Immo</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setCurrentPage('modules')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Modules
              </button>
              <button 
                onClick={() => setCurrentPage('comparateur')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Formules
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                À Propos
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage('comparateur')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Commencer
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">Méthode #1 des agents immobiliers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Doublez vos <span className="text-blue-400">mandats</span> en 90 jours
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                La méthode complète pour transformer votre prospection immobilière. 
                Plus de 500 agents nous font confiance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setCurrentPage('comparateur')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Zap className="h-6 w-6" />
                  Rejoindre le Club IMMO
                </button>
                
                <button 
                  onClick={() => setCurrentPage('modules')}
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Play className="h-6 w-6" />
                  Découvrir les Modules
                </button>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Garantie 30 jours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl">
                <div className="bg-white p-8 rounded-xl">
                  <div className="text-center">
                    <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-10 w-10 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">+150% de mandats</h3>
                    <p className="text-gray-600 mb-6">en moyenne après 3 mois</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">97%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">500+</div>
                        <div className="text-sm text-gray-600">Agents</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                🔥 Populaire
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                ✅ Prouvé
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Le Pillier Immo ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre méthode éprouvée transforme votre approche commerciale avec des résultats concrets et mesurables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Modules de Formation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chaque module est conçu pour résoudre un problème spécifique de votre business immobilier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 relative">
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                  {module.badge}
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg w-fit mb-4">
                  <module.icon className="h-6 w-6 text-gray-700" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">297€</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('modules')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Voir tous les modules
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez les témoignages de nos agents immobiliers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.city}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre business ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les 500+ agents qui ont déjà multiplié leurs mandats avec notre méthode
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('comparateur')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Rejoindre le Club IMMO - 997€
            </button>
            
            <button 
              onClick={() => setCurrentPage('configurateur')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Modules à la Carte
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Garantie 30 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Accès immédiat</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Support premium</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">Le Pillier Immo</span>
              </div>
              <p className="text-gray-400 text-sm">
                La méthode #1 pour doubler vos mandats immobiliers en 90 jours
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Formation</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => setCurrentPage('modules')} className="block hover:text-white">Modules</button>
                <button onClick={() => setCurrentPage('comparateur')} className="block hover:text-white">Club IMMO</button>
                <button className="block hover:text-white">Témoignages</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <button onClick={() => setCurrentPage('about')} className="block hover:text-white">À Propos</button>
                <button onClick={() => setCurrentPage('contact')} className="block hover:text-white">Contact</button>
                <button className="block hover:text-white">Conditions</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@le-pillier-immo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Le Pillier Immo. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccueilPage;