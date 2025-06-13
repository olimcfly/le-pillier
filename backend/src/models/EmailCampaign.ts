/**
 * Modèles EmailCampaign pour Le Pillier
 * Types et interfaces pour les campagnes email marketing
 */

// Types de base
export type CampaignType = 'newsletter' | 'promotional' | 'transactional' | 'drip' | 'broadcast' | 'welcome' | 'abandoned_cart' | 'follow_up';
export type CampaignStatus = 'draft' | 'scheduled' | 'sending' | 'sent' | 'paused' | 'cancelled' | 'completed' | 'failed';
export type Priority = 'low' | 'normal' | 'high' | 'urgent';
export type DeliveryStatus = 'pending' | 'sent' | 'delivered' | 'bounced' | 'failed' | 'spam' | 'unsubscribed';
export type InteractionType = 'open' | 'click' | 'reply' | 'forward' | 'unsubscribe' | 'spam_report' | 'bounce';
export type SegmentationType = 'static' | 'dynamic' | 'behavioral' | 'demographic' | 'custom';
export type AutomationTrigger = 'signup' | 'purchase' | 'inactivity' | 'birthday' | 'anniversary' | 'property_view' | 'mandat_signed';

// Template et contenu
export interface EmailTemplate {
  id: string;
  name: string;
  description?: string;
  category: 'newsletter' | 'promotional' | 'transactional' | 'welcome' | 'follow_up' | 'custom';
  type: 'html' | 'text' | 'mjml' | 'drag_drop';
  
  design: {
    framework?: 'mjml' | 'foundation' | 'custom';
    responsive: boolean;
    darkModeSupport: boolean;
    previewText?: string;
  };
  
  content: {
    html: string;
    text?: string;
    mjml?: string;
    json?: any; // Pour les builders drag & drop
  };
  
  variables: Array<{
    name: string;
    type: 'string' | 'number' | 'date' | 'boolean' | 'url' | 'image';
    description: string;
    required: boolean;
    defaultValue?: any;
    validation?: {
      pattern?: string;
      minLength?: number;
      maxLength?: number;
      options?: string[];
    };
  }>;
  
  assets: Array<{
    type: 'image' | 'logo' | 'icon' | 'background';
    name: string;
    url: string;
    alt?: string;
    size?: number;
    dimensions?: { width: number; height: number };
  }>;
  
  metadata: {
    tags: string[];
    industry?: string;
    useCase?: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime?: number; // minutes
  };
  
  isPublic: boolean;
  isApproved: boolean;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  usageCount: number;
  rating?: {
    average: number;
    count: number;
  };
}

// Contenu personnalisé de l'email
export interface EmailContent {
  templateId?: string;
  subject: string;
  preheader?: string;
  fromName: string;
  fromEmail: string;
  replyTo?: string;
  
  content: {
    html: string;
    text?: string;
  };
  
  personalization: {
    variables: Record<string, any>;
    dynamicContent?: Array<{
      placeholder: string;
      rules: Array<{
        condition: Record<string, any>;
        content: string;
      }>;
      defaultContent: string;
    }>;
  };
  
  attachments?: Array<{
    name: string;
    url: string;
    type: string;
    size: number;
    inline?: boolean;
    cid?: string; // Content-ID pour images inline
  }>;
  
  tracking: {
    pixelEnabled: boolean;
    linkTracking: boolean;
    clickTracking: boolean;
    openTracking: boolean;
    unsubscribeTracking: boolean;
  };
  
  design: {
    previewText?: string;
    browserViewUrl?: string;
    socialLinks?: Array<{
      platform: string;
      url: string;
      icon?: string;
    }>;
  };
}

// Segmentation et ciblage
export interface AudienceSegment {
  id: string;
  name: string;
  description?: string;
  type: SegmentationType;
  
