/**
 * Configuration Base de Données pour Le Pillier
 * Support PostgreSQL, MySQL, SQLite avec pools de connexions
 */

import { Pool, PoolConfig } from 'pg'; // PostgreSQL
import mysql from 'mysql2/promise'; // MySQL
import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

// Types pour la configuration
export interface DatabaseConfig {
  type: 'postgresql' | 'mysql' | 'sqlite';
  host?: string;
  port?: number;
  database: string;
  username?: string;
  password?: string;
  filename?: string; // Pour SQLite
  pool?: {
    min: number;
    max: number;
    idle: number;
    acquire: number;
  };
  ssl?: boolean | object;
  logging?: boolean;
  timezone?: string;
}

// Configuration par environnement
const getEnvironmentConfig = (): DatabaseConfig => {
  const env = process.env.NODE_ENV || 'development';
  
  // Configuration de base depuis les variables d'environnement
  const baseConfig: DatabaseConfig = {
    type: (process.env.DB_TYPE as any) || 'postgresql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'lepillier_db',
    username: process.env.DB_USER || 'lepillier_user',
    password: process.env.DB_PASSWORD || 'lepillier_password',
    filename: process.env.DB_FILENAME || './data/lepillier.db', // SQLite
    pool: {
      min: parseInt(process.env.DB_POOL_MIN || '2'),
      max: parseInt(process.env.DB_POOL_MAX || '10'),
      idle: parseInt(process.env.DB_POOL_IDLE || '30000'),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE || '60000')
    },
    ssl: process.env.DB_SSL === 'true',
    logging: process.env.DB_LOGGING === 'true',
    timezone: process.env.DB_TIMEZONE || 'Europe/Paris'
  };

  // Configurations spécifiques par environnement
  switch (env) {
    case 'production':
      return {
        ...baseConfig,
        host: process.env.DB_HOST || 'prod-db.lepillier.com',
        port: parseInt(process.env.DB_PORT || '5432'),
        pool: {
          min: 5,
          max: 25,
          idle: 60000,
          acquire: 30000
        },
        ssl: {
          rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== 'false',
          ca: process.env.DB_SSL_CA,
          cert: process.env.DB_SSL_CERT,
          key: process.env.DB_SSL_KEY
        },
        logging: false
      };

    case 'staging':
      return {
        ...baseConfig,
        host: process.env.DB_HOST || 'staging-db.lepillier.com',
        database: process.env.DB_NAME || 'lepillier_staging',
        pool: {
          min: 2,
          max: 15,
          idle: 45000,
          acquire: 45000
        },
        logging: true
      };

    case 'test':
      return {
        type: 'sqlite',
        filename: ':memory:', // Base en mémoire pour les tests
        logging: false
      };

    default: // development
      return {
        ...baseConfig,
        host: 'localhost',
        port: 5432,
        database: 'lepillier_dev',
        logging: true
      };
  }
};

// Classes de connexion pour chaque type de base
class PostgreSQLConnection {
  private pool: Pool;
  private config: DatabaseConfig;

  constructor(config: DatabaseConfig) {
    this.config = config;
    
    const poolConfig: PoolConfig = {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.username,
      password: config.password,
      min: config.pool?.min || 2,
      max: config.pool?.max || 10,
      idleTimeoutMillis: config.pool?.idle || 30000,
      connectionTimeoutMillis: config.pool?.acquire || 60000,
      ssl: config.ssl,
      application_name: 'Le Pillier Backend'
    };

    this.pool = new Pool(poolConfig);
    
    this.pool.on('error', (err) => {
      console.error('💥 Erreur PostgreSQL pool:', err);
    });

    this.pool.on('connect', () => {
      if (config.logging) {
        console.log('🔗 Nouvelle connexion PostgreSQL établie');
      }
    });
  }

  async query(text: string, params?: any[]) {
    const start = Date.now();
    try {
      const result = await this.pool.query(text, params);
      const duration = Date.now() - start;
      
      if (this.config.logging) {
        console.log('📊 Query exécutée:', { text, duration: `${duration}ms`, rows: result.rowCount });
      }
      
      return result;
    } catch (error) {
      console.error('💥 Erreur query PostgreSQL:', { text, error });
      throw error;
    }
  }

