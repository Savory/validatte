import { constraintKey, createDecorator } from '../validate.ts';
import { isPhoneNumber } from '../behaviors/phone-number.ts';
import { DecoratorFunction } from '../decorator-function.ts';

/**
 * Checks if a string is a valid phone number for a given locale.
 *
 * @param locale - Optional locale string to specify the phone number format
 */
export function IsPhoneNumber(locale?: string): PropertyDecorator {
	return createDecorator(
		(prop: string) => isPhoneNumber(prop, locale),
		{
			errorMessage: `String is not a local phone number from ${constraintKey}1`,
			constraints: [locale],
		},
	);
};

/**
 * Validates if a string is an international phone number.
 *
 * @example
 * ```typescript
 * class User {
 *   @IsInternationalPhoneNumber()
 *   phoneNumber: string;
 * }
 * ```
 */
export const IsInternationalPhoneNumber: DecoratorFunction = () => {
	return createDecorator(
		(prop: string) => isPhoneNumber(prop),
		{
			errorMessage: `String is not an international phone number`,
			constraints: [],
		},
	);
};
