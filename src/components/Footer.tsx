import React from 'react';
import { Target, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Target className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Le Pillier</span>
            </div>
            <p className="text-gray-400 mb-6">
              L'écosystème complet pour les conseillers immobiliers indépendants qui veulent dominer leur marché local.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  📱
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  💬
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  📧
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Formations</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Club IMMO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Avatar & Ciblage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stratégie Vidéo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Machine à Leads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publicité Locale</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services Premium</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog Immobilier</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM Sur-Mesure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mini-Portail</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Google My Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audit Complet</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>Appel d'audit gratuit</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>Support WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>1 conseiller par zone</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                Écris "IMMO97"
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Le Pillier. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;