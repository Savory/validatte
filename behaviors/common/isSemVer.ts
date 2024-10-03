import { multilineRegexp } from './util/multilineRegex.ts';

/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */
const semanticVersioningRegex = multilineRegexp([
	'^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)',
	'(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))',
	'?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
]);

/**
 * Checks if the given string is a valid Semantic Versioning (SemVer) string.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid SemVer, otherwise `false`.
 */
export function isSemVer(str: string): boolean {
	return semanticVersioningRegex.test(str);
}
