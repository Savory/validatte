const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

/**
 * Checks if the given string contains any surrogate pair characters.
 *
 * A surrogate pair is a pair of 16-bit code units used to encode characters
 * outside the Basic Multilingual Plane (BMP) in UTF-16 encoding.
 *
 * @param str - The string to check for surrogate pairs.
 * @returns `true` if the string contains surrogate pairs, otherwise `false`.
 */
export function isSurrogatePair(str: string): boolean {
	return surrogatePair.test(str);
}
