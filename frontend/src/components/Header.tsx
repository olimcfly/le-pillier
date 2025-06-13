import React, { useState } from 'react';
import { Menu, X, Home, Users, BookOpen, Calculator, Map, MessageSquare, Target, Megaphone, Facebook, Mail, Wrench, Globe, FileText, BarChart3, Building } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Accueil', href: '#accueil' },
    { icon: Users, label: 'Contact', href: '#contact' },
    { icon: Map, label: 'Prospection Google Maps', href: '#google-maps' },
    { icon: FileText, label: 'Page Remerciement', href: '#remerciement' },
    { icon: Wrench, label: 'Configurateur Carte', href: '#configurateur' },
    { icon: Calculator, label: 'Comparateur Formules', href: '#comparateur' },
    { icon: Building, label: 'Mini Portail', href: '#portail' },
    { icon: Target, label: 'Stratégie Vidéo', href: '#strategie-video' },
    { icon: Megaphone, label: 'Publicité Google Ads', href: '#google-ads' },
    { icon: Facebook, label: 'Publicité Facebook', href: '#facebook-ads' },
    { icon: Mail, label: 'Offre Message', href: '#offre-message' },
    { icon: BarChart3, label: 'Machine Leads', href: '#machine-leads' },
    { icon: Globe, label: 'Google My Business', href: '#google-business' },
    { icon: FileText, label: 'Flyers Partenaires', href: '#flyers' },
    { icon: Users, label: 'Fidélisation Conversion', href: '#fidelisation' },
    { icon: BarChart3, label: 'CRM Sur Mesure', href: '#crm' },
    { icon: BookOpen, label: 'Blog Immobilier', href: '#blog' },
    { icon: Target, label: 'Ciblage Persona', href: '#ciblage' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Le Pillier</h1>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#fonctionnalites" className="text-gray-700 hover:text-blue-600 transition-colors">Fonctionnalités</a>
            <a href="#tarifs" className="text-gray-700 hover:text-blue-600 transition-colors">Tarifs</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Rejoindre le Club
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Rejoindre le Club IMMO
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;