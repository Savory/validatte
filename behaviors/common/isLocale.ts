const localeReg = /^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/;

/**
 * Checks if the given string is a valid locale.
 *
 * This function returns `true` if the string matches either 'en_US_POSIX' or 'ca_ES_VALENCIA',
 * or if it matches the regular expression defined by `localeReg`.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid locale, otherwise `false`.
 */
export function isLocale(str: string): boolean {
	if (str === 'en_US_POSIX' || str === 'ca_ES_VALENCIA') {
		return true;
	}
	return localeReg.test(str);
}
