import React, { useState } from 'react';

interface AnalyticsPageProps {
  setCurrentPage: (page: string) => void;
}

const AnalyticsPage: React.FC<AnalyticsPageProps> = ({ setCurrentPage }) => {
  const [timeFrame, setTimeFrame] = useState('7d');

  const kpis = [
    { 
      title: 'Agents Actifs', 
      value: '1,247', 
      change: '+12%', 
      trend: 'up',
      description: 'Agents connectés dans les 30 derniers jours'
    },
    { 
      title: 'Mandats Générés', 
      value: '856', 
      change: '+8%', 
      trend: 'up',
      description: 'Nouveaux mandats ce mois'
    },
    { 
      title: 'Taux de Conversion', 
      value: '18.5%', 
      change: '+3.2%', 
      trend: 'up',
      description: 'Prospects convertis en clients'
    },
    { 
      title: 'Revenus Moyens', 
      value: '€2,430', 
      change: '-2%', 
      trend: 'down',
      description: 'Commission moyenne par agent'
    },
  ];

  const topAgents = [
    { name: 'Marie Dupont', mandats: 24, revenus: '€18,400', conversion: '22%' },
    { name: 'Pierre Martin', mandats: 19, revenus: '€15,200', conversion: '19%' },
    { name: 'Sophie Dubois', mandats: 17, revenus: '€14,800', conversion: '21%' },
    { name: 'Jean Moreau', mandats: 15, revenus: '€12,900', conversion: '18%' },
    { name: 'Alice Bernard', mandats: 13, revenus: '€11,600', conversion: '20%' },
  ];

  const regionData = [
    { region: 'Île-de-France', agents: 450, mandats: 320, revenus: '€45,200' },
    { region: 'Auvergne-Rhône-Alpes', agents: 280, mandats: 198, revenus: '€28,900' },
    { region: 'Nouvelle-Aquitaine', agents: 195, mandats: 142, revenus: '€19,800' },
    { region: 'Occitanie', agents: 170, mandats: 125, revenus: '€17,400' },
    { region: 'Hauts-de-France', agents: 152, mandats: 98, revenus: '€14,200' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">📊 Analytics</h1>
              <p className="text-gray-600 mt-1">Tableau de bord analytique et reporting</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white"
              >
                <option value="24h">Dernières 24h</option>
                <option value="7d">7 derniers jours</option>
                <option value="30d">30 derniers jours</option>
                <option value="90d">90 derniers jours</option>
              </select>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">{kpi.title}</h3>
                <div className={`flex items-center text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.trend === 'up' ? '↗' : '↘'} {kpi.change}
                </div>
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold text-gray-900">{kpi.value}</span>
              </div>
              <p className="text-gray-600 text-sm">{kpi.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Évolution des Mandats</h2>
              <p className="text-gray-600 text-sm mt-1">Tendance sur {timeFrame}</p>
            </div>
            <div className="p-6">
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-gray-600 font-medium">Graphique en développement</p>
                  <p className="text-gray-500 text-sm">Intégration Chart.js à venir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Agents */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Top Agents</h2>
              <p className="text-gray-600 text-sm mt-1">Classement par performance</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topAgents.map((agent, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{agent.name}</p>
                        <p className="text-sm text-gray-600">{agent.mandats} mandats</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{agent.revenus}</p>
                      <p className="text-sm text-gray-600">{agent.conversion} conv.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Performance par Région</h2>
            <p className="text-gray-600 text-sm mt-1">Répartition géographique de l'activité</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Région
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agents
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mandats
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenus
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {regionData.map((region, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{region.region}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {region.agents}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {region.mandats}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {region.revenus}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(region.mandats / 320) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {Math.round((region.mandats / 320) * 100)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Export & Rapports</h2>
            <p className="text-gray-600 text-sm mt-1">Téléchargez vos données d'analytics</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <p className="font-medium text-gray-900">Export Excel</p>
                  <p className="text-sm text-gray-600">Données complètes</p>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">📄</div>
                  <p className="font-medium text-gray-900">Rapport PDF</p>
                  <p className="text-sm text-gray-600">Résumé exécutif</p>
                </div>
              </button>
              <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <p className="font-medium text-gray-900">Email Programmé</p>
                  <p className="text-sm text-gray-600">Rapport automatique</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;