/**
 * Modèles Customer pour Le Pillier
 * Types et interfaces pour la gestion des clients et prospects
 */

// Types de base
export type CustomerType = 'prospect' | 'lead' | 'client' | 'former_client';
export type CustomerStatus = 'active' | 'inactive' | 'suspended' | 'archived';
export type ContactMethod = 'email' | 'phone' | 'sms' | 'whatsapp' | 'in_person' | 'video_call';
export type PropertyInterest = 'buying' | 'selling' | 'renting' | 'investing';
export type Budget = 'under_100k' | '100k_200k' | '200k_300k' | '300k_500k' | '500k_750k' | '750k_1m' | 'over_1m';
export type Urgency = 'immediate' | 'within_month' | 'within_quarter' | 'within_year' | 'no_rush';
export type LeadSource = 'website' | 'referral' | 'advertising' | 'social_media' | 'cold_calling' | 'event' | 'partner' | 'other';

// Informations de contact
export interface ContactInfo {
  email: string;
  phone?: string;
  mobile?: string;
  whatsapp?: string;
  preferredMethod: ContactMethod;
  socialMedia?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  availability?: {
    timezone: string;
    preferredHours: string; // "9:00-18:00"
    preferredDays: string[]; // ["monday", "tuesday", ...]
    notes?: string;
  };
}

// Adresse
export interface Address {
  street: string;
  city: string;
  postalCode: string;
  department: string;
  region: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  type: 'home' | 'work' | 'other';
  isPrimary: boolean;
}

// Préférences immobilières
export interface PropertyPreferences {
  type: 'apartment' | 'house' | 'villa' | 'studio' | 'loft' | 'duplex' | 'commercial' | 'land';
  purpose: PropertyInterest;
  budget: {
    min: number;
    max: number;
    currency: string;
    flexible: boolean;
  };
  location: {
    preferredAreas: string[];
    excludedAreas?: string[];
    maxDistanceFromWork?: number; // km
    transportRequirements?: string[];
    schoolDistricts?: string[];
  };
  features: {
    minRooms?: number;
    maxRooms?: number;
    minBedrooms?: number;
    minBathrooms?: number;
    minSurface?: number; // m²
    maxSurface?: number; // m²
    parking?: boolean;
    garden?: boolean;
    balcony?: boolean;
    elevator?: boolean;
    furnished?: boolean;
    petFriendly?: boolean;
    accessibility?: boolean;
  };
  mustHave: string[]; // Critères obligatoires
  niceToHave: string[]; // Critères souhaités
  dealBreakers: string[]; // Critères rédhibitoires
  timeline: Urgency;
  financing: {
    cashBuyer: boolean;
    mortgagePreApproved: boolean;
    downPaymentAmount?: number;
    monthlyBudget?: number;
    bankName?: string;
    brokerContact?: string;
  };
}

// Informations financières
export interface FinancialProfile {
  annualIncome?: number;
  employmentStatus: 'employed' | 'self_employed' | 'unemployed' | 'retired' | 'student';
  employer?: string;
  jobTitle?: string;
  workExperience?: number; // années
  creditScore?: number;
  existingLoans?: Array<{
    type: string;
    amount: number;
    monthlyPayment: number;
    remainingMonths: number;
  }>;
  assets?: Array<{
    type: 'savings' | 'investment' | 'property' | 'other';
    value: number;
    description?: string;
  }>;
  liabilities?: Array<{
    type: string;
    amount: number;
    description?: string;
  }>;
  bankDetails?: {
    bankName: string;
    accountType: string;
    relationshipYears?: number;
  };
}

// Famille et situation personnelle
export interface PersonalProfile {
  familyStatus: 'single' | 'couple' | 'married' | 'divorced' | 'widowed';
  children?: Array<{
    age: number;
    schoolAge: boolean;
  }>;
  pets?: Array<{
    type: string;
    breed?: string;
    size?: 'small' | 'medium' | 'large';
  }>;
  lifestyle: {
    workFromHome?: boolean;
    travelFrequency?: 'never' | 'rarely' | 'monthly' | 'weekly';
    hobbies?: string[];
    sportActivities?: string[];
    culturalInterests?: string[];
  };
  specialNeeds?: {
    accessibility: boolean;
    medicalRequirements?: string[];
    ageingInPlace?: boolean;
  };
}

