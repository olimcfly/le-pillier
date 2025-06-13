import React, { useState } from 'react';

interface SettingsPageProps {
  setCurrentPage: (page: string) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // Paramètres généraux
    platformName: 'Le Pillier',
    maintenanceMode: false,
    registrationEnabled: true,
    emailVerificationRequired: true,
    maxAgentsPerAccount: 100,
    sessionTimeout: 60,
    
    // Paramètres email
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUser: 'noreply@lepillier.com',
    smtpPassword: '••••••••',
    emailFromName: 'Le Pillier',
    emailFromAddress: 'noreply@lepillier.com',
    
    // Paramètres API
    apiRateLimit: 1000,
    apiTimeout: 30,
    maxUploadSize: 50,
    enableApiLogging: true,
    
    // Paramètres de sécurité
    passwordMinLength: 8,
    requireSpecialChars: true,
    sessionSecure: true,
    twoFactorEnabled: false,
    loginAttempts: 5,
    lockoutDuration: 30,
    
    // Paramètres de sauvegarde
    autoBackup: true,
    backupFrequency: 'daily',
    backupRetention: 30,
    backupLocation: 'cloud',
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    adminAlerts: true
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    setUnsavedChanges(true);
  };

  const saveSettings = () => {
    // Simulation de la sauvegarde
    console.log('Settings saved:', settings);
    setUnsavedChanges(false);
    // Ici, vous feriez l'appel API pour sauvegarder
  };

  const resetSettings = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?')) {
      // Reset aux valeurs par défaut
      setUnsavedChanges(true);
    }
  };

  const systemStatus = [
    { service: 'API Principal', status: 'operational', uptime: '99.9%', lastCheck: '2 min ago' },
    { service: 'Base de Données', status: 'operational', uptime: '99.8%', lastCheck: '1 min ago' },
    { service: 'Email Service', status: 'degraded', uptime: '87.2%', lastCheck: '5 min ago' },
    { service: 'File Storage', status: 'operational', uptime: '99.9%', lastCheck: '3 min ago' },
    { service: 'CDN', status: 'operational', uptime: '99.9%', lastCheck: '1 min ago' },
    { service: 'Backup System', status: 'operational', uptime: '100%', lastCheck: '10 min ago' }
  ];

  const recentLogs = [
    { time: '2024-03-19 14:32:15', level: 'INFO', message: 'Backup completed successfully', module: 'BACKUP' },
    { time: '2024-03-19 14:28:42', level: 'WARN', message: 'High memory usage detected', module: 'SYSTEM' },
    { time: '2024-03-19 14:15:33', level: 'INFO', message: 'New user registration: sophie.dubois@example.com', module: 'AUTH' },
    { time: '2024-03-19 14:12:18', level: 'ERROR', message: 'SMTP connection timeout', module: 'EMAIL' },
    { time: '2024-03-19 14:05:27', level: 'INFO', message: 'Campaign sent successfully to 2,450 recipients', module: 'EMAIL' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">⚙️ Paramètres Système</h1>
              <p className="text-gray-600 mt-1">Configuration et administration de la plateforme</p>
            </div>
            <div className="flex items-center space-x-4">
              {unsavedChanges && (
                <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-700 text-sm font-medium">Modifications non sauvegardées</span>
                </div>
              )}
              <button 
                onClick={saveSettings}
                disabled={!unsavedChanges}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  unsavedChanges 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                💾 Sauvegarder
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
              { id: 'general', label: 'Général', icon: '🏠' },
              { id: 'email', label: 'Email', icon: '📧' },
              { id: 'api', label: 'API', icon: '🔌' },
              { id: 'security', label: 'Sécurité', icon: '🔒' },
              { id: 'backup', label: 'Sauvegarde', icon: '💾' },
              { id: 'monitoring', label: 'Monitoring', icon: '📊' },
              { id: 'logs', label: 'Logs', icon: '📋' }
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
        
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">🏠 Paramètres Généraux</h2>
                <p className="text-gray-600 text-sm mt-1">Configuration de base de la plateforme</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de la plateforme
                    </label>
                    <input
                      type="text"
                      value={settings.platformName}
                      onChange={(e) => handleSettingChange('platformName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre max d'agents par compte
                    </label>
                    <input
                      type="number"
                      value={settings.maxAgentsPerAccount}
                      onChange={(e) => handleSettingChange('maxAgentsPerAccount', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Mode Maintenance</h3>
                      <p className="text-sm text-gray-500">Désactiver l'accès public temporairement</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.maintenanceMode}
                        onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Inscription Ouverte</h3>
                      <p className="text-sm text-gray-500">Permettre les nouvelles inscriptions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.registrationEnabled}
                        onChange={(e) => handleSettingChange('registrationEnabled', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Email Settings */}
        {activeTab === 'email' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">📧 Configuration Email</h2>
                <p className="text-gray-600 text-sm mt-1">Paramètres SMTP et envoi d'emails</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Serveur SMTP
                    </label>
                    <input
                      type="text"
                      value={settings.smtpHost}
                      onChange={(e) => handleSettingChange('smtpHost', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Port SMTP
                    </label>
                    <input
                      type="number"
                      value={settings.smtpPort}
                      onChange={(e) => handleSettingChange('smtpPort', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom d'expéditeur
                    </label>
                    <input
                      type="text"
                      value={settings.emailFromName}
                      onChange={(e) => handleSettingChange('emailFromName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email d'expéditeur
                    </label>
                    <input
                      type="email"
                      value={settings.emailFromAddress}
                      onChange={(e) => handleSettingChange('emailFromAddress', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium mr-3">
                    Tester la Configuration
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">
                    Voir les Logs Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">🔒 Paramètres de Sécurité</h2>
                <p className="text-gray-600 text-sm mt-1">Configuration de la sécurité et authentification</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Longueur minimale du mot de passe
                    </label>
                    <input
                      type="number"
                      value={settings.passwordMinLength}
                      onChange={(e) => handleSettingChange('passwordMinLength', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tentatives de connexion max
                    </label>
                    <input
                      type="number"
                      value={settings.loginAttempts}
                      onChange={(e) => handleSettingChange('loginAttempts', parseInt(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Caractères spéciaux requis</h3>
                      <p className="text-sm text-gray-500">Forcer l'utilisation de caractères spéciaux</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.requireSpecialChars}
                        onChange={(e) => handleSettingChange('requireSpecialChars', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Double Authentification</h3>
                      <p className="text-sm text-gray-500">Activer 2FA pour tous les admins</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.twoFactorEnabled}
                        onChange={(e) => handleSettingChange('twoFactorEnabled', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monitoring */}
        {activeTab === 'monitoring' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">📊 Monitoring Système</h2>
                <p className="text-gray-600 text-sm mt-1">État en temps réel des services</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{service.service}</h3>
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'operational' ? 'bg-green-500' :
                          service.status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                        <p className="text-xs text-gray-500">Dernière vérif: {service.lastCheck}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                      Actualiser Statut
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">
                      Historique
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Logs */}
        {activeTab === 'logs' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">📋 Logs Système</h2>
                    <p className="text-gray-600 text-sm mt-1">Journal des événements récents</p>
                  </div>
                  <div className="flex space-x-2">
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                      <option>Tous les niveaux</option>
                      <option>ERROR</option>
                      <option>WARN</option>
                      <option>INFO</option>
                    </select>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                      Actualiser
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {recentLogs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        log.level === 'ERROR' ? 'bg-red-500' :
                        log.level === 'WARN' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{log.time}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            log.level === 'ERROR' ? 'bg-red-100 text-red-700' :
                            log.level === 'WARN' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {log.level}
                          </span>
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                            {log.module}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 mt-1">{log.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API & Backup Settings */}
        {(activeTab === 'api' || activeTab === 'backup') && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">
                {activeTab === 'api' ? '🔌' : '💾'}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {activeTab === 'api' ? 'Configuration API' : 'Paramètres de Sauvegarde'}
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                {activeTab === 'api' 
                  ? 'Configuration des limites API, timeouts, et paramètres d\'intégration en développement.'
                  : 'Configuration des sauvegardes automatiques, rétention et stockage en développement.'
                }
              </p>
              <div className="mt-8">
                <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                  Interface à venir
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SettingsPage;