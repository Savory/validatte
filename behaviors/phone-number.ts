import { parsePhoneNumber } from '../deps.ts';

export const isPhoneNumber = (prop: string, locale?: string) => {
	const pn = parsePhoneNumber(prop, { regionCode: locale });
	return pn.valid;
};
