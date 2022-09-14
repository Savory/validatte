import { isHexadecimal } from './isHexadecimal.ts';

export function isMongoId(str: string): boolean {
	return isHexadecimal(str) && str.length === 24;
}
