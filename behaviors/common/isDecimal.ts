import { merge } from './util/merge.ts';
import { includes } from './util/includes.ts';
import { decimal } from './alpha.ts';

function decimalRegExp(
	options: { locale: string; decimal_digits: string; force_decimal: boolean },
) {
	const regExp = new RegExp(
		`^[-+]?([0-9]+)?(\\${decimal[options.locale]}[0-9]{${options.decimal_digits}})${options.force_decimal ? '' : '?'}$`,
	);
	return regExp;
}

const default_decimal_options = {
	force_decimal: false,
	decimal_digits: '1,',
	locale: 'en-US',
};

const blacklist = ['', '-', '+'];

export function isDecimal(str: string, options: { force_decimal: boolean; decimal_digits: string; locale: string }) {
	options = merge(options, default_decimal_options);
	if (options.locale in decimal) {
		return !includes(blacklist, str.replace(/ /g, '')) &&
			decimalRegExp(options).test(str);
	}
	throw new Error(`Invalid locale '${options.locale}'`);
}
