import { toString } from './util/toString.ts';
/**
 * Checks if a given string is present in the provided options.
 *
 * @param str - The string to check for presence.
 * @param options - The options to check against. Can be an array, an object, or any type with an `indexOf` method.
 * @returns `true` if the string is found in the options, `false` otherwise.
 */
// deno-lint-ignore no-explicit-any
export function isIn(str: string, options: any): boolean {
	// deno-lint-ignore no-explicit-any
	let i: any;
	if (Object.prototype.toString.call(options) === '[object Array]') {
		const array: string[] = [];
		for (i in options) {
			// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
			// istanbul ignore else
			if ({}.hasOwnProperty.call(options, i)) {
				array[i] = toString(options[i]);
			}
		}
		return array.indexOf(str) >= 0;
	} else if (typeof options === 'object') {
		return options.hasOwnProperty(str);
	} else if (options && typeof options.indexOf === 'function') {
		return options.indexOf(str) >= 0;
	}
	return false;
}
