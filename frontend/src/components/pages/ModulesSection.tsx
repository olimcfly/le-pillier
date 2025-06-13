import React from 'react';

interface ModulesSectionProps {
  setCurrentPage: (page: any) => void;
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ setCurrentPage }) => {
  const modules = [
    {
      id: 'ciblage-persona',
      title: 'Ciblage & Persona',
      features: [
        'Analyse comportementale IA',
        'Segmentation automatique',
        'Scoring de prospects',
        'Base de données enrichie'
      ]
    },
    {
      id: 'machine-leads',
      title: 'Machine à Leads',
      features: [
        'Génération automatique 24/7',
        'Leads qualifiés exclusifs',
        'Multi-canaux intégrés',
        'ROI tracking en temps réel'
      ]
    },
    {
      id: 'google-maps-admin',
      title: 'Prospection Google Maps',
      features: [
        'Extraction de données massives',
        'Géolocalisation précise',
        'Contact enrichi automatique',
        'Export CRM compatible'
      ]
    },
    {
      id: 'publicite-facebook',
      title: 'Publicité Facebook',
      features: [
        'Campagnes IA-optimisées',
        'Audiences lookalike',
        'A/B testing automatique',
        'Budget auto-ajusté'
      ]
    },
    {
      id: 'email-campaigns',
      title: 'Email Campaigns',
      features: [
        'Séquences personnalisées',
        'Automation comportementale',
        'Templates haute conversion',
        'Analytics avancées'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Optimisation',
      features: [
        'Dashboard temps réel',
        'Prédictions IA',
        'Recommandations automatiques',
        'Rapports personnalisés'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">
          Nos Modules Révolutionnaires
        </h2>
        <p className="section-subtitle">
          Chaque module est conçu pour maximiser vos performances commerciales 
          et transformer votre approche du marché immobilier.
        </p>
        
        <div className="modules-grid">
          {modules.map((module) => (
            <div key={module.id} className="module-card">
              <div className="module-header">
                <h3>{module.title}</h3>
                <p>Module Premium</p>
              </div>
              
              <div className="module-content">
                <ul className="module-features">
                  {module.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <button 
                  className="module-button"
                  onClick={() => setCurrentPage(module.id)}
                >
                  Découvrir ce module
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;