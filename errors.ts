import { constraintKey } from './validate.ts';
import { ValidateFunctionOptions } from './types.ts';

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
