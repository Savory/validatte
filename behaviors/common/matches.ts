export function matches(
	str: string,
	pattern: RegExp,
	modifiers: undefined | string,
): boolean {
	if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
		pattern = new RegExp(pattern, modifiers);
	}
	return pattern.test(str);
}
