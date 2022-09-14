import { isBase64 } from './isBase64.ts';

export function isJWT(str: string): boolean {
	const dotSplit: Array<string> = str.split('.');
	const len = dotSplit.length;

	if (len > 3 || len < 2) {
		return false;
	}

	return dotSplit.reduce(
		(acc: boolean, currElem) => acc && isBase64(currElem, { urlSafe: true }),
		true,
	);
}
