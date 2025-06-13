import React from 'react';
import { 
  BookOpen, 
  Search, 
  Award, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Globe,
  Shield,
  Star,
  Eye,
  Brain,
  PenTool,
  BarChart3,
  Zap,
  MapPin,
  Calendar,
  Settings
} from 'lucide-react';

const BlogImmobilierPage = () => {
  const benefits = [
    {
      icon: Award,
      title: "Autorité d'Expert Local",
      description: "Tu deviens LA référence immobilière de ta zone grâce à ton expertise visible."
    },
    {
      icon: Search,
      title: "Visibilité Google Long Terme",
      description: "Ton blog remonte naturellement sur les recherches immobilières importantes."
    },
    {
      icon: Users,
      title: "Génération de Leads Qualifiés",
      description: "Les prospects te trouvent en cherchant des conseils et te contactent directement."
    },
    {
      icon: TrendingUp,
      title: "Croissance Organique Continue",
      description: "Ton trafic et ta notoriété augmentent progressivement sans publicité payante."
    }
  ];

  const deliverables = [
    {
      icon: Globe,
      title: "Blog Complet Clé en Main",
      description: "Site WordPress professionnel avec design sur-mesure, nom de domaine, hébergement et configuration SEO."
    },
    {
      icon: PenTool,
      title: "5 Articles SEO Optimisés",
      description: "Contenu de qualité : guide marché local, conseils vendeurs, analyses quartiers, actualités immobilières."
    },
    {
      icon: Brain,
      title: "IA Intégrée pour Contenus",
      description: "Assistant IA configuré pour t'aider à créer facilement de nouveaux articles et répondre aux commentaires."
    },
    {
      icon: BarChart3,
      title: "Analytics & SEO Tools",
      description: "Google Analytics, Search Console, outils SEO pour mesurer performances et optimiser ton référencement."
    },
    {
      icon: Settings,
      title: "Formation & Support",
      description: "Guide d'utilisation complet + 3 mois de support pour t'accompagner dans la prise en main."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Conception & Design",
      description: "Création du blog avec ton identité visuelle et zone géographique"
    },
    {
      step: "02",
      title: "Contenu de Lancement",
      description: "Rédaction des 5 premiers articles optimisés SEO"
    },
    {
      step: "03",
      title: "Configuration Technique",
      description: "Installation IA, analytics et outils de référencement"
    },
    {
      step: "04",
      title: "Formation & Suivi",
      description: "Accompagnement pour autonomie et croissance"
    }
  ];

  const seoFeatures = [
    {
      feature: "Optimisation Technique",
      description: "Vitesse, mobile, structure, maillage interne",
      impact: "🚀🚀🚀",
      benefit: "Indexation Google optimale"
    },
    {
      feature: "Contenu Local Ciblé",
      description: "Articles sur ta zone, quartiers, marché local",
      impact: "🚀🚀🚀",
      benefit: "Référencement local puissant"
    },
    {
      feature: "Mots-Clés Stratégiques",
      description: "Requêtes immobilières à fort potentiel",
      impact: "🚀🚀",
      benefit: "Trafic qualifié garanti"
    },
    {
      feature: "Expérience Utilisateur",
      description: "Navigation intuitive, design responsive",
      impact: "🚀🚀",
      benefit: "Conversion visiteurs en leads"
    }
  ];

  const contentTypes = [
    {
      type: "Guides Marché Local",
      icon: "📊",
      examples: "Prix immobilier 2024 [ville], Quartiers où investir, Évolution du marché",
      seoValue: "Fort potentiel SEO",
      leadGen: "Attractif pour vendeurs/acheteurs"
    },
    {
      type: "Conseils Pratiques",
      icon: "💡",
      examples: "Comment bien vendre sa maison, Erreurs à éviter, Négociation immobilière",
      seoValue: "Recherches fréquentes",
      leadGen: "Positionnement expert"
    },
    {
      type: "Actualités Locales",
      icon: "📰",
      examples: "Nouveaux projets urbains, Transports, Écoles, Commerces",
      seoValue: "Contenu frais Google",
      leadGen: "Engagement communauté"
    },
    {
      type: "Success Stories",
      icon: "🏆",
      examples: "Ventes réussies, Témoignages clients, Études de cas",
      seoValue: "Contenu unique",
      leadGen: "Preuve sociale forte"
    }
  ];

  const aiFeatures = [
    {
      feature: "Générateur d'Articles",
      description: "L'IA t'aide à créer des articles optimisés en quelques clics",
      timesSaved: "90% temps économisé"
    },
    {
      feature: "Optimisation SEO Automatique",
      description: "Suggestions de mots-clés et optimisations en temps réel",
      timesSaved: "Expert SEO intégré"
    },
    {
      feature: "Réponses aux Commentaires",
      description: "Assistant pour répondre professionnellement aux questions",
      timesSaved: "Support client automatisé"
    },
    {
      feature: "Idées de Contenu",
      description: "Propositions d'articles basées sur les tendances locales",
      timesSaved: "Créativité augmentée"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-2xl">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              📚 Service Premium — <span className="text-orange-400">Blog Immobilier Premium</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Blog complet clé en main : design professionnel, nom de domaine, 5 articles SEO, 
              IA intégrée pour bâtir ton autorité locale et être trouvé sur Google.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Créer mon Blog d'Expert
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Blog live sous 14 jours</span>
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
              Deviens l'expert immobilier incontournable de ta zone. Attire les prospects qui cherchent 
              des conseils sur Google et transforme ta visibilité en autorité reconnue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-purple-100 p-3 rounded-lg mb-4 w-fit">
                  <benefit.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Contenu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📝 Types de Contenu Créés</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contenu stratégique pour attirer tes prospects idéaux et démontrer ton expertise locale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{content.type}</h3>
                    <p className="text-purple-600 font-semibold text-sm">{content.seoValue}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3"><strong>Exemples :</strong> {content.examples}</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">🎯 {content.leadGen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités IA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🤖 IA Intégrée pour l'Efficacité</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intelligence artificielle configurée pour t'aider à créer du contenu de qualité facilement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.feature}</h3>
                    <p className="text-green-600 font-semibold text-sm">{feature.timesSaved}</p>
                  </div>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimisations SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🔍 Optimisations SEO Avancées</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes les techniques pour que ton blog remonte naturellement dans Google
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{feature.feature}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{feature.impact}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{feature.description}</p>
                <div className="bg-green-100 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">✅ {feature.benefit}</p>
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
              Un blog professionnel complet avec tout ce qu'il faut pour réussir sur Google
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <item.icon className="h-6 w-6 text-purple-600" />
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
      <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">🔄 Notre Processus</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Une méthode éprouvée en 4 étapes pour créer ton blog d'expert immobilier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-purple-200">{step.description}</p>
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
                    <h3 className="font-semibold text-gray-900 mb-2">Tu construis un actif digital durable</h3>
                    <p className="text-gray-600">Ton blog travaille pour toi 24h/24 pendant des années.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu démontes concrètement ton expertise</h3>
                    <p className="text-gray-600">Les prospects voient que tu maîtrises ton marché local.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tu généres des leads qualifiés gratuitement</h3>
                    <p className="text-gray-600">Plus besoin de payer pour de la pub, Google t'amène des prospects.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-6">
                <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">📚 Résultat Garanti</h3>
              </div>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Blog professionnel complet</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>5 articles SEO optimisés</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>IA intégrée pour contenu</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Autorité locale établie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Prêt à devenir l'expert immobilier de référence ?</h2>
          
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">1 497€</span>
                </div>
                <p className="text-xl text-purple-200 mb-4">Investissement unique</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Shield className="h-4 w-4" />
                  <span>Garantie satisfaction</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105">
                  Commander Maintenant
                </button>
                
                <div className="bg-purple-600/50 p-4 rounded-lg">
                  <p className="text-sm mb-2">💎 <strong>Service Premium Exclusif</strong></p>
                  <p className="text-xs text-purple-200">Blog complet clé en main avec IA intégrée et support personnalisé</p>
                  <button className="mt-3 w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-purple-200 mb-6">
            📚 <strong>Parfait pour bâtir ton autorité locale et générer des leads qualifiés sur le long terme.</strong>
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

export default BlogImmobilierPage;