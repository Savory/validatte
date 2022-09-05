import { createValidator, validateObject } from '../validate.ts';
import { Constructor } from '../types.ts';

// deno-lint-ignore no-explicit-any
export const Nested = createValidator((expectedClass: Constructor) => (prop: any) => {
	const errors = validateObject(prop, expectedClass);
	if (errors) {
		throw errors;
	}
	return true;
}, 'Not a proper object');
