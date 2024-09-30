import { toDate } from './toDate.ts';

export function isAfter(
	str: string,
	date: string = `${new Date()}`,
): boolean {
	const comparison = toDate(date);
	const original = toDate(str);
	return !!(original && comparison && original > comparison);
}
