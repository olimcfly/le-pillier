/**
 * Modèles Product pour Le Pillier
 * Types et interfaces pour les produits, services et offres
 */

// Types de base
export type ProductType = 'subscription' | 'service' | 'tool' | 'addon' | 'training' | 'consultation' | 'software' | 'template';
export type ProductStatus = 'active' | 'inactive' | 'draft' | 'deprecated' | 'coming_soon' | 'beta';
export type PricingModel = 'free' | 'one_time' | 'subscription' | 'usage_based' | 'tiered' | 'freemium' | 'custom';
export type BillingCycle = 'monthly' | 'quarterly' | 'semi_annual' | 'annual' | 'one_time' | 'usage';
export type Currency = 'EUR' | 'USD' | 'GBP' | 'CAD' | 'CHF';
export type AccessLevel = 'basic' | 'standard' | 'premium' | 'enterprise' | 'custom';
export type TargetAudience = 'individual_agent' | 'small_agency' | 'large_agency' | 'network' | 'enterprise' | 'all';

// Caractéristiques du produit
export interface ProductFeature {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'advanced' | 'premium' | 'addon';
  icon?: string;
  
  details: {
    benefits: string[];
    limitations?: string[];
    useCases: string[];
    technicalSpecs?: Record<string, any>;
  };
  
  availability: {
    plans: string[]; // IDs des plans qui incluent cette feature
    addOnPrice?: number;
    requiresSetup: boolean;
    beta: boolean;
  };
  
  usage: {
    quotas?: {
      monthly?: number;
      daily?: number;
      concurrent?: number;
    };
    
    restrictions?: {
      geographic?: string[];
      userTypes?: string[];
      conditions?: string[];
    };
  };
  
  dependencies?: string[]; // Features requises
  conflicts?: string[]; // Features incompatibles
  
  metadata: {
    priority: number;
    tags: string[];
    releaseDate: number;
    deprecationDate?: number;
  };
}

// Tarification
export interface PricingTier {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  
  pricing: {
    model: PricingModel;
    basePrice: number;
    currency: Currency;
    billingCycle: BillingCycle;
    
    // Pour les modèles complexes
    tiers?: Array<{
      from: number;
      to?: number;
      price: number;
      unit: string;
    }>;
    
    // Réductions
    discounts?: Array<{
      type: 'percentage' | 'fixed' | 'bulk';
      value: number;
      conditions: {
        minQuantity?: number;
        billingCycle?: BillingCycle[];
        promoCode?: string;
        validUntil?: number;
      };
    }>;
    
    // Taxes et frais
    taxes?: {
      included: boolean;
      rate?: number;
      region?: string;
    };
    
    setupFee?: number;
    cancellationFee?: number;
  };
  
  limits: {
    users?: number;
    mandats?: number;
    storage?: number; // GB
    apiCalls?: number;
    emailSends?: number;
    customFields?: number;
    integrations?: number;
  };
  
  features: {
    included: string[]; // Feature IDs incluses
    restricted: string[]; // Features avec limitations
    excluded: string[]; // Features non disponibles
  };
  
  trial?: {
    available: boolean;
    duration: number; // jours
    features: string[]; // Features disponibles en trial
    creditCard: boolean;
    autoUpgrade: boolean;
  };
  
  migration: {
    upgradeFrom: string[]; // Tiers depuis lesquels on peut upgrader
    downgradeTo: string[]; // Tiers vers lesquels on peut downgrader
    migrationFee?: number;
    dataRetention: number; // jours
  };
}

// Add-ons et extensions
export interface ProductAddon {
  id: string;
  name: string;
  description: string;
  category: 'integration' | 'automation' | 'analytics' | 'storage' | 'support' | 'custom';
  
  pricing: {
    model: 'one_time' | 'monthly' | 'usage_based';
    price: number;
    currency: Currency;
    unit?: string; // pour usage-based
  };
  
  compatibility: {
    plans: string[]; // Plans compatibles
    minTier?: string;
    requiredFeatures?: string[];
  };
  
  configuration: {
    autoActivate: boolean;
    setupRequired: boolean;
    customization: 'none' | 'basic' | 'advanced';
    setupTime: number; // heures estimées
  };
  
  usage: {
    quotas?: Record<string, number>;
    restrictions?: Record<string, any>;
  };
  
  status: ProductStatus;
  metadata: {
    popular: boolean;
    recommended: boolean;
    tags: string[];
  };
}

// Bundle de produits
export interface ProductBundle {
  id: string;
  name: string;
  description: string;
  type: 'starter_pack' | 'professional_suite' | 'enterprise_solution' | 'specialized_toolkit';
  