  async getClient() {
    return await this.pool.connect();
  }

  async close() {
    await this.pool.end();
    console.log('🔒 Pool PostgreSQL fermé');
  }

  async testConnection(): Promise<boolean> {
    try {
      const result = await this.query('SELECT NOW() as current_time, version() as version');
      console.log('✅ Test PostgreSQL réussi:', result.rows[0]);
      return true;
    } catch (error) {
      console.error('❌ Test PostgreSQL échoué:', error);
      return false;
    }
  }
}

class MySQLConnection {
  private pool: mysql.Pool;
  private config: DatabaseConfig;

  constructor(config: DatabaseConfig) {
    this.config = config;
    
    this.pool = mysql.createPool({
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.username,
      password: config.password,
      connectionLimit: config.pool?.max || 10,
      acquireTimeout: config.pool?.acquire || 60000,
      timeout: config.pool?.idle || 30000,
      ssl: config.ssl,
      timezone: config.timezone || 'Z',
      dateStrings: true
    });
  }

  async query(sql: string, params?: any[]) {
    const start = Date.now();
    try {
      const [rows, fields] = await this.pool.execute(sql, params);
      const duration = Date.now() - start;
      
      if (this.config.logging) {
        console.log('📊 Query MySQL exécutée:', { sql, duration: `${duration}ms` });
      }
      
      return { rows, fields };
    } catch (error) {
      console.error('💥 Erreur query MySQL:', { sql, error });
      throw error;
    }
  }

  async close() {
    await this.pool.end();
    console.log('🔒 Pool MySQL fermé');
  }

  async testConnection(): Promise<boolean> {
    try {
      const result = await this.query('SELECT NOW() as current_time, VERSION() as version');
      console.log('✅ Test MySQL réussi:', result.rows[0]);
      return true;
    } catch (error) {
      console.error('❌ Test MySQL échoué:', error);
      return false;
    }
  }
}

class SQLiteConnection {
  private db: Database | null = null;
  private config: DatabaseConfig;

  constructor(config: DatabaseConfig) {
    this.config = config;
  }

  async connect() {
    if (!this.db) {
      this.db = await open({
        filename: this.config.filename || './data/lepillier.db',
        driver: sqlite3.Database
      });
      
      // Configuration SQLite
      await this.db.exec(`
        PRAGMA journal_mode = WAL;
        PRAGMA synchronous = NORMAL;
        PRAGMA cache_size = 1000;
        PRAGMA foreign_keys = ON;
        PRAGMA temp_store = MEMORY;
      `);
      
      if (this.config.logging) {
        console.log('🔗 Connexion SQLite établie');
      }
    }
    return this.db;
  }

  async query(sql: string, params?: any[]) {
    const start = Date.now();
    const db = await this.connect();
    
    try {
      const result = await db.all(sql, params);
      const duration = Date.now() - start;
      
      if (this.config.logging) {
        console.log('📊 Query SQLite exécutée:', { sql, duration: `${duration}ms`, rows: result.length });
      }
      
      return { rows: result };
    } catch (error) {
      console.error('💥 Erreur query SQLite:', { sql, error });
      throw error;
    }
  }

  async run(sql: string, params?: any[]) {
    const db = await this.connect();
    return await db.run(sql, params);
  }

  async close() {
    if (this.db) {
      await this.db.close();
      this.db = null;
      console.log('🔒 Connexion SQLite fermée');
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      const result = await this.query('SELECT datetime("now") as current_time, sqlite_version() as version');
      console.log('✅ Test SQLite réussi:', result.rows[0]);
      return true;
    } catch (error) {
      console.error('❌ Test SQLite échoué:', error);
      return false;
    }
  }
}

// Classe principale de gestion de base de données
export class DatabaseManager {
  private connection: PostgreSQLConnection | MySQLConnection | SQLiteConnection;
  private config: DatabaseConfig;

