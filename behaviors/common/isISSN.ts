const issn = '^\\d{4}-?\\d{3}[\\dX]$';

/**
 * Validates whether a given string is a valid ISSN (International Standard Serial Number).
 *
 * @param str - The string to be validated as an ISSN.
 * @param options - Optional configuration object.
 * @param options.require_hyphen - If true, the ISSN must include a hyphen.
 * @param options.case_sensitive - If true, the validation will be case-sensitive.
 * @returns A boolean indicating whether the string is a valid ISSN.
 */
export function isISSN(
	str: string,
	options: { require_hyphen?: boolean; case_sensitive?: boolean } = {},
): boolean {
	let testIssn: string | RegExp = issn;
	testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
	testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
	if (!testIssn.test(str)) {
		return false;
	}
	const digits = str.replace('-', '').toUpperCase();
	let checksum = 0;
	for (let i = 0; i < digits.length; i++) {
		const digit = digits[i];
		checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
	}
	return checksum % 11 === 0;
}
