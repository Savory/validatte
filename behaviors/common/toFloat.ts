import { isFloat } from './isFloat.ts';

/**
 * Converts a string to a floating-point number.
 *
 * @param str - The string to be converted.
 * @returns The floating-point number representation of the string, or NaN if the string is not a valid float.
 */
export function toFloat(str: string): number {
	if (!isFloat(str, {})) return NaN;
	return parseFloat(str);
}
