import { parsePhoneNumber } from '../deps.ts';

/**
 * Checks if the given string is a valid phone number for the specified locale.
 *
 * @param prop - The phone number string to validate.
 * @param locale - Optional locale to validate the phone number against.
 * @returns `true` if the phone number is valid, `false` otherwise.
 */
export function isPhoneNumber(prop: string, locale?: string): boolean {
	const pn = parsePhoneNumber(prop, { regionCode: locale });
	return pn.valid;
}
