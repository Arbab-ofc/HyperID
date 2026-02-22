import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createIncrementalIdGenerator, incrementalId } from '../src/incremental.js';

describe('createIncrementalIdGenerator', () => {
  it('returns a function', () => {
    const generator = createIncrementalIdGenerator();
    assert.equal(typeof generator, 'function');
  });

  it('increments sequentially', () => {
    const generator = createIncrementalIdGenerator();
    assert.equal(generator(), '1');
    assert.equal(generator(), '2');
    assert.equal(generator(), '3');
  });
});

describe('incrementalId', () => {
  it('increments per prefix', () => {
    assert.equal(incrementalId({ prefix: 'ORD_' }), 'ORD_1');
    assert.equal(incrementalId({ prefix: 'ORD_' }), 'ORD_2');
  });
});
