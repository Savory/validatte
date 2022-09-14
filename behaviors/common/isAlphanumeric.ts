import { alphanumeric } from './alpha.ts';

export function isAlphanumeric(
	str: string,
	locale = 'en-US',
): boolean {
	if (locale in alphanumeric) {
		return alphanumeric[locale].test(str);
	}
	throw new Error(`Invalid locale '${locale}'`);
}

export const locales = Object.keys(alphanumeric);
