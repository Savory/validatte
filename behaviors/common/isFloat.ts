import { decimal } from './alpha.ts';

interface isFloatOptions {
	locale?: string;
	min?: number;
	max?: number;
	lt?: number;
	gt?: number;
}

/**
 * Checks if the given string is a valid floating-point number based on the provided options.
 *
 * @param str - The string to validate as a floating-point number.
 * @param options - An object containing validation options.
 * @param options.locale - Optional locale to determine the decimal separator.
 * @param options.min - Optional minimum value the number can be.
 * @param options.max - Optional maximum value the number can be.
 * @param options.lt - Optional value that the number must be less than.
 * @param options.gt - Optional value that the number must be greater than.
 * @returns `true` if the string is a valid floating-point number according to the options, otherwise `false`.
 */
export function isFloat(str: string, options: isFloatOptions): boolean {
	const float = new RegExp(
		`^(?:[-+])?(?:[0-9]+)?(?:\\${options?.locale ? decimal[options.locale] : '.'}[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$`,
	);
	if (str === '' || str === '.' || str === '-' || str === '+') {
		return false;
	}
	const value = parseFloat(str.replace(',', '.'));
	return float.test(str) &&
		(!options?.hasOwnProperty('min') || value >= options.min!) &&
		(!options?.hasOwnProperty('max') || value <= options.max!) &&
		(!options?.hasOwnProperty('lt') || value < options.lt!) &&
		(!options?.hasOwnProperty('gt') || value > options.gt!);
}

export const locales = Object.keys(decimal);
