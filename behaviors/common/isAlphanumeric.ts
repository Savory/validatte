import { alphanumeric } from './alpha.ts';

/**
 * Checks if a given string is alphanumeric according to the specified locale.
 *
 * @param str - The string to be checked.
 * @param locale - The locale to be used for the alphanumeric check. Defaults to 'en-US'.
 * @returns A boolean indicating whether the string is alphanumeric.
 * @throws Will throw an error if the specified locale is not supported.
 */
export function isAlphanumeric(
	str: string,
	locale = 'en-US',
): boolean {
	if (locale in alphanumeric) {
		return alphanumeric[locale].test(str);
	}
	throw new Error(`Invalid locale '${locale}'`);
}

export const locales: string[] = Object.keys(alphanumeric);
