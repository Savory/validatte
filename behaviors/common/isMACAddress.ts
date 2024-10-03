const macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressNoColons = /^([0-9a-fA-F]){12}$/;
const macAddressWithHyphen = /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithSpaces = /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithDots = /^([0-9a-fA-F]{4}).([0-9a-fA-F]{4}).([0-9a-fA-F]{4})$/;

interface isMACAddressOptions {
	no_colons: boolean;
}

/**
 * Checks if the given string is a valid MAC address.
 *
 * @param str - The string to be checked.
 * @param options - An object containing options for validation.
 * @param options.no_colons - If true, the function will validate MAC addresses without colons.
 * @returns `true` if the string is a valid MAC address, `false` otherwise.
 */
export function isMACAddress(
	str: string,
	options: isMACAddressOptions,
): boolean {
	if (options && options.no_colons) {
		return macAddressNoColons.test(str);
	}

	return macAddress.test(str) ||
		macAddressWithHyphen.test(str) ||
		macAddressWithSpaces.test(str) ||
		macAddressWithDots.test(str);
}
