/**
 * Modèles Analytics pour Le Pillier
 * Types et interfaces pour les métriques, KPIs et rapports
 */

// Types de base pour les analytics
export type TimeFrame = 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
export type MetricType = 'count' | 'sum' | 'average' | 'percentage' | 'rate' | 'ratio';
export type TrendDirection = 'up' | 'down' | 'stable';

// Interface de base pour les métriques
export interface BaseMetric {
  id: string;
  name: string;
  description: string;
  type: MetricType;
  unit: string;
  category: string;
}

// Valeur d'une métrique à un moment donné
export interface MetricValue {
  metricId: string;
  value: number;
  timestamp: number;
  dimension?: Record<string, string>;
  metadata?: Record<string, any>;
}

// Point de données temporel
export interface DataPoint {
  timestamp: number;
  value: number;
  label?: string;
  metadata?: Record<string, any>;
}

// Série de données temporelles
export interface TimeSeries {
  metricId: string;
  timeFrame: TimeFrame;
  data: DataPoint[];
  total?: number;
  average?: number;
  min?: number;
  max?: number;
  trend?: {
    direction: TrendDirection;
    percentage: number;
    comparison: {
      current: number;
      previous: number;
      period: string;
    };
  };
}

// === KPIs PRINCIPAUX ===

// KPI Agent individuel
export interface AgentKPI {
  agentId: string;
  agentName: string;
  agentEmail: string;
  region: string;
  agency?: string;
  period: {
    start: number;
    end: number;
    label: string;
  };
  metrics: {
    // Mandats
    mandatsTotal: number;
    mandatsActive: number;
    mandatsVendus: number;
    mandatsExpired: number;
    mandatsConversionRate: number;
    
    // Revenus
    commissionTotal: number;
    commissionAverage: number;
    revenueObjective: number;
    revenueProgress: number;
    
    // Activité
    contactsAdded: number;
    contactsQualified: number;
    meetingsScheduled: number;
    meetingsCompleted: number;
    
    // Performance
    responseTime: number; // en heures
    clientSatisfaction: number; // sur 5
    prospectionScore: number; // sur 100
    activityScore: number; // sur 100
  };
  rankings: {
    mandats: number;
    revenue: number;
    satisfaction: number;
    activity: number;
    regional: number;
    national: number;
  };
  targets: {
    mandatsMonthly: number;
    revenueMonthly: number;
    meetingsWeekly: number;
    contactsDaily: number;
  };
  achievements: Array<{
    type: 'mandats' | 'revenue' | 'satisfaction' | 'growth';
    title: string;
    description: string;
    achievedAt: number;
    value: number;
  }>;
}

// KPI Plateforme globale
export interface PlatformKPI {
  period: {
    start: number;
    end: number;
    label: string;
  };
  users: {
    totalActive: number;
    newUsers: number;
    churned: number;
    retention: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    growth: {
      rate: number;
      trend: TrendDirection;
    };
  };
  business: {
    totalMandats: number;
    activeMandats: number;
    soldProperties: number;
    totalRevenue: number;
    averageCommission: number;
    conversionRate: number;
    timeToSale: number; // jours moyens
  };
  geographic: {
    topRegions: Array<{
      region: string;
      agents: number;
      mandats: number;
      revenue: number;
      growth: number;
    }>;
    coverage: {
      departments: number;
      cities: number;
      newAreas: number;
    };
  };
  subscription: {
    totalSubscribers: number;
    byPlan: Record<string, number>;
    mrr: number; // Monthly Recurring Revenue
    arr: number; // Annual Recurring Revenue
    churnRate: number;
    ltv: number; // Customer Lifetime Value
    cac: number; // Customer Acquisition Cost
  };
  system: {
    uptime: number;
    responseTime: number;
    errorRate: number;
    apiCalls: number;
    storageUsed: number;
  };
}

// === ANALYTICS COMPORTEMENTAUX ===

