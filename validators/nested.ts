import { constraintKey, createDecorator, validateObject } from '../validate.ts';
import { Constructor } from '../types.ts';

export const Nested = (expectedClass: Constructor) => {
	return createDecorator(
		(prop: number) => {
			const errors = validateObject(prop, expectedClass);
			if (errors) {
				throw errors;
			}
			return true;
		},
		{
			errorMessage: `Number must be lower than ${constraintKey}1`,
			constraints: [],
		},
	);
};