  criteria: {
    demographic?: {
      age?: { min?: number; max?: number };
      gender?: string[];
      location?: {
        countries?: string[];
        regions?: string[];
        cities?: string[];
        postalCodes?: string[];
      };
      language?: string[];
    };
    
    behavioral?: {
      lastActivity?: { days: number; operator: 'within' | 'before' };
      engagement?: { level: 'high' | 'medium' | 'low' };
      propertyInterest?: string[];
      priceRange?: { min?: number; max?: number };
      viewedProperties?: { count: number; timeframe: number };
      emailInteractions?: {
        opens?: { count: number; timeframe: number };
        clicks?: { count: number; timeframe: number };
      };
    };
    
    transactional?: {
      totalSpent?: { min?: number; max?: number };
      lastPurchase?: { days: number; operator: 'within' | 'before' };
      averageOrderValue?: { min?: number; max?: number };
      purchaseFrequency?: string;
    };
    
    subscription?: {
      plan?: string[];
      status?: string[];
      joinDate?: { days: number; operator: 'within' | 'before' };
      trialStatus?: string[];
    };
    
    custom?: Record<string, any>;
  };
  
  recipients: {
    total: number;
    lastCalculated: number;
    sample: Array<{
      id: string;
      email: string;
      name?: string;
    }>;
  };
  
  isActive: boolean;
  autoUpdate: boolean;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

// Configuration d'envoi
export interface SendConfiguration {
  schedule: {
    type: 'immediate' | 'scheduled' | 'recurring';
    sendAt?: number;
    timezone: string;
    recurring?: {
      frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
      interval: number;
      days?: number[]; // 0-6 pour les jours de la semaine
      time: string; // HH:mm
      endDate?: number;
      maxSends?: number;
    };
  };
  
  delivery: {
    priority: Priority;
    batchSize?: number;
    batchDelay?: number; // secondes entre les batches
    maxRetries: number;
    retryDelay: number; // secondes
    failureThreshold?: number; // % d'échec pour arrêter
  };
  
  optimization: {
    sendTimeOptimization: boolean;
    subjectLineOptimization?: {
      enabled: boolean;
      variants: string[];
      testPercentage: number; // % pour le test A/B
      winnerCriteria: 'open_rate' | 'click_rate' | 'conversion_rate';
    };
    contentOptimization?: {
      enabled: boolean;
      variants: Array<{
        name: string;
        content: EmailContent;
      }>;
      testPercentage: number;
    };
  };
  
  throttling: {
    enabled: boolean;
    maxHourly?: number;
    maxDaily?: number;
    respectReceipientLimits: boolean;
  };
}

// Métriques et analytics
export interface CampaignMetrics {
  delivery: {
    total: number;
    sent: number;
    delivered: number;
    bounced: number;
    failed: number;
    pending: number;
    
    rates: {
      deliveryRate: number; // delivered/sent
      bounceRate: number;   // bounced/sent
      failureRate: number;  // failed/sent
    };
    
    bounces: {
      hard: number;
      soft: number;
      blocked: number;
      details: Array<{
        email: string;
        type: 'hard' | 'soft' | 'blocked';
        reason: string;
        timestamp: number;
      }>;
    };
  };
  
  engagement: {
    opens: {
      total: number;
      unique: number;
      rate: number; // unique/delivered
      firstOpen?: number;
      lastOpen?: number;
    };
    
    clicks: {
      total: number;
      unique: number;
      rate: number; // unique/delivered
      clickToOpenRate: number; // unique clicks/unique opens
      topLinks: Array<{
        url: string;
        clicks: number;
        uniqueClicks: number;
      }>;
    };
    
    forwards: {
      total: number;
      rate: number;
    };
    
    replies: {
      total: number;
      rate: number;
    };
    
    unsubscribes: {
      total: number;
      rate: number; // unsubscribes/delivered
      reasons?: Array<{
        reason: string;
        count: number;
      }>;
    };
    
    complaints: {
      total: number;
      rate: number; // complaints/delivered
    };
  };
  
  conversion: {
    goals: Array<{
      name: string;
      conversions: number;
      rate: number;
      value?: number;
    }>;
    
    revenue: {
      total: number;
      perRecipient: number;
      perOpen: number;
      perClick: number;
    };
  };
  
  temporal: {
    bestSendTime?: {
      hour: number;
      day: number;
      openRate: number;
    };
    
    peakEngagement?: {
      opens: { hour: number; count: number };
      clicks: { hour: number; count: number };
    };
    
    timeSeries?: Array<{
      timestamp: number;
      opens: number;
      clicks: number;
      conversions: number;
    }>;
  };
  
  geographic?: {
    topCountries: Array<{
      country: string;
      recipients: number;
      openRate: number;
      clickRate: number;
    }>;
    
    topCities: Array<{
      city: string;
      recipients: number;
      openRate: number;
      clickRate: number;
    }>;
  };
  
