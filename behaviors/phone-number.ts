import { parsePhoneNumber } from 'https://deno.land/x/phonenumber@v3.3.0/index-esm.mjs';
export const isPhoneNumber = (locale: string) => (prop: string) => {
	const pn = parsePhoneNumber(prop, locale);
	return pn.isValid();
};
