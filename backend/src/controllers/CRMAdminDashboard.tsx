import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Filter,
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Target,
  Globe,
  Database
} from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  purchaseDate: string;
  product: string;
  amount: number;
  status: 'active' | 'expired' | 'cancelled';
  subscriptionType: 'monthly' | 'annual' | 'one-time';
  nextPayment?: string;
  onboardingCompleted: boolean;
  lastActivity: string;
  source: string;
}

interface Product {
  id: string;
  name: string;
  type: 'club' | 'module' | 'premium';
  price: number;
  sales: number;
  revenue: number;
}

const CRMAdminDashboard = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterProduct, setFilterProduct] = useState<string>('all');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  // Données de démonstration
  useEffect(() => {
    // Simulation de données clients
    const mockCustomers: Customer[] = [
      {
        id: '1',
        name: 'Marie Dubois',
        email: 'marie.dubois@email.com',
        phone: '06 12 34 56 78',
        purchaseDate: '2024-06-10',
        product: 'Club IMMO Annuel',
        amount: 997,
        status: 'active',
        subscriptionType: 'annual',
        nextPayment: '2025-06-10',
        onboardingCompleted: true,
        lastActivity: '2024-06-11',
        source: 'Site web'
      },
      {
        id: '2',
        name: 'Pierre Martin',
        email: 'pierre.martin@email.com',
        phone: '06 98 76 54 32',
        purchaseDate: '2024-06-11',
        product: 'Avatar & Ciblage Immobilier',
        amount: 297,
        status: 'active',
        subscriptionType: 'one-time',
        onboardingCompleted: false,
        lastActivity: '2024-06-11',
        source: 'Configurateur'
      },
      {
        id: '3',
        name: 'Sophie Leroy',
        email: 'sophie.leroy@email.com',
        purchaseDate: '2024-06-09',
        product: 'Club IMMO Mensuel',
        amount: 97,
        status: 'active',
        subscriptionType: 'monthly',
        nextPayment: '2024-07-09',
        onboardingCompleted: true,
        lastActivity: '2024-06-10',
        source: 'Site web'
      },
      {
        id: '4',
        name: 'Jean Dupont',
        email: 'jean.dupont@email.com',
        phone: '06 11 22 33 44',
        purchaseDate: '2024-06-08',
        product: 'Blog Immobilier Premium',
        amount: 1497,
        status: 'active',
        subscriptionType: 'one-time',
        onboardingCompleted: true,
        lastActivity: '2024-06-08',
        source: 'Comparateur'
      }
    ];

    const mockProducts: Product[] = [
      { id: '1', name: 'Club IMMO Annuel', type: 'club', price: 997, sales: 25, revenue: 24925 },
      { id: '2', name: 'Club IMMO Mensuel', type: 'club', price: 97, sales: 18, revenue: 1746 },
      { id: '3', name: 'Avatar & Ciblage', type: 'module', price: 297, sales: 12, revenue: 3564 },
      { id: '4', name: 'Blog Premium', type: 'premium', price: 1497, sales: 8, revenue: 11976 },
      { id: '5', name: 'Machine à Leads', type: 'module', price: 297, sales: 15, revenue: 4455 }
    ];

    setCustomers(mockCustomers);
    setProducts(mockProducts);
  }, []);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    const matchesProduct = filterProduct === 'all' || customer.product.includes(filterProduct);
    
    return matchesSearch && matchesStatus && matchesProduct;
  });

  const totalRevenue = products.reduce((sum, product) => sum + product.revenue, 0);
  const totalCustomers = customers.length;
  const activeSubscriptions = customers.filter(c => c.status === 'active' && c.subscriptionType !== 'one-time').length;
  const pendingOnboarding = customers.filter(c => !c.onboardingCompleted).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'expired': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getProductTypeColor = (type: string) => {
    switch (type) {
      case 'club': return 'bg-blue-100 text-blue-700';
      case 'module': return 'bg-purple-100 text-purple-700';
      case 'premium': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRM Admin Dashboard</h1>
              <p className="text-gray-600">Gestion des ventes et clients</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Nouveau Client
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Chiffre d'Affaires</p>
                <p className="text-2xl font-bold text-gray-900">{totalRevenue.toLocaleString()}€</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600">+12% ce mois</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-blue-600">+5 cette semaine</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Abonnements Actifs</p>
                <p className="text-2xl font-bold text-gray-900">{activeSubscriptions}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <CheckCircle className="h-4 w-4 text-purple-500" />
              <span className="text-sm text-purple-600">Taux rétention 95%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Onboarding Pendants</p>
                <p className="text-2xl font-bold text-gray-900">{pendingOnboarding}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-orange-600">Action requise</span>
            </div>
          </div>
        </div>

        {/* Products Performance */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Performance des Produits</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getProductTypeColor(product.type)}`}>
                      {product.type}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.price}€</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{product.sales} ventes</p>
                    <p className="text-sm text-gray-600">{product.revenue.toLocaleString()}€</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Clients Récents</h3>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">Tous statuts</option>
                  <option value="active">Actif</option>
                  <option value="expired">Expiré</option>
                  <option value="cancelled">Annulé</option>
                </select>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={filterProduct}
                  onChange={(e) => setFilterProduct(e.target.value)}
                >
                  <option value="all">Tous produits</option>
                  <option value="Club">Club IMMO</option>
                  <option value="Avatar">Avatar & Ciblage</option>
                  <option value="Blog">Blog Premium</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Onboarding</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="font-semibold text-gray-900">{customer.name}</p>
                        <p className="text-sm text-gray-600">{customer.email}</p>
                        {customer.phone && (
                          <p className="text-sm text-gray-600">{customer.phone}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="font-medium text-gray-900">{customer.product}</p>
                        <p className="text-sm text-gray-600">{customer.subscriptionType}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="font-semibold text-gray-900">{customer.amount}€</p>
                      {customer.nextPayment && (
                        <p className="text-sm text-gray-600">Prochain: {customer.nextPayment}</p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {customer.onboardingCompleted ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          Terminé
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-orange-600">
                          <Clock className="h-4 w-4" />
                          En attente
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => {
                            setSelectedCustomer(customer);
                            setShowCustomerModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Customer Detail Modal */}
      {showCustomerModal && selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-90vh overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Détails Client</h3>
                <button 
                  onClick={() => setShowCustomerModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Informations Personnelles</h4>
                  <div className="space-y-2">
                    <p><strong>Nom:</strong> {selectedCustomer.name}</p>
                    <p><strong>Email:</strong> {selectedCustomer.email}</p>
                    {selectedCustomer.phone && <p><strong>Téléphone:</strong> {selectedCustomer.phone}</p>}
                    <p><strong>Source:</strong> {selectedCustomer.source}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Commande</h4>
                  <div className="space-y-2">
                    <p><strong>Produit:</strong> {selectedCustomer.product}</p>
                    <p><strong>Montant:</strong> {selectedCustomer.amount}€</p>
                    <p><strong>Date d'achat:</strong> {selectedCustomer.purchaseDate}</p>
                    <p><strong>Type:</strong> {selectedCustomer.subscriptionType}</p>
                    {selectedCustomer.nextPayment && (
                      <p><strong>Prochain paiement:</strong> {selectedCustomer.nextPayment}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Statut</h4>
                  <div className="space-y-2">
                    <p><strong>Statut:</strong> 
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCustomer.status)}`}>
                        {selectedCustomer.status}
                      </span>
                    </p>
                    <p><strong>Onboarding:</strong> {selectedCustomer.onboardingCompleted ? 'Terminé' : 'En attente'}</p>
                    <p><strong>Dernière activité:</strong> {selectedCustomer.lastActivity}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actions</h4>
                  <div className="space-y-2">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold">
                      Envoyer Email
                    </button>
                    <button className="w-full border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg font-semibold">
                      Planifier Appel
                    </button>
                    <button className="w-full border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg font-semibold">
                      Voir Historique
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CRMAdminDashboard;