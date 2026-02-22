import { randomBytes } from 'node:crypto';

export function generateJWTSecret(length: number = 64): string {
  if (length < 1) {
    throw new TypeError('length must be >= 1');
  }

  const bytes = randomBytes(length);
  return bytes.toString('base64url');
}
