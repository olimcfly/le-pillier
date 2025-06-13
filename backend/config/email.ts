/**
 * Configuration Email pour Le Pillier
 * Gestion SMTP, templates, campagnes marketing et transactionnels
 */

import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { readFileSync } from 'fs';
import { join } from 'path';

// Types pour la configuration email
export interface EmailConfig {
  smtp: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
    tls?: {
      rejectUnauthorized: boolean;
    };
  };
  from: {
    name: string;
    address: string;
  };
  replyTo?: {
    name: string;
    address: string;
  };
  templates: {
    path: string;
  };
  queue: {
    enabled: boolean;
    maxRetries: number;
    retryDelay: number;
  };
  tracking: {
    enabled: boolean;
    domain: string;
  };
  limits: {
    daily: number;
    hourly: number;
    perMinute: number;
  };
}

// Configuration par environnement
const getEmailConfig = (): EmailConfig => {
  const env = process.env.NODE_ENV || 'development';
  
  const baseConfig: EmailConfig = {
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'noreply@lepillier.com',
        pass: process.env.SMTP_PASS || 'your-app-password'
      },
      tls: {
        rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false'
      }
    },
    from: {
      name: process.env.EMAIL_FROM_NAME || 'Le Pillier',
      address: process.env.EMAIL_FROM_ADDRESS || 'noreply@lepillier.com'
    },
    replyTo: {
      name: process.env.EMAIL_REPLY_TO_NAME || 'Support Le Pillier',
      address: process.env.EMAIL_REPLY_TO_ADDRESS || 'support@lepillier.com'
    },
    templates: {
      path: process.env.EMAIL_TEMPLATES_PATH || './src/templates/emails'
    },
    queue: {
      enabled: process.env.EMAIL_QUEUE_ENABLED === 'true',
      maxRetries: parseInt(process.env.EMAIL_MAX_RETRIES || '3'),
      retryDelay: parseInt(process.env.EMAIL_RETRY_DELAY || '60000')
    },
    tracking: {
      enabled: process.env.EMAIL_TRACKING_ENABLED === 'true',
      domain: process.env.EMAIL_TRACKING_DOMAIN || 'lepillier.com'
    },
    limits: {
      daily: parseInt(process.env.EMAIL_DAILY_LIMIT || '10000'),
      hourly: parseInt(process.env.EMAIL_HOURLY_LIMIT || '500'),
      perMinute: parseInt(process.env.EMAIL_PER_MINUTE_LIMIT || '10')
    }
  };

  // Configurations spécifiques par environnement
  switch (env) {
    case 'production':
      return {
        ...baseConfig,
        smtp: {
          ...baseConfig.smtp,
          host: process.env.SMTP_HOST || 'smtp.sendgrid.net',
          port: 587,
          secure: false
        },
        queue: {
          ...baseConfig.queue,
          enabled: true
        },
        tracking: {
          ...baseConfig.tracking,
          enabled: true
        }
      };

    case 'staging':
      return {
        ...baseConfig,
        limits: {
          daily: 1000,
          hourly: 100,
          perMinute: 5
        }
      };

    case 'test':
      return {
        ...baseConfig,
        smtp: {
          ...baseConfig.smtp,
          host: 'localhost',
          port: 1025, // MailHog ou service de test
          secure: false,
          auth: {
            user: '',
            pass: ''
          }
        },
        queue: {
          ...baseConfig.queue,
          enabled: false
        }
      };

    default: // development
      return baseConfig;
  }
};

// Types pour les emails
export interface EmailAddress {
  name?: string;
  address: string;
}

export interface EmailAttachment {
  filename: string;
  path?: string;
  content?: Buffer | string;
  contentType?: string;
  cid?: string; // Pour les images inline
}

export interface EmailOptions {
  to: EmailAddress | EmailAddress[] | string;
  cc?: EmailAddress | EmailAddress[] | string;
  bcc?: EmailAddress | EmailAddress[] | string;
  subject: string;
  text?: string;
  html?: string;
  template?: string;
  templateData?: any;
  attachments?: EmailAttachment[];
  priority?: 'high' | 'normal' | 'low';
  category?: string;
  tags?: string[];
  customHeaders?: { [key: string]: string };
}

// Classe principale de gestion des emails
export class EmailService {
  private transporter: Transporter;
  private config: EmailConfig;
  private sentCount: { [key: string]: number } = {};
  private templates: Map<string, string> = new Map();

  constructor(customConfig?: Partial<EmailConfig>) {
    this.config = { ...getEmailConfig(), ...customConfig };
    this.initializeTransporter();
    this.loadTemplates();
    this.initializeRateLimiting();
  }

