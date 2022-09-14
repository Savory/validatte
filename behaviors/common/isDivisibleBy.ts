import { toFloat } from './toFloat.ts';

export function isDivisibleBy(
	dividend: string,
	divisor: string,
): boolean {
	return toFloat(dividend) % toFloat(divisor) === 0;
}
