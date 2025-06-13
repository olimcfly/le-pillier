import React from 'react';

const ClubSection: React.FC = () => {
  return (
    <section className="section club-section">
      <div className="section-container">
        <h2 className="section-title">
          Rejoignez le Club des Agents d'Élite
        </h2>
        <p className="section-subtitle">
          Une communauté exclusive d'agents immobiliers qui dominent leur marché 
          grâce à nos outils révolutionnaires.
        </p>
        
        <div className="club-features">
          <div className="club-feature">
            <div className="feature-icon">
              🎯
            </div>
            <h3>Ciblage Précis</h3>
            <p>
              Identifiez vos prospects idéaux avec notre IA de ciblage 
              qui analyse plus de 50 critères comportementaux.
            </p>
          </div>
          
          <div className="club-feature">
            <div className="feature-icon">
              🚀
            </div>
            <h3>Automatisation Complète</h3>
            <p>
              Automatisez vos campagnes de prospection et libérez 
              80% de votre temps pour vous concentrer sur la vente.
            </p>
          </div>
          
          <div className="club-feature">
            <div className="feature-icon">
              📈
            </div>
            <h3>Résultats Garantis</h3>
            <p>
              Nos membres voient en moyenne une augmentation de 300% 
              de leurs leads qualifiés dès le premier mois.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;