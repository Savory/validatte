const surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

export function isSurrogatePair(str: string): boolean {
	return surrogatePair.test(str);
}
