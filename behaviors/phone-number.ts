import { parsePhoneNumber } from '../deps.ts';

export const isPhoneNumber = (prop: string, locale?: string) => {
	const pn = parsePhoneNumber(prop, locale);
	return pn.isValid();
};
