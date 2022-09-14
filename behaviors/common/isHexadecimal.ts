const hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;

export function isHexadecimal(str: string): boolean {
	return hexadecimal.test(str);
}
