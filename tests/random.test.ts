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
});

describe('shortId', () => {
  it('returns a string of length 8', () => {
    const id = shortId();
    assert.equal(id.length, 8);
  });
});
