/**
 * Configuration Redis pour Le Pillier
 * Cache, sessions, queues, et pub/sub
 */

import Redis, { RedisOptions, Cluster } from 'ioredis';
import { EventEmitter } from 'events';

// Types pour la configuration Redis
export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  database: number;
  username?: string;
  tls?: boolean;
  connectTimeout: number;
  lazyConnect: boolean;
  maxRetriesPerRequest: number;
  retryDelayOnFailover: number;
  enableOfflineQueue: boolean;
  cluster?: {
    enabled: boolean;
    nodes: Array<{ host: string; port: number }>;
    options?: any;
  };
  sentinel?: {
    enabled: boolean;
    name: string;
    sentinels: Array<{ host: string; port: number }>;
  };
  keyPrefix: string;
  ttl: {
    default: number;
    short: number;
    medium: number;
    long: number;
  };
  pool: {
    min: number;
    max: number;
  };
}

// Types pour les opérations Redis
export interface CacheItem<T = any> {
  value: T;
  timestamp: number;
  ttl: number;
  tags?: string[];
}

export interface QueueJob {
  id: string;
  type: string;
  data: any;
  priority: number;
  attempts: number;
  maxAttempts: number;
  delay?: number;
  createdAt: number;
  processedAt?: number;
  completedAt?: number;
  failedAt?: number;
  error?: string;
}

export interface SessionData {
  userId: string;
  role: string;
  email: string;
  name: string;
  permissions: string[];
  createdAt: number;
  lastActivity: number;
  ipAddress: string;
  userAgent: string;
}

// Configuration par environnement
const getRedisConfig = (): RedisConfig => {
  const env = process.env.NODE_ENV || 'development';
  
  const baseConfig: RedisConfig = {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
    password: process.env.REDIS_PASSWORD,
    database: parseInt(process.env.REDIS_DB || '0'),
    username: process.env.REDIS_USERNAME,
    tls: process.env.REDIS_TLS === 'true',
    connectTimeout: parseInt(process.env.REDIS_CONNECT_TIMEOUT || '10000'),
    lazyConnect: true,
    maxRetriesPerRequest: parseInt(process.env.REDIS_MAX_RETRIES || '3'),
    retryDelayOnFailover: parseInt(process.env.REDIS_RETRY_DELAY || '100'),
    enableOfflineQueue: false,
    keyPrefix: process.env.REDIS_KEY_PREFIX || 'lepillier:',
    ttl: {
      default: parseInt(process.env.REDIS_TTL_DEFAULT || '3600'), // 1 heure
      short: parseInt(process.env.REDIS_TTL_SHORT || '300'),     // 5 minutes
      medium: parseInt(process.env.REDIS_TTL_MEDIUM || '1800'),  // 30 minutes
      long: parseInt(process.env.REDIS_TTL_LONG || '86400')      // 24 heures
    },
    pool: {
      min: parseInt(process.env.REDIS_POOL_MIN || '1'),
      max: parseInt(process.env.REDIS_POOL_MAX || '10')
    }
  };

  // Cluster configuration
  if (process.env.REDIS_CLUSTER_ENABLED === 'true') {
    baseConfig.cluster = {
      enabled: true,
      nodes: (process.env.REDIS_CLUSTER_NODES || 'localhost:6379')
        .split(',')
        .map(node => {
          const [host, port] = node.trim().split(':');
          return { host, port: parseInt(port) };
        }),
      options: {
        redisOptions: {
          password: baseConfig.password,
          username: baseConfig.username
        }
      }
    };
  }

  // Sentinel configuration
  if (process.env.REDIS_SENTINEL_ENABLED === 'true') {
    baseConfig.sentinel = {
      enabled: true,
      name: process.env.REDIS_SENTINEL_NAME || 'mymaster',
      sentinels: (process.env.REDIS_SENTINEL_NODES || 'localhost:26379')
        .split(',')
        .map(node => {
          const [host, port] = node.trim().split(':');
          return { host, port: parseInt(port) };
        })
    };
  }

  // Configurations spécifiques par environnement
  switch (env) {
    case 'production':
      return {
        ...baseConfig,
        host: process.env.REDIS_HOST || 'redis-prod.lepillier.com',
        database: 0,
        tls: true,
        pool: {
          min: 5,
          max: 50
        },
        ttl: {
          ...baseConfig.ttl,
          long: 604800 // 7 jours en production
        }
      };

    case 'staging':
      return {
        ...baseConfig,
        host: process.env.REDIS_HOST || 'redis-staging.lepillier.com',
        database: 1,
        pool: {
          min: 2,
          max: 20
        }
      };

    case 'test':
      return {
        ...baseConfig,
        host: 'localhost',
        port: 6380, // Port différent pour les tests
        database: 15, // DB de test
        keyPrefix: 'test:lepillier:',
        ttl: {
          default: 60,
          short: 10,
          medium: 30,
          long: 300
        }
      };

    default: // development
      return {
        ...baseConfig,
        database: 0,
        pool: {
          min: 1,
          max: 5
        }
      };
  }
};

