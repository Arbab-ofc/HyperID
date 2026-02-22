import { randomBytes } from 'node:crypto';
import { encodeBytesToLength } from './encoders.js';
import type { Encoding } from './encoders.js';

/**
 * Options for generating a random ID.
 */
export interface RandomIdOptions {
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
 * Generate a cryptographically secure random ID.
 *
 * @param options - Configuration for length, encoding, and prefix.
 * @returns A random ID string.
 * @throws TypeError if length is less than 1.
 */
export function randomId(options: RandomIdOptions = {}): string {
  const length = options.length ?? 16;
  const encoding = options.encoding ?? 'base62';
  const prefix = options.prefix ?? '';

  if (length < 1) {
    throw new TypeError('length must be >= 1');
  }

  const bytesNeeded = encoding === 'hex' ? Math.ceil(length / 2) : length;
  const bytes = randomBytes(bytesNeeded);
  const encoded = encodeBytesToLength(bytes, encoding, length);

  return prefix + encoded;
}

/**
 * Options for generating a short ID.
 */
export interface ShortIdOptions {
  /**
   * Optional prefix to prepend to the generated ID.
   */
  prefix?: string;
}

/**
 * Generate a compact base62 ID with a default length of 8 characters.
 *
 * @param options - Optional prefix to prepend.
 * @returns A base62 short ID.
 */
export function shortId(options: ShortIdOptions = {}): string {
  return randomId({
    length: 8,
    encoding: 'base62',
    prefix: options.prefix ?? '',
  });
}
