/**
 * Supported encodings for HyperID byte-to-string conversion.
 */
export type Encoding = 'hex' | 'alphanumeric' | 'base62';

const BASE62_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const ALPHANUMERIC_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function getCharset(encoding: Encoding): string {
  if (encoding === 'base62') {
    return BASE62_CHARSET;
  }

  if (encoding === 'alphanumeric') {
    return ALPHANUMERIC_CHARSET;
  }

  return '0123456789abcdef';
}

function getPadChar(encoding: Encoding): string {
  if (encoding === 'hex') {
    return '0';
  }

  const charset = getCharset(encoding);
  return charset[0];
}

/**
 * Encode raw bytes into a string using the specified encoding.
 *
 * For `alphanumeric` and `base62`, each byte maps to a single character via
 * modulo mapping, so N bytes produce N characters.
 *
 * @param bytes - Bytes to encode.
 * @param encoding - Target encoding.
 * @returns Encoded string.
 */
export function encodeBytes(bytes: Buffer, encoding: Encoding): string {
  if (encoding === 'hex') {
    return bytes.toString('hex');
  }

  const charset = getCharset(encoding);
  const output: string[] = [];

  for (const byte of bytes) {
    output.push(charset[byte % charset.length]);
  }

  return output.join('');
}

/**
 * Encode bytes and normalize the output to an exact character length.
 *
 * For `hex`, each byte produces two characters. Callers should ensure the byte
 * length is at least `ceil(length / 2)` before calling when possible.
 *
 * @param bytes - Bytes to encode.
 * @param encoding - Target encoding.
 * @param length - Desired character length.
 * @returns Encoded string with an exact length.
 * @throws TypeError if length is less than 1.
 */
export function encodeBytesToLength(
  bytes: Buffer,
  encoding: Encoding,
  length: number,
): string {
  if (length < 1) {
    throw new TypeError('length must be >= 1');
  }

  const encoded = encodeBytes(bytes, encoding);

  if (encoded.length === length) {
    return encoded;
  }

  if (encoded.length > length) {
    return encoded.slice(0, length);
  }

  return encoded.padEnd(length, getPadChar(encoding));
}