// Classe principale Redis Service
export class RedisService extends EventEmitter {
  private client: Redis | Cluster;
  private subscriber: Redis | Cluster;
  private publisher: Redis | Cluster;
  private config: RedisConfig;
  private isConnected: boolean = false;
  private connectionAttempts: number = 0;
  private maxConnectionAttempts: number = 5;

  constructor(customConfig?: Partial<RedisConfig>) {
    super();
    this.config = { ...getRedisConfig(), ...customConfig };
    this.initializeClients();
  }

  private initializeClients() {
    const redisOptions: RedisOptions = {
      host: this.config.host,
      port: this.config.port,
      password: this.config.password,
      db: this.config.database,
      username: this.config.username,
      connectTimeout: this.config.connectTimeout,
      lazyConnect: this.config.lazyConnect,
      maxRetriesPerRequest: this.config.maxRetriesPerRequest,
      retryDelayOnFailover: this.config.retryDelayOnFailover,
      enableOfflineQueue: this.config.enableOfflineQueue,
      keyPrefix: this.config.keyPrefix,
      tls: this.config.tls ? {} : undefined
    };

    // Initialisation des clients selon la configuration
    if (this.config.cluster?.enabled) {
      this.client = new Redis.Cluster(this.config.cluster.nodes, this.config.cluster.options);
      this.subscriber = new Redis.Cluster(this.config.cluster.nodes, this.config.cluster.options);
      this.publisher = new Redis.Cluster(this.config.cluster.nodes, this.config.cluster.options);
    } else if (this.config.sentinel?.enabled) {
      const sentinelOptions = {
        ...redisOptions,
        sentinels: this.config.sentinel.sentinels,
        name: this.config.sentinel.name
      };
      this.client = new Redis(sentinelOptions);
      this.subscriber = new Redis(sentinelOptions);
      this.publisher = new Redis(sentinelOptions);
    } else {
      this.client = new Redis(redisOptions);
      this.subscriber = new Redis(redisOptions);
      this.publisher = new Redis(redisOptions);
    }

    this.setupEventHandlers();
  }

  private setupEventHandlers() {
    // Événements du client principal
    this.client.on('connect', () => {
      console.log('✅ Redis client connecté');
      this.isConnected = true;
      this.connectionAttempts = 0;
      this.emit('connected');
    });

    this.client.on('error', (error) => {
      console.error('❌ Erreur Redis client:', error);
      this.isConnected = false;
      this.emit('error', error);
    });

    this.client.on('close', () => {
      console.log('🔒 Connexion Redis fermée');
      this.isConnected = false;
      this.emit('disconnected');
    });

    this.client.on('reconnecting', () => {
      console.log('🔄 Reconnexion Redis...');
      this.connectionAttempts++;
      this.emit('reconnecting', this.connectionAttempts);
    });

    // Événements du subscriber
    this.subscriber.on('message', (channel, message) => {
      this.emit('message', channel, message);
    });

    this.subscriber.on('pmessage', (pattern, channel, message) => {
      this.emit('pmessage', pattern, channel, message);
    });
  }

  // Connexion
  async connect(): Promise<void> {
    if (this.isConnected) return;

    try {
      await this.client.connect();
      await this.subscriber.connect();
      await this.publisher.connect();
      console.log('🚀 Redis Service connecté avec succès');
    } catch (error) {
      console.error('❌ Erreur connexion Redis:', error);
      throw error;
    }
  }

  // Déconnexion
  async disconnect(): Promise<void> {
    try {
      await this.client.disconnect();
      await this.subscriber.disconnect();
      await this.publisher.disconnect();
      console.log('🔒 Redis Service déconnecté');
    } catch (error) {
      console.error('❌ Erreur déconnexion Redis:', error);
    }
  }

