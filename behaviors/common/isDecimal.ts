import { merge } from './util/merge.ts';
import { includes } from './util/includes.ts';
import { decimal } from './alpha.ts';

function decimalRegExp(
	options: { locale: string; decimal_digits: string; force_decimal: boolean },
) {
	const regExp = new RegExp(
		`^[-+]?([0-9]+)?(\\${decimal[options.locale]}[0-9]{${options.decimal_digits}})${options.force_decimal ? '' : '?'}$`,
	);
	return regExp;
}

export const defaultDecimalOptions = {
	force_decimal: false,
	decimal_digits: '1,',
	locale: 'en-US',
};

const blacklist = ['', '-', '+'];

/**
 * Checks if the given string is a valid decimal number based on the provided options.
 *
 * @param str - The string to be validated as a decimal number.
 * @param options - An object containing validation options.
 * @param options.force_decimal - If true, the string must contain a decimal point.
 * @param options.decimal_digits - A string representing the allowed number of decimal digits.
 * @param options.locale - The locale to be used for decimal validation.
 * @returns A boolean indicating whether the string is a valid decimal number.
 * @throws Will throw an error if the provided locale is invalid.
 */
export function isDecimal(str: string, options: { force_decimal: boolean; decimal_digits: string; locale: string }): boolean {
	options = merge(options, defaultDecimalOptions);
	if (options.locale in decimal) {
		return !includes(blacklist, str.replace(/ /g, '')) &&
			decimalRegExp(options).test(str);
	}
	throw new Error(`Invalid locale '${options.locale}'`);
}
