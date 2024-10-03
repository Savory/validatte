import { merge } from './util/merge.ts';

export interface IsByteLengthOptions {
	min?: number;
	max?: number;
}

export const defaultIsByteLengthOptions: IsByteLengthOptions = {
	min: 0,
	max: undefined,
};

/**
 * Checks if the length of the given string, in bytes, falls within the specified range.
 *
 * @param str - The string to be checked.
 * @param options - An optional object specifying the minimum and maximum byte length.
 * @returns `true` if the byte length of the string is within the specified range, otherwise `false`.
 */
export function isByteLength(
	str: string,
	options: IsByteLengthOptions = defaultIsByteLengthOptions,
): boolean {
	options = merge(options, defaultIsByteLengthOptions);
	const len = encodeURI(str).split(/%..|./).length - 1;
	return len >= (options.min || 0) &&
		(typeof options.max === 'undefined' || len <= options.max);
}
