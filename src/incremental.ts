export interface IncrementalIdOptions {
  prefix?: string;
  start?: number;
}

export function createIncrementalIdGenerator(
  options: IncrementalIdOptions = {},
): () => string {
  const prefix = options.prefix ?? '';
  let counter = options.start ?? 1;

  return () => {
    const value = `${prefix}${counter}`;
    counter += 1;
    return value;
  };
}

const generators = new Map<string, () => string>();

export function incrementalId(options: IncrementalIdOptions = {}): string {
  const prefix = options.prefix ?? '';
  const existing = generators.get(prefix);

  if (existing) {
    return existing();
  }

  const created = createIncrementalIdGenerator({
    prefix,
    start: options.start ?? 1,
  });
  generators.set(prefix, created);
  return created();
}
