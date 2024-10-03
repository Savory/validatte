const eth = /^(0x)[0-9a-f]{40}$/i;

/**
 * Checks if the given string is a valid Ethereum address.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid Ethereum address, otherwise `false`.
 */
export function isEthereumAddress(str: string): boolean {
	return eth.test(str);
}
