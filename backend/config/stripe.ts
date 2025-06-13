/**
 * Configuration Stripe pour Le Pillier
 * Gestion des paiements, abonnements et facturation
 */

import Stripe from 'stripe';
import { EventEmitter } from 'events';

// Types pour la configuration Stripe
export interface StripeConfig {
  secretKey: string;
  publishableKey: string;
  webhookSecret: string;
  apiVersion: '2023-10-16';
  environment: 'test' | 'live';
  currency: string;
  country: string;
  businessInfo: {
    name: string;
    support_email: string;
    support_phone: string;
    support_url: string;
  };
  features: {
    subscriptions: boolean;
    connect: boolean;
    marketplace: boolean;
    invoicing: boolean;
  };
  limits: {
    maxAmount: number;
    minAmount: number;
    maxRefundDays: number;
  };
  webhookEndpoints: {
    primary: string;
    backup?: string;
  };
}

// Types pour les paiements et abonnements
export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
  customerId?: string;
  metadata: Record<string, string>;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  intervalCount: number;
  trialDays?: number;
  features: string[];
  metadata: Record<string, string>;
}

export interface Customer {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: Stripe.Address;
  metadata: Record<string, string>;
  defaultPaymentMethod?: string;
  subscriptions?: Subscription[];
}

export interface Subscription {
  id: string;
  customerId: string;
  planId: string;
  status: Stripe.Subscription.Status;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  cancelAtPeriodEnd: boolean;
  trialEnd?: number;
  metadata: Record<string, string>;
}

export interface Invoice {
  id: string;
  customerId: string;
  amount: number;
  currency: string;
  status: string;
  dueDate: number;
  paidAt?: number;
  hostedInvoiceUrl?: string;
  invoicePdf?: string;
}

// Configuration par environnement
const getStripeConfig = (): StripeConfig => {
  const env = process.env.NODE_ENV || 'development';
  
  const baseConfig: StripeConfig = {
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    apiVersion: '2023-10-16',
    environment: process.env.STRIPE_ENVIRONMENT as 'test' | 'live' || 'test',
    currency: process.env.STRIPE_CURRENCY || 'eur',
    country: process.env.STRIPE_COUNTRY || 'FR',
    businessInfo: {
      name: process.env.BUSINESS_NAME || 'Le Pillier',
      support_email: process.env.SUPPORT_EMAIL || 'support@lepillier.com',
      support_phone: process.env.SUPPORT_PHONE || '+33 1 23 45 67 89',
      support_url: process.env.SUPPORT_URL || 'https://lepillier.com/support'
    },
    features: {
      subscriptions: process.env.STRIPE_SUBSCRIPTIONS_ENABLED !== 'false',
      connect: process.env.STRIPE_CONNECT_ENABLED === 'true',
      marketplace: process.env.STRIPE_MARKETPLACE_ENABLED === 'true',
      invoicing: process.env.STRIPE_INVOICING_ENABLED !== 'false'
    },
    limits: {
      maxAmount: parseInt(process.env.STRIPE_MAX_AMOUNT || '999999'), // 9999.99 EUR
      minAmount: parseInt(process.env.STRIPE_MIN_AMOUNT || '50'),     // 0.50 EUR
      maxRefundDays: parseInt(process.env.STRIPE_MAX_REFUND_DAYS || '90')
    },
    webhookEndpoints: {
      primary: process.env.STRIPE_WEBHOOK_URL || 'https://api.lepillier.com/webhooks/stripe',
      backup: process.env.STRIPE_WEBHOOK_BACKUP_URL
    }
  };

  // Configurations spécifiques par environnement
  switch (env) {
    case 'production':
      return {
        ...baseConfig,
        environment: 'live',
        limits: {
          maxAmount: 5000000, // 50,000 EUR
          minAmount: 50,      // 0.50 EUR
          maxRefundDays: 90
        }
      };

    case 'staging':
      return {
        ...baseConfig,
        environment: 'test',
        limits: {
          maxAmount: 100000, // 1,000 EUR
          minAmount: 50,
          maxRefundDays: 30
        }
      };

    case 'test':
      return {
        ...baseConfig,
        secretKey: 'sk_test_fake_key_for_testing',
        publishableKey: 'pk_test_fake_key_for_testing',
        webhookSecret: 'whsec_test_fake_webhook_secret',
        environment: 'test'
      };

    default: // development
      return baseConfig;
  }
};

