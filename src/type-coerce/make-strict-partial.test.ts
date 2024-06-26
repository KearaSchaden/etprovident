import { makeStrictPartial } from './make-strict-partial';

describe('make-strict-partial', () => {
  it ('removes undefined keys from the object', () => {
    const source = {
      a: undefined,
      b: undefined,
      c: 12,
    };
    const result = makeStrictPartial(source);
    expect(Object.keys(result)).toStrictEqual(['c']);
    expect(result.c).toBe(12);
  });
});