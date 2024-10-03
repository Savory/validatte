/**
 * Converts the given input to a string representation.
 *
 * @param input - The input to be converted to a string. It can be of any type.
 * @returns The string representation of the input. If the input is an object with a `toString` method,
 * it will use that method. If the input is `null`, `undefined`, or `NaN` (and not an array), it will return an empty string.
 */
// deno-lint-ignore no-explicit-any
export function toString(input: any) {
	if (typeof input === 'object' && input !== null) {
		if (typeof input.toString === 'function') {
			input = input.toString();
		} else {
			input = '[object Object]';
		}
	} else if (
		input === null || typeof input === 'undefined' ||
		(isNaN(input) && !input.length)
	) {
		input = '';
	}
	return String(input);
}