// Événement utilisateur
export interface UserEvent {
  id: string;
  userId: string;
  sessionId: string;
  timestamp: number;
  eventType: string;
  eventCategory: 'navigation' | 'action' | 'engagement' | 'conversion' | 'error';
  properties: Record<string, any>;
  page?: {
    url: string;
    title: string;
    referrer?: string;
  };
  device?: {
    type: 'desktop' | 'mobile' | 'tablet';
    os: string;
    browser: string;
    screen: string;
  };
  location?: {
    country: string;
    region: string;
    city: string;
    ip?: string;
  };
}

// Session utilisateur
export interface UserSession {
  id: string;
  userId: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  pageViews: number;
  events: number;
  bounced: boolean;
  converted: boolean;
  landingPage: string;
  exitPage?: string;
  referrer?: string;
  campaign?: {
    source: string;
    medium: string;
    campaign: string;
    term?: string;
    content?: string;
  };
}

// Funnel de conversion
export interface ConversionFunnel {
  name: string;
  description: string;
  steps: Array<{
    id: string;
    name: string;
    description: string;
    eventType: string;
    order: number;
  }>;
  period: {
    start: number;
    end: number;
  };
  data: Array<{
    stepId: string;
    stepName: string;
    users: number;
    conversionRate: number;
    dropoffRate: number;
    averageTime: number;
  }>;
  totalUsers: number;
  overallConversionRate: number;
}

// === ANALYTICS RÉGIONAUX ===

// Performance par région
export interface RegionalAnalytics {
  region: string;
  department?: string;
  city?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  period: {
    start: number;
    end: number;
  };
  agents: {
    total: number;
    active: number;
    new: number;
    topPerformers: Array<{
      id: string;
      name: string;
      mandats: number;
      revenue: number;
    }>;
  };
  market: {
    averagePrice: number;
    priceGrowth: number;
    inventory: number;
    daysOnMarket: number;
    demandScore: number; // 0-100
    competitionLevel: number; // 0-100
  };
  performance: {
    mandatsPerAgent: number;
    revenuePerAgent: number;
    conversionRate: number;
    customerSatisfaction: number;
    marketShare: number;
  };
  trends: {
    priceEvolution: TimeSeries;
    volumeEvolution: TimeSeries;
    agentGrowth: TimeSeries;
  };
}

// === ANALYTICS FINANCIERS ===

// Rapport financier
export interface FinancialReport {
  period: {
    start: number;
    end: number;
    type: 'monthly' | 'quarterly' | 'yearly';
  };
  revenue: {
    total: number;
    recurring: number;
    oneTime: number;
    bySource: Record<string, number>;
    growth: {
      rate: number;
      trend: TrendDirection;
      comparison: number;
    };
  };
  costs: {
    total: number;
    fixed: number;
    variable: number;
    marketing: number;
    operations: number;
    personnel: number;
  };
  profitability: {
    grossProfit: number;
    grossMargin: number;
    netProfit: number;
    netMargin: number;
    ebitda: number;
    ebitdaMargin: number;
  };
  cashFlow: {
    operating: number;
    investing: number;
    financing: number;
    free: number;
    burnRate: number;
    runway: number; // mois
  };
  subscriptions: {
    mrr: number;
    arr: number;
    churnRate: number;
    ltv: number;
    cac: number;
    paybackPeriod: number;
  };
}

// === RAPPORTS ET DASHBOARDS ===

// Widget de dashboard
export interface DashboardWidget {
  id: string;
  type: 'metric' | 'chart' | 'table' | 'map' | 'funnel' | 'gauge';
  title: string;
  description?: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  config: {
    metricIds?: string[];
    timeFrame?: TimeFrame;
    filters?: Record<string, any>;
    visualization?: {
      chartType?: 'line' | 'bar' | 'pie' | 'area' | 'scatter';
      colors?: string[];
      showLegend?: boolean;
      showGrid?: boolean;
    };
  };
  data?: any;
  lastUpdated?: number;
}

// Dashboard personnalisé
export interface Dashboard {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  isPublic: boolean;
  tags: string[];
  widgets: DashboardWidget[];
  layout: 'grid' | 'freeform';
  refreshInterval: number; // secondes
  createdAt: number;
  updatedAt: number;
  accessControl: {
    viewers: string[];
    editors: string[];
    roles: string[];
  };
}

