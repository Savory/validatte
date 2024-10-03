import { parsePhoneNumber } from '../deps.ts';

export function isPhoneNumber(prop: string, locale?: string): boolean {
	const pn = parsePhoneNumber(prop, { regionCode: locale });
	return pn.valid;
}
