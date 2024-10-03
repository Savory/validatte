import { isInt } from './isInt.ts';

/**
 * Checks if the given string represents a valid port number.
 *
 * A valid port number is an integer between 0 and 65535 inclusive.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid port number, otherwise `false`.
 */
export function isPort(str: string): boolean {
	return isInt(str, { min: 0, max: 65535 });
}
