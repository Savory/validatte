/**
 * Checks if the given string represents a boolean value.
 *
 * This function returns `true` if the input string is one of the following:
 * - "true"
 * - "false"
 * - "1"
 * - "0"
 *
 * @param str - The string to check.
 * @returns `true` if the string is a boolean representation, otherwise `false`.
 */
export function isBoolean(str: string): boolean {
	return (['true', 'false', '1', '0'].indexOf(str) >= 0);
}
