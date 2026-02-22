import { randomBytes } from 'node:crypto';

const BASE62_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export interface NanoIdOptions {
  length?: number;
  alphabet?: string;
}

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
