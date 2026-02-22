export type Encoding = 'hex' | 'alphanumeric' | 'base62';

const BASE62_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function encodeBytes(bytes: Buffer, encoding: Encoding): string {
  if (encoding === 'hex') {
    return bytes.toString('hex');
  }

  const charset = encoding === 'base62' ? BASE62_CHARSET : ALPHANUMERIC_CHARSET;
  const output: string[] = [];

  for (const byte of bytes) {
    output.push(charset[byte % charset.length]);
  }

  return output.join('');
}

export function encodeBytesToLength(bytes: Buffer, encoding: Encoding, length: number): string {
  const encoded = encodeBytes(bytes, encoding);

  if (encoded.length === length) {
    return encoded;
  }

  if (encoded.length > length) {
    return encoded.slice(0, length);
  }

  const padChar = encoding === 'hex' ? '0' : (encoding === 'base62' ? BASE62_CHARSET[0] : ALPHANUMERIC_CHARSET[0]);
  return encoded.padEnd(length, padChar);
}
