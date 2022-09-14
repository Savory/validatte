const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols = /^[0-9]+$/;

interface isNumericOptions {
	no_symbols?: boolean;
}

export function isNumeric(
	str: string,
	options: isNumericOptions,
): boolean {
	if (options && options.no_symbols) {
		return numericNoSymbols.test(str);
	}
	return numeric.test(str);
}
