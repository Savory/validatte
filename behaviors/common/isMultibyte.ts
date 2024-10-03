const multibyte = /[^\x00-\x7F]/;

/**
 * Checks if the given string contains one or more multibyte characters.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string contains multibyte characters, otherwise `false`.
 */
export function isMultibyte(str: string): boolean {
	return multibyte.test(str);
}
