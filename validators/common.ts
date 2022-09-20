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
	isCurrency,
	isDataURI,
	isDate,
	isDecimal,
} from '../behaviors/common/mod.ts';
import { IsBase64Options } from '../behaviors/common/isBase64.ts';
import { defaultIsByteLengthOptions, IsByteLengthOptions } from '../behaviors/common/isByteLength.ts';
import { defaultCurrencyOptions } from '../behaviors/common/isCurrency.ts';
import { defaultDecimalOptions } from '../behaviors/common/isDecimal.ts';
import { contains, defaultContainsOptions } from '../behaviors/common/contains.ts';

export const Contains = (seed: string, options = defaultContainsOptions) =>
	createDecorator((prop: string) => contains(prop, seed, options), {
		errorMessage: `Property must contain ${seed}`,
		constraints: [seed, options],
	});

export const IsAfter = (dateToBeAfter?: string) =>
	createDecorator((prop: string) => isAfter(prop, dateToBeAfter), {
		errorMessage: `Property must be a date later than ${dateToBeAfter}`,
		constraints: [dateToBeAfter],
	});

export const IsAlpha = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlpha(prop, locale), {
		errorMessage: `Property must be alpha`,
		constraints: [locale],
	});

export const IsAlphaNumeric = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlphanumeric(prop, locale), {
		errorMessage: `Property must be alphanumeric`,
		constraints: [locale],
	});

export const IsAscii = () =>
	createDecorator((prop: string) => isAscii(prop), {
		errorMessage: `Property must contain only ascii characters`,
		constraints: [],
	});

export const IsBase32 = () =>
	createDecorator((prop: string) => isBase32(prop), {
		errorMessage: `Property must contain be base32`,
		constraints: [],
	});

export const IsBase64 = (option?: IsBase64Options) =>
	createDecorator((prop: string) => isBase64(prop, option), {
		errorMessage: `Property must contain be base64`,
		constraints: [],
	});

export const IsBefore = (dateToBeBefore?: string) =>
	createDecorator((prop: string) => isBefore(prop, dateToBeBefore), {
		errorMessage: `Property must be a date string before ${constraintKey}1`,
		constraints: [dateToBeBefore],
	});

export const IsBic = () =>
	createDecorator((prop: string) => isBIC(prop), {
		errorMessage: 'Property must be a BIC',
	});

export const IsBoolean = () =>
	createDecorator((prop: string) => isBoolean(prop), {
		errorMessage: 'Property must be a boolean string such as "true", "false", "0", "1"',
	});

export const IsBtcAddress = () =>
	createDecorator((prop: string) => isBtcAddress(prop), {
		errorMessage: 'Property must be a BTC address',
	});

export const ByteLength = (options = defaultIsByteLengthOptions) =>
	createDecorator((prop: string) => isByteLength(prop, options), {
		errorMessage: `Property must have a byte length between ${constraintKey}1 and ${
			options.max ? `${constraintKey}1` : 'infinity'
		}`,
		constraints: [options.min, options.max],
	});

export const IsCreditCard = () =>
	createDecorator((prop: string) => isCreditCard(prop), {
		errorMessage: 'Property must be a valid credit card number',
	});

export const IsCurrency = (options = defaultCurrencyOptions) =>
	createDecorator((prop: string) => isCurrency(prop, options), {
		errorMessage: 'Property must be a currency value',
		constraints: [options],
	});

export const IsDataURI = () =>
	createDecorator((prop: string) => isDataURI(prop), {
		errorMessage: 'Property must be a dataURI string',
	});

export const IsDate = (format = 'YYYY/MM/DD') =>
	createDecorator((prop: string) => isDate(prop, format), {
		errorMessage: `Property must be a date ${constraintKey}1`,
		constraints: [format],
	});

export const IsDecimal = (options = defaultDecimalOptions) =>
	createDecorator((prop: string) => isDecimal(prop, options), {
		errorMessage: `Property must be a decimal string for ${options.locale} locale`,
		constraints: [options],
	});
