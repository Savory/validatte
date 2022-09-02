import { constraintKey } from './validate.ts';
import { ValidateFunctionOptions } from './types.ts';

export type ValidationError = {
	property: string;
	errorMessage: string;
	// deno-lint-ignore no-explicit-any
	constraints: any[];
};

export const createErrorMessage = (options?: ValidateFunctionOptions) => {
	let message = options?.errorMessage || 'Failed behavior';
	if (options?.constraints) {
		for (const index in options.constraints) {
			message = message.replace(
				`${constraintKey}${+index + 1}`,
				`${options.constraints[index]}`,
			);
		}
	}
	return message;
};

export const formatErrors = (errors: ValidationError[], propertyName: string) => {
	return errors.map((error: ValidationError) => ({ ...error, property: `${propertyName}.${error.property}` }));
};
