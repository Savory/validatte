import { constraintKey, createDecorator, createValidator } from '../validate.ts';
import { greater, greaterOrEqual, lower, lowerOrEqual } from '../behaviors/number.ts';

export const GreaterOrEqual = (min: number) => {
	return createDecorator(
		(prop: number) => greaterOrEqual(prop, min),
		{
			errorMessage: `Number must be greater than or equal ${constraintKey}1`,
			constraints: [min],
		},
	);
};
export const Greater = (min: number) => {
	return createDecorator(
		(prop: number) => greater(prop, min),
		{
			errorMessage: `Number must be greater than ${constraintKey}1`,
			constraints: [min],
		},
	);
};

export const LowerOrEqual = (max: number) => {
	return createDecorator(
		(prop: number) => lowerOrEqual(prop, max),
		{
			errorMessage: `Number must be lower than or equal ${constraintKey}1`,
			constraints: [max],
		},
	);
};
export const Lower = (max: number) => {
	return createDecorator(
		(prop: number) => lower(prop, max),
		{
			errorMessage: `Number must be lower than ${constraintKey}1`,
			constraints: [max],
		},
	);
};
