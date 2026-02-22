/**
 * Options for incremental ID generators.
 */
export interface IncrementalIdOptions {
  /**
   * Optional prefix to prepend to each ID.
   */
  prefix?: string;
  /**
   * Starting numeric value for the counter.
   */
  start?: number;
}

/**
 * Create a new incremental ID generator that maintains its own counter.
 *
 * @param options - Optional prefix and start value.
 * @returns A function that returns the next incremental ID on each call.
 */
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

/**
 * Generate an incremental ID using a shared generator per prefix.
 *
 * @param options - Optional prefix and start value (used on first call per prefix).
 * @returns The next incremental ID for the given prefix.
 */
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
