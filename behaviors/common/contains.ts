import { merge } from './util/merge.ts';

interface ContainsOptions {
	ignoreCase: boolean;
}

export const defaultContainsOptions: ContainsOptions = {
	ignoreCase: false,
};

/**
 * Checks if a string contains a specified substring, with optional case insensitivity.
 *
 * @param str - The string to search within.
 * @param elem - The substring to search for.
 * @param options - Optional settings to modify the behavior of the search.
 * @returns `true` if the substring is found within the string, otherwise `false`.
 */
export function contains(
	str: string,
	elem: string,
	options: ContainsOptions = defaultContainsOptions,
) {
	merge(options, defaultContainsOptions);
	return options.ignoreCase ? str.toLowerCase().indexOf(elem.toLowerCase()) >= 0 : str.indexOf(elem) >= 0;
}
