import { alpha } from './alpha.ts';

export function isAlpha(
	str: string,
	locale = 'en-US',
): boolean {
	if (locale in alpha) {
		return alpha[locale].test(str);
	}
	throw new Error(`Invalid locale '${locale}'`);
}

export const locales = Object.keys(alpha);