  constructor(customConfig?: Partial<DatabaseConfig>) {
    this.config = { ...getEnvironmentConfig(), ...customConfig };
    
    switch (this.config.type) {
      case 'postgresql':
        this.connection = new PostgreSQLConnection(this.config);
        break;
      case 'mysql':
        this.connection = new MySQLConnection(this.config);
        break;
      case 'sqlite':
        this.connection = new SQLiteConnection(this.config);
        break;
      default:
        throw new Error(`Type de base de données non supporté: ${this.config.type}`);
    }
  }

  async query(sql: string, params?: any[]) {
    return await this.connection.query(sql, params);
  }

  async testConnection(): Promise<boolean> {
    return await this.connection.testConnection();
  }

  async close() {
    await this.connection.close();
  }

  getConfig(): DatabaseConfig {
    return { ...this.config, password: '***masked***' };
  }

  // Méthodes utilitaires
  async healthCheck(): Promise<{
    status: 'healthy' | 'unhealthy';
    type: string;
    responseTime: number;
    error?: string;
  }> {
    const start = Date.now();
    try {
      const isHealthy = await this.testConnection();
      return {
        status: isHealthy ? 'healthy' : 'unhealthy',
        type: this.config.type,
        responseTime: Date.now() - start
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        type: this.config.type,
        responseTime: Date.now() - start,
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }
}

// Instance globale
let dbInstance: DatabaseManager | null = null;

// Factory function pour obtenir l'instance de base de données
export const getDatabase = (customConfig?: Partial<DatabaseConfig>): DatabaseManager => {
  if (!dbInstance || customConfig) {
    dbInstance = new DatabaseManager(customConfig);
  }
  return dbInstance;
};

// Fonction d'initialisation avec tests de connexion
export const initializeDatabase = async (customConfig?: Partial<DatabaseConfig>): Promise<DatabaseManager> => {
  console.log('🚀 Initialisation de la base de données...');
  
  const db = getDatabase(customConfig);
  const config = db.getConfig();
  
  console.log(`📍 Configuration:`, {
    type: config.type,
    host: config.host,
    port: config.port,
    database: config.database,
    username: config.username,
    ssl: !!config.ssl
  });

  // Test de connexion
  const isConnected = await db.testConnection();
  if (!isConnected) {
    throw new Error('❌ Impossible de se connecter à la base de données');
  }

  console.log('✅ Base de données initialisée avec succès');
  return db;
};

// Middleware Express pour la base de données
export const databaseMiddleware = (req: any, res: any, next: any) => {
  req.db = getDatabase();
  next();
};

// Scripts de migration et seeding
export const runMigrations = async (db: DatabaseManager) => {
  console.log('🔄 Exécution des migrations...');
  
  // Exemple de migration basique
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      role VARCHAR(50) DEFAULT 'agent',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createAgentsTable = `
    CREATE TABLE IF NOT EXISTS agents (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      agency_name VARCHAR(255),
      phone VARCHAR(20),
      region VARCHAR(100),
      status VARCHAR(20) DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const createMandatsTable = `
    CREATE TABLE IF NOT EXISTS mandats (
      id SERIAL PRIMARY KEY,
      agent_id INTEGER REFERENCES agents(id),
      property_type VARCHAR(50),
      address TEXT,
      price DECIMAL(10,2),
      status VARCHAR(20) DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(createUsersTable);
    await db.query(createAgentsTable);
    await db.query(createMandatsTable);
    console.log('✅ Migrations terminées');
  } catch (error) {
    console.error('❌ Erreur lors des migrations:', error);
    throw error;
  }
};

// Fonction de nettoyage pour les tests
export const cleanupDatabase = async (db: DatabaseManager) => {
  if (process.env.NODE_ENV === 'test') {
    await db.query('DROP TABLE IF EXISTS mandats CASCADE');
    await db.query('DROP TABLE IF EXISTS agents CASCADE');
    await db.query('DROP TABLE IF EXISTS users CASCADE');
    console.log('🧹 Base de données de test nettoyée');
  }
};

// Export par défaut
export default getDatabase;