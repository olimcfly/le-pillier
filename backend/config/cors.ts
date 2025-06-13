/**
 * Configuration CORS pour Le Pillier
 * Gestion des origines autorisées et sécurité des requêtes cross-origin
 */

import { CorsOptions } from 'cors';

// Types pour la configuration
interface Environment {
  NODE_ENV: string;
  FRONTEND_URL?: string;
  ADMIN_URL?: string;
  CORS_ORIGIN?: string;
  ALLOWED_ORIGINS?: string;
}

// Configuration des environnements
const getEnvironmentConfig = (): Environment => {
  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
    ADMIN_URL: process.env.ADMIN_URL || 'http://localhost:3001',
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS
  };
};

// Origines autorisées par environnement
const getAllowedOrigins = (): string[] => {
  const env = getEnvironmentConfig();
  
  // Origines par défaut
  const defaultOrigins = [
    env.FRONTEND_URL!,
    env.ADMIN_URL!,
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8080'
  ];

  // Production - origines spécifiques
  const productionOrigins = [
    'https://lepillier.com',
    'https://app.lepillier.com',
    'https://admin.lepillier.com',
    'https://api.lepillier.com',
    'https://www.lepillier.com'
  ];

  // Développement - origines locales
  const developmentOrigins = [
    ...defaultOrigins,
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:8080',
    'http://localhost:4173', // Vite preview
    'http://localhost:3002'  // Tests
  ];

  // Staging - origines de test
  const stagingOrigins = [
    'https://staging.lepillier.com',
    'https://staging-app.lepillier.com',
    'https://staging-admin.lepillier.com',
    ...developmentOrigins
  ];

  // Origines personnalisées depuis les variables d'environnement
  let customOrigins: string[] = [];
  if (env.ALLOWED_ORIGINS) {
    customOrigins = env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim());
  }

  // Sélection selon l'environnement
  switch (env.NODE_ENV) {
    case 'production':
      return [...productionOrigins, ...customOrigins];
    case 'staging':
      return [...stagingOrigins, ...customOrigins];
    case 'test':
      return [...developmentOrigins, 'http://localhost:0']; // Port dynamique pour tests
    default: // development
      return [...developmentOrigins, ...customOrigins];
  }
};

// Fonction de validation d'origine personnalisée
const corsOriginValidator = (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
  const allowedOrigins = getAllowedOrigins();
  const env = getEnvironmentConfig();
  
  // Autoriser les requêtes sans origine (applications mobiles, Postman, etc.)
  if (!origin) {
    // En production, bloquer les requêtes sans origine sauf si explicitement autorisé
    if (env.NODE_ENV === 'production' && !process.env.ALLOW_NO_ORIGIN) {
      return callback(new Error('Origine requise en production'));
    }
    return callback(null, true);
  }

  // Vérifier si l'origine est dans la liste autorisée
  if (allowedOrigins.includes(origin)) {
    return callback(null, true);
  }

  // En développement, autoriser localhost avec des ports dynamiques
  if (env.NODE_ENV === 'development') {
    const localhostRegex = /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)$/;
    if (localhostRegex.test(origin)) {
      return callback(null, true);
    }
  }

  // Log des tentatives d'accès non autorisées
  console.warn(`🚫 CORS: Origine non autorisée: ${origin}`);
  console.warn(`📝 Origines autorisées:`, allowedOrigins);
  
  return callback(new Error(`Origine CORS non autorisée: ${origin}`));
};

// Configuration CORS principale
export const corsOptions: CorsOptions = {
  // Validation des origines
  origin: corsOriginValidator,
  
  // Méthodes HTTP autorisées
  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
    'OPTIONS',
    'HEAD'
  ],
  
  // Headers autorisés
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control',
    'X-API-Key',
    'X-Client-Version',
    'X-Request-ID',
    'X-Forwarded-For',
    'User-Agent'
  ],
  
  // Headers exposés au client
  exposedHeaders: [
    'X-Total-Count',
    'X-Page-Count',
    'X-Rate-Limit-Remaining',
    'X-Rate-Limit-Reset',
    'X-API-Version',
    'Location'
  ],
  
  // Autoriser l'envoi de cookies/credentials
  credentials: true,
  
  // Cache des réponses preflight (OPTIONS)
  maxAge: 86400, // 24 heures
  
  // Gérer automatiquement les requêtes OPTIONS
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Configuration CORS pour les WebSockets
export const websocketCorsOptions = {
  origin: getAllowedOrigins(),
  credentials: true
};

// Configuration CORS stricte pour les endpoints d'administration
export const adminCorsOptions: CorsOptions = {
  ...corsOptions,
  origin: (origin: string | undefined, callback) => {
    const allowedOrigins = getAllowedOrigins();
    const adminOrigins = allowedOrigins.filter(url => 
      url.includes('admin') || 
      url.includes('localhost:3001') ||
      url.includes('127.0.0.1:3001')
    );
    
    if (!origin) {
      return callback(new Error('Origine requise pour les endpoints admin'));
    }
    
    if (adminOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    console.warn(`🚫 ADMIN CORS: Tentative d'accès non autorisée depuis: ${origin}`);
    return callback(new Error(`Accès admin non autorisé depuis: ${origin}`));
  }
};

// Configuration CORS publique (moins restrictive)
export const publicCorsOptions: CorsOptions = {
  ...corsOptions,
  origin: true, // Autoriser toutes les origines pour les endpoints publics
  credentials: false // Pas de cookies pour les endpoints publics
};

// Utilitaire pour logs et debugging
export const logCorsConfig = () => {
  const env = getEnvironmentConfig();
  const allowedOrigins = getAllowedOrigins();
  
  console.log('🌐 Configuration CORS initialisée:');
  console.log(`📍 Environnement: ${env.NODE_ENV}`);
  console.log(`🎯 Origines autorisées (${allowedOrigins.length}):`);
  allowedOrigins.forEach((origin, index) => {
    console.log(`   ${index + 1}. ${origin}`);
  });
  console.log(`🍪 Credentials: ${corsOptions.credentials ? 'Activés' : 'Désactivés'}`);
  console.log(`⏱️  Cache preflight: ${corsOptions.maxAge}s`);
};

// Middleware de logging CORS pour debugging
export const corsLogger = (req: any, res: any, next: any) => {
  const origin = req.get('Origin');
  const method = req.method;
  
  if (method === 'OPTIONS') {
    console.log(`🔄 CORS Preflight: ${method} ${req.path} depuis ${origin || 'sans origine'}`);
  } else if (origin) {
    console.log(`📡 CORS Request: ${method} ${req.path} depuis ${origin}`);
  }
  
  next();
};

// Export de la configuration par défaut
export default corsOptions;

// Types utiles pour TypeScript
export interface CorsError extends Error {
  status?: number;
  code?: string;
}

// Fonction d'aide pour valider une origine manuellement
export const isOriginAllowed = (origin: string): boolean => {
  const allowedOrigins = getAllowedOrigins();
  return allowedOrigins.includes(origin);
};

// Configuration pour des domaines spécifiques
export const createDomainSpecificCors = (allowedDomains: string[]): CorsOptions => {
  return {
    ...corsOptions,
    origin: (origin: string | undefined, callback) => {
      if (!origin || allowedDomains.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`Domaine non autorisé: ${origin}`));
    }
  };
};