import { randomBytes } from 'node:crypto';
import { encodeBytesToLength } from './encoders.js';
import type { Encoding } from './encoders.js';

/**
 * Options for generating a high-entropy secure ID.
 */
export interface SecureIdOptions {
  /**
   * Desired output length in characters.
   */
  length?: number;
  /**
   * Encoding for the output string.
   */
  encoding?: Encoding;
  /**
   * Optional prefix to prepend to the generated ID.
   */
  prefix?: string;
}

/**
 * Generate a high-entropy cryptographically secure ID.
 *
 * The generator always uses at least 32 bytes of entropy regardless of output
 * length to preserve security guarantees.
 *
 * @param options - Configuration for length, encoding, and prefix.
 * @returns A secure ID string.
 * @throws TypeError if length is less than 1.
 */
export function secureId(options: SecureIdOptions = {}): string {
  const length = options.length ?? 32;
  const encoding = options.encoding ?? 'hex';
  const prefix = options.prefix ?? '';

  if (length < 1) {
    throw new TypeError('length must be >= 1');
  }

  const baseBytesNeeded = encoding === 'hex' ? Math.ceil(length / 2) : length;
  const bytesNeeded = Math.max(32, baseBytesNeeded);
  const bytes = randomBytes(bytesNeeded);
  const encoded = encodeBytesToLength(bytes, encoding, length);

  return prefix + encoded;
}
