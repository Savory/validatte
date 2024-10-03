const base32 = /^[A-Z2-7]+=*$/;

/**
 * Checks if a given string is a valid Base32 encoded string.
 *
 * A valid Base32 string must:
 * - Have a length greater than 0.
 * - Have a length that is a multiple of 8.
 * - Match the Base32 regular expression pattern.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid Base32 encoded string, otherwise `false`.
 */
export function isBase32(str: string): boolean {
	return str.length > 0 && str.length % 8 === 0 && base32.test(str);
}
