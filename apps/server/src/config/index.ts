/**
 * Server Configuration
 * Centralized configuration management
 */

interface Config {
  port: number;
  host: string;
  isProduction: boolean;
  isDevelopment: boolean;
  session: {
    secret: string;
    maxAge: number;
  };
  csrf: {
    secret: string;
  };
  redis: {
    url: string;
  };
  cursor: {
    apiBaseUrl: string;
  };
}

function loadConfig(): Config {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    port: parseInt(process.env.PORT || '3000', 10),
    // Use 0.0.0.0 to allow external network access (other devices on same network)
    host: process.env.HOST || '0.0.0.0',
    isProduction,
    isDevelopment: !isProduction,
    session: {
      secret: process.env.SESSION_SECRET || 'dev-secret-change-in-production',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
    csrf: {
      secret: process.env.CSRF_SECRET || 'csrf-dev-secret',
    },
    redis: {
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    },
    cursor: {
      apiBaseUrl: process.env.CURSOR_API_BASE_URL || 'https://api.cursor.com',
    },
  };
}

export const config = loadConfig();

