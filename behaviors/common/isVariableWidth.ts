import { fullWidth } from './isFullWidth.ts';
import { halfWidth } from './isHalfWidth.ts';

export function isVariableWidth(str: string): boolean {
	return fullWidth.test(str) && halfWidth.test(str);
}
