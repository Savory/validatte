const uuid: { [key: string]: RegExp } = {
	3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
	4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
	all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

/**
 * Checks if the given string is a valid UUID of the specified version.
 *
 * @param str - The string to be checked.
 * @param version - The UUID version to check against. Defaults to 'all'.
 * @returns `true` if the string is a valid UUID of the specified version, otherwise `false`.
 */
export function isUUID(str: string, version = 'all'): boolean {
	const pattern = uuid[version];
	return pattern && pattern.test(str);
}
