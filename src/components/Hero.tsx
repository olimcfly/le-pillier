import React from 'react';
import { ArrowRight, Target, TrendingUp, Users, Calculator } from 'lucide-react';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Target className="h-16 w-16 text-orange-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tu veux plus de <span className="text-orange-400">vendeurs</span> ?
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Tu veux être visible, oui — mais vraiment <strong>reconnu</strong> et <strong>choisi</strong>.
          </p>
          
          <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
            Un accompagnement unique pour conseillers immobiliers indépendants qui veulent 
            attirer les vendeurs, devenir visibles localement, et se positionner comme une autorité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => handleNavigation('comparateur-formules')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Rejoindre le Club IMMO
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => handleNavigation('comparateur-formules')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
            >
              <Calculator className="h-5 w-5" />
              Découvrir les Formules
            </button>
          </div>

          {/* Indicateurs de valeur */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">97€/mois</div>
                <p className="text-blue-200">Accès complet Club IMMO</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">+3000€</div>
                <p className="text-blue-200">de valeur incluse</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">1 seul</div>
                <p className="text-blue-200">conseiller par zone</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Système Prouvé</h3>
              <p className="text-blue-200">Plus de 3 000 € de valeur avec un seul abonnement</p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exclusivité</h3>
              <p className="text-blue-200">1 seul conseiller accepté par zone géographique</p>
            </div>
            
            <div className="text-center">
              <Target className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sur-Mesure</h3>
              <p className="text-blue-200">Accompagnement personnalisé et humain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;