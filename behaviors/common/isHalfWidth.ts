export const halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

/**
 * Checks if the given string contains any half-width characters.
 *
 * Half-width characters are characters that occupy half the width of a full-width character.
 * This is common in East Asian typography, where characters can be either full-width or half-width.
 *
 * @param str - The string to be checked for half-width characters.
 * @returns `true` if the string contains any half-width characters, otherwise `false`.
 */
export function isHalfWidth(str: string): boolean {
	return halfWidth.test(str);
}
