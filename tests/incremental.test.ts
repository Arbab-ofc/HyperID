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

  it('applies a prefix', () => {
    const generator = createIncrementalIdGenerator({ prefix: 'USR_' });
    assert.equal(generator(), 'USR_1');
    assert.equal(generator(), 'USR_2');
    assert.equal(generator(), 'USR_3');
  });

  it('supports custom start values', () => {
    const generator = createIncrementalIdGenerator({ start: 100 });
    assert.equal(generator(), '100');
    assert.equal(generator(), '101');
    assert.equal(generator(), '102');
  });

  it('supports prefix and start together', () => {
    const generator = createIncrementalIdGenerator({ prefix: 'A_', start: 5 });
    assert.equal(generator(), 'A_5');
    assert.equal(generator(), 'A_6');
  });

  it('maintains independent counters per generator', () => {
    const first = createIncrementalIdGenerator();
    const second = createIncrementalIdGenerator();
    assert.equal(first(), '1');
    assert.equal(first(), '2');
    assert.equal(second(), '1');
  });
});

describe('incrementalId', () => {
  it('increments per prefix', () => {
    assert.equal(incrementalId({ prefix: 'ORD_' }), 'ORD_1');
    assert.equal(incrementalId({ prefix: 'ORD_' }), 'ORD_2');
  });

  it('maintains separate counters for each prefix', () => {
    assert.equal(incrementalId({ prefix: 'X_' }), 'X_1');
    assert.equal(incrementalId({ prefix: 'Y_' }), 'Y_1');
    assert.equal(incrementalId({ prefix: 'X_' }), 'X_2');
    assert.equal(incrementalId({ prefix: 'Y_' }), 'Y_2');
  });

  it('uses start value on first call per prefix', () => {
    assert.equal(incrementalId({ prefix: 'START_', start: 10 }), 'START_10');
    assert.equal(incrementalId({ prefix: 'START_' }), 'START_11');
  });
});
