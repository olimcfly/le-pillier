import React, { useState } from 'react';

interface CRMAdminDashboardProps {
  setCurrentPage: (page: string) => void;
}

const CRMAdminDashboard: React.FC<CRMAdminDashboardProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const systemStats = [
    { title: 'Bases CRM Actives', value: '1,247', icon: '🗃️', color: 'bg-blue-500' },
    { title: 'Contacts Totaux', value: '45,892', icon: '👥', color: 'bg-green-500' },
    { title: 'Taux de Sync', value: '99.2%', icon: '🔄', color: 'bg-purple-500' },
    { title: 'Stockage Utilisé', value: '2.4 TB', icon: '💾', color: 'bg-orange-500' },
  ];

  const crmInstances = [
    { 
      agent: 'Marie Dupont', 
      region: 'Paris', 
      contacts: 1240, 
      lastSync: '2 min ago', 
      status: 'active',
      storage: '45 MB'
    },
    { 
      agent: 'Pierre Martin', 
      region: 'Lyon', 
      contacts: 890, 
      lastSync: '5 min ago', 
      status: 'active',
      storage: '32 MB'
    },
    { 
      agent: 'Sophie Dubois', 
      region: 'Marseille', 
      contacts: 1450, 
      lastSync: '1 hour ago', 
      status: 'warning',
      storage: '52 MB'
    },
    { 
      agent: 'Jean Moreau', 
      region: 'Toulouse', 
      contacts: 670, 
      lastSync: '3 hours ago', 
      status: 'error',
      storage: '28 MB'
    },
  ];

  const systemHealth = [
    { service: 'API Principal', status: 'operational', uptime: '99.9%', response: '45ms' },
    { service: 'Base de Données', status: 'operational', uptime: '99.8%', response: '12ms' },
    { service: 'Synchronisation', status: 'degraded', uptime: '97.2%', response: '180ms' },
    { service: 'Sauvegarde Auto', status: 'operational', uptime: '100%', response: '2.3s' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🏢 Administration CRM</h1>
              <p className="text-gray-600 mt-1">Gestion centralisée des systèmes CRM</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 text-sm font-medium">Système opérationnel</span>
              </div>
              <button 
                onClick={() => setCurrentPage('admin-dashboard')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Retour Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
              { id: 'instances', label: 'Instances CRM', icon: '🗃️' },
              { id: 'health', label: 'État Système', icon: '💚' },
              { id: 'config', label: 'Configuration', icon: '⚙️' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Actions Administrateur</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="text-2xl mr-3">🔄</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">Synchronisation Forcée</h3>
                      <p className="text-sm text-gray-500">Sync toutes les instances</p>
                    </div>
                  </button>
                  <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="text-2xl mr-3">💾</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">Sauvegarde Globale</h3>
                      <p className="text-sm text-gray-500">Backup complet</p>
                    </div>
                  </button>
                  <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="text-2xl mr-3">🧹</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">Nettoyage</h3>
                      <p className="text-sm text-gray-500">Optimiser l'espace</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instances' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Instances CRM Actives</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                  + Nouvelle Instance
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Région</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contacts</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dernière Sync</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stockage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {crmInstances.map((instance, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {instance.agent}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {instance.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {instance.contacts.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {instance.lastSync}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        {instance.storage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          instance.status === 'active' ? 'bg-green-100 text-green-800' :
                          instance.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {instance.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">Gérer</button>
                        <button className="text-gray-600 hover:text-gray-800">Logs</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">État des Services</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {systemHealth.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'operational' ? 'bg-green-500' :
                          service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <h3 className="font-medium text-gray-900">{service.service}</h3>
                          <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{service.response}</p>
                        <p className="text-sm text-gray-600">temps de réponse</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Configuration Système</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intervalle de Synchronisation
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>Toutes les 5 minutes</option>
                      <option>Toutes les 15 minutes</option>
                      <option>Toutes les 30 minutes</option>
                      <option>Toutes les heures</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Limite de Stockage par Agent
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                      <option>100 MB</option>
                      <option>500 MB</option>
                      <option>1 GB</option>
                      <option>Illimité</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                    Sauvegarder la Configuration
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CRMAdminDashboard;