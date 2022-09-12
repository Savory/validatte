import { constraintKey, createDecorator } from '../validate.ts';
import { isPhoneNumber } from '../behaviors/phone-number.ts';

export const IsPhoneNumber = (locale?: string) => {
	return createDecorator(
		(prop: string) => isPhoneNumber(prop, locale),
		{
			errorMessage: `String is not a local phone number from ${constraintKey}1`,
			constraints: [locale],
		},
	);
};

export const IsInternationalPhoneNumber = () => {
	return createDecorator(
		(prop: string) => isPhoneNumber(prop),
		{
			errorMessage: `String is not an international phone number`,
			constraints: [],
		},
	);
};
