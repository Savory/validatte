import { merge } from './util/merge.ts';

interface EqualsOptions {
	trim?: boolean;
	ignoreCase?: boolean;
}

const defaultEqualsOptions: EqualsOptions = {
	trim: false,
	ignoreCase: false,
};

/**
 * Compares two strings for equality with optional configurations.
 *
 * @param str1 - The first string to compare.
 * @param str2 - The second string to compare.
 * @param options - Optional configuration for comparison.
 * @returns `true` if the strings are considered equal based on the options, otherwise `false`.
 */
export function equals(
	str1: string,
	str2: string,
	options: EqualsOptions = defaultEqualsOptions,
): boolean {
	merge(options, defaultEqualsOptions);
	if (options.trim) {
		str1 = str1.trim();
		str2 = str2.trim();
	}
	return options.ignoreCase ? str1.toLowerCase() === str2.toLowerCase() : str1 === str2;
}