// Rapport programmé
export interface ScheduledReport {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  dashboardId?: string;
  metrics: string[];
  filters: Record<string, any>;
  format: 'pdf' | 'excel' | 'csv' | 'json';
  schedule: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
    day?: number; // jour du mois
    weekday?: number; // 0-6
    time: string; // HH:mm
    timezone: string;
  };
  recipients: Array<{
    email: string;
    name?: string;
    role?: string;
  }>;
  active: boolean;
  lastRun?: number;
  nextRun?: number;
  createdAt: number;
}

// === SEGMENTS ET COHORTES ===

// Segment d'utilisateurs
export interface UserSegment {
  id: string;
  name: string;
  description: string;
  criteria: {
    demographic?: {
      ageRange?: [number, number];
      regions?: string[];
      agencies?: string[];
    };
    behavioral?: {
      loginFrequency?: 'daily' | 'weekly' | 'monthly' | 'rarely';
      featureUsage?: Record<string, 'high' | 'medium' | 'low'>;
      subscriptionPlan?: string[];
    };
    performance?: {
      mandatsRange?: [number, number];
      revenueRange?: [number, number];
      satisfactionRange?: [number, number];
    };
    custom?: Record<string, any>;
  };
  userCount: number;
  growth: {
    rate: number;
    trend: TrendDirection;
  };
  createdAt: number;
  updatedAt: number;
}

// Analyse de cohorte
export interface CohortAnalysis {
  id: string;
  name: string;
  cohortType: 'registration' | 'first_purchase' | 'first_mandat';
  metric: 'retention' | 'revenue' | 'activity';
  period: TimeFrame;
  data: Array<{
    cohortDate: string;
    cohortSize: number;
    periods: Array<{
      period: number;
      value: number;
      percentage: number;
    }>;
  }>;
  averages: {
    period1: number;
    period2: number;
    period6: number;
    period12: number;
  };
  createdAt: number;
}

// === ALERTES ET MONITORING ===

// Règle d'alerte
export interface AlertRule {
  id: string;
  name: string;
  description?: string;
  metricId: string;
  condition: {
    operator: 'gt' | 'lt' | 'eq' | 'gte' | 'lte' | 'change';
    threshold: number;
    timeWindow: number; // minutes
    comparison?: 'previous_period' | 'previous_week' | 'previous_month';
  };
  severity: 'info' | 'warning' | 'critical';
  channels: Array<{
    type: 'email' | 'slack' | 'webhook' | 'sms';
    config: Record<string, any>;
  }>;
  active: boolean;
  lastTriggered?: number;
  createdAt: number;
}

// Alerte déclenchée
export interface Alert {
  id: string;
  ruleId: string;
  ruleName: string;
  metricId: string;
  severity: 'info' | 'warning' | 'critical';
  message: string;
  value: number;
  threshold: number;
  triggeredAt: number;
  acknowledgedAt?: number;
  acknowledgedBy?: string;
  resolvedAt?: number;
  metadata: Record<string, any>;
}

// === INTERFACES UTILITAIRES ===

// Filtre d'analyse
export interface AnalyticsFilter {
  dateRange?: {
    start: number;
    end: number;
    preset?: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom';
  };
  dimensions?: Record<string, string[]>;
  segments?: string[];
  excludeSegments?: string[];
  customFilters?: Array<{
    field: string;
    operator: 'eq' | 'ne' | 'gt' | 'lt' | 'in' | 'contains';
    value: any;
  }>;
}

// Requête d'analyse
export interface AnalyticsQuery {
  metrics: string[];
  dimensions?: string[];
  filters?: AnalyticsFilter;
  groupBy?: string[];
  orderBy?: Array<{
    field: string;
    direction: 'asc' | 'desc';
  }>;
  limit?: number;
  offset?: number;
  timeFrame?: TimeFrame;
}

