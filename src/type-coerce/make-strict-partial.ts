import type { Dictionary } from '../Dictionary.type';
import type { StrictPartial } from '../StrictPartial.type';
import { isDefined } from '../type-check/is-primitive';

export function makeStrictPartial<T extends Dictionary>(value: T): StrictPartial<T> {
  const result: Dictionary<NonNullable<unknown>> = {};

  for (const [key, prop] of Object.entries(value)) {
    if (isDefined(prop)) {
      result[key] = prop;
    }
  }

  return result as StrictPartial<T>;
}