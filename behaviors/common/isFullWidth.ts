export const fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Checks if the given string contains any full-width characters.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string contains full-width characters, otherwise `false`.
 */
export function isFullWidth(str: string): boolean {
	return fullWidth.test(str);
}
