export function toDate(date: string) {
	const parsedDate = Date.parse(date);
	return !isNaN(parsedDate) ? new Date(parsedDate) : null;
}
