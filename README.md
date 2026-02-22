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
