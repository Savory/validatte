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

/**
 * Decorator that checks if the property contains the seed.
 * @param {string} seed - The seed to check for.
 * @param {object} [options=defaultContainsOptions] - Options for the contains check.
 */
export const Contains = (seed: string, options = defaultContainsOptions) =>
	createDecorator((prop: string) => contains(prop, seed, options), {
		errorMessage: `Property must contain '${seed}'`,
		constraints: [seed, options],
	});

/**
 * Decorator that checks if the property is after the specified date.
 * @param {string} [dateToBeAfter] - The date to compare against.
 */
export const IsAfter = (dateToBeAfter?: string) =>
	createDecorator((prop: string) => isAfter(prop, dateToBeAfter), {
		errorMessage: `Property must be a date ${dateToBeAfter ? `later than ${dateToBeAfter}` : 'in the future'}`,
		constraints: dateToBeAfter ? [dateToBeAfter] : [],
	});

/**
 * Decorator that checks if the property is an alpha string.
 * @param {string} [locale='en-US'] - The locale to use for the check.
 */
export const IsAlpha = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlpha(prop, locale), {
		errorMessage: `Property must be an alpha string (containing only letters)`,
		constraints: [locale],
	});

/**
 * Decorator that checks if the property is an alphanumeric string.
 * @param {string} [locale='en-US'] - The locale to use for the check.
 */
export const IsAlphaNumeric = (locale = 'en-US') =>
	createDecorator((prop: string) => isAlphanumeric(prop, locale), {
		errorMessage: `Property must be an alphanumeric string (numbers and letters)`,
		constraints: [locale],
	});

/**
 * Decorator that checks if the property contains only ASCII characters.
 */
export const IsAscii = () =>
	createDecorator((prop: string) => isAscii(prop), {
		errorMessage: `Property must contain only ascii characters`,
		constraints: [],
	});

/**
 * Decorator that checks if the property is a Base32 string.
 */
export const IsBase32 = () =>
	createDecorator((prop: string) => isBase32(prop), {
		errorMessage: `Property must contain be base32`,
		constraints: [],
	});

/**
 * Decorator that checks if the property is a Base64 string.
 * @param {IsBase64Options} [option] - Options for the Base64 check.
 */
export const IsBase64 = (option?: IsBase64Options) =>
	createDecorator((prop: string) => isBase64(prop, option), {
		errorMessage: `Property must contain be base64`,
		constraints: option ? [option] : [],
	});

/**
 * Decorator that checks if the property is before the specified date.
 * @param {string} [dateToBeBefore] - The date to compare against.
 */
export const IsBefore = (dateToBeBefore?: string) =>
	createDecorator((prop: string) => isBefore(prop, dateToBeBefore), {
		errorMessage: `Property must be a date string ${dateToBeBefore ? `before ${dateToBeBefore}` : 'in the future'}`,
		constraints: dateToBeBefore ? [dateToBeBefore] : [],
	});

/**
 * Decorator that checks if the property is a BIC.
 */
export const IsBic = () =>
	createDecorator((prop: string) => isBIC(prop), {
		errorMessage: 'Property must be a BIC',
		constraints: [],
	});

/**
 * Decorator that checks if the property is a boolean string.
 */
export const IsBooleanString = () =>
	createDecorator((prop: string) => isBoolean(prop), {
		errorMessage: 'Property must be a boolean string such as "true", "false", "0", "1"',
		constraints: [],
	});

/**
 * Decorator that checks if the property is a BTC address.
 */
export const IsBtcAddress = () =>
	createDecorator((prop: string) => isBtcAddress(prop), {
		errorMessage: 'Property must be a BTC address',
		constraints: [],
	});

/**
 * Decorator that checks if the property has a byte length within the specified range.
 * @param {object} [options=defaultIsByteLengthOptions] - Options for the byte length check.
 */
export const ByteLength = (options = defaultIsByteLengthOptions) =>
	createDecorator((prop: string) => isByteLength(prop, options), {
		errorMessage: `Property must have a byte length between ${options.min ?? 0} and ${options.max ?? 'infinity'}`,
		constraints: [options],
	});

/**
 * Decorator that checks if the property is a valid credit card number.
 */
export const IsCreditCard = () =>
	createDecorator((prop: string) => isCreditCard(prop), {
		errorMessage: 'Property must be a valid credit card number',
		constraints: [],
	});

/**
 * Decorator that checks if the property is a currency value.
 * @param {object} [options=defaultCurrencyOptions] - Options for the currency check.
 */
export const IsCurrency = (options = defaultCurrencyOptions) =>
	createDecorator((prop: string) => isCurrency(prop, options), {
		errorMessage: 'Property must be a currency value',
		constraints: [options],
	});

/**
 * Decorator that checks if the property is a data URI string.
 */
export const IsDataURI = () =>
	createDecorator((prop: string) => isDataURI(prop), {
		errorMessage: 'Property must be a dataURI string',
		constraints: [],
	});

/**
 * Decorator that checks if the property is a date string in the specified format.
 * @param {string} [format='YYYY/MM/DD'] - The date format to use for the check.
 */
export const IsDate = (format = 'YYYY/MM/DD') =>
	createDecorator((prop: string) => isDate(prop, format), {
		errorMessage: `Property must be a date with format ${format}`,
		constraints: [format],
	});

/**
 * Decorator that checks if the property is a decimal string.
 * @param {object} [options=defaultDecimalOptions] - Options for the decimal check.
 */
export const IsDecimal = (options = defaultDecimalOptions) =>
	createDecorator((prop: string) => isDecimal(prop, options), {
		errorMessage: `Property must be a decimal string for ${options.locale} locale`,
		constraints: [options],
	});

/**
 * Decorator that checks if the property is empty.
 */
export const IsEmpty = () =>
	createDecorator((prop: string) => isEmpty(prop), {
		errorMessage: `Property must be empty`,
		constraints: [],
	});

/**
 * Decorator that checks if the property is a lowercase string.
 */
export const IsLowerCase = () =>
	createDecorator((prop: string) => isLowerCase(prop), {
		errorMessage: `Property must be a string in lower case`,
		constraints: [],
	});

/**
 * Decorator that checks if the property is a hex color string.
 */
export const IsHexColor = () =>
	createDecorator((prop: string) => isHexColor(prop), {
		errorMessage: 'Property must be a hexcolor string',
		constraints: [],
	});

/**
 * Decorator that checks if the property is an IP address.
 */
export const IsIP = () =>
	createDecorator((prop: string) => isIP(prop), {
		errorMessage: 'Property must be an IP address',
		constraints: [],
	});

/**
 * Decorator that checks if the property is divisible by the specified dividend.
 * @param {number} dividend - The dividend to check against.
 */
export const IsDivisibleBy = (dividend: number) =>
	createDecorator((prop: string) => isDivisibleBy(prop, `${dividend}`), {
		errorMessage: `Property must be divisible by ${dividend}`,
		constraints: [dividend],
	});

/**
 * Decorator that checks if the property is an uppercase string.
 */
export const IsUpperCase = () =>
	createDecorator((prop: string) => isUpperCase(prop), {
		errorMessage: 'Property must be an uppercase only string',
		constraints: [],
	});

/**
 * Decorator that checks if the property is a valid port number.
 */
export const IsPort = () =>
	createDecorator((prop: string) => isPort(prop), {
		errorMessage: 'Property must be a valid port number',
		constraints: [],
	});
