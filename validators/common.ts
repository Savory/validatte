import { constraintKey, createDecorator } from '../validate.ts';
import {
	isAfter,
	isAlpha,
	isAlphanumeric,
	isAscii,
	isBase32,
	isBase64,
	isBefore,
	isBIC,
	isBoolean,
	isBtcAddress,
	isByteLength,
	isCreditCard,
} from '../behaviors/common/mod.ts';
import { IsBase64Options } from '../behaviors/common/isBase64.ts';
import { defaultIsByteLengthOptions, IsByteLengthOptions } from '../behaviors/common/isByteLength.ts';

export const IsAfter = (dateToBeAfter?: string) =>
	createDecorator((prop: string) => isAfter(prop, dateToBeAfter), {
		errorMessage: `String must be a date later than ${constraintKey}1`,
		constraints: [dateToBeAfter],
	});

export const IsAlpha = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlpha(prop, locale), {
		errorMessage: `String must be alpha`,
		constraints: [locale],
	});

export const IsAlphaNumeric = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlphanumeric(prop, locale), {
		errorMessage: `String must be alphanumeric`,
		constraints: [locale],
	});

export const IsAscii = () =>
	createDecorator((prop: string) => isAscii(prop), {
		errorMessage: `String must contain only ascii characters`,
		constraints: [],
	});

export const IsBase32 = () =>
	createDecorator((prop: string) => isBase32(prop), {
		errorMessage: `String must contain be base32`,
		constraints: [],
	});

export const IsBase64 = (option?: IsBase64Options) =>
	createDecorator((prop: string) => isBase64(prop, option), {
		errorMessage: `String must contain be base64`,
		constraints: [],
	});

export const IsBefore = (dateToBeBefore?: string) =>
	createDecorator((prop: string) => isBefore(prop, dateToBeBefore), {
		errorMessage: `String must be a date string before ${constraintKey}1`,
		constraints: [dateToBeBefore],
	});

export const IsBic = () =>
	createDecorator((prop: string) => isBIC(prop), {
		errorMessage: 'String must be a BIC',
	});

export const IsBooleanString = () =>
	createDecorator((prop: string) => isBoolean(prop), {
		errorMessage: 'String must be a boolean string such as "true", "false", "0", "1"',
	});

export const IsBtcAddress = () =>
	createDecorator((prop: string) => isBtcAddress(prop), {
		errorMessage: 'String must be a BTC address',
	});

export const IsByteLength = (options = defaultIsByteLengthOptions) =>
	createDecorator((prop: string) => isByteLength(prop, options), {
		errorMessage: `String must have a byte length between ${constraintKey}1 and ${options.max ? options.max : 'infinity'}`,
		constraints: [options.min, options.max],
	});

export const IsCreditCard = () =>
	createDecorator((prop: string) => isCreditCard(prop), {
		errorMessage: 'String must be a valid credit card number',
	});