  devices?: {
    desktop: { count: number; rate: number };
    mobile: { count: number; rate: number };
    tablet: { count: number; rate: number };
    
    clients: Array<{
      name: string;
      count: number;
      rate: number;
    }>;
  };
}

// Interaction individuelle
export interface EmailInteraction {
  id: string;
  campaignId: string;
  recipientId: string;
  recipientEmail: string;
  
  type: InteractionType;
  timestamp: number;
  
  details: {
    // Pour les clics
    url?: string;
    linkId?: string;
    
    // Pour les ouvertures
    userAgent?: string;
    ipAddress?: string;
    location?: {
      country?: string;
      region?: string;
      city?: string;
    };
    
    // Pour les bounces
    bounceType?: 'hard' | 'soft' | 'blocked';
    bounceReason?: string;
    
    // Pour les désabonnements
    unsubscribeReason?: string;
    feedbackComments?: string;
    
    // Métadonnées
    deviceType?: 'desktop' | 'mobile' | 'tablet';
    emailClient?: string;
    operatingSystem?: string;
  };
  
  metadata?: Record<string, any>;
}

// Destinataire de campagne
export interface CampaignRecipient {
  id: string;
  campaignId: string;
  
  contact: {
    email: string;
    firstName?: string;
    lastName?: string;
    customFields?: Record<string, any>;
  };
  
  segmentIds: string[];
  
  personalization: Record<string, any>;
  
  delivery: {
    status: DeliveryStatus;
    attemptCount: number;
    lastAttempt?: number;
    deliveredAt?: number;
    errorMessage?: string;
    messageId?: string;
  };
  
  engagement: {
    opened: boolean;
    openCount: number;
    firstOpenAt?: number;
    lastOpenAt?: number;
    
    clicked: boolean;
    clickCount: number;
    firstClickAt?: number;
    lastClickAt?: number;
    
    replied: boolean;
    forwarded: boolean;
    unsubscribed: boolean;
    complained: boolean;
  };
  
  conversion: {
    converted: boolean;
    conversionValue?: number;
    conversionDate?: number;
    conversionGoal?: string;
  };
  
  exclusions?: Array<{
    reason: string;
    timestamp: number;
  }>;
}

// Automation et séquences
export interface EmailAutomation {
  id: string;
  name: string;
  description?: string;
  type: 'drip' | 'behavioral' | 'lifecycle' | 'event_triggered';
  
  trigger: {
    type: AutomationTrigger;
    conditions: Record<string, any>;
    delay?: number; // minutes après le trigger
  };
  
  sequence: Array<{
    id: string;
    order: number;
    delay: number; // minutes après l'email précédent
    
    email: {
      templateId?: string;
      content: EmailContent;
      segmentOverride?: string;
    };
    
    conditions?: {
      waitFor?: {
        type: 'time' | 'action' | 'goal';
        value: any;
        timeout?: number; // minutes
      };
      
      skip?: {
        conditions: Record<string, any>;
        reason: string;
      };
      
      branch?: Array<{
        conditions: Record<string, any>;
        nextEmailId: string;
      }>;
    };
  }>;
  
  settings: {
    maxDuration?: number; // jours
    respectUnsubscribes: boolean;
    respectGlobalFrequency: boolean;
    pauseOnEngagement?: boolean;
  };
  
  status: 'active' | 'paused' | 'archived';
  
  statistics: {
    totalEntered: number;
    totalCompleted: number;
    totalDropped: number;
    averageCompletionTime: number; // minutes
    
    stepStats: Array<{
      stepId: string;
      sent: number;
      opened: number;
      clicked: number;
      converted: number;
      dropped: number;
    }>;
  };
  
  createdBy: string;
  createdAt: number;
  updatedAt: number;
}

// Campagne principale
export interface EmailCampaign {
  id: string;
  name: string;
  description?: string;
  type: CampaignType;
  status: CampaignStatus;
  
  // Contenu
  content: EmailContent;
  
  // Audience
  audience: {
    segments: string[];
    excludeSegments?: string[];
    customRecipients?: Array<{
      email: string;
      name?: string;
      customFields?: Record<string, any>;
    }>;
    
    totalRecipients: number;
    eligibleRecipients: number;
    excludedRecipients: number;
    
    exclusionRules?: Array<{
      type: 'unsubscribed' | 'bounced' | 'complained' | 'inactive' | 'custom';
      criteria: Record<string, any>;
    }>;
  };
  