  private initializeTransporter() {
    const transportConfig: SMTPTransport.Options = {
      host: this.config.smtp.host,
      port: this.config.smtp.port,
      secure: this.config.smtp.secure,
      auth: this.config.smtp.auth,
      tls: this.config.smtp.tls,
      pool: true, // Utiliser un pool de connexions
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 60000, // 1 minute
      rateLimit: this.config.limits.perMinute
    };

    this.transporter = nodemailer.createTransporter(transportConfig);

    // Événements du transporter
    this.transporter.on('token', (token) => {
      console.log('🔑 Token OAuth2 actualisé:', token.user);
    });

    this.transporter.on('idle', () => {
      console.log('⏸️ Transporter email en attente');
    });
  }

  private loadTemplates() {
    try {
      const templatesPath = this.config.templates.path;
      
      // Templates de base
      const baseTemplates = [
        'welcome',
        'reset-password',
        'email-verification',
        'newsletter',
        'campaign',
        'notification',
        'invoice',
        'appointment-confirmation'
      ];

      baseTemplates.forEach(templateName => {
        try {
          const templatePath = join(templatesPath, `${templateName}.html`);
          const templateContent = readFileSync(templatePath, 'utf8');
          this.templates.set(templateName, templateContent);
        } catch (error) {
          console.warn(`⚠️ Template ${templateName} non trouvé, utilisation du template par défaut`);
          this.templates.set(templateName, this.getDefaultTemplate(templateName));
        }
      });

      console.log(`📧 ${this.templates.size} templates email chargés`);
    } catch (error) {
      console.error('❌ Erreur lors du chargement des templates:', error);
    }
  }

  private initializeRateLimiting() {
    // Réinitialiser les compteurs périodiquement
    setInterval(() => {
      this.sentCount = {};
    }, 60000); // Toutes les minutes
  }

  private getDefaultTemplate(templateName: string): string {
    const defaultTemplates: { [key: string]: string } = {
      'welcome': `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #2563eb;">Bienvenue chez Le Pillier ! 🏠</h1>
              <p>Bonjour {{name}},</p>
              <p>Nous sommes ravis de vous accueillir dans notre communauté d'agents immobiliers.</p>
              <p>Votre compte a été créé avec succès. Vous pouvez maintenant accéder à tous nos outils.</p>
              <a href="{{loginUrl}}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 20px 0;">
                Accéder à mon compte
              </a>
              <p>Cordialement,<br>L'équipe Le Pillier</p>
            </div>
          </body>
        </html>
      `,
      'reset-password': `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #dc2626;">Réinitialisation de mot de passe 🔒</h1>
              <p>Bonjour {{name}},</p>
              <p>Vous avez demandé la réinitialisation de votre mot de passe.</p>
              <p>Cliquez sur le lien ci-dessous pour créer un nouveau mot de passe :</p>
              <a href="{{resetUrl}}" style="display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 20px 0;">
                Réinitialiser mon mot de passe
              </a>
              <p>Ce lien expire dans 24 heures.</p>
              <p>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
            </div>
          </body>
        </html>
      `,
      'newsletter': `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #2563eb;">Newsletter Le Pillier 📰</h1>
              <p>Bonjour {{name}},</p>
              <div style="margin: 20px 0;">
                {{content}}
              </div>
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #666;">
                Vous recevez cet email car vous êtes abonné à notre newsletter.
                <a href="{{unsubscribeUrl}}">Se désabonner</a>
              </p>
            </div>
          </body>
        </html>
      `
    };

    return defaultTemplates[templateName] || defaultTemplates['welcome'];
  }

