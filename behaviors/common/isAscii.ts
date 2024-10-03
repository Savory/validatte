const ascii = /^[\x00-\x7F]+$/;

/**
 * Checks if the given string consists only of ASCII characters.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string contains only ASCII characters, otherwise `false`.
 */
export function isAscii(str: string): boolean {
	return ascii.test(str);
}