// Résultat d'analyse
export interface AnalyticsResult {
  query: AnalyticsQuery;
  data: Array<Record<string, any>>;
  totals?: Record<string, number>;
  metadata: {
    totalRows: number;
    executionTime: number;
    cacheHit: boolean;
    dataFreshness: number;
  };
  errors?: string[];
  warnings?: string[];
}

// === TYPES D'EXPORT ===

// Configuration d'export
export interface ExportConfig {
  format: 'csv' | 'excel' | 'pdf' | 'json';
  data: AnalyticsResult;
  options: {
    includeHeaders?: boolean;
    includeMetadata?: boolean;
    filename?: string;
    sheetName?: string;
    filters?: AnalyticsFilter;
    branding?: {
      logo?: string;
      companyName?: string;
      reportTitle?: string;
    };
  };
}

// Tâche d'export
export interface ExportTask {
  id: string;
  userId: string;
  config: ExportConfig;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number; // 0-100
  downloadUrl?: string;
  error?: string;
  createdAt: number;
  completedAt?: number;
  expiresAt?: number;
}

// === CONFIGURATION ET MÉTADONNÉES ===

// Configuration des métriques
export interface MetricConfig extends BaseMetric {
  aggregation: {
    method: 'sum' | 'count' | 'avg' | 'min' | 'max' | 'distinct';
    field?: string;
    filters?: Record<string, any>;
  };
  dimensions: string[];
  refreshInterval: number; // secondes
  retention: number; // jours
  access: {
    public: boolean;
    roles: string[];
    users: string[];
  };
  formatting: {
    prefix?: string;
    suffix?: string;
    decimals: number;
    thousands: boolean;
  };
}

// Métadonnées analytics
export interface AnalyticsMetadata {
  metrics: MetricConfig[];
  dimensions: Array<{
    id: string;
    name: string;
    type: 'string' | 'number' | 'date' | 'boolean';
    description: string;
    values?: string[];
  }>;
  segments: UserSegment[];
  lastUpdated: number;
  version: string;
}

// Interface principale du service Analytics
export interface AnalyticsServiceInterface {
  // Métriques
  trackEvent(event: UserEvent): Promise<void>;
  trackMetric(metric: MetricValue): Promise<void>;
  getMetric(metricId: string, filters?: AnalyticsFilter): Promise<TimeSeries>;
  
  // KPIs
  getAgentKPI(agentId: string, period: TimeFrame): Promise<AgentKPI>;
  getPlatformKPI(period: TimeFrame): Promise<PlatformKPI>;
  getRegionalAnalytics(region: string, period: TimeFrame): Promise<RegionalAnalytics>;
  
  // Rapports
  generateReport(query: AnalyticsQuery): Promise<AnalyticsResult>;
  createScheduledReport(report: Omit<ScheduledReport, 'id'>): Promise<ScheduledReport>;
  exportData(config: ExportConfig): Promise<ExportTask>;
  
  // Dashboards
  createDashboard(dashboard: Omit<Dashboard, 'id'>): Promise<Dashboard>;
  updateDashboard(id: string, updates: Partial<Dashboard>): Promise<Dashboard>;
  deleteDashboard(id: string): Promise<void>;
  
  // Alertes
  createAlert(rule: Omit<AlertRule, 'id'>): Promise<AlertRule>;
  checkAlerts(): Promise<Alert[]>;
  acknowledgeAlert(alertId: string, userId: string): Promise<void>;
  
  // Utilitaires
  getMetadata(): Promise<AnalyticsMetadata>;
  healthCheck(): Promise<boolean>;
}

// Export des types principaux
export type {
  BaseMetric,
  MetricValue,
  DataPoint,
  TimeSeries,
  AgentKPI,
  PlatformKPI,
  UserEvent,
  UserSession,
  ConversionFunnel,
  RegionalAnalytics,
  FinancialReport,
  Dashboard,
  DashboardWidget,
  ScheduledReport,
  UserSegment,
  CohortAnalysis,
  AlertRule,
  Alert,
  AnalyticsFilter,
  AnalyticsQuery,
  AnalyticsResult,
  ExportConfig,
  ExportTask,
  MetricConfig,
  AnalyticsMetadata,
  AnalyticsServiceInterface
};