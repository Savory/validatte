const ascii = /^[\x00-\x7F]+$/;

export function isAscii(str: string): boolean {
	return ascii.test(str);
}
