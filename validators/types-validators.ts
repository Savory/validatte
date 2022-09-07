// deno-lint-ignore-file no-explicit-any

import { createTypeValidator, createValidator } from '../validate.ts';

export const IsString = createTypeValidator('string');
export const IsNumber = createTypeValidator('number');
export const IsBigint = createTypeValidator('bigint');
export const IsBoolean = createTypeValidator('boolean');
export const IsFunction = createTypeValidator('function');
export const IsObject = createTypeValidator('object');
export const IsSymbol = createTypeValidator('symbol');
export const IsUndefined = createTypeValidator('undefined');
export const IsArray = createValidator(() => (prop: any) => Array.isArray(prop), 'Property is not an array');