  // Configuration
  sendConfig: SendConfiguration;
  
  // Suivi et tests
  testing: {
    testEmails?: string[];
    abTesting?: {
      enabled: boolean;
      testType: 'subject' | 'content' | 'send_time' | 'from_name';
      variants: Array<{
        name: string;
        percentage: number;
        content?: Partial<EmailContent>;
      }>;
      
      winnerSelection: {
        criteria: 'open_rate' | 'click_rate' | 'conversion_rate' | 'revenue';
        testDuration: number; // heures
        confidenceLevel: number; // 0.9, 0.95, 0.99
      };
      
      results?: {
        winner: string;
        confidence: number;
        metrics: Record<string, number>;
      };
    };
  };
  
  // Métriques
  metrics: CampaignMetrics;
  
  // Historique
  history: Array<{
    action: 'created' | 'updated' | 'scheduled' | 'started' | 'paused' | 'resumed' | 'completed' | 'cancelled';
    timestamp: number;
    userId: string;
    details?: Record<string, any>;
  }>;
  
  // Métadonnées
  tags: string[];
  category?: string;
  goals: Array<{
    name: string;
    type: 'clicks' | 'conversions' | 'revenue' | 'engagement';
    target: number;
    actual?: number;
  }>;
  
  budget?: {
    allocated: number;
    spent: number;
    costPerSend: number;
    currency: string;
  };
  
  compliance: {
    gdprCompliant: boolean;
    canSpamCompliant: boolean;
    unsubscribeLink: boolean;
    senderAddress: boolean;
    consentRecorded: boolean;
  };
  
  // Timestamps
  createdBy: string;
  createdAt: number;
  updatedAt: number;
  scheduledAt?: number;
  startedAt?: number;
  completedAt?: number;
  
  // Relations
  parentCampaignId?: string; // Pour les campagnes récurrentes
  automationId?: string; // Si part d'une automation
  
  // Archivage
  archived: boolean;
  archivedAt?: number;
  archivedBy?: string;
}

// Rapport de campagne
export interface CampaignReport {
  id: string;
  campaignId: string;
  campaignName: string;
  
  reportType: 'summary' | 'detailed' | 'comparison' | 'performance';
  generatedAt: number;
  generatedBy: string;
  
  period: {
    start: number;
    end: number;
  };
  
  summary: {
    objective: string;
    keyResults: Array<{
      metric: string;
      target: number;
      actual: number;
      achievement: number; // %
    }>;
    
    overallPerformance: 'excellent' | 'good' | 'average' | 'poor';
    benchmarkComparison?: {
      industry: string;
      openRate: { campaign: number; industry: number; performance: 'above' | 'below' | 'average' };
      clickRate: { campaign: number; industry: number; performance: 'above' | 'below' | 'average' };
    };
  };
  
  insights: {
    topPerformers: Array<{
      type: 'segment' | 'content' | 'time' | 'device';
      name: string;
      metric: string;
      value: number;
    }>;
    
    recommendations: Array<{
      category: 'content' | 'timing' | 'audience' | 'frequency';
      priority: 'high' | 'medium' | 'low';
      description: string;
      expectedImpact: string;
      actionItems: string[];
    }>;
    
    trends: Array<{
      metric: string;
      direction: 'up' | 'down' | 'stable';
      change: number;
      significance: 'significant' | 'minor' | 'negligible';
    }>;
  };
  
  detailedMetrics: CampaignMetrics;
  
  segments: Array<{
    segmentId: string;
    segmentName: string;
    recipients: number;
    metrics: Partial<CampaignMetrics>;
  }>;
  
  geography: {
    performance: Array<{
      location: string;
      recipients: number;
      openRate: number;
      clickRate: number;
      conversionRate: number;
    }>;
  };
  
  timeline: Array<{
    timestamp: number;
    event: string;
    description: string;
    impact?: string;
  }>;
  
  attachments: Array<{
    name: string;
    type: 'csv' | 'excel' | 'pdf' | 'image';
    url: string;
    size: number;
  }>;
  
