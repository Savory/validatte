// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
const isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

/**
 * Checks if the given string is a valid International Standard Recording Code (ISRC).
 *
 * @param str - The string to be checked.
 * @returns True if the string is a valid ISRC, false otherwise.
 */
export function isISRC(str: string): boolean {
	return isrc.test(str);
}
