const validFormat =
	/(^(y{4}|y{2})[\/-](m{1,2})[\/-](d{1,2})$)|(^(m{1,2})[\/-](d{1,2})[\/-]((y{4}|y{2})$))|(^(d{1,2})[\/-](m{1,2})[\/-]((y{4}|y{2})$))/i;

function zip(date: Array<string>, format: Array<string>): Array<Array<string>> {
	const zippedArr = [],
		len = Math.min(date.length, format.length);

	for (let i = 0; i < len; i++) {
		zippedArr.push([date[i], format[i]]);
	}

	return zippedArr;
}

/**
 * Checks if the given input string is a valid date according to the specified format.
 *
 * @param input - The date string to validate.
 * @param format - The format to validate against, default is 'YYYY/MM/DD'.
 * @returns `true` if the input string is a valid date according to the specified format, otherwise `false`.
 */
export function isDate(
	input: string,
	format = 'YYYY/MM/DD',
): boolean {
	if (validFormat.test(format)) {
		const splitter = /[-/]/,
			dateAndFormat = zip(
				input.split(splitter),
				format.toLowerCase().split(splitter),
			),
			dateObj: { [key: string]: string } = {};

		for (const [dateWord, formatWord] of dateAndFormat) {
			if (dateWord.length !== formatWord.length) {
				return false;
			}

			dateObj[formatWord.charAt(0)] = dateWord;
		}

		return new Date(`${dateObj.m}/${dateObj.d}/${dateObj.y}`).getDate() ===
			+dateObj.d;
	}

	return false;
}
