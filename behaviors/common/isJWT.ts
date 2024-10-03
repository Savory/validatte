import { isBase64 } from './isBase64.ts';

/**
 * Checks if the given string is a valid JWT (JSON Web Token).
 *
 * A valid JWT consists of either two or three base64url encoded segments separated by dots.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid JWT, `false` otherwise.
 */
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
