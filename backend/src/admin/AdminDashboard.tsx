import React, { useState, useEffect } from 'react';

interface AdminDashboardProps {
  setCurrentPage: (page: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ setCurrentPage }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      title: 'Agents Actifs', 
      value: '1,247', 
      change: '+12%', 
      changeType: 'increase',
      icon: '👥',
      color: 'bg-blue-500',
      description: 'Agents connectés cette semaine'
    },
    { 
      title: 'Mandats Ce Mois', 
      value: '856', 
      change: '+8%', 
      changeType: 'increase',
      icon: '📋',
      color: 'bg-green-500',
      description: 'Nouveaux mandats générés'
    },
    { 
      title: 'Revenus Mensuels', 
      value: '€124,300', 
      change: '+15%', 
      changeType: 'increase',
      icon: '💰',
      color: 'bg-purple-500',
      description: 'Commissions totales'
    },
    { 
      title: 'Taux de Conversion', 
      value: '18.5%', 
      change: '+3.2%', 
      changeType: 'increase',
      icon: '📈',
      color: 'bg-orange-500',
      description: 'Prospects → Clients'
    },
  ];

  const quickActions = [
    { 
      title: 'Analytics', 
      icon: '📊', 
      page: 'analytics', 
      description: 'Tableaux de bord et statistiques',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      textColor: 'text-blue-700'
    },
    { 
      title: 'Gestion Clients', 
      icon: '👥', 
      page: 'customer-management', 
      description: 'Gérer agents et clients',
      color: 'bg-green-50 hover:bg-green-100 border-green-200',
      textColor: 'text-green-700'
    },
    { 
      title: 'Campagnes Email', 
      icon: '📧', 
      page: 'email-campaigns', 
      description: 'Marketing et communications',
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
      textColor: 'text-purple-700'
    },
    { 
      title: 'CRM Admin', 
      icon: '🏢', 
      page: 'crm-admin', 
      description: 'Administration CRM centrale',
      color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
      textColor: 'text-indigo-700'
    },
    { 
      title: 'Google Maps', 
      icon: '🗺️', 
      page: 'google-maps-admin', 
      description: 'Prospection géographique',
      color: 'bg-red-50 hover:bg-red-100 border-red-200',
      textColor: 'text-red-700'
    },
    { 
      title: 'Paramètres', 
      icon: '⚙️', 
      page: 'admin-settings', 
      description: 'Configuration système',
      color: 'bg-gray-50 hover:bg-gray-100 border-gray-200',
      textColor: 'text-gray-700'
    },
  ];

  const recentActivity = [
    { 
      action: 'Nouveau mandat ajouté', 
      user: 'Agent Martin Dubois', 
      time: 'Il y a 5 min', 
      type: 'success',
      details: 'Mandat Villa 4 pièces - Marseille'
    },
    { 
      action: 'Campagne email envoyée', 
      user: 'Système Marketing', 
      time: 'Il y a 15 min', 
      type: 'info',
      details: '2,450 destinataires - Newsletter mensuelle'
    },
    { 
      action: 'Nouvel agent inscrit', 
      user: 'Sophie Dubois', 
      time: 'Il y a 1h', 
      type: 'success',
      details: 'Région: Île-de-France'
    },
    { 
      action: 'Alerte système', 
      user: 'Monitoring', 
      time: 'Il y a 2h', 
      type: 'warning',
      details: 'Latence élevée détectée sur API'
    },
    { 
      action: 'Backup automatique', 
      user: 'Système', 
      time: 'Il y a 3h', 
      type: 'info',
      details: 'Sauvegarde complète terminée (2.4GB)'
    },
  ];

  const systemHealth = [
    { name: 'API Services', status: 'operational', percentage: 99.9 },
    { name: 'Base de Données', status: 'operational', percentage: 99.8 },
    { name: 'Services Email', status: 'degraded', percentage: 87.2 },
    { name: 'CDN Global', status: 'operational', percentage: 99.9 },
  ];

  const topRegions = [
    { region: 'Île-de-France', agents: 450, mandats: 320, performance: 89 },
    { region: 'Auvergne-Rhône-Alpes', agents: 280, mandats: 198, performance: 84 },
    { region: 'Nouvelle-Aquitaine', agents: 195, mandats: 142, performance: 78 },
    { region: 'Occitanie', agents: 170, mandats: 125, performance: 75 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                🏢 Dashboard Administrateur
              </h1>
              <p className="text-gray-600 mt-1">
                Bienvenue sur votre centre de contrôle Le Pillier
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <span className="text-2xl">🔔</span>
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>
              
              {/* Time */}
              <div className="text-right text-sm text-gray-600">
                <div className="font-medium">
                  {currentTime.toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {currentTime.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  🏠 Accueil
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Administrateur</p>
                    <p className="text-xs text-gray-500">Super Admin</p>
                  </div>
                </div>
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
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="mr-1">
                    {stat.changeType === 'increase' ? '↗' : '↘'}
                  </span>
                  {stat.change}
                </div>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-gray-600 text-sm mt-2">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">🚀 Actions Rapides</h2>
              <p className="text-gray-600 text-sm mt-1">Accès direct aux outils d'administration</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(action.page)}
                    className={`flex items-start p-4 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 ${action.color}`}
                  >
                    <div className="text-3xl mr-4 flex-shrink-0">
                      {action.icon}
                    </div>
                    <div className="text-left">
                      <h3 className={`font-semibold ${action.textColor} text-lg`}>
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">💚 État Système</h2>
              <p className="text-gray-600 text-sm mt-1">Monitoring en temps réel</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {systemHealth.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'operational' ? 'bg-green-500' :
                        service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-sm font-medium text-gray-900">{service.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{service.percentage}%</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setCurrentPage('admin-settings')}
                  className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  Voir détails système →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">📋 Activité Récente</h2>
              <p className="text-gray-600 text-sm mt-1">Dernières actions sur la plateforme</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.details}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Voir historique complet →
                </button>
              </div>
            </div>
          </div>

          {/* Top Regions Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">🏆 Top Régions</h2>
              <p className="text-gray-600 text-sm mt-1">Performance par zone géographique</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topRegions.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{region.region}</p>
                        <p className="text-sm text-gray-600">
                          {region.agents} agents • {region.mandats} mandats
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${region.performance}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{region.performance}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setCurrentPage('analytics')}
                  className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  Voir analytics détaillées →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;