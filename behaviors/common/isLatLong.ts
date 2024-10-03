const lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
const long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

/**
 * Checks if a given string is a valid latitude and longitude pair.
 *
 * The string should be in the format "latitude,longitude". Optionally, the latitude and longitude
 * can be enclosed in parentheses.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid latitude and longitude pair, `false` otherwise.
 */
export function isLatLong(str: string): boolean {
	if (!str.includes(',')) return false;
	const pair = str.split(',');
	if (
		(pair[0].startsWith('(') && !pair[1].endsWith(')')) ||
		(pair[1].endsWith(')') && !pair[0].startsWith('('))
	) {
		return false;
	}
	return lat.test(pair[0]) && long.test(pair[1]);
}