  // === OPÉRATIONS CACHE ===

  // Définir une valeur avec TTL
  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const cacheItem: CacheItem<T> = {
      value,
      timestamp: Date.now(),
      ttl: ttl || this.config.ttl.default
    };

    const serializedValue = JSON.stringify(cacheItem);
    
    if (ttl) {
      await this.client.setex(key, ttl, serializedValue);
    } else {
      await this.client.setex(key, this.config.ttl.default, serializedValue);
    }
  }

  // Récupérer une valeur
  async get<T>(key: string): Promise<T | null> {
    try {
      const cached = await this.client.get(key);
      if (!cached) return null;

      const cacheItem: CacheItem<T> = JSON.parse(cached);
      
      // Vérifier si l'item n'est pas expiré
      const age = Date.now() - cacheItem.timestamp;
      if (age > (cacheItem.ttl * 1000)) {
        await this.client.del(key);
        return null;
      }

      return cacheItem.value;
    } catch (error) {
      console.error('❌ Erreur récupération cache:', error);
      return null;
    }
  }

  // Supprimer une clé
  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  // Vérifier l'existence d'une clé
  async exists(key: string): Promise<boolean> {
    const result = await this.client.exists(key);
    return result === 1;
  }

  // Définir TTL sur une clé existante
  async expire(key: string, ttl: number): Promise<void> {
    await this.client.expire(key, ttl);
  }

  // Récupérer TTL d'une clé
  async ttl(key: string): Promise<number> {
    return await this.client.ttl(key);
  }

  // === OPÉRATIONS AVANCÉES ===

  // Cache avec fonction de récupération
  async getOrSet<T>(
    key: string,
    fetchFunction: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    let value = await this.get<T>(key);
    
    if (value === null) {
      value = await fetchFunction();
      await this.set(key, value, ttl);
    }
    
    return value;
  }

  // Increment/Decrement
  async incr(key: string, amount: number = 1): Promise<number> {
    return await this.client.incrby(key, amount);
  }

  async decr(key: string, amount: number = 1): Promise<number> {
    return await this.client.decrby(key, amount);
  }

  // === GESTION DES SESSIONS ===

  async setSession(sessionId: string, data: SessionData, ttl?: number): Promise<void> {
    const key = `session:${sessionId}`;
    await this.set(key, data, ttl || this.config.ttl.long);
  }

  async getSession(sessionId: string): Promise<SessionData | null> {
    const key = `session:${sessionId}`;
    return await this.get<SessionData>(key);
  }

  async deleteSession(sessionId: string): Promise<void> {
    const key = `session:${sessionId}`;
    await this.del(key);
  }

  async refreshSession(sessionId: string, ttl?: number): Promise<void> {
    const key = `session:${sessionId}`;
    await this.expire(key, ttl || this.config.ttl.long);
  }

  // === QUEUES ===

  async addToQueue(queueName: string, job: Omit<QueueJob, 'id' | 'createdAt'>): Promise<string> {
    const jobId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const queueJob: QueueJob = {
      ...job,
      id: jobId,
      createdAt: Date.now()
    };

    const key = `queue:${queueName}`;
    await this.client.lpush(key, JSON.stringify(queueJob));
    return jobId;
  }

  async getFromQueue(queueName: string): Promise<QueueJob | null> {
    const key = `queue:${queueName}`;
    const result = await this.client.brpop(key, 0);
    
    if (!result) return null;
    
    try {
      return JSON.parse(result[1]);
    } catch (error) {
      console.error('❌ Erreur parsing job queue:', error);
      return null;
    }
  }

  async getQueueLength(queueName: string): Promise<number> {
    const key = `queue:${queueName}`;
    return await this.client.llen(key);
  }

  // === PUB/SUB ===

  async publish(channel: string, message: any): Promise<number> {
    const data = typeof message === 'string' ? message : JSON.stringify(message);
    return await this.publisher.publish(channel, data);
  }

  async subscribe(channel: string, callback: (message: string) => void): Promise<void> {
    await this.subscriber.subscribe(channel);
    this.subscriber.on('message', (receivedChannel, message) => {
      if (receivedChannel === channel) {
        callback(message);
      }
    });
  }

  async unsubscribe(channel: string): Promise<void> {
    await this.subscriber.unsubscribe(channel);
  }

  async psubscribe(pattern: string, callback: (channel: string, message: string) => void): Promise<void> {
    await this.subscriber.psubscribe(pattern);
    this.subscriber.on('pmessage', (receivedPattern, channel, message) => {
      if (receivedPattern === pattern) {
        callback(channel, message);
      }
    });
  }

  // === RATE LIMITING ===

  async rateLimit(
    key: string,
    limit: number,
    windowSeconds: number
  ): Promise<{ allowed: boolean; remaining: number; resetTime: number }> {
    const now = Date.now();
    const windowStart = Math.floor(now / (windowSeconds * 1000)) * windowSeconds;
    const windowKey = `ratelimit:${key}:${windowStart}`;

    const pipeline = this.client.pipeline();
    pipeline.incr(windowKey);
    pipeline.expire(windowKey, windowSeconds);
    
    const results = await pipeline.exec();
    const count = results?.[0]?.[1] as number || 0;

    return {
      allowed: count <= limit,
      remaining: Math.max(0, limit - count),
      resetTime: (windowStart + windowSeconds) * 1000
    };
  }

  // === UTILITAIRES ===

  // Nettoyer les clés expirées
  async cleanup(pattern?: string): Promise<number> {
    const searchPattern = pattern || `${this.config.keyPrefix}*`;
    const keys = await this.client.keys(searchPattern);
    
    if (keys.length === 0) return 0;
    
    // Supprimer les clés expirées
    const pipeline = this.client.pipeline();
    for (const key of keys) {
      const ttl = await this.client.ttl(key);
      if (ttl === -1) { // Pas de TTL défini
        pipeline.expire(key, this.config.ttl.default);
      }
    }
    
    await pipeline.exec();
    return keys.length;
  }

  // Statistiques Redis
  async getStats(): Promise<{
    connected: boolean;
    memory: any;
    keyspace: any;
    clients: any;
    config: any;
  }> {
    try {
      const info = await this.client.info();
      const sections = info.split('\r\n');
      
      const stats = {
        connected: this.isConnected,
        memory: {},
        keyspace: {},
        clients: {},
        config: {
          host: this.config.host,
          port: this.config.port,
          database: this.config.database,
          keyPrefix: this.config.keyPrefix
        }
      };

      // Parser les informations Redis
      sections.forEach(line => {
        if (line.includes(':')) {
          const [key, value] = line.split(':');
          if (key.startsWith('used_memory')) {
            stats.memory[key] = value;
          } else if (key.startsWith('connected_clients')) {
            stats.clients[key] = value;
          } else if (key.startsWith('db')) {
            stats.keyspace[key] = value;
          }
        }
      });

      return stats;
    } catch (error) {
      console.error('❌ Erreur récupération stats Redis:', error);
      throw error;
    }
  }

  // Test de connexion
  async ping(): Promise<boolean> {
    try {
      const result = await this.client.ping();
      return result === 'PONG';
    } catch (error) {
      console.error('❌ Erreur ping Redis:', error);
      return false;
    }
  }

  // Health check
  async healthCheck(): Promise<{
    status: 'healthy' | 'unhealthy';
    connected: boolean;
    responseTime: number;
    error?: string;
  }> {
    const start = Date.now();
    try {
      const isHealthy = await this.ping();
      return {
        status: isHealthy ? 'healthy' : 'unhealthy',
        connected: this.isConnected,
        responseTime: Date.now() - start
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        connected: false,
        responseTime: Date.now() - start,
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }
}

// Instance globale
let redisServiceInstance: RedisService | null = null;

// Factory function
export const getRedisService = (customConfig?: Partial<RedisConfig>): RedisService => {
  if (!redisServiceInstance || customConfig) {
    redisServiceInstance = new RedisService(customConfig);
  }
  return redisServiceInstance;
};

// Initialisation avec connexion
export const initializeRedisService = async (customConfig?: Partial<RedisConfig>): Promise<RedisService> => {
  console.log('🚀 Initialisation Redis Service...');
  
  const redisService = getRedisService(customConfig);
  
  // Connexion
  await redisService.connect();
  
  // Test de connexion
  const isHealthy = await redisService.ping();
  if (!isHealthy) {
    console.warn('⚠️ Redis Service non disponible');
  }

  console.log('✅ Redis Service initialisé');
  return redisService;
};

// Middleware Express pour Redis
export const redisMiddleware = (req: any, res: any, next: any) => {
  req.redis = getRedisService();
  next();
};

// Export par défaut
export default getRedisService;