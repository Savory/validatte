/**
 * Trims the specified characters from the end of a string.
 *
 * @param str - The string to trim.
 * @param chars - The characters to trim from the end of the string. If not provided, whitespace characters will be trimmed.
 * @returns The trimmed string.
 *
 * @example
 * ```typescript
 * rtrim('hello world   ', ' '); // 'hello world'
 * rtrim('foobar', 'bar'); // 'foo'
 * rtrim('hello world'); // 'hello world'
 * ```
 */
export function rtrim(str: string, chars: string) {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
	const pattern = chars ? new RegExp(`[${chars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]+$`, 'g') : /\s+$/g;
	return str.replace(pattern, '');
}
