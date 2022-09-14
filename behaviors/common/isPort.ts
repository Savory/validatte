import { isInt } from './isInt.ts';

export function isPort(str: string): boolean {
	return isInt(str, { min: 0, max: 65535 });
}
