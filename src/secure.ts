import { randomBytes } from 'node:crypto';
import { encodeBytesToLength } from './encoders.js';
import type { Encoding } from './encoders.js';

export interface SecureIdOptions {
  length?: number;
  encoding?: Encoding;
  prefix?: string;
}

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
