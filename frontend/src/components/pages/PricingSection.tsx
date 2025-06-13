import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '97',
      period: '/mois',
      features: [
        '3 modules inclus',
        '500 leads/mois',
        'Support email',
        'Tableau de bord basique',
        'Formation en ligne'
      ],
      buttonText: 'Commencer',
      featured: false
    },
    {
      name: 'Professional',
      price: '197',
      period: '/mois',
      features: [
        'Tous les modules',
        '2000 leads/mois',
        'Support téléphone',
        'Analytics avancées',
        'Formation personnalisée',
        'API access',
        'White-label'
      ],
      buttonText: 'Choisir Pro',
      featured: true
    },
    {
      name: 'Enterprise',
      price: '497',
      period: '/mois',
      features: [
        'Solution sur mesure',
        'Leads illimités',
        'Support dédié 24/7',
        'Développement custom',
        'Formation équipe complète',
        'Intégrations personnalisées'
      ],
      buttonText: 'Nous contacter',
      featured: false
    }
  ];

  return (
    <section className="section pricing-section">
      <div className="section-container">
        <h2 className="section-title">
          Choisissez Votre Formule
        </h2>
        <p className="section-subtitle">
          Des plans conçus pour s'adapter à tous les profils d'agents immobiliers, 
          du débutant au leader de marché.
        </p>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              <h3 className="pricing-title">{plan.name}</h3>
              <div className="pricing-price">{plan.price}€</div>
              <div className="pricing-period">{plan.period}</div>
              
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              
              <button 
                className={`pricing-button ${plan.featured ? 'primary' : 'secondary'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;