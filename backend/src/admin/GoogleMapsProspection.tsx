// GoogleMapsProspectionPage.tsx - Page temporaire
// À créer dans : frontend/src/components/pages/GoogleMapsProspectionPage.tsx

import React from 'react';

const GoogleMapsProspectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              🗺️ Prospection Google Maps
            </h1>
            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
              En développement
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-8">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Outil de Prospection Google Maps
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Cet outil révolutionnaire vous permettra de rechercher et identifier des prospects 
            directement depuis Google Maps avec votre interface d'admin.
          </p>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recherche Avancée</h3>
              <p className="text-gray-600 text-sm">
                Recherchez par secteur, zone géographique et type d'activité
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Export de Données</h3>
              <p className="text-gray-600 text-sm">
                Exportez automatiquement les contacts trouvés
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Intégration CRM</h3>
              <p className="text-gray-600 text-sm">
                Synchronisation directe avec votre CRM
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🚀 Statut du développement
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Interface utilisateur</span>
                <span className="text-yellow-600 font-medium">En cours...</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">API Google Maps</span>
                <span className="text-gray-400">À venir</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Base de données</span>
                <span className="text-gray-400">À venir</span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GoogleMapsProspectionPage;