import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { secureId } from '../src/secure.js';
import { uuidV4 } from '../src/uuid.js';
import { nanoId } from '../src/nano.js';
import { generateJWTSecret } from '../src/jwt.js';
import { withPrefix } from '../src/prefix.js';

describe('secureId', () => {
  it('returns a hex string of length 32 by default', () => {
    const id = secureId();
    assert.equal(id.length, 32);
    assert.match(id, /^[0-9a-f]+$/);
  });
});

describe('uuidV4', () => {
  it('returns a RFC 4122 v4 UUID', () => {
    const id = uuidV4();
    assert.match(
      id,
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });
});

describe('nanoId', () => {
  it('defaults to length 21', () => {
    const id = nanoId();
    assert.equal(id.length, 21);
  });
});

describe('generateJWTSecret', () => {
  it('returns base64url text', () => {
    const secret = generateJWTSecret();
    assert.ok(secret.length > 0);
  });
});

describe('withPrefix', () => {
  it('applies a prefix', () => {
    assert.equal(withPrefix('abc', 'PRE_'), 'PRE_abc');
  });
});
