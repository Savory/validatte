/**
 * Checks if a given string matches a specified regular expression pattern.
 *
 * @param str - The string to be tested against the pattern.
 * @param pattern - The regular expression pattern to test the string against.
 * @param modifiers - Optional string of modifiers to apply to the pattern if it is not already a RegExp object.
 * @returns `true` if the string matches the pattern, otherwise `false`.
 */
export function matches(
	str: string,
	pattern: RegExp,
	modifiers: undefined | string,
): boolean {
	if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
		pattern = new RegExp(pattern, modifiers);
	}
	return pattern.test(str);
}
