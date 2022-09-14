const multibyte = /[^\x00-\x7F]/;

export function isMultibyte(str: string): boolean {
	return multibyte.test(str);
}
