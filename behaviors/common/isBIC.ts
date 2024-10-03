const isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

/**
 * Checks if the given string is a valid BIC (Bank Identifier Code).
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid BIC, otherwise `false`.
 */
export function isBIC(str: string): boolean {
	return isBICReg.test(str);
}
