/**
 * @module
 * Helper function to generate validator, decorator and validate objects.
 */

// deno-lint-ignore-file no-explicit-any

import { Constructor, ValidateFunction, ValidateFunctionOptions, ValidateInfo, ValidateSymbol, Validator } from './types.ts';
import { createErrorMessage, formatErrors, ValidationError } from './errors.ts';

export const constraintKey: string = `$constraint`;

/**
 * Creates a property decorator that attaches validation logic to a class property.
 *
 * @param validatorFunction - The function that performs the validation.
 * @param validatorOption - Options to be passed to the validator function.
 * @returns A property decorator function.
 */
export const createDecorator = (
	validatorFunction: ValidateFunction,
	validatorOption: ValidateFunctionOptions,
): PropertyDecorator => {
	// deno-lint-ignore ban-types
	return (target: Object, propertyKey: PropertyKey) => {
		if (typeof propertyKey === 'string') {
			if (
				Object.getOwnPropertyDescriptor(target, ValidateSymbol) === undefined
			) {
				Object.defineProperty(target, ValidateSymbol, {
					enumerable: false,
					value: {},
				});
			}
			const info: ValidateInfo = Object.getOwnPropertyDescriptor(
				target,
				ValidateSymbol,
			)?.value;

			const propInfo = info[propertyKey];
			const validator: Validator = {
				behavior: validatorFunction,
				options: validatorOption,
			};

			if (propInfo) {
				propInfo.push(validator);
			} else {
				info[propertyKey] = [validator];
			}
		}
	};
};

/**
 * Validates an object against the validators defined in the provided class.
 *
 * @template T - A type that extends the Constructor type.
 * @param obj - The object to be validated.
 * @param Class - The class containing the validation rules.
 * @returns An array of validation errors, if any.
 */
export const validateObject = <T extends Constructor>(
	obj: any,
	Class: T,
): ValidationError[] => {
	const validators = Object.getOwnPropertyDescriptor(
		Class.prototype,
		ValidateSymbol,
	)
		?.value as ValidateInfo | undefined;

	const emptyInstance = Reflect.construct(Class, []);

	obj = { ...emptyInstance, ...obj };

	if (validators === undefined) {
		return [];
	}
	const errors: any[] = [];
	Object.getOwnPropertyNames(obj).forEach((propertyName) => {
		const propertyValidators = validators[propertyName];

		if (propertyValidators) {
			for (const validator of propertyValidators.reverse()) {
				try {
					const passValidation = validator.behavior(obj[propertyName]);
					if (!passValidation) {
						errors.push({
							property: propertyName,
							errorMessage: createErrorMessage(validator.options),
							constraints: validator.options?.constraints,
						});
					}
				} catch (err) {
					if (Array.isArray(err)) {
						const formattedErrors = formatErrors(err, propertyName);
						errors.push(...formattedErrors);
					} else {
						errors.push({
							property: propertyName,
							errorMessage: createErrorMessage(validator.options),
							constraints: validator.options?.constraints,
						});
					}
				}
			}
		}
	});

	return errors;
};

/**
 * Creates a type validator function for a specified type name.
 *
 * @param typeName - The name of the type to validate against (e.g., 'string', 'number').
 * @returns A validator function that checks if a property is of the specified type.
 *
 * @example
 * const isString = createTypeValidator('string');
 * console.log(isString('hello')); // true
 * console.log(isString(123)); // false
 */
export function createTypeValidator(typeName: string): () => PropertyDecorator {
	return createValidator(() => {
		// deno-lint-ignore valid-typeof
		return (prop) => typeof prop === typeName;
	}, `Property must be a ${typeName}`);
}
/**
 * Creates a validator decorator function.
 *
 * @template T - A tuple type representing the arguments for the validator function.
 * @param validatorFunction - A function that takes arguments of type `T` and returns a `ValidateFunction`.
 * @param errorMessage - A string representing the error message to be used if validation fails.
 * @returns A function that takes arguments of type `T` and returns a decorator created by `createDecorator`.
 */
export function createValidator<T extends Array<any>>(
	validatorFunction: (...args: T) => ValidateFunction,
	errorMessage: string,
): (...args: T) => PropertyDecorator {
	return (...args: T) => {
		return createDecorator(validatorFunction(...args), {
			errorMessage,
			constraints: [...args],
		});
	};
}
