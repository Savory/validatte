const hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

export function isHexColor(str: string): boolean {
	return hexcolor.test(str);
}
