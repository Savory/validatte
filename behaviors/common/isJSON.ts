/**
 * Checks if a given string is a valid JSON.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid JSON object, otherwise `false`.
 */
export function isJSON(str: string): boolean {
	try {
		const obj = JSON.parse(str);
		return !!obj && typeof obj === 'object';
	} catch (e) { /* ignore */ }
	return false;
}
