/**
 * Cloud Bridge Configuration
 */

interface Config {
  isProduction: boolean;
  redis: {
    url: string;
  };
  cursor: {
    apiBaseUrl: string;
  };
  costGuardrails: {
    maxProjectCostCents: number;
  };
}

function loadConfig(): Config {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    isProduction,
    redis: {
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    },
    cursor: {
      apiBaseUrl: process.env.CURSOR_API_BASE_URL || 'https://api.cursor.com',
    },
    costGuardrails: {
      maxProjectCostCents: parseInt(process.env.MAX_PROJECT_COST_CENTS || '10000', 10),
    },
  };
}

export const config = loadConfig();