// Activité et interactions
export interface CustomerActivity {
  id: string;
  customerId: string;
  agentId: string;
  type: 'call' | 'email' | 'meeting' | 'viewing' | 'offer' | 'contract' | 'note' | 'task';
  subject: string;
  description: string;
  outcome?: 'positive' | 'neutral' | 'negative';
  followUpRequired: boolean;
  followUpDate?: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'scheduled' | 'completed' | 'cancelled' | 'no_show';
  duration?: number; // minutes
  location?: string;
  attendees?: string[];
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
    size: number;
  }>;
  metadata: Record<string, any>;
  createdAt: number;
  updatedAt: number;
  scheduledFor?: number;
  completedAt?: number;
}

// Évaluation et scoring
export interface CustomerScore {
  overall: number; // 0-100
  components: {
    interest: number; // Niveau d'intérêt
    budget: number; // Capacité financière
    timeline: number; // Urgence
    engagement: number; // Niveau d'engagement
    fit: number; // Adéquation avec l'offre
  };
  factors: {
    positive: string[];
    negative: string[];
    neutral: string[];
  };
  lastCalculated: number;
  trend: 'improving' | 'stable' | 'declining';
  predictedConversion: {
    probability: number; // 0-1
    timeframe: number; // jours estimés
    confidence: number; // 0-1
  };
}

// Préférences de communication
export interface CommunicationPreferences {
  language: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'as_needed';
  channels: {
    email: boolean;
    phone: boolean;
    sms: boolean;
    whatsapp: boolean;
    postal: boolean;
  };
  contentTypes: {
    newsletters: boolean;
    propertyAlerts: boolean;
    marketUpdates: boolean;
    eventInvitations: boolean;
    promotionalOffers: boolean;
  };
  timing: {
    timezone: string;
    preferredHours: string;
    noContactDays: string[];
  };
  gdprConsent: {
    marketing: boolean;
    analytics: boolean;
    thirdParty: boolean;
    consentDate: number;
    withdrawalDate?: number;
  };
}

// Modèle principal Customer
export interface Customer {
  // Identifiants
  id: string;
  externalIds?: Record<string, string>; // IDs systèmes externes
  
  // Informations de base
  type: CustomerType;
  status: CustomerStatus;
  firstName: string;
  lastName: string;
  fullName: string; // Généré automatiquement
  title?: string; // M., Mme, Dr, etc.
  dateOfBirth?: number;
  nationality?: string;
  
  // Contact
  contact: ContactInfo;
  addresses: Address[];
  
  // Profils
  propertyPreferences?: PropertyPreferences;
  financialProfile?: FinancialProfile;
  personalProfile?: PersonalProfile;
  
  // Relation commerciale
  agentId: string; // Agent responsable
  leadSource: LeadSource;
  referredBy?: {
    customerId?: string;
    agentId?: string;
    source?: string;
    incentive?: string;
  };
  
  // Scoring et qualification
  score: CustomerScore;
  tags: string[]; // Tags personnalisés
  segments: string[]; // Segments marketing
  
  // Communication
  communicationPreferences: CommunicationPreferences;
  lastContactDate?: number;
  nextFollowUpDate?: number;
  
  // Historique et activité
  firstContactDate: number;
  lastActivityDate?: number;
  totalInteractions: number;
  viewedProperties: string[]; // IDs des propriétés vues
  favoritedProperties: string[]; // IDs des propriétés favorites
  
  // Business
  estimatedValue: number; // Valeur estimée du client
  lifetimeValue?: number; // LTV calculée
  conversionProbability: number; // 0-1
  churnRisk: number; // 0-1
  
  // Métadonnées
  metadata: Record<string, any>;
  customFields: Record<string, any>;
  
  // Timestamps
  createdAt: number;
  updatedAt: number;
  deletedAt?: number;
  
  // Relations
  relatedCustomers?: string[]; // Famille, associés, etc.
  currentProperties?: string[]; // Propriétés actuellement possédées
}

