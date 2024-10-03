const isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
const isbn13Maybe = /^(?:[0-9]{13})$/;
const factor = [1, 3];

/**
 * Checks if a given string is a valid ISBN (International Standard Book Number).
 *
 * @param str - The string to be checked.
 * @param version - The ISBN version to validate against (either '10' or '13'). If not provided, the function will check against both versions.
 * @returns `true` if the string is a valid ISBN, `false` otherwise.
 */
export function isISBN(
	str: string,
	version: string | number = '',
): boolean {
	version = String(version);
	if (!version) {
		return isISBN(str, 10) || isISBN(str, 13);
	}
	const sanitized: string = str.replace(/[\s-]+/g, '');
	let checksum = 0;
	let i: number;
	if (version === '10') {
		if (!isbn10Maybe.test(sanitized)) {
			return false;
		}
		for (i = 0; i < 9; i++) {
			checksum += (i + 1) * +(sanitized.charAt(i));
		}
		if (sanitized.charAt(9) === 'X') {
			checksum += 10 * 10;
		} else {
			checksum += 10 * +(sanitized.charAt(9));
		}
		if ((checksum % 11) === 0) {
			return !!sanitized;
		}
	} else if (version === '13') {
		if (!isbn13Maybe.test(sanitized)) {
			return false;
		}
		for (i = 0; i < 12; i++) {
			checksum += factor[i % 2] * +(sanitized.charAt(i));
		}
		if (+(sanitized.charAt(12)) - ((10 - (checksum % 10)) % 10) === 0) {
			return !!sanitized;
		}
	}
	return false;
}
