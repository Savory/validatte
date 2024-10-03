/**
 * Converts a string to a boolean value.
 *
 * @param str - The string to convert.
 * @param strict - If true, the conversion will be strict, meaning only '1' or 'true' (case insensitive) will return true.
 *                 If false, the conversion will be lenient, meaning any non-'0', non-'false' (case insensitive), and non-empty string will return true.
 * @returns The boolean representation of the input string based on the strictness.
 */
export function toBoolean(str: string, strict: boolean) {
	if (strict) {
		return str === '1' || /^true$/i.test(str);
	}
	return str !== '0' && !/^false$/i.test(str) && str !== '';
}
