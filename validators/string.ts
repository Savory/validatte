import { createDecorator } from '../validate.ts';
import { isRegex, lengthGreater, lengthGreaterOrEqual, lengthLower, lengthLowerOrEqual } from '../behaviors/string.ts';
import { isEmail, isURL } from '../behaviors/common/mod.ts';
import { isURLOptions } from '../behaviors/common/isURL.ts';
import { DecoratorFunction } from '../decorator-function.ts';

type StringDecoratorFunction = (length: number) => PropertyDecorator;

/**
 * Validates if the length of a string property is greater than or equal to the specified length.
 *
 * @param length - The minimum length that the string property must have.
 * @returns A decorator function that can be used to validate the length of a string property.
 *
 * @example
 * ```typescript
 * class User {
 *   @LengthGreaterOrEqual(5)
 *   username: string;
 * }
 * ```
 */
export const LengthGreaterOrEqual: StringDecoratorFunction = (length: number) => {
	return createDecorator(
		(prop: string) => lengthGreaterOrEqual(prop, length),
		{
			errorMessage: `Length must be greater than or equal ${length}`,
			constraints: [length],
		},
	);
};
/**
 * Validates if the length of a string property is greater than the specified length.
 *
 * @param length - The minimum length that the string property must have.
 * @returns A decorator function that can be used to validate the length of a string property.
 *
 * @example
 * ```typescript
 * class User {
 *   @LengthGreater(5)
 *   username: string;
 * }
 * ```
 */
export const LengthGreater: StringDecoratorFunction = (length: number) => {
	return createDecorator(
		(prop: string) => lengthGreater(prop, length),
		{
			errorMessage: `Length must be greater than ${length}`,
			constraints: [length],
		},
	);
};

/**
 * Validates if the length of a string property is lower than or equal to the specified length.
 *
 * @param length - The maximum length that the string property must have.
 * @returns A decorator function that can be used to validate the length of a string property.
 *
 * @example
 * ```typescript
 * class User {
 *   @LengthLowerOrEqual(5)
 *   username: string;
 * }
 * ```
 */
export const LengthLowerOrEqual: StringDecoratorFunction = (length: number) => {
	return createDecorator(
		(prop: string) => lengthLowerOrEqual(prop, length),
		{
			errorMessage: `Length must be lower than or equal ${length}`,
			constraints: [length],
		},
	);
};
/**
 * Validates if the length of a string property is lower than the specified length.
 *
 * @param length - The maximum length that the string property must have.
 * @returns A decorator function that can be used to validate the length of a string property.
 *
 * @example
 * ```typescript
 * class User {
 *   @LengthLower(5)
 *   username: string;
 * }
 * ```
 */
export const LengthLower: StringDecoratorFunction = (length: number) => {
	return createDecorator(
		(prop: string) => lengthLower(prop, length),
		{
			errorMessage: `Length must be lower than ${length}`,
			constraints: [length],
		},
	);
};

/**
 * Validates if a string matches the given regular expression.
 *
 * @param regex - The regular expression to validate the string against.
 * @returns A decorator function that can be used to validate a string property.
 *
 * @example
 * ```typescript
 * class User {
 *   @IsRegex(/^[a-zA-Z0-9]+$/)
 *   username: string;
 * }
 * ```
 */
export const IsRegex: (regex: RegExp) => PropertyDecorator = (regex: RegExp) => {
	return createDecorator(
		(prop: string) => isRegex(prop, regex),
		{
			errorMessage: `String does not validate regex: ${regex}`,
			constraints: [regex],
		},
	);
};

/**
 * Checks if a string is a valid email address.
 *
 * @returns A decorator function that validates if the property is an email.
 */
export const IsEmail: DecoratorFunction = () => {
	return createDecorator(
		(prop: string) => isEmail(prop),
		{
			errorMessage: `String is not an email`,
			constraints: [],
		},
	);
};

/**
 * Checks if a string is a valid URL.
 *
 * @param options - Optional configuration for URL validation.
 * @returns A decorator function that validates if the property is a URL.
 */
export const IsUrl: (options?: isURLOptions) => PropertyDecorator = (options: isURLOptions = {}) => {
	return createDecorator(
		(prop: string) => isURL(prop, options),
		{
			errorMessage: `String is not an URL`,
			constraints: [],
		},
	);
};
