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