  shareSettings: {
    isPublic: boolean;
    sharedWith: string[];
    accessLevel: 'view' | 'comment' | 'edit';
  };
}

// Interface du service Email Campaign
export interface EmailCampaignServiceInterface {
  // Campagnes
  createCampaign(campaign: Omit<EmailCampaign, 'id' | 'createdAt' | 'updatedAt'>): Promise<EmailCampaign>;
  getCampaign(id: string): Promise<EmailCampaign | null>;
  updateCampaign(id: string, updates: Partial<EmailCampaign>): Promise<EmailCampaign>;
  deleteCampaign(id: string): Promise<void>;
  duplicateCampaign(id: string, name: string): Promise<EmailCampaign>;
  
  // Gestion des campagnes
  scheduleCampaign(id: string, sendAt: number): Promise<void>;
  startCampaign(id: string): Promise<void>;
  pauseCampaign(id: string): Promise<void>;
  resumeCampaign(id: string): Promise<void>;
  cancelCampaign(id: string, reason: string): Promise<void>;
  
  // Templates
  createTemplate(template: Omit<EmailTemplate, 'id' | 'createdAt' | 'updatedAt'>): Promise<EmailTemplate>;
  getTemplate(id: string): Promise<EmailTemplate | null>;
  updateTemplate(id: string, updates: Partial<EmailTemplate>): Promise<EmailTemplate>;
  listTemplates(filters?: Record<string, any>): Promise<EmailTemplate[]>;
  
  // Segments
  createSegment(segment: Omit<AudienceSegment, 'id' | 'createdAt' | 'updatedAt'>): Promise<AudienceSegment>;
  updateSegment(id: string, updates: Partial<AudienceSegment>): Promise<AudienceSegment>;
  calculateSegmentSize(criteria: AudienceSegment['criteria']): Promise<number>;
  getSegmentRecipients(id: string, limit?: number): Promise<Array<{ email: string; name?: string }>>;
  
  // Envoi
  sendTestEmail(campaignId: string, testEmails: string[]): Promise<void>;
  previewCampaign(campaignId: string, personalization?: Record<string, any>): Promise<{ html: string; text: string }>;
  validateCampaign(campaignId: string): Promise<{ valid: boolean; errors: string[]; warnings: string[] }>;
  
  // Tracking et métriques
  recordInteraction(interaction: Omit<EmailInteraction, 'id'>): Promise<void>;
  getCampaignMetrics(campaignId: string): Promise<CampaignMetrics>;
  getRecipientInteractions(campaignId: string, recipientId: string): Promise<EmailInteraction[]>;
  
  // Rapports
  generateReport(campaignId: string, reportType: string): Promise<CampaignReport>;
  comparecampaigns(campaignIds: string[]): Promise<Record<string, CampaignMetrics>>;
  getPerformanceTrends(campaignIds: string[], period: { start: number; end: number }): Promise<any>;
  
  // Automation
  createAutomation(automation: Omit<EmailAutomation, 'id' | 'createdAt' | 'updatedAt'>): Promise<EmailAutomation>;
  triggerAutomation(automationId: string, recipientId: string, triggerData: Record<string, any>): Promise<void>;
  updateAutomationStatus(id: string, status: 'active' | 'paused' | 'archived'): Promise<void>;
  
  // Utilitaires
  listCampaigns(filters?: Record<string, any>, pagination?: { limit: number; offset: number }): Promise<{
    campaigns: EmailCampaign[];
    total: number;
  }>;
  archiveCampaign(id: string): Promise<void>;
  restoreCampaign(id: string): Promise<void>;
  bulkAction(campaignIds: string[], action: string, options?: Record<string, any>): Promise<void>;
  
  // Analytics
  getDashboardStats(userId?: string): Promise<{
    totalCampaigns: number;
    activeCampaigns: number;
    totalSent: number;
    averageOpenRate: number;
    averageClickRate: number;
    recentActivity: Array<{ campaignId: string; action: string; timestamp: number }>;
  }>;
  
  getIndustryBenchmarks(industry: string): Promise<{
    openRate: number;
    clickRate: number;
    unsubscribeRate: number;
    bounceRate: number;
  }>;
}

// Export des types principaux
export type {
  EmailCampaign,
  CampaignType,
  CampaignStatus,
  EmailTemplate,
  EmailContent,
  AudienceSegment,
  SendConfiguration,
  CampaignMetrics,
  EmailInteraction,
  CampaignRecipient,
  EmailAutomation,
  CampaignReport,
  EmailCampaignServiceInterface,
  Priority,
  DeliveryStatus,
  InteractionType,
  SegmentationType,
  AutomationTrigger
};