  private renderTemplate(templateName: string, data: any): string {
    const template = this.templates.get(templateName);
    if (!template) {
      throw new Error(`Template ${templateName} non trouvé`);
    }

    // Simple template engine (remplacer {{variable}} par les valeurs)
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return data[key] || match;
    });
  }

  private checkRateLimit(): boolean {
    const now = Date.now();
    const currentMinute = Math.floor(now / 60000);
    const currentHour = Math.floor(now / 3600000);
    const currentDay = Math.floor(now / 86400000);

    const minuteKey = `minute_${currentMinute}`;
    const hourKey = `hour_${currentHour}`;
    const dayKey = `day_${currentDay}`;

    const minuteCount = this.sentCount[minuteKey] || 0;
    const hourCount = this.sentCount[hourKey] || 0;
    const dayCount = this.sentCount[dayKey] || 0;

    if (minuteCount >= this.config.limits.perMinute) {
      throw new Error('Limite d\'envoi par minute dépassée');
    }
    if (hourCount >= this.config.limits.hourly) {
      throw new Error('Limite d\'envoi par heure dépassée');
    }
    if (dayCount >= this.config.limits.daily) {
      throw new Error('Limite d\'envoi quotidienne dépassée');
    }

    // Incrémenter les compteurs
    this.sentCount[minuteKey] = minuteCount + 1;
    this.sentCount[hourKey] = hourCount + 1;
    this.sentCount[dayKey] = dayCount + 1;

    return true;
  }

  async sendEmail(options: EmailOptions): Promise<any> {
    try {
      // Vérifier les limites de taux
      this.checkRateLimit();

      // Préparer les options d'envoi
      const mailOptions: SendMailOptions = {
        from: `${this.config.from.name} <${this.config.from.address}>`,
        to: options.to,
        cc: options.cc,
        bcc: options.bcc,
        subject: options.subject,
        text: options.text,
        html: options.html,
        attachments: options.attachments,
        priority: options.priority,
        headers: options.customHeaders
      };

      // Si un template est spécifié, l'utiliser
      if (options.template) {
        const renderedHtml = this.renderTemplate(options.template, options.templateData || {});
        mailOptions.html = renderedHtml;
      }

      // Ajouter replyTo si configuré
      if (this.config.replyTo) {
        mailOptions.replyTo = `${this.config.replyTo.name} <${this.config.replyTo.address}>`;
      }

      // Ajouter le tracking si activé
      if (this.config.tracking.enabled) {
        const trackingPixel = `<img src="https://${this.config.tracking.domain}/track/open.gif?id={{trackingId}}" width="1" height="1" style="display:none;">`;
        if (mailOptions.html) {
          mailOptions.html += trackingPixel;
        }
      }

      // Envoyer l'email
      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('✅ Email envoyé avec succès:', {
        messageId: result.messageId,
        to: options.to,
        subject: options.subject,
        category: options.category
      });

      return result;
    } catch (error) {
      console.error('❌ Erreur envoi email:', error);
      throw error;
    }
  }

  // Méthodes spécialisées pour différents types d'emails
  async sendWelcomeEmail(to: string, userData: any) {
    return await this.sendEmail({
      to,
      subject: 'Bienvenue chez Le Pillier !',
      template: 'welcome',
      templateData: userData,
      category: 'welcome'
    });
  }

  async sendPasswordResetEmail(to: string, resetData: any) {
    return await this.sendEmail({
      to,
      subject: 'Réinitialisation de votre mot de passe',
      template: 'reset-password',
      templateData: resetData,
      category: 'password-reset'
    });
  }

  async sendNewsletterEmail(to: string | string[], newsletterData: any) {
    return await this.sendEmail({
      to,
      subject: newsletterData.subject || 'Newsletter Le Pillier',
      template: 'newsletter',
      templateData: newsletterData,
      category: 'newsletter'
    });
  }

  async sendCampaignEmail(to: string | string[], campaignData: any) {
    return await this.sendEmail({
      to,
      subject: campaignData.subject,
      template: 'campaign',
      templateData: campaignData,
      category: 'marketing',
      tags: campaignData.tags
    });
  }

  // Envoi en masse avec gestion des erreurs
  async sendBulkEmails(emails: EmailOptions[]): Promise<{
    success: number;
    failed: number;
    errors: any[];
  }> {
    const results = {
      success: 0,
      failed: 0,
      errors: [] as any[]
    };

    for (const email of emails) {
      try {
        await this.sendEmail(email);
        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push({
          email: email.to,
          error: error instanceof Error ? error.message : 'Erreur inconnue'
        });
      }
      
      // Petit délai pour éviter de surcharger le serveur SMTP
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return results;
  }

  // Test de la configuration
  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Configuration email vérifiée avec succès');
      return true;
    } catch (error) {
      console.error('❌ Erreur de configuration email:', error);
      return false;
    }
  }

  // Statistiques
  getStats() {
    return {
      config: {
        host: this.config.smtp.host,
        port: this.config.smtp.port,
        secure: this.config.smtp.secure,
        from: this.config.from
      },
      templates: Array.from(this.templates.keys()),
      limits: this.config.limits,
      sentCount: this.sentCount
    };
  }

  // Fermeture propre
  async close() {
    this.transporter.close();
    console.log('🔒 Service email fermé');
  }
}

// Instance globale
let emailServiceInstance: EmailService | null = null;

// Factory function
export const getEmailService = (customConfig?: Partial<EmailConfig>): EmailService => {
  if (!emailServiceInstance || customConfig) {
    emailServiceInstance = new EmailService(customConfig);
  }
  return emailServiceInstance;
};

// Initialisation avec test de connexion
export const initializeEmailService = async (customConfig?: Partial<EmailConfig>): Promise<EmailService> => {
  console.log('📧 Initialisation du service email...');
  
  const emailService = getEmailService(customConfig);
  
  // Test de connexion
  const isConnected = await emailService.testConnection();
  if (!isConnected) {
    console.warn('⚠️ Service email non disponible, fonctionnement en mode dégradé');
  }

  console.log('✅ Service email initialisé');
  return emailService;
};

// Middleware Express pour les emails
export const emailMiddleware = (req: any, res: any, next: any) => {
  req.emailService = getEmailService();
  next();
};

// Export par défaut
export default getEmailService;