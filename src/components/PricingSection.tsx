import React from 'react';
import { Check, Crown, Star, Zap } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            🎓 CLUB IMMO – FORMATION + ACCOMPAGNEMENT CONTINU
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Accès à toutes les stratégies en version formation pas-à-pas avec accompagnement personnalisé
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-3xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-6 py-2 rounded-bl-2xl">
              <span className="font-bold">OFFRE DE LANCEMENT</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-3xl font-bold">Club IMMO</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>📚 Accès à toutes les stratégies en formation pas-à-pas</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>💬 Support WhatsApp personnalisé</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>🧠 1 coaching stratégique par mois</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>🎁 Bonus outils IA + templates exclusifs</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>🔐 Exclusivité : 1 conseiller par zone</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">Valeur totale :</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-400">Plus de 3 000 € de valeur</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl">💶</span>
                      <span className="text-6xl font-bold">97€</span>
                    </div>
                    <p className="text-xl text-blue-200">par mois</p>
                    <p className="text-sm text-gray-300 line-through">Au lieu de 149€</p>
                  </div>

                  <div className="space-y-3 mb-8 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span>Sans engagement</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Crown className="h-4 w-4 text-yellow-400" />
                      <span>Accès immédiat à tout</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>Garantie satisfaction</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105 mb-4">
                    Rejoindre le Club IMMO
                  </button>
                  
                  <p className="text-xs text-gray-300">
                    🔥 Places limitées par zone géographique
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-white/5 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">📩 Prochaine étape ?</h3>
            <p className="text-lg text-blue-200 mb-6">
              Écris <strong className="text-orange-400">"IMMO97"</strong> pour réserver ton appel d'audit stratégique 
              et vérifier si ta zone est encore disponible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                💬 Contacter sur WhatsApp
              </button>
              
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all">
                📞 Réserver un appel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;