// Plans d'abonnement prédéfinis pour Le Pillier
export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Parfait pour débuter dans l\'immobilier',
    price: 2900, // 29.00 EUR
    currency: 'eur',
    interval: 'month',
    intervalCount: 1,
    trialDays: 14,
    features: [
      'Jusqu\'à 10 mandats par mois',
      'Outils de prospection de base',
      'Support email',
      'Templates de base'
    ],
    metadata: {
      max_mandats: '10',
      tier: 'starter'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Pour les agents immobiliers actifs',
    price: 5900, // 59.00 EUR
    currency: 'eur',
    interval: 'month',
    intervalCount: 1,
    trialDays: 14,
    features: [
      'Mandats illimités',
      'Outils de prospection avancés',
      'CRM intégré',
      'Support prioritaire',
      'Analytics avancées'
    ],
    metadata: {
      max_mandats: 'unlimited',
      tier: 'professional'
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Pour les agences et équipes',
    price: 19900, // 199.00 EUR
    currency: 'eur',
    interval: 'month',
    intervalCount: 1,
    features: [
      'Tout de Professional',
      'Multi-utilisateurs',
      'API access',
      'Support téléphonique',
      'Intégrations personnalisées',
      'Account manager dédié'
    ],
    metadata: {
      max_users: '50',
      tier: 'enterprise'
    }
  }
];

// Classe principale Stripe Service
export class StripeService extends EventEmitter {
  private stripe: Stripe;
  private config: StripeConfig;

  constructor(customConfig?: Partial<StripeConfig>) {
    super();
    this.config = { ...getStripeConfig(), ...customConfig };
    
    if (!this.config.secretKey) {
      throw new Error('Stripe Secret Key requis');
    }

    this.stripe = new Stripe(this.config.secretKey, {
      apiVersion: this.config.apiVersion,
      typescript: true
    });

    console.log(`💳 Stripe Service initialisé (${this.config.environment})`);
  }

  // === GESTION DES CLIENTS ===

  async createCustomer(customerData: {
    email: string;
    name: string;
    phone?: string;
    address?: Stripe.AddressParam;
    metadata?: Record<string, string>;
  }): Promise<Customer> {
    try {
      const stripeCustomer = await this.stripe.customers.create({
        email: customerData.email,
        name: customerData.name,
        phone: customerData.phone,
        address: customerData.address,
        metadata: customerData.metadata || {}
      });

      return {
        id: stripeCustomer.id,
        email: stripeCustomer.email!,
        name: stripeCustomer.name!,
        phone: stripeCustomer.phone || undefined,
        address: stripeCustomer.address || undefined,
        metadata: stripeCustomer.metadata
      };
    } catch (error) {
      console.error('❌ Erreur création client Stripe:', error);
      throw error;
    }
  }

  async getCustomer(customerId: string): Promise<Customer | null> {
    try {
      const stripeCustomer = await this.stripe.customers.retrieve(customerId);
      
      if (stripeCustomer.deleted) {
        return null;
      }

      return {
        id: stripeCustomer.id,
        email: stripeCustomer.email!,
        name: stripeCustomer.name!,
        phone: stripeCustomer.phone || undefined,
        address: stripeCustomer.address || undefined,
        metadata: stripeCustomer.metadata,
        defaultPaymentMethod: stripeCustomer.invoice_settings.default_payment_method as string || undefined
      };
    } catch (error) {
      console.error('❌ Erreur récupération client:', error);
      return null;
    }
  }

  async updateCustomer(customerId: string, updateData: Partial<{
    email: string;
    name: string;
    phone: string;
    address: Stripe.AddressParam;
    metadata: Record<string, string>;
  }>): Promise<Customer> {
    try {
      const stripeCustomer = await this.stripe.customers.update(customerId, updateData);

      return {
        id: stripeCustomer.id,
        email: stripeCustomer.email!,
        name: stripeCustomer.name!,
        phone: stripeCustomer.phone || undefined,
        address: stripeCustomer.address || undefined,
        metadata: stripeCustomer.metadata
      };
    } catch (error) {
      console.error('❌ Erreur mise à jour client:', error);
      throw error;
    }
  }

  // === GESTION DES PAIEMENTS ===

