const octal = /^(0o)?[0-7]+$/i;

/**
 * Checks if the given string is a valid octal number.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid octal number, otherwise `false`.
 */
export function isOctal(str: string): boolean {
	return octal.test(str);
}