  products: Array<{
    productId: string;
    tierID?: string;
    quantity: number;
    customization?: Record<string, any>;
  }>;
  
  pricing: {
    totalPrice: number;
    bundlePrice: number;
    savings: number;
    savingsPercentage: number;
    currency: Currency;
    billingCycle: BillingCycle;
  };
  
  conditions: {
    minCommitment?: number; // mois
    autoRenewal: boolean;
    earlyTerminationFee?: number;
  };
  
  target: {
    audience: TargetAudience;
    useCase: string;
    companySize?: string;
    industry?: string[];
  };
  
  availability: {
    regions: string[];
    startDate: number;
    endDate?: number;
    limitedTime: boolean;
  };
}

// Modèle principal Product
export interface Product {
  // Identifiants
  id: string;
  sku: string;
  name: string;
  displayName: string;
  shortDescription: string;
  longDescription: string;
  
  // Classification
  type: ProductType;
  category: string;
  subcategory?: string;
  status: ProductStatus;
  
  // Ciblage
  target: {
    audience: TargetAudience;
    experience: 'beginner' | 'intermediate' | 'expert' | 'all';
    company_size: 'individual' | 'small' | 'medium' | 'large' | 'enterprise' | 'all';
    use_cases: string[];
  };
  
  // Caractéristiques
  features: string[]; // Feature IDs
  benefits: string[];
  specifications: Record<string, any>;
  
  // Tarification
  pricing: {
    model: PricingModel;
    tiers: PricingTier[];
    addons: string[]; // Addon IDs disponibles
    bundles: string[]; // Bundle IDs incluant ce produit
  };
  
  // Disponibilité
  availability: {
    regions: string[];
    channels: ('web' | 'api' | 'partner' | 'sales')[];
    restrictions?: {
      geographic?: string[];
      regulatory?: string[];
      technical?: string[];
    };
  };
  
  // Contenu marketing
  marketing: {
    tagline: string;
    valueProposition: string;
    differentiators: string[];
    competitorComparison?: Array<{
      competitor: string;
      advantages: string[];
      disadvantages?: string[];
    }>;
    
    media: {
      logo?: string;
      images: string[];
      videos?: string[];
      demos?: string[];
      case_studies?: string[];
    };
    
    seo: {
      title: string;
      description: string;
      keywords: string[];
      slug: string;
    };
  };
  
  // Support et documentation
  support: {
    documentation: {
      getting_started: string;
      user_guide: string;
      api_reference?: string;
      video_tutorials?: string[];
    };
    
    channels: ('email' | 'chat' | 'phone' | 'forum' | 'dedicated')[];
    sla?: {
      response_time: number; // heures
      resolution_time: number; // heures
      availability: number; // pourcentage
    };
    
    training: {
      onboarding: boolean;
      certification?: string;
      workshops?: string[];
    };
  };
  
  // Intégrations
  integrations: {
    native: Array<{
      service: string;
      type: 'crm' | 'email' | 'payment' | 'analytics' | 'storage' | 'communication';
      setupComplexity: 'easy' | 'medium' | 'complex';
    }>;
    
    api: {
      available: boolean;
      version: string;
      rateLimit?: number;
      documentation?: string;
    };
    
    webhooks: {
      supported: boolean;
      events: string[];
    };
    
    zapier: boolean;
    custom: boolean;
  };
  
  // Métriques et analytics
  analytics: {
    adoptionRate: number; // 0-1
    churnRate: number; // 0-1
    averageUsage: Record<string, number>;
    satisfactionScore: number; // 1-5
    nps: number; // -100 to 100
    
    usage: {
      dailyActiveUsers?: number;
      monthlyActiveUsers?: number;
      averageSessionDuration?: number;
      topFeatures: Array<{
        feature: string;
        usage: number;
      }>;
    };
    
    performance: {
      uptime: number; // pourcentage
      responseTime: number; // ms
      errorRate: number; // pourcentage
    };
  };
  
  // Lifecycle
  lifecycle: {
    stage: 'development' | 'beta' | 'ga' | 'mature' | 'declining' | 'eol';
    version: string;
    releaseDate: number;
    lastUpdate: number;
    plannedUpdates?: Array<{
      version: string;
      features: string[];
      plannedDate: number;
    }>;
    
    deprecation?: {
      announced: number;
      effective: number;
      replacement?: string;
      migrationPath: string;
    };
  };
  
  // Conformité et sécurité
  compliance: {
    gdpr: boolean;
    ccpa: boolean;
    hipaa?: boolean;
    soc2?: boolean;
    iso27001?: boolean;
    certifications: string[];
  };
  
  security: {
    encryption: boolean;
    sso: boolean;
    mfa: boolean;
    audit_logs: boolean;
    backup: boolean;
    disaster_recovery: boolean;
  };
  
