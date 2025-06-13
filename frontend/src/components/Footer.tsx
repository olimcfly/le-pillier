import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Le Pillier</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              L'écosystème complet pour conseillers immobiliers indépendants. 
              Développez votre activité avec nos outils professionnels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Outils */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Outils</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Prospection Google Maps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CRM Sur Mesure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Machine à Leads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Stratégie Vidéo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook Ads</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Formation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support Client</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Communauté</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinaires</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ressources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@lepillier.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@lepillier.fr
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-4">Rejoignez le Club IMMO</h5>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
                S'inscrire maintenant
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Le Pillier. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;