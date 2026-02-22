import { randomBytes } from 'node:crypto';

/**
 * Generate a base64url-encoded secret suitable for HMAC-based JWT signing.
 *
 * @param length - Number of random bytes to generate.
 * @returns Base64url-encoded secret string.
 * @throws TypeError if length is less than 1.
 */
export function generateJWTSecret(length: number = 64): string {
  if (length < 1) {
    throw new TypeError('length must be >= 1');
  }

  const bytes = randomBytes(length);
  return bytes.toString('base64url');
}
