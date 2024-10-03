interface Options {
	max?: number;
	min?: number;
	gt?: number;
	lt?: number;
	allow_leading_zeroes?: boolean;
}

const defaultOptions: Options = {
	allow_leading_zeroes: true,
};

const int = /^[-+]?(0|[1-9][0-9]*)$/;
const intLeadingZeros = /^[-+]?[0-9]+$/;

/**
 * Checks if the given string is a valid integer based on the provided options.
 *
 * @param str - The string to be checked.
 * @param options - An optional object to specify validation criteria.
 * @param options.allow_leading_zeroes - If true, allows integers with leading zeroes.
 * @param options.min - The minimum value the integer can be.
 * @param options.max - The maximum value the integer can be.
 * @param options.lt - The integer must be less than this value.
 * @param options.gt - The integer must be greater than this value.
 * @returns A boolean indicating whether the string is a valid integer.
 */
export function isInt(
	str: string,
	options: Options = defaultOptions,
): boolean {
	const regex = options.allow_leading_zeroes ? intLeadingZeros : int;

	const regexTestPassed: boolean = regex.test(str);

	const minTestPassed: boolean = options.min !== undefined && options.min !== null ? parseInt(str, 10) >= options.min : true;
	const maxTestPassed: boolean = options.max !== undefined && options.max !== null ? parseInt(str, 10) <= options.max : true;
	const ltTestPassed: boolean = options.lt !== undefined && options.lt !== null ? parseInt(str, 10) < options.lt : true;
	const gtTestPassed: boolean = options.gt !== undefined && options.gt !== null ? parseInt(str, 10) > options.gt : true;

	return regexTestPassed && minTestPassed && maxTestPassed && ltTestPassed &&
		gtTestPassed;
}
