import { isFloat } from './isFloat.ts';

export function toFloat(str: string): number {
	if (!isFloat(str, {})) return NaN;
	return parseFloat(str);
}
