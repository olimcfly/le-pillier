import React from 'react';
import { Shield, Heart, Eye, MessageCircle, Calendar } from 'lucide-react';

const ClubSection = () => {
  return (
    <section id="club" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            🔐 Le Club IMMO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un écosystème stratégique, humain et sur-mesure pour un petit nombre de conseillers par zone
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🔄 La première étape
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Appel stratégique personnalisé</h4>
                  <p className="text-gray-600">Tu m'expliques ton métier, ta zone, ton profil. Je te fais un audit stratégique personnalisé.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Définition de TA cible vendeurs</h4>
                  <p className="text-gray-600">Construction de ton "No Persona" pour savoir exactement qui cibler et comment leur parler.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Plan de communication 90 jours</h4>
                  <p className="text-gray-600">Stratégie simple et impactante pour du ciblage précis et magnétique.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ❤️ Valeurs du Club
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-red-500" />
                <span><strong>Authenticité :</strong> on attire avec qui tu es, pas avec des slogans</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-500" />
                <span><strong>Personnalisation :</strong> chaque zone, chaque message est à ton image</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <span><strong>Humain :</strong> support WhatsApp + 1 coaching/mois</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-purple-500" />
                <span><strong>Transparence :</strong> tu vois ce que je fais, tu apprends</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-2">97 €/mois</p>
                <p className="text-gray-600 mb-4">Offre de lancement — bientôt 149 €</p>
                <p className="text-sm text-gray-500">Sans engagement • 1 conseiller par zone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;