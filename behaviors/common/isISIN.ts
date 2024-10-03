const isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

/**
 * Checks if the given string is a valid ISIN (International Securities Identification Number).
 *
 * The function first verifies the format of the ISIN using a regular expression.
 * Then, it calculates the checksum using the Luhn algorithm to ensure the ISIN is valid.
 *
 * @param str - The string to be checked as an ISIN.
 * @returns `true` if the string is a valid ISIN, `false` otherwise.
 */
export function isISIN(str: string): boolean {
	if (!isin.test(str)) {
		return false;
	}

	const checksumStr = str.replace(
		/[A-Z]/g,
		(character: string) => (parseInt(character, 36)).toString(),
	);

	let sum = 0;
	let digit: string;
	let tmpNum: number;
	let shouldDouble = true;
	for (let i = checksumStr.length - 2; i >= 0; i--) {
		digit = checksumStr.substring(i, i + 1);
		tmpNum = parseInt(digit, 10);
		if (shouldDouble) {
			tmpNum *= 2;
			if (tmpNum >= 10) {
				sum += tmpNum + 1;
			} else {
				sum += tmpNum;
			}
		} else {
			sum += tmpNum;
		}
		shouldDouble = !shouldDouble;
	}

	return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
