export function withPrefix(id: string, prefix: string): string {
  if (prefix.length === 0) {
    return id;
  }

  return prefix + id;
}
