/**
 * Prepend a prefix to an ID string.
 *
 * @param id - Base identifier.
 * @param prefix - Prefix to prepend.
 * @returns The prefixed identifier, or the original id if prefix is empty.
 */
export function withPrefix(id: string, prefix: string): string {
  if (prefix.length === 0) {
    return id;
  }

  return prefix + id;
}
