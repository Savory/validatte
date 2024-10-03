import { toDate } from './toDate.ts';

/**
 * Checks if the given date string is before the comparison date string.
 *
 * @param str - The date string to compare.
 * @param date - The date string to compare against. Defaults to the current date and time.
 * @returns `true` if `str` is before `date`, otherwise `false`.
 */
export function isBefore(
	str: string,
	date: string = `${new Date()}`,
): boolean {
	const comparison = toDate(date);
	const original = toDate(str);
	return !!(original && comparison && original < comparison);
}