  async createPaymentIntent(paymentData: {
    amount: number;
    currency?: string;
    customerId?: string;
    description?: string;
    metadata?: Record<string, string>;
    paymentMethodTypes?: string[];
  }): Promise<PaymentIntent> {
    try {
      // Validation des montants
      if (paymentData.amount < this.config.limits.minAmount) {
        throw new Error(`Montant minimum: ${this.config.limits.minAmount / 100} ${this.config.currency.toUpperCase()}`);
      }
      if (paymentData.amount > this.config.limits.maxAmount) {
        throw new Error(`Montant maximum: ${this.config.limits.maxAmount / 100} ${this.config.currency.toUpperCase()}`);
      }

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: paymentData.amount,
        currency: paymentData.currency || this.config.currency,
        customer: paymentData.customerId,
        description: paymentData.description,
        metadata: paymentData.metadata || {},
        payment_method_types: paymentData.paymentMethodTypes || ['card'],
        automatic_payment_methods: {
          enabled: true
        }
      });

      return {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        clientSecret: paymentIntent.client_secret!,
        customerId: paymentIntent.customer as string || undefined,
        metadata: paymentIntent.metadata
      };
    } catch (error) {
      console.error('❌ Erreur création PaymentIntent:', error);
      throw error;
    }
  }

  async confirmPaymentIntent(paymentIntentId: string): Promise<PaymentIntent> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);

      return {
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        clientSecret: paymentIntent.client_secret!,
        customerId: paymentIntent.customer as string || undefined,
        metadata: paymentIntent.metadata
      };
    } catch (error) {
      console.error('❌ Erreur confirmation PaymentIntent:', error);
      throw error;
    }
  }

  async refundPayment(paymentIntentId: string, amount?: number, reason?: string): Promise<Stripe.Refund> {
    try {
      const refund = await this.stripe.refunds.create({
        payment_intent: paymentIntentId,
        amount: amount,
        reason: reason as Stripe.RefundCreateParams.Reason,
        metadata: {
          refund_date: new Date().toISOString(),
          refunded_by: 'system'
        }
      });

      console.log(`✅ Remboursement créé: ${refund.id} (${refund.amount / 100} ${refund.currency.toUpperCase()})`);
      return refund;
    } catch (error) {
      console.error('❌ Erreur remboursement:', error);
      throw error;
    }
  }

  // === GESTION DES ABONNEMENTS ===

  async createSubscription(subscriptionData: {
    customerId: string;
    planId: string;
    trialDays?: number;
    metadata?: Record<string, string>;
  }): Promise<Subscription> {
    try {
      const plan = SUBSCRIPTION_PLANS.find(p => p.id === subscriptionData.planId);
      if (!plan) {
        throw new Error(`Plan d'abonnement ${subscriptionData.planId} non trouvé`);
      }

      // Créer ou récupérer le produit Stripe
      let product;
      try {
        product = await this.stripe.products.retrieve(plan.id);
      } catch {
        product = await this.stripe.products.create({
          id: plan.id,
          name: plan.name,
          description: plan.description,
          metadata: plan.metadata
        });
      }

      // Créer ou récupérer le prix
      let price;
      try {
        const prices = await this.stripe.prices.list({
          product: product.id,
          active: true
        });
        price = prices.data[0];
      } catch {
        price = await this.stripe.prices.create({
          product: product.id,
          unit_amount: plan.price,
          currency: plan.currency,
          recurring: {
            interval: plan.interval,
            interval_count: plan.intervalCount
          }
        });
      }

      const subscription = await this.stripe.subscriptions.create({
        customer: subscriptionData.customerId,
        items: [{ price: price.id }],
        trial_period_days: subscriptionData.trialDays || plan.trialDays,
        metadata: subscriptionData.metadata || {},
        expand: ['latest_invoice.payment_intent']
      });

      return {
        id: subscription.id,
        customerId: subscription.customer as string,
        planId: subscriptionData.planId,
        status: subscription.status,
        currentPeriodStart: subscription.current_period_start,
        currentPeriodEnd: subscription.current_period_end,
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        trialEnd: subscription.trial_end || undefined,
        metadata: subscription.metadata
      };
    } catch (error) {
      console.error('❌ Erreur création abonnement:', error);
      throw error;
    }
  }

  async cancelSubscription(subscriptionId: string, immediately: boolean = false): Promise<Subscription> {
    try {
      const subscription = immediately
        ? await this.stripe.subscriptions.cancel(subscriptionId)
        : await this.stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: true
          });

      return {
        id: subscription.id,
        customerId: subscription.customer as string,
        planId: subscription.metadata.planId || 'unknown',
        status: subscription.status,
        currentPeriodStart: subscription.current_period_start,
        currentPeriodEnd: subscription.current_period_end,
        cancelAtPeriodEnd: subscription.cancel_at_period_end,
        trialEnd: subscription.trial_end || undefined,
        metadata: subscription.metadata
      };
    } catch (error) {
      console.error('❌ Erreur annulation abonnement:', error);
      throw error;
    }
  }

  async updateSubscription(subscriptionId: string, newPlanId: string): Promise<Subscription> {
    try {
      const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
      const newPlan = SUBSCRIPTION_PLANS.find(p => p.id === newPlanId);
      
      if (!newPlan) {
        throw new Error(`Plan ${newPlanId} non trouvé`);
      }

      // Créer le nouveau prix si nécessaire
      const prices = await this.stripe.prices.list({
        product: newPlanId,
        active: true
      });

      let newPrice = prices.data[0];
      if (!newPrice) {
        // Créer le produit et le prix
        await this.stripe.products.create({
          id: newPlanId,
          name: newPlan.name,
          description: newPlan.description
        });

        newPrice = await this.stripe.prices.create({
          product: newPlanId,
          unit_amount: newPlan.price,
          currency: newPlan.currency,
          recurring: {
            interval: newPlan.interval,
            interval_count: newPlan.intervalCount
          }
        });
      }

      const updatedSubscription = await this.stripe.subscriptions.update(subscriptionId, {
        items: [{
          id: subscription.items.data[0].id,
          price: newPrice.id
        }],
        proration_behavior: 'create_prorations'
      });

      return {
        id: updatedSubscription.id,
        customerId: updatedSubscription.customer as string,
        planId: newPlanId,
        status: updatedSubscription.status,
        currentPeriodStart: updatedSubscription.current_period_start,
        currentPeriodEnd: updatedSubscription.current_period_end,
        cancelAtPeriodEnd: updatedSubscription.cancel_at_period_end,
        trialEnd: updatedSubscription.trial_end || undefined,
        metadata: updatedSubscription.metadata
      };
    } catch (error) {
      console.error('❌ Erreur mise à jour abonnement:', error);
      throw error;
    }
  }

  // === GESTION DES FACTURES ===

  async createInvoice(invoiceData: {
    customerId: string;
    items: Array<{
      description: string;
      amount: number;
      quantity?: number;
    }>;
    dueDate?: number;
    metadata?: Record<string, string>;
  }): Promise<Invoice> {
    try {
      const invoice = await this.stripe.invoices.create({
        customer: invoiceData.customerId,
        due_date: invoiceData.dueDate,
        metadata: invoiceData.metadata || {},
        auto_advance: false
      });

      // Ajouter les items à la facture
      for (const item of invoiceData.items) {
        await this.stripe.invoiceItems.create({
          customer: invoiceData.customerId,
          invoice: invoice.id,
          amount: item.amount,
          currency: this.config.currency,
          description: item.description,
          quantity: item.quantity || 1
        });
      }

      // Finaliser la facture
      const finalizedInvoice = await this.stripe.invoices.finalizeInvoice(invoice.id);

      return {
        id: finalizedInvoice.id,
        customerId: finalizedInvoice.customer as string,
        amount: finalizedInvoice.amount_due,
        currency: finalizedInvoice.currency,
        status: finalizedInvoice.status!,
        dueDate: finalizedInvoice.due_date || 0,
        paidAt: finalizedInvoice.status_transitions.paid_at || undefined,
        hostedInvoiceUrl: finalizedInvoice.hosted_invoice_url || undefined,
        invoicePdf: finalizedInvoice.invoice_pdf || undefined
      };
    } catch (error) {
      console.error('❌ Erreur création facture:', error);
      throw error;
    }
  }

  // === WEBHOOKS ===

  async handleWebhook(body: string, signature: string): Promise<void> {
    try {
      const event = this.stripe.webhooks.constructEvent(
        body,
        signature,
        this.config.webhookSecret
      );

      console.log(`🔔 Webhook reçu: ${event.type} (${event.id})`);

      switch (event.type) {
        case 'payment_intent.succeeded':
          await this.handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
          break;
        case 'payment_intent.payment_failed':
          await this.handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
          break;
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          await this.handleSubscriptionChange(event.data.object as Stripe.Subscription);
          break;
        case 'invoice.payment_succeeded':
          await this.handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
          break;
        case 'invoice.payment_failed':
          await this.handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
          break;
        default:
          console.log(`⚠️ Webhook non géré: ${event.type}`);
      }

      this.emit('webhook', event);
    } catch (error) {
      console.error('❌ Erreur traitement webhook:', error);
      throw error;
    }
  }

  private async handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent): Promise<void> {
    console.log(`✅ Paiement réussi: ${paymentIntent.id} (${paymentIntent.amount / 100} ${paymentIntent.currency.toUpperCase()})`);
    this.emit('payment.succeeded', paymentIntent);
  }

  private async handlePaymentFailed(paymentIntent: Stripe.PaymentIntent): Promise<void> {
    console.log(`❌ Paiement échoué: ${paymentIntent.id}`);
    this.emit('payment.failed', paymentIntent);
  }

  private async handleSubscriptionChange(subscription: Stripe.Subscription): Promise<void> {
    console.log(`📝 Abonnement modifié: ${subscription.id} (${subscription.status})`);
    this.emit('subscription.changed', subscription);
  }

  private async handleInvoicePaymentSucceeded(invoice: Stripe.Invoice): Promise<void> {
    console.log(`✅ Facture payée: ${invoice.id}`);
    this.emit('invoice.paid', invoice);
  }

  private async handleInvoicePaymentFailed(invoice: Stripe.Invoice): Promise<void> {
    console.log(`❌ Paiement facture échoué: ${invoice.id}`);
    this.emit('invoice.failed', invoice);
  }

  // === UTILITAIRES ===

  async getBalance(): Promise<Stripe.Balance> {
    return await this.stripe.balance.retrieve();
  }

  async getPayoutSchedule(): Promise<any> {
    const account = await this.stripe.account.retrieve();
    return account.settings?.payouts;
  }

  getConfig(): Omit<StripeConfig, 'secretKey' | 'webhookSecret'> {
    const { secretKey, webhookSecret, ...publicConfig } = this.config;
    return publicConfig;
  }

  // Test de l'API
  async testConnection(): Promise<boolean> {
    try {
      await this.stripe.balance.retrieve();
      console.log('✅ Stripe API opérationnelle');
      return true;
    } catch (error) {
      console.error('❌ Erreur Stripe API:', error);
      return false;
    }
  }

  // Statistiques
  async getStats(): Promise<{
    balance: Stripe.Balance;
    recentPayments: number;
    activeSubscriptions: number;
    totalCustomers: number;
  }> {
    try {
      const [balance, payments, subscriptions, customers] = await Promise.all([
        this.stripe.balance.retrieve(),
        this.stripe.paymentIntents.list({ limit: 100 }),
        this.stripe.subscriptions.list({ status: 'active', limit: 100 }),
        this.stripe.customers.list({ limit: 100 })
      ]);

      return {
        balance,
        recentPayments: payments.data.length,
        activeSubscriptions: subscriptions.data.length,
        totalCustomers: customers.data.length
      };
    } catch (error) {
      console.error('❌ Erreur récupération stats Stripe:', error);
      throw error;
    }
  }
}

// Instance globale
let stripeServiceInstance: StripeService | null = null;

// Factory function
export const getStripeService = (customConfig?: Partial<StripeConfig>): StripeService => {
  if (!stripeServiceInstance || customConfig) {
    stripeServiceInstance = new StripeService(customConfig);
  }
  return stripeServiceInstance;
};

// Initialisation avec test
export const initializeStripeService = async (customConfig?: Partial<StripeConfig>): Promise<StripeService> => {
  console.log('💳 Initialisation Stripe Service...');
  
  const stripeService = getStripeService(customConfig);
  
  // Test de connexion
  const isWorking = await stripeService.testConnection();
  if (!isWorking) {
    console.warn('⚠️ Stripe API non disponible');
  }

  console.log('✅ Stripe Service initialisé');
  return stripeService;
};

// Middleware Express pour Stripe
export const stripeMiddleware = (req: any, res: any, next: any) => {
  req.stripe = getStripeService();
  next();
};

// Export par défaut
export default getStripeService;