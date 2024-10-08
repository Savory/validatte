import { constraintKey, createDecorator } from '../validate.ts';
import { greater, greaterOrEqual, lower, lowerOrEqual } from '../behaviors/number.ts';

/**
 * Checks if a number is greater than or equal to a specified minimum value.
 *
 * @param min - The minimum value that the number should be greater than or equal to.
 */
export function GreaterOrEqual(min: number): PropertyDecorator {
	return createDecorator(
		(prop: number) => greaterOrEqual(prop, min),
		{
			errorMessage: `Number must be greater than or equal ${constraintKey}1`,
			constraints: [min],
		},
	);
}
/**
 * Checks if a number is greater than to a specified minimum value.
 *
 * @param min - The minimum value that the number should be greater than or equal to.
 */
export function Greater(min: number): PropertyDecorator {
	return createDecorator(
		(prop: number) => greater(prop, min),
		{
			errorMessage: `Number must be greater than ${constraintKey}1`,
			constraints: [min],
		},
	);
}
/**
 * Checks if a number is lower than or equal to a specified minimum value.
 *
 * @param max - The maximum value that the number should be greater than or equal to.
 */
export function LowerOrEqual(max: number): PropertyDecorator {
	return createDecorator(
		(prop: number) => lowerOrEqual(prop, max),
		{
			errorMessage: `Number must be lower than or equal ${constraintKey}1`,
			constraints: [max],
		},
	);
}
/**
 * Checks if a number is lower than a specified minimum value.
 *
 * @param max - The maximum value that the number should be greater than or equal to.
 */
export function Lower(max: number): PropertyDecorator {
	return createDecorator(
		(prop: number) => lower(prop, max),
		{
			errorMessage: `Number must be lower than ${constraintKey}1`,
			constraints: [max],
		},
	);
}
