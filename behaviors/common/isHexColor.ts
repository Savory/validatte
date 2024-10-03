const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

/**
 * Checks if the given string is a valid hexadecimal color code.
 *
 * A valid hexadecimal color code starts with a '#' followed by either
 * 3 or 6 hexadecimal digits (0-9, a-f, A-F).
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid hexadecimal color code, otherwise `false`.
 */
export function isHexColor(str: string): boolean {
	return hexcolor.test(str);
}
