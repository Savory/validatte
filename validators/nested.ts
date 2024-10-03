import { constraintKey, createDecorator, validateObject } from '../validate.ts';
import { Constructor } from '../types.ts';

/**
 * Validates if a property is an instance of the expected class.
 *
 * @param expectedClass - The constructor of the class that the property should be an instance of.
 */
export function Nested(expectedClass: Constructor): PropertyDecorator {
	return createDecorator(
		(prop: string) => {
			const errors = validateObject(prop, expectedClass);
			if (errors) {
				throw errors;
			}
			return true;
		},
		{
			errorMessage: `Object should be  than ${constraintKey}1`,
			constraints: [],
		},
	);
};
