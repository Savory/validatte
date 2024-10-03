const hslcomma =
	/^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s*)(\s*,\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(,\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;
const hslspace =
	/^(hsl)a?\(\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn|\s)(\s*(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s*(\/\s*((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s*)?\)$/i;

/**
 * Checks if a given string is a valid HSL (Hue, Saturation, Lightness) color format.
 *
 * The function tests the input string against two regular expressions:
 * - One for HSL values separated by commas.
 * - One for HSL values separated by spaces.
 *
 * @param str - The string to be tested.
 * @returns `true` if the string is a valid HSL color format, otherwise `false`.
 */
export function isHSL(str: string): boolean {
	return hslcomma.test(str) || hslspace.test(str);
}
