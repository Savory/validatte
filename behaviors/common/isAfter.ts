import { toDate } from './toDate.ts';

/**
 * Checks if the given date string is after the comparison date string.
 *
 * @param str - The date string to be checked.
 * @param date - The comparison date string. Defaults to the current date and time.
 * @returns `true` if the date represented by `str` is after the date represented by `date`, otherwise `false`.
 */
export function isAfter(
	str: string,
	date: string = `${new Date()}`,
): boolean {
	const comparison = toDate(date);
	const original = toDate(str);
	return !!(original && comparison && original > comparison);
}