// Contrat/Mandat client
export interface CustomerContract {
  id: string;
  customerId: string;
  agentId: string;
  type: 'exclusive' | 'semi_exclusive' | 'open' | 'service_only';
  purpose: PropertyInterest;
  property?: {
    id?: string;
    address: string;
    type: string;
    price: number;
    description: string;
  };
  terms: {
    duration: number; // mois
    commission: {
      percentage?: number;
      fixedAmount?: number;
      structure: 'percentage' | 'fixed' | 'hybrid';
    };
    exclusivityClause: boolean;
    terminationClause: string;
    renewalClause?: string;
  };
  documents: Array<{
    type: 'contract' | 'amendment' | 'termination' | 'renewal';
    name: string;
    url: string;
    signedDate?: number;
    expirationDate?: number;
  }>;
  status: 'draft' | 'pending_signature' | 'active' | 'completed' | 'terminated' | 'expired';
  signatures: Array<{
    party: 'customer' | 'agent' | 'witness';
    name: string;
    signedAt: number;
    ipAddress?: string;
    method: 'electronic' | 'physical';
  }>;
  createdAt: number;
  startDate: number;
  endDate: number;
  terminatedAt?: number;
  terminationReason?: string;
}

// Opportunité commerciale
export interface Opportunity {
  id: string;
  customerId: string;
  agentId: string;
  name: string;
  description: string;
  type: PropertyInterest;
  stage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closing' | 'won' | 'lost';
  value: number; // Valeur estimée de l'opportunité
  probability: number; // 0-100
  expectedCloseDate: number;
  actualCloseDate?: number;
  
  property?: {
    id?: string;
    address: string;
    price: number;
    type: string;
  };
  
  competitors?: Array<{
    name: string;
    strengths: string[];
    weaknesses: string[];
  }>;
  
  proposal?: {
    price: number;
    terms: string;
    validUntil: number;
    documents: string[];
  };
  
  activities: string[]; // IDs des activités liées
  
  won: {
    reason?: string;
    actualValue?: number;
    closedBy?: string;
  };
  
  lost: {
    reason?: string;
    competitor?: string;
    notes?: string;
  };
  
  metadata: Record<string, any>;
  createdAt: number;
  updatedAt: number;
}

// Segment client
export interface CustomerSegment {
  id: string;
  name: string;
  description: string;
  criteria: {
    demographic?: {
      ageRange?: [number, number];
      familyStatus?: string[];
      income?: [number, number];
      location?: string[];
    };
    behavioral?: {
      propertyInterest?: PropertyInterest[];
      budgetRange?: Budget[];
      urgency?: Urgency[];
      engagementLevel?: ('high' | 'medium' | 'low')[];
    };
    transactional?: {
      totalSpent?: [number, number];
      lastTransactionDays?: number;
      frequency?: string;
    };
    custom?: Record<string, any>;
  };
  customerCount: number;
  lastUpdated: number;
  isActive: boolean;
  createdBy: string;
  autoUpdate: boolean; // Mise à jour automatique des critères
}

// Pipeline de ventes
export interface SalesPipeline {
  id: string;
  name: string;
  description?: string;
  stages: Array<{
    id: string;
    name: string;
    description?: string;
    order: number;
    probability: number; // Probabilité moyenne de conversion à ce stage
    averageDuration: number; // Durée moyenne en jours
    actions: string[]; // Actions typiques à ce stage
    requirements?: string[]; // Prérequis pour avancer
  }>;
  isDefault: boolean;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
}

// Campagne marketing
export interface MarketingCampaign {
  id: string;
  name: string;
  description: string;
  type: 'email' | 'sms' | 'direct_mail' | 'social_media' | 'event' | 'webinar';
  status: 'draft' | 'scheduled' | 'running' | 'paused' | 'completed' | 'cancelled';
  
  targeting: {
    segments: string[];
    customCriteria?: Record<string, any>;
    excludeSegments?: string[];
    maxRecipients?: number;
  };
  
  content: {
    subject?: string;
    template: string;
    personalization: Record<string, string>;
    attachments?: string[];
  };
  
  schedule: {
    startDate: number;
    endDate?: number;
    timezone: string;
    frequency?: 'once' | 'daily' | 'weekly' | 'monthly';
  };
  
  budget?: {
    allocated: number;
    spent: number;
    currency: string;
  };
  
  metrics: {
    sent: number;
    delivered: number;
    opened: number;
    clicked: number;
    responded: number;
    converted: number;
    unsubscribed: number;
    bounced: number;
  };
  
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

// Rapport client
export interface CustomerReport {
  id: string;
  customerId: string;
  agentId: string;
  reportType: 'monthly' | 'quarterly' | 'annual' | 'project_summary' | 'custom';
  period: {
    start: number;
    end: number;
  };
  
