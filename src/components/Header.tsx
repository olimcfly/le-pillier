import React, { useState } from 'react';
import { Menu, X, Target, ArrowLeft, Calculator } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Le Pillier</span>
          </div>
          
          {currentPage !== 'home' && (
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors md:hidden"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Retour</span>
            </button>
          )}
          
          <nav className="hidden md:flex space-x-8 items-center">
            {currentPage === 'home' ? (
              <>
                <a href="#club" className="text-gray-700 hover:text-blue-600 transition-colors">Club IMMO</a>
                <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors">Modules</a>
                <button
                  onClick={() => handleNavigation('comparateur-formules')}
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Calculator className="h-4 w-4" />
                  Tarifs
                </button>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <button
                  onClick={() => handleNavigation('comparateur-formules')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Commander
                </button>
              </>
            ) : currentPage === 'comparateur-formules' || currentPage === 'configurateur-carte' ? (
              <>
                <button
                  onClick={() => handleNavigation('home')}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Retour à l'accueil</span>
                </button>
                <button
                  onClick={() => handleNavigation('comparateur-formules')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Comparateur
                </button>
                <button
                  onClick={() => handleNavigation('configurateur-carte')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  À la carte
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavigation('home')}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Retour à l'accueil</span>
              </button>
            )}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {currentPage === 'home' ? (
                <>
                  <a href="#club" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Club IMMO</a>
                  <a href="#modules" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Modules</a>
                  <button
                    onClick={() => handleNavigation('comparateur-formules')}
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
                  >
                    Tarifs & Formules
                  </button>
                  <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
                  <button
                    onClick={() => handleNavigation('comparateur-formules')}
                    className="block px-3 py-2 bg-orange-500 text-white rounded-lg font-semibold w-full text-left mt-2"
                  >
                    Commander
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavigation('home')}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
                >
                  Retour à l'accueil
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;