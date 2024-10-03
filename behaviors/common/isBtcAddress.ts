// supports Bech32 addresses
const btc = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;

/**
 * Checks if the given string is a valid Bitcoin address.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid Bitcoin address, otherwise `false`.
 */
export function isBtcAddress(str: string): boolean {
	return btc.test(str);
}
