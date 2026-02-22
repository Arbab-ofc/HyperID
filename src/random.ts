import { randomBytes } from 'node:crypto';
import { encodeBytesToLength } from './encoders.js';
import type { Encoding } from './encoders.js';

export interface RandomIdOptions {
  length?: number;
  encoding?: Encoding;
  prefix?: string;
}

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

export interface ShortIdOptions {
  prefix?: string;
}

export function shortId(options: ShortIdOptions = {}): string {
  return randomId({
    length: 8,
    encoding: 'base62',
    prefix: options.prefix ?? '',
  });
}
