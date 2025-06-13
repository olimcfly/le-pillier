import React from 'react';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Noté 4.9/5 par nos membres</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              L'écosystème complet pour 
              <span className="text-blue-600"> conseillers immobiliers</span> indépendants
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Rejoignez Le Pillier et transformez votre activité immobilière. Attirez plus de vendeurs, 
              devenez visible localement et développez votre réseau avec nos outils professionnels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
                Rejoindre le Club IMMO
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Découvrir les outils
              </button>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Conseillers actifs</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-bold text-gray-900">+40%</div>
                  <div className="text-sm text-gray-600">Leads en moyenne</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
                  <h3 className="text-2xl font-bold mb-2">Club IMMO</h3>
                  <p className="text-blue-100">Accès à tous les outils</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Prospection Google Maps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">CRM sur mesure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Machine à leads</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Stratégies marketing</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">97€<span className="text-lg text-gray-600">/mois</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;