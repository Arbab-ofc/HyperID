import { randomUUID } from 'node:crypto';

/**
 * Generate an RFC 4122 version 4 UUID.
 *
 * @returns A UUID v4 string.
 */
export function uuidV4(): string {
  return randomUUID();
}
