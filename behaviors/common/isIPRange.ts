import { isIP } from './isIP.ts';

const subnetMaybe = /^\d{1,2}$/;

/**
 * Checks if the given string is a valid IPv4 range in CIDR notation.
 *
 * The function splits the input string into two parts: the IP address and the subnet mask.
 * It validates the subnet mask to ensure it is a number between 0 and 32, inclusive, and
 * does not have leading zeros. It also checks if the IP address is a valid IPv4 address.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid IPv4 range in CIDR notation, otherwise `false`.
 */
export function isIPRange(str: string): boolean {
	const parts: string[] = str.split('/');

	// parts[0] -> ip, parts[1] -> subnet
	if (parts.length !== 2) {
		return false;
	}

	if (!subnetMaybe.test(parts[1])) {
		return false;
	}

	// Disallow preceding 0 i.e. 01, 02, ...
	if (parts[1].length > 1 && parts[1].startsWith('0')) {
		return false;
	}

	return isIP(parts[0], 4) && +(parts[1]) <= 32 && +(parts[1]) >= 0;
}
