const issn = '^\\d{4}-?\\d{3}[\\dX]$';

export function isISSN(
	str: string,
	options: { require_hyphen?: boolean; case_sensitive?: boolean } = {},
) {
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
