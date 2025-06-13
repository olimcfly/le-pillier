import React from 'react';

interface AdminDashboardProps {
  setCurrentPage: (page: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ setCurrentPage }) => {
  const stats = [
    { title: 'Agents Actifs', value: '1,247', change: '+12%', color: 'bg-green-500' },
    { title: 'Mandats Ce Mois', value: '856', change: '+8%', color: 'bg-blue-500' },
    { title: 'Revenus Mensuels', value: '€124,300', change: '+15%', color: 'bg-purple-500' },
    { title: 'Taux de Conversion', value: '18.5%', change: '+3%', color: 'bg-orange-500' },
  ];

  const quickActions = [
    { title: 'Analytics', icon: '📊', page: 'analytics', description: 'Voir les statistiques détaillées' },
    { title: 'Gestion Clients', icon: '👥', page: 'customer-management', description: 'Gérer les agents et clients' },
    { title: 'Campagnes Email', icon: '📧', page: 'email-campaigns', description: 'Créer et suivre les campagnes' },
    { title: 'CRM Admin', icon: '🏢', page: 'crm-admin', description: 'Administration du CRM' },
    { title: 'Google Maps', icon: '🗺️', page: 'google-maps-admin', description: 'Prospection géographique' },
    { title: 'Paramètres', icon: '⚙️', page: 'admin-settings', description: 'Configuration système' },
  ];

  const recentActivity = [
    { action: 'Nouveau mandat ajouté', user: 'Agent Martin', time: 'Il y a 5 min', type: 'success' },
    { action: 'Campagne email envoyée', user: 'Système', time: 'Il y a 15 min', type: 'info' },
    { action: 'Nouvel agent inscrit', user: 'Sophie Dubois', time: 'Il y a 1h', type: 'success' },
    { action: 'Erreur API détectée', user: 'Système', time: 'Il y a 2h', type: 'warning' },
    { action: 'Backup automatique', user: 'Système', time: 'Il y a 3h', type: 'info' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
              <p className="text-gray-600 mt-1">Bienvenue sur votre tableau de bord administrateur</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Retour Accueil
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">AD</span>
                </div>
                <span className="text-gray-700 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded opacity-30"></div>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-500 text-sm ml-2">vs mois dernier</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Actions Rapides</h2>
              <p className="text-gray-600 text-sm mt-1">Outils d'administration principaux</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(action.page)}
                    className="flex items-start p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <div className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                      {action.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{action.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Activité Récente</h2>
              <p className="text-gray-600 text-sm mt-1">Dernières actions sur la plateforme</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">
                        Par {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Voir toute l'activité →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">État du Système</h2>
            <p className="text-gray-600 text-sm mt-1">Monitoring des services en temps réel</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">API Services</p>
                  <p className="text-sm text-gray-600">Tous les services opérationnels</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Base de Données</p>
                  <p className="text-sm text-gray-600">Connexion stable</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Emails</p>
                  <p className="text-sm text-gray-600">Latence élevée</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;