  summary: {
    totalActivities: number;
    totalMeetings: number;
    propertiesViewed: number;
    offersSubmitted: number;
    status: string;
    nextSteps: string[];
  };
  
  performance: {
    responseRate: number;
    engagementScore: number;
    satisfactionScore?: number;
    progressTowards: string;
  };
  
  recommendations: Array<{
    category: 'communication' | 'pricing' | 'properties' | 'timing';
    priority: 'high' | 'medium' | 'low';
    description: string;
    actionItems: string[];
  }>;
  
  attachments: Array<{
    name: string;
    url: string;
    type: string;
  }>;
  
  generatedAt: number;
  sentToCustomer: boolean;
  customerFeedback?: {
    rating: number; // 1-5
    comments: string;
    receivedAt: number;
  };
}

// Interface principale du service Customer
export interface CustomerServiceInterface {
  // CRUD de base
  createCustomer(customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Promise<Customer>;
  getCustomer(id: string): Promise<Customer | null>;
  updateCustomer(id: string, updates: Partial<Customer>): Promise<Customer>;
  deleteCustomer(id: string): Promise<void>;
  
  // Recherche et filtrage
  searchCustomers(query: string, filters?: Record<string, any>): Promise<Customer[]>;
  getCustomersBySegment(segmentId: string): Promise<Customer[]>;
  getCustomersByAgent(agentId: string, filters?: Record<string, any>): Promise<Customer[]>;
  
  // Activités
  addActivity(activity: Omit<CustomerActivity, 'id' | 'createdAt' | 'updatedAt'>): Promise<CustomerActivity>;
  getCustomerActivities(customerId: string, limit?: number): Promise<CustomerActivity[]>;
  updateActivity(id: string, updates: Partial<CustomerActivity>): Promise<CustomerActivity>;
  
  // Scoring et segmentation
  calculateCustomerScore(customerId: string): Promise<CustomerScore>;
  segmentCustomer(customerId: string): Promise<string[]>;
  updateCustomerScore(customerId: string): Promise<CustomerScore>;
  
  // Opportunités
  createOpportunity(opportunity: Omit<Opportunity, 'id' | 'createdAt' | 'updatedAt'>): Promise<Opportunity>;
  updateOpportunityStage(id: string, stage: string, notes?: string): Promise<Opportunity>;
  getCustomerOpportunities(customerId: string): Promise<Opportunity[]>;
  
  // Communications
  scheduleFollowUp(customerId: string, agentId: string, date: number, notes: string): Promise<void>;
  getUpcomingFollowUps(agentId: string): Promise<Array<{ customer: Customer; followUpDate: number; notes: string }>>;
  sendCommunication(customerId: string, type: ContactMethod, content: any): Promise<void>;
  
  // Rapports
  generateCustomerReport(customerId: string, type: string, period?: { start: number; end: number }): Promise<CustomerReport>;
  getCustomerInsights(customerId: string): Promise<Record<string, any>>;
  
  // Utilitaires
  mergeCustomers(primaryId: string, secondaryId: string): Promise<Customer>;
  duplicateCustomer(customerId: string, changes?: Partial<Customer>): Promise<Customer>;
  archiveCustomer(customerId: string, reason: string): Promise<void>;
  restoreCustomer(customerId: string): Promise<Customer>;
  
  // Analytics
  getCustomerStats(filters?: Record<string, any>): Promise<Record<string, number>>;
  getConversionFunnel(agentId?: string): Promise<Array<{ stage: string; count: number; rate: number }>>;
  getChurnAnalysis(): Promise<Array<{ segment: string; churnRate: number; reasons: string[] }>>;
}

// Export des types principaux
export type {
  Customer,
  CustomerType,
  CustomerStatus,
  ContactInfo,
  Address,
  PropertyPreferences,
  FinancialProfile,
  PersonalProfile,
  CustomerActivity,
  CustomerScore,
  CommunicationPreferences,
  CustomerContract,
  Opportunity,
  CustomerSegment,
  SalesPipeline,
  MarketingCampaign,
  CustomerReport,
  CustomerServiceInterface,
  ContactMethod,
  PropertyInterest,
  Budget,
  Urgency,
  LeadSource
};