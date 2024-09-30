// deno-lint-ignore-file no-explicit-any

import { IsArray, IsNumber, IsString } from '../../validators/types-validators.ts';
import { validateObject } from '../../validate.ts';
import { assertEquals } from '@std/testing/asserts';

class User {
	@IsString()
	name?: string;

	@IsNumber()
	age?: number;

	@IsArray()
	possibleArray?: any[];
}

Deno.test('Type validator', () => {
	const wrongUserDataFromOutsideOurApp = { name: 3, age: 'toto', possibleArray: 'nop' };
	assertEquals(
		validateObject(wrongUserDataFromOutsideOurApp, User),
		[{
			property: 'name',
			errorMessage: `Property must be a string`,
			constraints: [],
		}, {
			property: 'age',
			errorMessage: `Property must be a number`,
			constraints: [],
		}, {
			property: 'possibleArray',
			errorMessage: `Property is not an array`,
			constraints: [],
		}],
	);
});
