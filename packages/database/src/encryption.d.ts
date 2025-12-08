/**
 * Encryption utilities for sensitive data storage
 * Uses AES-256-GCM for encryption and scrypt for password hashing
 */
/**
 * Encrypt sensitive data using AES-256-GCM
 * @param plaintext - The data to encrypt
 * @returns Base64 encoded string containing IV + AuthTag + Ciphertext
 */
export declare function encrypt(plaintext: string): string;
/**
 * Decrypt data encrypted with encrypt()
 * @param encryptedData - Base64 encoded string from encrypt()
 * @returns Decrypted plaintext
 */
export declare function decrypt(encryptedData: string): string;
/**
 * Hash a password using scrypt
 * @param password - Plain text password
 * @returns Hashed password with embedded salt
 */
export declare function hashPassword(password: string): Promise<string>;
/**
 * Verify a password against a hash
 * @param password - Plain text password to verify
 * @param storedHash - Hash from hashPassword()
 * @returns True if password matches
 */
export declare function verifyPassword(password: string, storedHash: string): Promise<boolean>;
/**
 * Sanitize user input for AI prompts to prevent injection
 * @param input - User provided text
 * @returns Sanitized text safe for AI prompts
 */
export declare function sanitizePromptInput(input: string): string;
//# sourceMappingURL=encryption.d.ts.map