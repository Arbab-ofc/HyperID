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

  it('returns length 64 when configured', () => {
    const id = secureId({ length: 64 });
    assert.equal(id.length, 64);
  });

  it('returns base62 output when configured', () => {
    const id = secureId({ encoding: 'base62' });
    assert.equal(id.length, 32);
    assert.match(id, /^[A-Za-z0-9]+$/);
  });

  it('supports prefixes', () => {
    const id = secureId({ prefix: 'SEC_' });
    assert.ok(id.startsWith('SEC_'));
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

  it('generates unique values', () => {
    const ids = new Set<string>();
    for (let index = 0; index < 100; index += 1) {
      ids.add(uuidV4());
    }
    assert.equal(ids.size, 100);
  });
});

describe('nanoId', () => {
  it('defaults to length 21', () => {
    const id = nanoId();
    assert.equal(id.length, 21);
  });

  it('returns configured lengths', () => {
    const id = nanoId({ length: 10 });
    assert.equal(id.length, 10);
  });

  it('supports custom alphabets', () => {
    const id = nanoId({ alphabet: 'abc' });
    assert.match(id, /^[abc]+$/);
  });
});

describe('generateJWTSecret', () => {
  it('returns base64url text', () => {
    const secret = generateJWTSecret();
    assert.ok(secret.length > 0);
    assert.match(secret, /^[A-Za-z0-9_-]+={0,2}$/);
  });

  it('returns shorter output when length is reduced', () => {
    const longSecret = generateJWTSecret(64);
    const shortSecret = generateJWTSecret(32);
    assert.ok(shortSecret.length < longSecret.length);
  });
});

describe('withPrefix', () => {
  it('applies a prefix', () => {
    assert.equal(withPrefix('abc', 'PRE_'), 'PRE_abc');
  });

  it('returns original id for empty prefix', () => {
    assert.equal(withPrefix('abc', ''), 'abc');
  });
});
