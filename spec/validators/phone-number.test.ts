import { assertEquals } from '@std/testing/asserts';
import { validateObject } from '../../validate.ts';
import { IsInternationalPhoneNumber, IsPhoneNumber } from '../../validators/phone-number.ts';
import TestContext = Deno.TestContext;

class UserWithPhoneNumber {
	@IsPhoneNumber('FR')
	phoneNumber!: string;
}

Deno.test('IsPhoneNumber with argument', async (ctx: TestContext) => {
	await ctx.step('wrong phonenumber', () => {
		const user = new UserWithPhoneNumber();
		user.phoneNumber = 'werweqr';
		assertEquals(validateObject(user, UserWithPhoneNumber), [
			{
				property: 'phoneNumber',
				errorMessage: `String is not a local phone number from FR`,
				constraints: ['FR'],
			},
		]);
	});

	await ctx.step('local phone number', () => {
		const user = new UserWithPhoneNumber();
		user.phoneNumber = '0789610921';
		assertEquals(validateObject(user, UserWithPhoneNumber), []);
	});

	await ctx.step('international phone number', () => {
		const user = new UserWithPhoneNumber();
		user.phoneNumber = '+33789610921';
		assertEquals(validateObject(user, UserWithPhoneNumber), []);
	});

	await ctx.step('international phone number with leading 0', () => {
		const user = new UserWithPhoneNumber();
		user.phoneNumber = '+330789610921';
		assertEquals(validateObject(user, UserWithPhoneNumber), []);
	});
});

class UserWithInternationalPhoneNumber {
	@IsInternationalPhoneNumber()
	phoneNumber!: string;
}

Deno.test('IsPhoneNumber without argument', async (ctx: TestContext) => {
	await ctx.step('Wrong phonenumber', () => {
		const user = new UserWithInternationalPhoneNumber();
		user.phoneNumber = 'werweqr';
		assertEquals(validateObject(user, UserWithInternationalPhoneNumber), [
			{
				property: 'phoneNumber',
				errorMessage: `String is not an international phone number`,
				constraints: [],
			},
		]);
	});

	await ctx.step('local phone number', () => {
		const user = new UserWithInternationalPhoneNumber();
		user.phoneNumber = '0789610921';
		assertEquals(validateObject(user, UserWithInternationalPhoneNumber), [
			{
				property: 'phoneNumber',
				errorMessage: `String is not an international phone number`,
				constraints: [],
			},
		]);
	});

	await ctx.step('international phone number', () => {
		const user = new UserWithInternationalPhoneNumber();
		user.phoneNumber = '+33789610921';
		assertEquals(validateObject(user, UserWithInternationalPhoneNumber), []);
	});

	await ctx.step('international phone number with leading 0', () => {
		const user = new UserWithInternationalPhoneNumber();
		user.phoneNumber = '+330789610921';
		assertEquals(validateObject(user, UserWithInternationalPhoneNumber), []);
	});
});
