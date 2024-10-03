const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

/**
 * Checks if the given string is a valid hexadecimal number.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid hexadecimal number, otherwise `false`.
 */
export function isHexadecimal(str: string): boolean {
	return hexadecimal.test(str);
}
