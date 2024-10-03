import { toFloat } from './toFloat.ts';

/**
 * Checks if the given dividend is divisible by the given divisor.
 *
 * @param dividend - The dividend as a string.
 * @param divisor - The divisor as a string.
 * @returns `true` if the dividend is divisible by the divisor, otherwise `false`.
 */
export function isDivisibleBy(
	dividend: string,
	divisor: string,
): boolean {
	return toFloat(dividend) % toFloat(divisor) === 0;
}
