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

const ids = {
  random: randomId(),
  randomHex: randomId({ length: 12, encoding: 'hex' }),
  short: shortId(),
  secure: secureId(),
  incremental: incrementalId({ prefix: 'ORD_' }),
  generator: createIncrementalIdGenerator({ prefix: 'USR_', start: 10 })(),
  uuid: uuidV4(),
  nano: nanoId({ length: 12 }),
  jwt: generateJWTSecret(16),
  prefixed: withPrefix('abc123', 'PRE_'),
};

console.log(JSON.stringify(ids, null, 2));
