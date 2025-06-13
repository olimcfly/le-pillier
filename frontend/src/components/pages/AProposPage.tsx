import React from 'react';
import { 
  ArrowLeft,
  Award,
  Users,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  Heart,
  Lightbulb,
  Shield,
  Clock,
  Globe,
  Building,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap,
  BarChart3,
  BookOpen,
  MessageCircle,
  Camera,
  Rocket,
  Trophy,
  PieChart
} from 'lucide-react';

interface AProposPageProps {
  setCurrentPage: (page: string) => void;
}

const AProposPage: React.FC<AProposPageProps> = ({ setCurrentPage }) => {
  const teamMembers = [
    {
      name: "Olivier Le Pillier",
      role: "Fondateur & Expert Marketing Immobilier",
      image: "👨‍💼",
      bio: "Ancien négociateur immobilier devenu expert en marketing digital. Plus de 10 ans d'expérience dans l'accompagnement d'agents immobiliers.",
      specialties: ["Stratégie Marketing", "Formation Commerciale", "Prospection Digitale"],
      achievements: ["500+ agents formés", "Créateur de 15 méthodes", "Speaker reconnu"]
    },
    {
      name: "Marie Dubois",
      role: "Responsable Formation",
      image: "👩‍🏫",
      bio: "Formatrice certifiée avec 8 ans d'expérience en immobilier. Spécialiste de la pédagogie et de l'accompagnement personnalisé.",
      specialties: ["Pédagogie", "Accompagnement", "Coaching"],
      achievements: ["Certification formateur", "300+ heures de coaching", "Taux de réussite 95%"]
    },
    {
      name: "Thomas Martin",
      role: "Expert Technique & CRM",
      image: "👨‍💻",
      bio: "Développeur spécialisé dans les solutions immobilières. Créateur d'outils sur-mesure pour optimiser la productivité des agents.",
      specialties: ["Développement", "CRM", "Automatisation"],
      achievements: ["10+ outils créés", "Expert Google Maps", "Intégrations API"]
    },
    {
      name: "Sophie Leroy",
      role: "Responsable Support Client",
      image: "👩‍💼",
      bio: "Ancienne assistante commerciale en immobilier, elle comprend parfaitement les défis quotidiens des agents et apporte un support personnalisé.",
      specialties: ["Support Premium", "Relation Client", "Suivi Performance"],
      achievements: ["Support 24/7", "Satisfaction 98%", "Résolution rapide"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Résultats Concrets",
      description: "Nous nous engageons sur des résultats mesurables et tangibles pour chaque agent accompagné.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Heart,
      title: "Accompagnement Humain",
      description: "Chaque agent est unique. Nous adaptons notre approche à votre profil et vos objectifs.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Nous développons constamment de nouveaux outils et méthodes pour rester à la pointe.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Shield,
      title: "Éthique & Transparence",
      description: "Méthodes 100% éthiques, transparence totale sur nos résultats et nos méthodes.",
      color: "bg-green-100 text-green-600"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Création de l'entreprise",
      description: "Lancement avec une vision : démocratiser le marketing immobilier de qualité."
    },
    {
      year: "2021",
      title: "Premier module Avatar & Ciblage",
      description: "100 premiers agents formés avec des résultats exceptionnels (+120% de mandats)."
    },
    {
      year: "2022",
      title: "Lancement du Club IMMO",
      description: "Création de la formule tout-en-un avec accompagnement personnalisé."
    },
    {
      year: "2023",
      title: "500 agents accompagnés",
      description: "Franchissement du cap des 500 agents formés avec 95% de satisfaction."
    },
    {
      year: "2024",
      title: "Innovation CRM & IA",
      description: "Lancement des outils CRM sur-mesure et intégration de l'intelligence artificielle."
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Agents Accompagnés", description: "Partout en France" },
    { icon: Award, number: "95%", label: "Taux de Satisfaction", description: "Note moyenne 4.8/5" },
    { icon: TrendingUp, number: "+150%", label: "Croissance Moyenne", description: "Augmentation des mandats" },
    { icon: Clock, number: "24/7", label: "Support Disponible", description: "Réponse sous 2h" },
    { icon: BookOpen, number: "15", label: "Modules Créés", description: "Formations spécialisées" },
    { icon: Trophy, number: "3", label: "Prix Obtenus", description: "Excellence formation" }
  ];

  const certifications = [
    {
      name: "Certification Qualiopi",
      description: "Organisme de formation certifié",
      icon: Award
    },
    {
      name: "Partenaire Google",
      description: "Expert Google My Business & Ads",
      icon: Globe
    },
    {
      name: "Formateur Certifié",
      description: "Agrément formation professionnelle",
      icon: BookOpen
    },
    {
      name: "Expert Marketing Digital",
      description: "Spécialiste immobilier reconnu",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Retour</span>
              </button>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Le Pillier Immo</span>
              </div>
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
                onClick={() => setCurrentPage('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
            </div>

            <button 
              onClick={() => setCurrentPage('comparateur')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Rejoindre
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full mb-6">
              <Heart className="h-5 w-5 text-red-400" />
              <span className="text-sm font-medium">Notre Mission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Révolutionner le <span className="text-blue-400">marketing immobilier</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Depuis 2020, nous accompagnons les agents immobiliers dans leur transformation digitale 
              avec des méthodes éprouvées et un support personnalisé.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-blue-200 text-sm">Agents Formés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4 ans</div>
                <div className="text-blue-200 text-sm">D'Expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De l'idée révolutionnaire à la réalité : comment nous sommes devenus la référence 
              en formation marketing immobilier
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre action et notre engagement 
              auprès de chaque agent immobilier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className={`p-4 rounded-full w-fit mx-auto mb-6 ${value.color}`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés qui mettent leur savoir-faire au service de votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0">{member.image}</div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Spécialités :</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Réalisations :</h4>
                      <div className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Chiffres */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos Résultats en Chiffres</h2>
            <p className="text-xl text-blue-100">
              La preuve par les résultats de notre expertise et de notre engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-8 text-center text-white">
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Partenariats</h2>
            <p className="text-lg text-gray-600">
              Nos agréments et partenariats garantissent la qualité de nos formations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-2xl">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Rocket className="h-12 w-12 text-blue-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Engagement</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous nous engageons à vous accompagner jusqu'à l'atteinte de vos objectifs. 
              Chaque agent qui nous fait confiance bénéficie d'un suivi personnalisé et 
              d'un support premium pour garantir sa réussite.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Garantie 30 jours</h4>
                <p className="text-gray-600 text-sm">Satisfait ou remboursé</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Support 24/7</h4>
                <p className="text-gray-600 text-sm">Réponse sous 2h garantie</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Accompagnement</h4>
                <p className="text-gray-600 text-sm">Coaching personnalisé</p>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              Parlons de Votre Projet
            </button>
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
                <button onClick={() => setCurrentPage('home')} className="block hover:text-white">Accueil</button>
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

export default AProposPage;