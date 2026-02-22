<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0b1220,100:0f172a&height=220&section=header&text=hyperid&fontSize=64&fontColor=ffffff&animation=fadeIn" alt="hyperid banner" />

> Zero-dependency, TypeScript-first, cryptographically secure ID generation toolkit for Node.js (v1)

<p>
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=94A3B8&center=true&vCenter=true&width=520&lines=Secure+IDs+for+Node.js+18%2B;Zero+Dependencies;ESM+%2B+CJS+Ready;TypeScript-First+%2B+Strict" alt="Typing SVG" />
</p>

<p>
  <img src="https://img.shields.io/badge/Node.js-%3E%3D18-0f172a?style=for-the-badge&logo=node.js&logoColor=3ddc84" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5.x-0f172a?style=for-the-badge&logo=typescript&logoColor=38bdf8" alt="TypeScript">
  <img src="https://img.shields.io/badge/ESM%20%2B%20CJS-0f172a?style=for-the-badge&logo=javascript&logoColor=facc15" alt="ESM+CJS">
  <img src="https://img.shields.io/badge/Zero%20Deps-0f172a?style=for-the-badge&logo=dependabot&logoColor=22c55e" alt="Zero Deps">
  <img src="https://img.shields.io/badge/tsup-0f172a?style=for-the-badge&logo=esbuild&logoColor=38bdf8" alt="tsup">
  <img src="https://img.shields.io/badge/tsx-0f172a?style=for-the-badge&logo=vitest&logoColor=a855f7" alt="tsx">
</p>

<p>
  <a href="https://github.com/Arbab-ofc">
    <img src="https://img.shields.io/badge/GitHub-Arbab--ofc-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="mailto:arbabprvt@gmail.com">
    <img src="https://img.shields.io/badge/Email-arbabprvt%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://www.linkedin.com/in/arbab-ofc/">
    <img src="https://img.shields.io/badge/LinkedIn-Arbab%20ofc-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Production%20Ready-0f172a?style=for-the-badge&logo=vercel&logoColor=22c55e" alt="Production Ready">
  <img src="https://img.shields.io/badge/Runtime-Node.js%2018%2B-0f172a?style=for-the-badge&logo=node.js&logoColor=3ddc84" alt="Runtime">
  <img src="https://img.shields.io/badge/Bundle-ESM%20%2B%20CJS-0f172a?style=for-the-badge&logo=rollup.js&logoColor=f97316" alt="Bundle">
</p>

</div>

<br />

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1e293b,100:0f172a&height=3&section=footer" alt="divider" />
</div>

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

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1e293b,100:0f172a&height=3&section=footer" alt="divider" />
</div>

## 📦 Installation
```bash
npm install @arbabofc/hyperid
```

## 🧰 Requirements
- Node.js 18 or newer.

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1e293b,100:0f172a&height=3&section=footer" alt="divider" />
</div>

## 🧭 Full Usage Guide
This section explains how to use every feature, what you get, and when to use it.

1. Install the package and import the functions you need.
2. Choose the generator based on your use-case.
3. Use prefixes to namespace IDs across environments or domains (e.g., `ORD_`, `USR_`).
4. Prefer `secureId` and `generateJWTSecret` for security-sensitive values (tokens, secrets).
5. `incrementalId` is in-memory; it resets when the process restarts.

Quick selection guide:
- `randomId`: general IDs with flexible length/encoding.
- `shortId`: compact base62 IDs.
- `secureId`: high-entropy identifiers and secrets.
- `incrementalId`: in-memory counters in a single process.
- `createIncrementalIdGenerator`: isolated sequences (multiple counters).
- `uuidV4`: standard UUIDs.
- `nanoId`: NanoID-style IDs with a custom alphabet.
- `generateJWTSecret`: HMAC JWT secrets (base64url).
- `withPrefix`: consistent prefixes across your IDs.

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
} from '@arbabofc/hyperid';

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

CommonJS example:
```js
const {
  randomId,
  shortId,
  secureId,
  incrementalId,
  createIncrementalIdGenerator,
  uuidV4,
  nanoId,
  generateJWTSecret,
  withPrefix,
} = require('@arbabofc/hyperid');

const id = randomId({ prefix: 'CJS_' });
```

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:1e293b,100:0f172a&height=3&section=footer" alt="divider" />
</div>

## 🔤 Encodings
- `hex`: lowercase hexadecimal with two characters per byte.
- `base62`: `A-Z`, `a-z`, `0-9` for compact IDs.
- `alphanumeric`: `0-9`, `A-Z`, `a-z` for sortable-friendly output.

## 📖 API Reference

Encoding type: `Encoding = 'hex' | 'alphanumeric' | 'base62'`.

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

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:0ea5e9,100:22c55e&height=3&section=footer" alt="divider" />
</div>

## 🔒 Security
- All randomness is generated using `crypto.randomBytes` or `crypto.randomUUID`.
- No `Math.random` usage anywhere in the library.
- Suitable for security-sensitive identifiers such as tokens, secrets, and session IDs.

## ⚡ Performance
- Synchronous APIs for predictable performance and simplicity.
- Benchmarks are coming soon.

## ✅ Tested Results
Test suite executed with:
```bash
npx tsx --test tests/*.test.ts
```

Summary:
- `tests`: 38
- `suites`: 9
- `pass`: 38
- `fail`: 0

Excerpt:
```text
✔ createIncrementalIdGenerator
✔ incrementalId
✔ randomId
✔ shortId
✔ secureId
✔ uuidV4
✔ nanoId
✔ generateJWTSecret
✔ withPrefix
```

Build output:
```text
CJS dist/index.cjs     2.62 KB
ESM dist/index.js      2.03 KB
DTS dist/index.d.ts    4.04 KB
```

## 📌 Feature Outputs (What You Get)
- `randomId()` -> 16-char base62 string (configurable length/encoding/prefix).
- `shortId()` -> 8-char base62 string (compact IDs).
- `secureId()` -> 32-char hex string (minimum 32 bytes entropy).
- `incrementalId({ prefix: 'ORD_' })` -> `ORD_1`, `ORD_2`, ... (per-prefix counters).
- `createIncrementalIdGenerator()` -> isolated sequence (no shared state).
- `uuidV4()` -> RFC 4122 v4 UUID string.
- `nanoId()` -> 21-char base62-style string (custom alphabet supported).
- `generateJWTSecret()` -> base64url-encoded secret string.
- `withPrefix('abc', 'PRE_')` -> `PRE_abc`.

## 🤝 Contributing
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:1e293b&height=120&section=footer" alt="footer" />
</div>
