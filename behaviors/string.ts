/**
 * Checks if the length of the string is greater than or equal to the specified minimum length.
 *
 * @param {string} str - The string to check.
 * @param {number} minLength - The minimum length to compare against.
 * @returns {boolean} True if the string length is greater than or equal to the minimum length, otherwise false.
 */
export function lengthGreaterOrEqual(str: string, minLength: number): boolean {
	return str.length >= minLength;
}

/**
 * Checks if the length of the string is greater than the specified minimum length.
 *
 * @param {string} str - The string to check.
 * @param {number} minLength - The minimum length to compare against.
 * @returns {boolean} True if the string length is greater than the minimum length, otherwise false.
 */
export function lengthGreater(str: string, minLength: number): boolean {
	return str.length > minLength;
}

/**
 * Checks if the length of the string is less than or equal to the specified maximum length.
 *
 * @param {string} str - The string to check.
 * @param {number} maxLength - The maximum length to compare against.
 * @returns {boolean} True if the string length is less than or equal to the maximum length, otherwise false.
 */
export function lengthLowerOrEqual(str: string, maxLength: number): boolean {
	return str.length <= maxLength;
}

/**
 * Checks if the length of the string is less than the specified maximum length.
 *
 * @param {string} str - The string to check.
 * @param {number} maxLength - The maximum length to compare against.
 * @returns {boolean} True if the string length is less than the maximum length, otherwise false.
 */
export function lengthLower(str: string, maxLength: number): boolean {
	return str.length < maxLength;
}

/**
 * Checks if the string matches the specified regular expression.
 *
 * @param {string} str - The string to check.
 * @param {RegExp} regex - The regular expression to test against.
 * @returns {boolean} True if the string matches the regular expression, otherwise false.
 */
export function isRegex(str: string, regex: RegExp): boolean {
	return regex.test(str);
}
