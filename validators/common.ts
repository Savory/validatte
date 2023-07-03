import { createDecorator } from '../validate.ts';
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
	isDivisibleBy,
	isEmpty,
	isHexColor,
	isIP,
	isLowerCase,
	isPort,
	isUpperCase,
} from '../behaviors/common/mod.ts';
import { IsBase64Options } from '../behaviors/common/isBase64.ts';
import { defaultIsByteLengthOptions } from '../behaviors/common/isByteLength.ts';
import { defaultCurrencyOptions } from '../behaviors/common/isCurrency.ts';
import { defaultDecimalOptions } from '../behaviors/common/isDecimal.ts';
import { contains, defaultContainsOptions } from '../behaviors/common/contains.ts';

export const Contains = (seed: string, options = defaultContainsOptions) =>
	createDecorator((prop: string) => contains(prop, seed, options), {
		errorMessage: `Property must contain '${seed}'`,
		constraints: [seed, options],
	});

export const IsAfter = (dateToBeAfter?: string) =>
	createDecorator((prop: string) => isAfter(prop, dateToBeAfter), {
		errorMessage: `Property must be a date ${dateToBeAfter ? `later than ${dateToBeAfter}` : 'in the future'}`,
		constraints: dateToBeAfter ? [dateToBeAfter] : [],
	});

export const IsAlpha = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlpha(prop, locale), {
		errorMessage: `Property must be an alpha string (containing only letters)`,
		constraints: [locale],
	});

export const IsAlphaNumeric = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlphanumeric(prop, locale), {
		errorMessage: `Property must be an alphanumeric string (numbers and letters)`,
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
		constraints: option ? [option] : [],
	});

export const IsBefore = (dateToBeBefore?: string) =>
	createDecorator((prop: string) => isBefore(prop, dateToBeBefore), {
		errorMessage: `Property must be a date string ${dateToBeBefore ? `before ${dateToBeBefore}` : 'in the future'}`,
		constraints: dateToBeBefore ? [dateToBeBefore] : [],
	});

export const IsBic = () =>
	createDecorator((prop: string) => isBIC(prop), {
		errorMessage: 'Property must be a BIC',
		constraints: [],
	});

export const IsBooleanString = () =>
	createDecorator((prop: string) => isBoolean(prop), {
		errorMessage: 'Property must be a boolean string such as "true", "false", "0", "1"',
		constraints: [],
	});

export const IsBtcAddress = () =>
	createDecorator((prop: string) => isBtcAddress(prop), {
		errorMessage: 'Property must be a BTC address',
		constraints: [],
	});

export const ByteLength = (options = defaultIsByteLengthOptions) =>
	createDecorator((prop: string) => isByteLength(prop, options), {
		errorMessage: `Property must have a byte length between ${options.min ?? 0} and ${options.max ?? 'infinity'}`,
		constraints: [options],
	});

export const IsCreditCard = () =>
	createDecorator((prop: string) => isCreditCard(prop), {
		errorMessage: 'Property must be a valid credit card number',
		constraints: [],
	});

export const IsCurrency = (options = defaultCurrencyOptions) =>
	createDecorator((prop: string) => isCurrency(prop, options), {
		errorMessage: 'Property must be a currency value',
		constraints: [options],
	});

export const IsDataURI = () =>
	createDecorator((prop: string) => isDataURI(prop), {
		errorMessage: 'Property must be a dataURI string',
		constraints: [],
	});

export const IsDate = (format = 'YYYY/MM/DD') =>
	createDecorator((prop: string) => isDate(prop, format), {
		errorMessage: `Property must be a date with format ${format}`,
		constraints: [format],
	});

export const IsDecimal = (options = defaultDecimalOptions) =>
	createDecorator((prop: string) => isDecimal(prop, options), {
		errorMessage: `Property must be a decimal string for ${options.locale} locale`,
		constraints: [options],
	});

export const IsEmpty = () =>
	createDecorator((prop: string) => isEmpty(prop), {
		errorMessage: `Property must be empty`,
		constraints: [],
	});

export const IsLowerCase = () =>
	createDecorator((prop: string) => isLowerCase(prop), {
		errorMessage: `Property must be a string in lower case`,
		constraints: [],
	});

export const IsHexColor = () =>
	createDecorator((prop: string) => isHexColor(prop), {
		errorMessage: 'Property must be a hexcolor string',
		constraints: [],
	});

export const IsIP = () =>
	createDecorator((prop: string) => isIP(prop), {
		errorMessage: 'Property must be an IP address',
		constraints: [],
	});

export const IsDivisibleBy = (dividend: number) =>
	createDecorator((prop: string) => isDivisibleBy(prop, `${dividend}`), {
		errorMessage: `Property must be divisible by ${dividend}`,
		constraints: [dividend],
	});

export const IsUpperCase = () =>
	createDecorator((prop: string) => isUpperCase(prop), {
		errorMessage: 'Property must be an uppercase only string',
		constraints: [],
	});

export const IsPort = () =>
	createDecorator((prop: string) => isPort(prop), {
		errorMessage: 'Property must be a valid port number',
		constraints: [],
	});
