import { merge } from './util/merge.ts';

export interface IsByteLengthOptions {
	min?: number;
	max?: number;
}

export const defaultIsByteLengthOptions: IsByteLengthOptions = {
	min: 0,
	max: undefined,
};

export function isByteLength(
	str: string,
	options: IsByteLengthOptions = defaultIsByteLengthOptions,
): boolean {
	options = merge(options, defaultIsByteLengthOptions);
	const len = encodeURI(str).split(/%..|./).length - 1;
	return len >= (options.min || 0) &&
		(typeof options.max === 'undefined' || len <= options.max);
}
