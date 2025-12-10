/**
 * Encryption utilities for sensitive data storage
 * Uses AES-256-GCM for encryption and scrypt for password hashing
 */

import { createCipheriv, createDecipheriv, randomBytes, scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;
const SALT_LENGTH = 32;
const KEY_LENGTH = 64;

/**
 * Get encryption key from environment
 * @throws Error if ENCRYPTION_KEY is not set or invalid
 */
function getEncryptionKey(): Buffer {
  const key = process.env.ENCRYPTION_KEY;
  if (!key) {
    throw new Error('ENCRYPTION_KEY environment variable is required');
  }

  const keyBuffer = Buffer.from(key, 'hex');
  if (keyBuffer.length !== 32) {
    throw new Error('ENCRYPTION_KEY must be 32 bytes (64 hex characters)');
  }

  return keyBuffer;
}

/**
 * Encrypt sensitive data using AES-256-GCM
 * @param plaintext - The data to encrypt
 * @returns Base64 encoded string containing IV + AuthTag + Ciphertext
 */
export function encrypt(plaintext: string): string {
  const key = getEncryptionKey();
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(plaintext, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  const authTag = cipher.getAuthTag();

  // Combine IV + AuthTag + Ciphertext
  const combined = Buffer.concat([
    iv,
    authTag,
    Buffer.from(encrypted, 'base64'),
  ]);

  return combined.toString('base64');
}

/**
 * Decrypt data encrypted with encrypt()
 * @param encryptedData - Base64 encoded string from encrypt()
 * @returns Decrypted plaintext
 */
export function decrypt(encryptedData: string): string {
  const key = getEncryptionKey();
  const combined = Buffer.from(encryptedData, 'base64');

  // Extract IV, AuthTag, and Ciphertext
  const iv = combined.subarray(0, IV_LENGTH);
  const authTag = combined.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
  const ciphertext = combined.subarray(IV_LENGTH + AUTH_TAG_LENGTH);

  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(ciphertext);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString('utf8');
}

/**
 * Hash a password using scrypt
 * @param password - Plain text password
 * @returns Hashed password with embedded salt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_LENGTH);
  const derivedKey = (await scryptAsync(password, salt, KEY_LENGTH)) as Buffer;

  // Combine salt + hash
  const combined = Buffer.concat([salt, derivedKey]);
  return combined.toString('base64');
}

/**
 * Verify a password against a hash
 * @param password - Plain text password to verify
 * @param storedHash - Hash from hashPassword()
 * @returns True if password matches
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const combined = Buffer.from(storedHash, 'base64');
  const salt = combined.subarray(0, SALT_LENGTH);
  const storedKey = combined.subarray(SALT_LENGTH);

  const derivedKey = (await scryptAsync(password, salt, KEY_LENGTH)) as Buffer;

  return timingSafeEqual(storedKey, derivedKey);
}

/**
 * Sanitize user input for AI prompts to prevent injection
 * @param input - User provided text
 * @returns Sanitized text safe for AI prompts
 */
export function sanitizePromptInput(input: string): string {
  // Remove potential prompt injection patterns
  let sanitized = input
    // Remove system/assistant role markers
    .replace(/\b(system|assistant|user):\s*/gi, '')
    // Remove markdown code fence attempts
    .replace(/```[\s\S]*?```/g, '[code block removed]')
    // Remove potential escape sequences
    .replace(/\\n|\\r|\\t/g, ' ')
    // Limit consecutive special characters
    .replace(/([#*_~`]){3,}/g, '$1$1')
    // Remove potential XML/HTML tags that might confuse models
    .replace(/<[^>]*>/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();

  // Limit length to prevent token abuse
  const MAX_PROMPT_LENGTH = 10000;
  if (sanitized.length > MAX_PROMPT_LENGTH) {
    sanitized = sanitized.substring(0, MAX_PROMPT_LENGTH) + '... [truncated]';
  }

  return sanitized;
}


