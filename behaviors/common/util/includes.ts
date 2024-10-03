/**
 * Checks if a given value is included in an array of strings.
 *
 * @param arr - The array of strings to search within.
 * @param val - The string value to search for.
 * @returns `true` if the value is found in the array, otherwise `false`.
 */
export const includes = (arr: Array<string>, val: string): boolean => arr.some((arrVal) => val === arrVal);
