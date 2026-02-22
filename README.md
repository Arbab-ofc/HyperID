# 🚀 hyperid

> Zero-dependency, TypeScript-first, cryptographically secure ID generation toolkit for Node.js

## ✨ Features
- `randomId` for flexible crypto-safe IDs
- `shortId` for compact base62 IDs
- `secureId` for high-entropy identifiers
- `incrementalId` for in-memory counters
- `createIncrementalIdGenerator` for isolated sequences
- `uuidV4` for RFC 4122 v4 UUIDs
- `nanoId` for NanoID-style IDs
- `generateJWTSecret` for JWT signing secrets
- `withPrefix` for consistent prefixes
- Zero runtime dependencies
- Crypto-secure randomness only
- TypeScript-first with strict types
- ESM + CJS builds

## 📦 Installation
```bash
npm install hyperid
```

## 🔧 Usage
```ts
import {
  randomId,
  shortId,
  secureId,
  incrementalId,
  createIncrementalIdGenerator,
  uuidV4,
  nanoId,
  generateJWTSecret,
  withPrefix,
} from 'hyperid';

const id = randomId();
const hexId = randomId({ length: 32, encoding: 'hex' });
const prefixed = randomId({ prefix: 'ID_' });

const compact = shortId();

const secure = secureId();
const secureBase62 = secureId({ encoding: 'base62', length: 48, prefix: 'SEC_' });

const orderId = incrementalId({ prefix: 'ORD_' });
const userIdGenerator = createIncrementalIdGenerator({ prefix: 'USR_', start: 1000 });
const userId = userIdGenerator();

const uuid = uuidV4();

const nano = nanoId();
const nanoCustom = nanoId({ length: 10, alphabet: 'abcXYZ' });

const jwtSecret = generateJWTSecret();
const shortSecret = generateJWTSecret(32);

const tagged = withPrefix('abc123', 'PRE_');
```

## 📖 API Reference

### `randomId`
Signature: `randomId(options?: RandomIdOptions): string`

Parameters:
- `options`: `RandomIdOptions` (optional).
- `options.length`: `number` (default: `16`). Output length in characters.
- `options.encoding`: `Encoding` (default: `'base62'`). Output encoding.
- `options.prefix`: `string` (default: `''`). Prefix to prepend.

Returns: `string`

Example:
```ts
const id = randomId({ length: 24, encoding: 'alphanumeric', prefix: 'ID_' });
```

### `shortId`
Signature: `shortId(options?: { prefix?: string }): string`

Parameters:
- `options`: `{ prefix?: string }` (optional).
- `options.prefix`: `string` (default: `''`). Prefix to prepend.

Returns: `string`

Example:
```ts
const id = shortId({ prefix: 'S_' });
```

### `secureId`
Signature: `secureId(options?: SecureIdOptions): string`

Parameters:
- `options`: `SecureIdOptions` (optional).
- `options.length`: `number` (default: `32`). Output length in characters.
- `options.encoding`: `Encoding` (default: `'hex'`). Output encoding.
- `options.prefix`: `string` (default: `''`). Prefix to prepend.

Returns: `string`

Example:
```ts
const token = secureId({ length: 64, encoding: 'hex' });
```

### `createIncrementalIdGenerator`
Signature: `createIncrementalIdGenerator(options?: IncrementalIdOptions): () => string`

Parameters:
- `options`: `IncrementalIdOptions` (optional).
- `options.prefix`: `string` (default: `''`). Prefix to prepend.
- `options.start`: `number` (default: `1`). Starting counter value.

Returns: `() => string`

Example:
```ts
const generator = createIncrementalIdGenerator({ prefix: 'USR_', start: 500 });
const id = generator();
```

### `incrementalId`
Signature: `incrementalId(options?: IncrementalIdOptions): string`

Parameters:
- `options`: `IncrementalIdOptions` (optional).
- `options.prefix`: `string` (default: `''`). Prefix to prepend.
- `options.start`: `number` (default: `1`). Initial counter when a prefix is first seen.

Returns: `string`

Example:
```ts
const first = incrementalId({ prefix: 'ORD_' });
const second = incrementalId({ prefix: 'ORD_' });
```

### `uuidV4`
Signature: `uuidV4(): string`

Parameters: none

Returns: `string`

Example:
```ts
const id = uuidV4();
```

### `nanoId`
Signature: `nanoId(options?: NanoIdOptions): string`

Parameters:
- `options`: `NanoIdOptions` (optional).
- `options.length`: `number` (default: `21`). Output length.
- `options.alphabet`: `string` (default: base62 alphabet). Character set.

Returns: `string`

Example:
```ts
const id = nanoId({ length: 12 });
```

### `generateJWTSecret`
Signature: `generateJWTSecret(length?: number): string`

Parameters:
- `length`: `number` (default: `64`). Number of random bytes.

Returns: `string`

Example:
```ts
const secret = generateJWTSecret(48);
```

### `withPrefix`
Signature: `withPrefix(id: string, prefix: string): string`

Parameters:
- `id`: `string`. Base identifier.
- `prefix`: `string`. Prefix to prepend.

Returns: `string`

Example:
```ts
const tagged = withPrefix('abc123', 'PRE_');
```

## 🔒 Security
- All randomness is generated using `crypto.randomBytes` or `crypto.randomUUID`.
- No `Math.random` usage anywhere in the library.
- Suitable for security-sensitive identifiers such as tokens, secrets, and session IDs.
