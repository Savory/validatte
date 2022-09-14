import { constraintKey, createDecorator, createValidator } from '../validate.ts';
import { isRegex, lengthGreater, lengthGreaterOrEqual, lengthLower, lengthLowerOrEqual } from '../behaviors/string.ts';
import { isEmail } from '../behaviors/common/mod.ts';

export const LengthGreaterOrEqual = (length: number) => {
	return createDecorator(
		(prop: string) => lengthGreaterOrEqual(prop, length),
		{
			errorMessage: `Length must be greater than or equal ${constraintKey}1`,
			constraints: [length],
		},
	);
};
export const LengthGreater = (length: number) => {
	return createDecorator(
		(prop: string) => lengthGreater(prop, length),
		{
			errorMessage: `Length must be greater than ${constraintKey}1`,
			constraints: [length],
		},
	);
};

export const LengthLowerOrEqual = (length: number) => {
	return createDecorator(
		(prop: string) => lengthLowerOrEqual(prop, length),
		{
			errorMessage: `Length must be lower than or equal ${constraintKey}1`,
			constraints: [length],
		},
	);
};

export const LengthLower = (length: number) => {
	return createDecorator(
		(prop: string) => lengthLower(prop, length),
		{
			errorMessage: `Length must be lower than ${constraintKey}1`,
			constraints: [length],
		},
	);
};

export const IsRegex = (regex: RegExp) => {
	return createDecorator(
		(prop: string) => isRegex(prop, regex),
		{
			errorMessage: `String does not validate regex: ${constraintKey}1`,
			constraints: [regex],
		},
	);
};

export const IsEmail = () => {
	return createDecorator(
		(prop: string) => isEmail(prop),
		{
			errorMessage: `String is not an email`,
			constraints: [],
		},
	);
};
