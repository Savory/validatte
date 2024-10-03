const rgbColor =
	/^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
const rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
const rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)/;
const rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)/;

/**
 * Checks if a given string is a valid RGB or RGBA color.
 *
 * @param str - The string to be checked.
 * @param includePercentValues - Optional. If true, the function will also consider percentage-based RGB/RGBA values as valid. Defaults to true.
 * @returns A boolean indicating whether the string is a valid RGB or RGBA color.
 */
export function isRgbColor(
	str: string,
	includePercentValues = true,
): boolean {
	if (!includePercentValues) {
		return rgbColor.test(str) || rgbaColor.test(str);
	}

	return rgbColor.test(str) ||
		rgbaColor.test(str) ||
		rgbColorPercent.test(str) ||
		rgbaColorPercent.test(str);
}
