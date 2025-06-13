import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Un seul abonnement, tous les outils
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez le Club IMMO et accédez à l'ensemble de notre écosystème 
            pour développer votre activité immobilière.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Populaire
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-900">Club IMMO</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">97€</span>
                    <span className="text-xl text-gray-600 ml-2">/mois</span>
                  </div>
                  <p className="text-gray-600 mt-2">Sans engagement • Annulable à tout moment</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Accès à tous les outils (16 modules)</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Support client prioritaire</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Formations et webinaires exclusifs</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Communauté privée de conseillers</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Mises à jour automatiques</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Intégrations avec vos outils existants</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                  Commencer maintenant
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Ce qui est inclus :</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Prospection Maps</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span>CRM Sur Mesure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Machine Leads</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Stratégie Vidéo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Google Ads</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Facebook Ads</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    <span>Google Business</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                    <span>Comparateur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span>Configurateur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    <span>Mini Portail</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                    <span>Email Marketing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-lime-500 rounded-full mr-2"></div>
                    <span>Flyers</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">ROI Moyen</div>
                    <div className="text-3xl font-bold text-gray-900">+300%</div>
                    <div className="text-sm text-gray-600">dès le 3ème mois</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            🎯 <strong>Garantie satisfait ou remboursé 30 jours</strong>
          </p>
          <p className="text-sm text-gray-500">
            Rejoignez plus de 500 conseillers immobiliers qui font confiance au Pillier
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;