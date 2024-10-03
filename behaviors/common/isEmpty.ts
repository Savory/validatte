interface Options {
	ignoreWhitespace?: boolean;
}

const defaultOptions: Options = {
	ignoreWhitespace: false,
};

/**
 * Checks if a given string is empty.
 *
 * @param str - The string to check.
 * @param options - Optional settings to modify the behavior of the check.
 * @returns `true` if the string is empty, `false` otherwise.
 */
export function isEmpty(
	str: string,
	options: Options = defaultOptions,
): boolean {
	str = options.ignoreWhitespace ? str.trim() : str;
	return str.length === 0;
}
