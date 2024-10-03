/**
 * Checks if a number is greater than or equal to a minimum value.
 * @param {number} prop - The number to check.
 * @param {number} min - The minimum value.
 * @returns {boolean} True if the number is greater than or equal to the minimum value, otherwise false.
 */
export const greaterOrEqual = (prop: number, min: number): boolean => prop >= min;

/**
 * Checks if a number is greater than a minimum value.
 * @param {number} prop - The number to check.
 * @param {number} min - The minimum value.
 * @returns {boolean} True if the number is greater than the minimum value, otherwise false.
 */
export const greater = (prop: number, min: number): boolean => prop > min;

/**
 * Checks if a number is less than or equal to a maximum value.
 * @param {number} prop - The number to check.
 * @param {number} max - The maximum value.
 * @returns {boolean} True if the number is less than or equal to the maximum value, otherwise false.
 */
export const lowerOrEqual = (prop: number, max: number): boolean => prop <= max;

/**
 * Checks if a number is less than a maximum value.
 * @param {number} prop - The number to check.
 * @param {number} max - The maximum value.
 * @returns {boolean} True if the number is less than the maximum value, otherwise false.
 */
export const lower = (prop: number, max: number): boolean => prop < max;
