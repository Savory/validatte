const octal = /^(0o)?[0-7]+$/i;

export function isOctal(str: string): boolean {
	return octal.test(str);
}
