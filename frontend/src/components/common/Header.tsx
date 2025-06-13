import React from 'react';

interface HeroProps {
  setCurrentPage: (page: any) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="fade-in-up">
          Révolutionnez votre Business Immobilier
        </h1>
        <p className="fade-in-up">
          Découvrez la première plateforme complète qui transforme votre approche commerciale 
          grâce à l'IA et des outils de prospection avancés.
        </p>
        
        <div className="hero-buttons fade-in-up">
          <button 
            className="btn-primary"
            onClick={() => setCurrentPage('configurateur-carte')}
          >
            Démarrer maintenant
          </button>
          <button 
            className="btn-secondary"
            onClick={() => setCurrentPage('comparateur-formules')}
          >
            Voir les formules
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;