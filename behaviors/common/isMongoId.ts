import { isHexadecimal } from './isHexadecimal.ts';

/**
 * Checks if the given string is a valid MongoDB ObjectId.
 * A valid MongoDB ObjectId is a 24-character hexadecimal string.
 *
 * @param str - The string to check.
 * @returns `true` if the string is a valid MongoDB ObjectId, `false` otherwise.
 */
export function isMongoId(str: string): boolean {
	return isHexadecimal(str) && str.length === 24;
}
