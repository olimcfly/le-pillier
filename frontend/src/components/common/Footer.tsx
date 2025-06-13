import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>LE PILLIER</h4>
            <p>
              La plateforme révolutionnaire qui transforme 
              votre business immobilier grâce à l'IA.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Modules</h4>
            <ul className="footer-links">
              <li><a href="#">Ciblage & Persona</a></li>
              <li><a href="#">Machine à Leads</a></li>
              <li><a href="#">Google Maps Prospection</a></li>
              <li><a href="#">Publicité Facebook</a></li>
              <li><a href="#">Email Campaigns</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Formation</a></li>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Entreprise</h4>
            <ul className="footer-links">
              <li><a href="#">À propos</a></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Partenaires</a></li>
              <li><a href="#">Presse</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 LE PILLIER. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;