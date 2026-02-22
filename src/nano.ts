import { randomBytes } from 'node:crypto';

const BASE62_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Options for NanoID-style generation.
 */
export interface NanoIdOptions {
  /**
   * Desired output length in characters.
   */
  length?: number;
  /**
   * Alphabet to use for ID generation.
   */
  alphabet?: string;
}

/**
 * Generate a NanoID-style ID using crypto-secure randomness.
 *
 * @param options - Configuration for length and alphabet.
 * @returns A NanoID-style string.
 * @throws TypeError if length or alphabet is invalid.
 */
export function nanoId(options: NanoIdOptions = {}): string {
  const length = options.length ?? 21;
  const alphabet = options.alphabet ?? BASE62_CHARSET;

  if (length < 1) {
    throw new TypeError('length must be >= 1');
  }

  if (alphabet.length < 1) {
    throw new TypeError('alphabet must not be empty');
  }

  const bytes = randomBytes(length);
  const output: string[] = [];

  for (const byte of bytes) {
    output.push(alphabet[byte % alphabet.length]);
  }

  return output.join('');
}
