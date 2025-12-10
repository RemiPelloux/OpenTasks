/**
 * Redis Cache Service
 * Provides caching layer for frequently accessed data
 */

import { Redis } from 'ioredis';
import { config } from '../config/index.js';

// Cache TTL constants (in seconds)
export const CACHE_TTL = {
  BOARD_STATE: 30,        // Board state cached for 30 seconds
  PROJECT_MEMBERS: 300,   // Project members cached for 5 minutes
  USER_PROJECTS: 300,     // User's projects cached for 5 minutes
  USER_SESSION: 3600,     // User session data cached for 1 hour
  MODELS_LIST: 3600,      // AI models list cached for 1 hour
} as const;

// Cache key prefixes
export const CACHE_KEYS = {
  boardState: (projectId: string) => `board:${projectId}:state`,
  projectMembers: (projectId: string) => `project:${projectId}:members`,
  userProjects: (userId: string) => `user:${userId}:projects`,
  userSession: (userId: string) => `user:${userId}:session`,
  modelsList: () => 'cursor:models',
} as const;

class CacheService {
  private redis: Redis | null = null;
  private isConnected = false;

  /**
   * Initialize Redis connection
   */
  async connect(): Promise<void> {
    if (this.redis) return;

    try {
      this.redis = new Redis(config.redis.url, {
        maxRetriesPerRequest: 3,
        retryStrategy(times) {
          if (times > 10) return null; // Stop after 10 attempts
          return Math.min(times * 200, 5000); // Max 5 second delay
        },
        lazyConnect: true,
        enableReadyCheck: true,
      });

      // Handle connection events for proper state tracking
      this.redis.on('connect', () => {
        this.isConnected = true;
        console.log('[Cache] Redis connected');
      });

      this.redis.on('ready', () => {
        this.isConnected = true;
        console.log('[Cache] Redis ready');
      });

      this.redis.on('error', (error) => {
        console.error('[Cache] Redis error:', error.message);
      });

      this.redis.on('close', () => {
        this.isConnected = false;
        console.log('[Cache] Redis connection closed');
      });

      this.redis.on('reconnecting', () => {
        console.log('[Cache] Redis reconnecting...');
      });

      await this.redis.connect();
      this.isConnected = true;
      console.log('[Cache] Redis connected successfully');
    } catch (error) {
      console.error('[Cache] Redis connection failed:', error);
      this.redis = null;
      this.isConnected = false;
    }
  }

  /**
   * Check if cache is available
   */
  isAvailable(): boolean {
    return this.isConnected && this.redis !== null;
  }

  /**
   * Get value from cache
   */
  async get<T>(key: string): Promise<T | null> {
    if (!this.isAvailable()) return null;

    try {
      const value = await this.redis!.get(key);
      if (!value) return null;
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`[Cache] Get error for key ${key}:`, error);
      return null;
    }
  }

  /**
   * Set value in cache with TTL
   */
  async set<T>(key: string, value: T, ttlSeconds: number): Promise<boolean> {
    if (!this.isAvailable()) return false;

    try {
      await this.redis!.setex(key, ttlSeconds, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`[Cache] Set error for key ${key}:`, error);
      return false;
    }
  }

  /**
   * Delete key from cache
   */
  async delete(key: string): Promise<boolean> {
    if (!this.isAvailable()) return false;

    try {
      await this.redis!.del(key);
      return true;
    } catch (error) {
      console.error(`[Cache] Delete error for key ${key}:`, error);
      return false;
    }
  }

  /**
   * Delete multiple keys matching a pattern
   */
  async deletePattern(pattern: string): Promise<boolean> {
    if (!this.isAvailable()) return false;

    try {
      const keys = await this.redis!.keys(pattern);
      if (keys.length > 0) {
        await this.redis!.del(...keys);
      }
      return true;
    } catch (error) {
      console.error(`[Cache] Delete pattern error for ${pattern}:`, error);
      return false;
    }
  }

  /**
   * Invalidate all cache related to a project
   */
  async invalidateProject(projectId: string): Promise<void> {
    await this.delete(CACHE_KEYS.boardState(projectId));
    await this.delete(CACHE_KEYS.projectMembers(projectId));
  }

  /**
   * Invalidate all cache related to a user
   */
  async invalidateUser(userId: string): Promise<void> {
    await this.delete(CACHE_KEYS.userProjects(userId));
    await this.delete(CACHE_KEYS.userSession(userId));
  }

  /**
   * Invalidate board state cache for a project
   */
  async invalidateBoardState(projectId: string): Promise<void> {
    await this.delete(CACHE_KEYS.boardState(projectId));
  }

  /**
   * Get or set pattern - fetch from cache or compute and cache
   */
  async getOrSet<T>(
    key: string,
    ttlSeconds: number,
    fetchFn: () => Promise<T>
  ): Promise<T> {
    // Try to get from cache first
    const cached = await this.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    // Fetch fresh data
    const data = await fetchFn();
    
    // Cache the result (fire and forget)
    this.set(key, data, ttlSeconds).catch(() => {});
    
    return data;
  }

  /**
   * Close Redis connection
   */
  async disconnect(): Promise<void> {
    if (this.redis) {
      await this.redis.quit();
      this.redis = null;
      this.isConnected = false;
      console.log('[Cache] Redis disconnected');
    }
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<{ connected: boolean; latencyMs: number }> {
    if (!this.isAvailable()) {
      return { connected: false, latencyMs: -1 };
    }

    try {
      const start = Date.now();
      await this.redis!.ping();
      const latencyMs = Date.now() - start;
      return { connected: true, latencyMs };
    } catch {
      return { connected: false, latencyMs: -1 };
    }
  }
}

// Singleton instance
export const cacheService = new CacheService();

// Helper functions for common operations
export async function getCachedBoardState<T>(
  projectId: string,
  fetchFn: () => Promise<T>
): Promise<T> {
  return cacheService.getOrSet(
    CACHE_KEYS.boardState(projectId),
    CACHE_TTL.BOARD_STATE,
    fetchFn
  );
}

export async function getCachedProjectMembers<T>(
  projectId: string,
  fetchFn: () => Promise<T>
): Promise<T> {
  return cacheService.getOrSet(
    CACHE_KEYS.projectMembers(projectId),
    CACHE_TTL.PROJECT_MEMBERS,
    fetchFn
  );
}

export async function getCachedUserProjects<T>(
  userId: string,
  fetchFn: () => Promise<T>
): Promise<T> {
  return cacheService.getOrSet(
    CACHE_KEYS.userProjects(userId),
    CACHE_TTL.USER_PROJECTS,
    fetchFn
  );
}

export async function getCachedModelsList<T>(
  fetchFn: () => Promise<T>
): Promise<T> {
  return cacheService.getOrSet(
    CACHE_KEYS.modelsList(),
    CACHE_TTL.MODELS_LIST,
    fetchFn
  );
}

