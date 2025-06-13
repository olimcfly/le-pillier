import React, { useState } from 'react';

interface EmailCampaignsProps {
  setCurrentPage: (page: string) => void;
}

const EmailCampaigns: React.FC<EmailCampaignsProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([]);

  const campaignStats = [
    { 
      title: 'Campaigns Actives', 
      value: '23', 
      change: '+5', 
      icon: '📧',
      color: 'bg-blue-500'
    },
    { 
      title: 'Emails Envoyés', 
      value: '147,892', 
      change: '+12%', 
      icon: '📤',
      color: 'bg-green-500'
    },
    { 
      title: 'Taux d\'Ouverture', 
      value: '24.8%', 
      change: '+2.1%', 
      icon: '👁️',
      color: 'bg-purple-500'
    },
    { 
      title: 'Taux de Clic', 
      value: '3.4%', 
      change: '+0.8%', 
      icon: '🖱️',
      color: 'bg-orange-500'
    },
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Newsletter Mensuelle - Mars 2025',
      type: 'Newsletter',
      status: 'sent',
      recipients: 12450,
      sent: '2024-03-15',
      openRate: 28.5,
      clickRate: 4.2,
      subject: 'Vos nouvelles opportunités immobilières ce mois-ci'
    },
    {
      id: 2,
      name: 'Formation Webinar - Négociation',
      type: 'Formation',
      status: 'scheduled',
      recipients: 3280,
      sent: '2024-03-20',
      openRate: 0,
      clickRate: 0,
      subject: 'Masterclass : Négocier comme un pro de l\'immobilier'
    },
    {
      id: 3,
      name: 'Relance Prospects Chauds',
      type: 'Prospection',
      status: 'sending',
      recipients: 890,
      sent: '2024-03-18',
      openRate: 31.2,
      clickRate: 6.8,
      subject: 'Votre projet immobilier : donnons-lui vie ensemble'
    },
    {
      id: 4,
      name: 'Onboarding Nouveaux Agents',
      type: 'Onboarding',
      status: 'draft',
      recipients: 45,
      sent: '',
      openRate: 0,
      clickRate: 0,
      subject: 'Bienvenue chez Le Pillier - Votre parcours commence ici'
    },
    {
      id: 5,
      name: 'Promotion Outils Premium',
      type: 'Marketing',
      status: 'sent',
      recipients: 8920,
      sent: '2024-03-10',
      openRate: 22.1,
      clickRate: 2.9,
      subject: '🚀 Boostez vos ventes avec nos nouveaux outils'
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Newsletter Moderne',
      type: 'Newsletter',
      category: 'Communication',
      preview: 'Template avec header bleu et sections modulaires',
      lastUsed: '2024-03-15'
    },
    {
      id: 2,
      name: 'Formation Webinar',
      type: 'Formation',
      category: 'Éducation',
      preview: 'Design orienté événement avec CTA principal',
      lastUsed: '2024-03-12'
    },
    {
      id: 3,
      name: 'Prospection Premium',
      type: 'Prospection',
      category: 'Vente',
      preview: 'Template personnalisé avec données dynamiques',
      lastUsed: '2024-03-18'
    },
    {
      id: 4,
      name: 'Onboarding Welcome',
      type: 'Onboarding',
      category: 'Accueil',
      preview: 'Séquence de bienvenue en 3 étapes',
      lastUsed: '2024-03-08'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      sent: { class: 'bg-green-100 text-green-800', text: 'Envoyé' },
      sending: { class: 'bg-blue-100 text-blue-800', text: 'En cours' },
      scheduled: { class: 'bg-yellow-100 text-yellow-800', text: 'Programmé' },
      draft: { class: 'bg-gray-100 text-gray-800', text: 'Brouillon' },
      paused: { class: 'bg-red-100 text-red-800', text: 'Pausé' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.draft;
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.class}`}>
        {config.text}
      </span>
    );
  };

  const toggleCampaignSelection = (campaignId: number) => {
    setSelectedCampaigns(prev => 
      prev.includes(campaignId)
        ? prev.filter(id => id !== campaignId)
        : [...prev, campaignId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">📧 Campagnes Email</h1>
              <p className="text-gray-600 mt-1">Gérez vos campagnes marketing et communications</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                + Nouvelle Campagne
              </button>
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
              { id: 'campaigns', label: 'Campagnes', icon: '📧' },
              { id: 'templates', label: 'Templates', icon: '📝' },
              { id: 'analytics', label: 'Analytics', icon: '📈' },
              { id: 'settings', label: 'Paramètres', icon: '⚙️' }
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
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campaignStats.map((stat, index) => (
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
                  <div className="mt-4">
                    <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                    <span className="text-gray-500 text-sm ml-2">vs mois dernier</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">🚀 Actions Rapides</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="text-2xl mr-3">✉️</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">Campagne Newsletter</h3>
                      <p className="text-sm text-gray-500">Créer une newsletter mensuelle</p>
                    </div>
                  </button>
                  <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="text-2xl mr-3">🎯</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">Campagne Ciblée</h3>
                      <p className="text-sm text-gray-500">Segmentation avancée</p>
                    </div>
                  </button>
                  <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="text-2xl mr-3">🤖</div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">Automation</h3>
                      <p className="text-sm text-gray-500">Séquence automatisée</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Campaigns */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">📋 Campagnes Récentes</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {campaigns.slice(0, 3).map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-bold">📧</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                          <p className="text-sm text-gray-600">{campaign.recipients.toLocaleString()} destinataires</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{campaign.openRate}% ouverture</p>
                          <p className="text-sm text-gray-600">{campaign.clickRate}% clic</p>
                        </div>
                        {getStatusBadge(campaign.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            {/* Campaign Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Toutes les Campagnes</h2>
                <div className="flex items-center space-x-3">
                  {selectedCampaigns.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{selectedCampaigns.length} sélectionnées</span>
                      <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-200">
                        Supprimer
                      </button>
                      <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200">
                        Dupliquer
                      </button>
                    </div>
                  )}
                  <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                    <option>Toutes les campagnes</option>
                    <option>Actives</option>
                    <option>Brouillons</option>
                    <option>Programmées</option>
                  </select>
                </div>
              </div>

              {/* Campaigns Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCampaigns(campaigns.map(c => c.id));
                            } else {
                              setSelectedCampaigns([]);
                            }
                          }}
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Destinataires</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Envoi</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ouverture</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Clic</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <input 
                            type="checkbox" 
                            className="rounded border-gray-300"
                            checked={selectedCampaigns.includes(campaign.id)}
                            onChange={() => toggleCampaignSelection(campaign.id)}
                          />
                        </td>
                        <td className="px-4 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{campaign.name}</div>
                            <div className="text-sm text-gray-500">{campaign.subject}</div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {campaign.type}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {campaign.recipients.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {campaign.sent || '-'}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {campaign.openRate > 0 ? `${campaign.openRate}%` : '-'}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {campaign.clickRate > 0 ? `${campaign.clickRate}%` : '-'}
                        </td>
                        <td className="px-4 py-4">
                          {getStatusBadge(campaign.status)}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Voir</button>
                            <button className="text-gray-600 hover:text-gray-800 text-sm">Éditer</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Suppr.</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Templates d'Email</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                    + Nouveau Template
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates.map((template) => (
                    <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all">
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📧</div>
                          <p className="text-sm text-gray-600">Aperçu Template</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{template.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{template.preview}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {template.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            Utilisé le {template.lastUsed}
                          </span>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium">
                            Utiliser
                          </button>
                          <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                            Éditer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'analytics' || activeTab === 'settings') && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">
                {activeTab === 'analytics' ? '📈' : '⚙️'}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {activeTab === 'analytics' ? 'Analytics Avancées' : 'Paramètres Email'}
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                {activeTab === 'analytics' 
                  ? 'Interface d\'analytics détaillées avec graphiques et métriques avancées en développement.'
                  : 'Configuration des serveurs SMTP, domaines, et paramètres de délivrabilité en développement.'
                }
              </p>
              <div className="mt-8">
                <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                  Fonctionnalité à venir
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EmailCampaigns;