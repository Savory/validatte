/* we only test error messages, we trust /spec/behaviors test for behaviors */

import {
	ByteLength,
	Contains,
	IsAfter,
	IsAlpha,
	IsAlphaNumeric,
	IsAscii,
	IsBase32,
	IsBase64,
	IsBefore,
	IsBic,
	IsBoolean,
	IsBtcAddress,
	IsCreditCard,
	IsCurrency,
	IsDataURI,
	IsDate,
	IsDecimal,
	IsLowerCase,
} from '../../validators/common.ts';
import { constraintKey, validateObject } from '../../validate.ts';
import { assertArrayIncludes, fail } from 'https://deno.land/std@0.135.0/testing/asserts.ts';
import { defaultContainsOptions } from '../../behaviors/common/contains.ts';

class BodyPayload {
	@Contains('lookingforthis')
	public contains!: string;

	@IsAfter()
	public isAfter!: string;

	@IsAlpha()
	public isAlpha!: string;

	@IsAlphaNumeric()
	public isAlphaNumeric!: string;

	@IsAscii()
	public isAscii!: string;

	@IsBase32()
	public isBase32!: string;

	@IsBase64()
	public isBase64!: string;

	@IsBefore()
	public isBefore!: string;

	@IsBic()
	public isBic!: string;

	@IsBoolean()
	public isBoolean!: string;

	@IsBtcAddress()
	public isBtcAddress!: string;
	@ByteLength({ min: 1, max: 5 })
	public byteLength!: string;
	@IsCreditCard()
	public isCreditCard!: string;
	@IsCurrency()
	public isCurrency!: string;
	@IsDataURI()
	public isDataURI!: string;
	@IsDate()
	public isDate!: string;
	@IsDecimal()
	public isDecimal!: string;
	@IsLowerCase()
	public isLowerCase!: string;
}

Deno.test('Common validators errors', async (ctx) => {
	const failingPayload = new BodyPayload();

	failingPayload.contains = 'notcontainingit';
	failingPayload.isAfter = `${Date.now() - 10}`;
	failingPayload.isAlpha = '123123';
	failingPayload.isAlphaNumeric = '/./,.,.';
	failingPayload.isAscii = '日本人';
	failingPayload.isBase32 = 'nonbase32';
	failingPayload.isBase64 = 'nonbase64';
	failingPayload.isBefore = `${Date.now() + 10}`;
	failingPayload.isBic = 'nonbase64';
	failingPayload.isBoolean = 'nonbase64';
	failingPayload.isBtcAddress = 'nonbase64';
	failingPayload.byteLength = 'tooloooooong';
	failingPayload.isCreditCard = '234234';
	failingPayload.isCurrency = 'nonCunrrecy';
	failingPayload.isDataURI = 'nonDataURI';
	failingPayload.isDate = 'nonDate';
	failingPayload.isDecimal = 'nondecimla';
	failingPayload.isLowerCase = 'UPPERCASE';

	const errors = validateObject(failingPayload, BodyPayload);
	await ctx.step('Contains', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must contain 'lookingforthis'`,
			constraints: ['lookingforthis', defaultContainsOptions],
			property: 'contains',
		}]);
	});
	await ctx.step('IsAfter', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a date in the future`,
			constraints: [],
			property: 'isAfter',
		}]);
	});
	await ctx.step('IsAlpha', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be an alpha string (containing only letters)`,
			constraints: ['en-US'],
			property: 'isAlpha',
		}]);
	});
	await ctx.step('IsAlphaNumeric', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be an alphanumeric string (numbers and letters)`,
			constraints: ['en-US'],
			property: 'isAlphaNumeric',
		}]);
	});
	await ctx.step('IsAscii', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must contain only ascii characters`,
			constraints: [],
			property: 'isAscii',
		}]);
	});
	await ctx.step('IsBase32', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must contain be base32`,
			constraints: [],
			property: 'isBase32',
		}]);
	});
	await ctx.step('IsBase64', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must contain be base64`,
			constraints: [],
			property: 'isBase64',
		}]);
	});
	await ctx.step('IsBefore', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a date string in the future`,
			constraints: [],
			property: 'isBefore',
		}]);
	});
	await ctx.step('IsBic', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a BIC`,
			constraints: [],
			property: 'isBic',
		}]);
	});
	await ctx.step('IsBoolean', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a boolean string such as "true", "false", "0", "1"`,
			constraints: [],
			property: 'isBoolean',
		}]);
	});
	await ctx.step('IsBtcAddress', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a BTC address`,
			constraints: [],
			property: 'isBtcAddress',
		}]);
	});
	await ctx.step('ByteLength', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must have a byte length between 1 and 5`,
			constraints: [{ min: 1, max: 5 }],
			property: 'byteLength',
		}]);
	});
	await ctx.step('IsCreditCard', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a valid credit card number`,
			constraints: [],
			property: 'isCreditCard',
		}]);
	});
	await ctx.step('IsCurrency', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a currency value`,
			constraints: [{
				symbol: '$',
				require_symbol: false,
				allow_space_after_symbol: false,
				symbol_after_digits: false,
				allow_negatives: true,
				parens_for_negatives: false,
				negative_sign_before_digits: false,
				negative_sign_after_digits: false,
				allow_negative_sign_placeholder: false,
				thousands_separator: ',',
				decimal_separator: '.',
				allow_decimal: true,
				require_decimal: false,
				digits_after_decimal: [2],
				allow_space_after_digits: false,
			}],
			property: 'isCurrency',
		}]);
	});
	await ctx.step('IsDataURI', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a dataURI string`,
			constraints: [],
			property: 'isDataURI',
		}]);
	});
	await ctx.step('IsDate', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a date with format YYYY/MM/DD`,
			constraints: ['YYYY/MM/DD'],
			property: 'isDate',
		}]);
	});
	await ctx.step('IsDecimal', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a decimal string for en-US locale`,
			constraints: [{
				force_decimal: false,
				decimal_digits: '1,',
				locale: 'en-US',
			}],
			property: 'isDecimal',
		}]);
	});
	await ctx.step('IsLowerCase', () => {
		assertArrayIncludes(errors, [{
			errorMessage: `Property must be a string in lower case`,
			constraints: [],
			property: 'isLowerCase',
		}]);
	});
});