  // Métadonnées
  metadata: {
    tags: string[];
    internal_notes?: string;
    competitive_intelligence?: Record<string, any>;
    roadmap_items?: string[];
  };
  
  // Relations
  relationships: {
    dependencies: string[]; // Produits requis
    recommendations: string[]; // Produits recommandés
    alternatives: string[]; // Alternatives internes
    competitors: string[]; // Concurrents externes
  };
  
  // Timestamps
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  lastModifiedBy: string;
}

// Configuration de produit pour un client
export interface ProductConfiguration {
  id: string;
  productId: string;
  tierId: string;
  customerId: string;
  
  settings: {
    features: Record<string, boolean>; // Feature activations
    limits: Record<string, number>; // Limites personnalisées
    customization: Record<string, any>; // Configurations spécifiques
  };
  
  addons: Array<{
    addonId: string;
    quantity: number;
    configuration: Record<string, any>;
  }>;
  
  branding?: {
    logo?: string;
    colors?: Record<string, string>;
    domain?: string;
    customDomain?: string;
  };
  
  integrations: Array<{
    service: string;
    enabled: boolean;
    configuration: Record<string, any>;
    lastSync?: number;
  }>;
  
  usage: {
    current: Record<string, number>;
    historical: Array<{
      period: string;
      metrics: Record<string, number>;
    }>;
    alerts: Array<{
      metric: string;
      threshold: number;
      action: 'warn' | 'block' | 'upgrade';
    }>;
  };
  
  billing: {
    startDate: number;
    nextBillingDate: number;
    billingCycle: BillingCycle;
    prorations: Array<{
      description: string;
      amount: number;
      date: number;
    }>;
  };
  
  support: {
    tier: 'standard' | 'priority' | 'premium' | 'enterprise';
    contactMethods: string[];
    dedicatedManager?: {
      name: string;
      email: string;
      phone?: string;
    };
  };
  
  status: 'active' | 'trial' | 'suspended' | 'cancelled' | 'expired';
  
  createdAt: number;
  updatedAt: number;
  lastUsed?: number;
}

// Catalogue de produits
export interface ProductCatalog {
  id: string;
  name: string;
  description?: string;
  type: 'public' | 'private' | 'partner' | 'region_specific';
  
  products: Array<{
    productId: string;
    position: number;
    featured: boolean;
    customPricing?: PricingTier[];
    availability?: {
      startDate?: number;
      endDate?: number;
      regions?: string[];
    };
  }>;
  
  categories: Array<{
    id: string;
    name: string;
    description?: string;
    products: string[];
    order: number;
  }>;
  
  targeting: {
    audience: TargetAudience[];
    regions: string[];
    channels: string[];
    segments?: string[];
  };
  
  customization: {
    branding?: {
      logo: string;
      colors: Record<string, string>;
      styling: Record<string, string>;
    };
    
    content?: {
      welcome_message?: string;
      terms_conditions?: string;
      privacy_policy?: string;
    };
  };
  
  analytics: {
    views: number;
    conversions: number;
    conversionRate: number;
    topProducts: Array<{
      productId: string;
      views: number;
      conversions: number;
    }>;
  };
  
  status: 'active' | 'draft' | 'archived';
  
  createdAt: number;
  updatedAt: number;
  publishedAt?: number;
}

// Comparaison de produits
export interface ProductComparison {
  id: string;
  name: string;
  products: string[]; // Product IDs à comparer
  
  dimensions: Array<{
    category: string;
    features: Array<{
      name: string;
      description?: string;
      weight: number; // Importance 1-10
    }>;
  }>;
  
  matrix: Array<{
    productId: string;
    scores: Record<string, {
      value: boolean | number | string;
      score: number; // 0-10
      notes?: string;
    }>;
  }>;
  
  recommendations: Array<{
    audience: string;
    useCase: string;
    recommendedProductId: string;
    reasoning: string;
  }>;
  
  metadata: {
    lastUpdated: number;
    methodology: string;
    assumptions: string[];
  };
}

// Usage et métriques produit
export interface ProductUsage {
  productId: string;
  customerId: string;
  period: {
    start: number;
    end: number;
    type: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  };
  
  metrics: {
    // Utilisation générale
    sessions: number;
    totalTime: number; // minutes
    averageSessionTime: number;
    
    // Features
    featureUsage: Record<string, {
      accessed: number;
      timeSpent: number;
      actions: number;
    }>;
    
    // Quotas
    quotaUsage: Record<string, {
      used: number;
      limit: number;
      percentage: number;
    }>;
    
    // Performance
    errors: number;
    slowRequests: number;
    satisfaction?: number; // 1-5 si disponible
  };
  
