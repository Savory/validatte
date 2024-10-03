/**
 * Converts a string representation of a date into a Date object.
 *
 * @param date - The string representation of the date to be converted.
 * @returns A Date object if the string is a valid date, otherwise null.
 */
export function toDate(date: string) {
	const parsedDate = Date.parse(date);
	return !isNaN(parsedDate) ? new Date(parsedDate) : null;
}
