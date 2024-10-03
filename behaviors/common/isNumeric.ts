const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols = /^[0-9]+$/;

interface isNumericOptions {
	no_symbols?: boolean;
}

/**
 * Checks if the given string is numeric.
 *
 * @param str - The string to check.
 * @param options - Options to customize the numeric check.
 * @param options.no_symbols - If true, the function will only consider digits and will not allow symbols.
 * @returns `true` if the string is numeric, `false` otherwise.
 */
export function isNumeric(
	str: string,
	options: isNumericOptions,
): boolean {
	if (options && options.no_symbols) {
		return numericNoSymbols.test(str);
	}
	return numeric.test(str);
}
