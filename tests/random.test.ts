import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { randomId, shortId } from '../src/random.js';

describe('randomId', () => {
  it('returns a string of length 16 by default', () => {
    const id = randomId();
    assert.equal(id.length, 16);
  });

  it('returns a string of length 32 when configured', () => {
    const id = randomId({ length: 32 });
    assert.equal(id.length, 32);
  });

  it('returns hex output when encoding is hex', () => {
    const id = randomId({ encoding: 'hex' });
    assert.equal(id.length, 16);
    assert.match(id, /^[0-9a-f]+$/);
  });

  it('supports prefixes', () => {
    const id = randomId({ prefix: 'ID_' });
    assert.ok(id.startsWith('ID_'));
    assert.equal(id.length, 19);
  });

  it('returns alphanumeric output when configured', () => {
    const id = randomId({ length: 10, encoding: 'alphanumeric' });
    assert.equal(id.length, 10);
    assert.match(id, /^[0-9A-Za-z]+$/);
  });

  it('supports single-character lengths', () => {
    const id = randomId({ length: 1, encoding: 'base62' });
    assert.equal(id.length, 1);
  });

  it('throws when length is invalid', () => {
    assert.throws(() => randomId({ length: 0 }), TypeError);
  });

  it('generates unique IDs', () => {
    const ids = new Set<string>();
    for (let index = 0; index < 1000; index += 1) {
      ids.add(randomId());
    }
    assert.equal(ids.size, 1000);
  });
});

describe('shortId', () => {
  it('returns a string of length 8', () => {
    const id = shortId();
    assert.equal(id.length, 8);
  });

  it('returns base62 output', () => {
    const id = shortId();
    assert.match(id, /^[A-Za-z0-9]+$/);
  });

  it('supports prefixes', () => {
    const id = shortId({ prefix: 'S_' });
    assert.ok(id.startsWith('S_'));
    assert.equal(id.length, 10);
  });
});
