import { alpha } from './alpha.ts';

/**
 * Checks if the given string contains only alphabetic characters based on the specified locale.
 *
 * @param str - The string to be checked.
 * @param locale - The locale to be used for the alphabetic check. Defaults to 'en-US'.
 * @returns `true` if the string contains only alphabetic characters for the specified locale, otherwise `false`.
 * @throws Will throw an error if the specified locale is not supported.
 */
export function isAlpha(
	str: string,
	locale = 'en-US',
): boolean {
	if (locale in alpha) {
		return alpha[locale].test(str);
	}
	throw new Error(`Invalid locale '${locale}'`);
}

export const locales: string[] = Object.keys(alpha);
