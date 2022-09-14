import { constraintKey, createDecorator } from '../validate.ts';
import { isAfter } from '../behaviors/common/isAfter.ts';

export const IsAfter = (dateToBeAfter: string) =>
	createDecorator((prop: string) => isAfter(prop, dateToBeAfter), {
		errorMessage: `String must be a date later than ${constraintKey}1`,
		constraints: [dateToBeAfter],
	});
