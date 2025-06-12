import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClubSection from './components/ClubSection';
import ModulesSection from './components/ModulesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

// Pages Modules
import CiblagePersonaPage from './components/CiblagePersonaPage';
import OffreMessagePage from './components/OffreMessagePage';
import StrategieVideoPage from './components/StrategieVideoPage';
import MachineLeadsPage from './components/MachineLeadsPage';
import FidelisationConversionPage from './components/FidelisationConversionPage';
import AnalyseOptimisationPage from './components/AnalyseOptimisationPage';
import FlyersPartenairesPage from './components/FlyersPartenairesPage';
import GoogleMyBusinessPage from './components/GoogleMyBusinessPage';
import PubliciteFacebookPage from './components/PubliciteFacebookPage';
import PubliciteGoogleAdsPage from './components/PubliciteGoogleAdsPage';

// Pages Services Premium
import BlogImmobilierPage from './components/BlogImmobilierPage';
import MiniPortailPage from './components/MiniPortailPage';
import CrmSurMesurePage from './components/CrmSurMesurePage';

// Pages de Commande
import ComparateurFormulesPage from './components/ComparateurFormulesPage';
import ConfigurateurCartePage from './components/ConfigurateurCartePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      // Pages Modules
      case 'ciblage-persona':
        return <CiblagePersonaPage />;
      case 'offre-message':
        return <OffreMessagePage />;
      case 'strategie-video':
        return <StrategieVideoPage />;
      case 'machine-leads':
        return <MachineLeadsPage />;
      case 'fidelisation-conversion':
        return <FidelisationConversionPage />;
      case 'analyse-optimisation':
        return <AnalyseOptimisationPage />;
      case 'flyers-partenaires':
        return <FlyersPartenairesPage />;
      case 'google-my-business':
        return <GoogleMyBusinessPage />;
      case 'publicite-facebook':
        return <PubliciteFacebookPage />;
      case 'publicite-google-ads':
        return <PubliciteGoogleAdsPage />;
      
      // Pages Services Premium
      case 'blog-immobilier':
        return <BlogImmobilierPage />;
      case 'mini-portail':
        return <MiniPortailPage />;
      case 'crm-sur-mesure':
        return <CrmSurMesurePage />;
      
      // Pages de Commande
      case 'comparateur-formules':
        return <ComparateurFormulesPage setCurrentPage={setCurrentPage} />;
      case 'configurateur-carte':
        return <ConfigurateurCartePage />;
      
      // Page d'accueil
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <ClubSection />
            <ModulesSection setCurrentPage={setCurrentPage} />
            <PricingSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;