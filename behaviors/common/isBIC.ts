const isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/;

export function isBIC(str: string): boolean {
	return isBICReg.test(str);
}