  patterns: {
    peakUsageHours: number[];
    mostUsedFeatures: string[];
    unusedFeatures: string[];
    growthTrend: 'increasing' | 'stable' | 'decreasing';
  };
  
  alerts: Array<{
    type: 'quota_exceeded' | 'unusual_activity' | 'feature_underused' | 'performance_issue';
    severity: 'info' | 'warning' | 'critical';
    message: string;
    timestamp: number;
    resolved: boolean;
  }>;
}

// Interface du service Product
export interface ProductServiceInterface {
  // CRUD Produits
  createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
  getProduct(id: string): Promise<Product | null>;
  updateProduct(id: string, updates: Partial<Product>): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
  
  // Catalogue
  listProducts(filters?: {
    type?: ProductType[];
    status?: ProductStatus[];
    audience?: TargetAudience[];
    priceRange?: { min: number; max: number };
    features?: string[];
    search?: string;
  }): Promise<Product[]>;
  
  searchProducts(query: string, filters?: Record<string, any>): Promise<Product[]>;
  getFeaturedProducts(limit?: number): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  
  // Tarification
  calculatePrice(productId: string, tierId: string, options?: {
    quantity?: number;
    billingCycle?: BillingCycle;
    addons?: Array<{ id: string; quantity: number }>;
    promoCode?: string;
  }): Promise<{
    basePrice: number;
    discounts: number;
    addons: number;
    taxes: number;
    total: number;
    currency: Currency;
  }>;
  
  validatePromoCode(code: string, productId: string): Promise<{
    valid: boolean;
    discount: number;
    type: 'percentage' | 'fixed';
    expiresAt?: number;
  }>;
  
  // Configuration
  createConfiguration(config: Omit<ProductConfiguration, 'id' | 'createdAt' | 'updatedAt'>): Promise<ProductConfiguration>;
  updateConfiguration(id: string, updates: Partial<ProductConfiguration>): Promise<ProductConfiguration>;
  getCustomerConfiguration(customerId: string, productId: string): Promise<ProductConfiguration | null>;
  
  // Features
  getProductFeatures(productId: string, tierId?: string): Promise<ProductFeature[]>;
  checkFeatureAccess(customerId: string, productId: string, featureId: string): Promise<boolean>;
  updateFeatureUsage(customerId: string, productId: string, featureId: string, usage: number): Promise<void>;
  
  // Analytics
  getProductAnalytics(productId: string, period: { start: number; end: number }): Promise<{
    adoption: number;
    churn: number;
    revenue: number;
    usage: Record<string, number>;
    satisfaction: number;
  }>;
  
  getUsageMetrics(customerId: string, productId: string, period?: { start: number; end: number }): Promise<ProductUsage>;
  trackUsage(customerId: string, productId: string, event: string, metadata?: Record<string, any>): Promise<void>;
  
  // Recommandations
  getRecommendations(customerId: string, context?: {
    currentProducts?: string[];
    budget?: number;
    useCase?: string;
  }): Promise<Array<{
    productId: string;
    score: number;
    reasoning: string;
  }>>;
  
  compareProducts(productIds: string[], dimensions?: string[]): Promise<ProductComparison>;
  
  // Bundles et add-ons
  createBundle(bundle: Omit<ProductBundle, 'id'>): Promise<ProductBundle>;
  getAvailableAddons(productId: string, tierId: string): Promise<ProductAddon[]>;
  calculateBundlePrice(bundleId: string, customizations?: Record<string, any>): Promise<number>;
  
  // Lifecycle
  upgradeProduct(customerId: string, productId: string, newTierId: string): Promise<ProductConfiguration>;
  downgradeProduct(customerId: string, productId: string, newTierId: string): Promise<ProductConfiguration>;
  cancelProduct(customerId: string, productId: string, reason?: string): Promise<void>;
  
  // Utilitaires
  getProductHealth(): Promise<Array<{
    productId: string;
    health: 'healthy' | 'warning' | 'critical';
    issues: string[];
    recommendations: string[];
  }>>;
  
  generateProductReport(productId: string, type: 'performance' | 'usage' | 'financial'): Promise<any>;
  exportCatalog(catalogId: string, format: 'json' | 'csv' | 'pdf'): Promise<string>;
}

// Export des types principaux
export type {
  Product,
  ProductType,
  ProductStatus,
  PricingModel,
  BillingCycle,
  ProductFeature,
  PricingTier,
  ProductAddon,
  ProductBundle,
  ProductConfiguration,
  ProductCatalog,
  ProductComparison,
  ProductUsage,
  ProductServiceInterface,
  Currency,
  AccessLevel,
  TargetAudience
};