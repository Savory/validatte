import { assertEquals } from 'https://deno.land/std@0.135.0/testing/asserts.ts';
import { validateObject } from '../../validate.ts';
import { IsPhoneNumber } from '../../validators/phone-number.ts';

class UserWithPhoneNumber {
	@IsPhoneNumber('FR')
	phoneNumber!: string;
}

Deno.test('@IsLocalPhoneNumber with wrong phonenumber', () => {
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

Deno.test('@IsLocalPhoneNumber with local phone number', () => {
	const user = new UserWithPhoneNumber();
	user.phoneNumber = '0789610921';
	assertEquals(validateObject(user, UserWithPhoneNumber), []);
});

Deno.test('@IsLocalPhoneNumber with international phone number', () => {
	const user = new UserWithPhoneNumber();
	user.phoneNumber = '+33789610921';
	assertEquals(validateObject(user, UserWithPhoneNumber), []);
});

Deno.test('@IsLocalPhoneNumber with international phone number with leading 0', () => {
	const user = new UserWithPhoneNumber();
	user.phoneNumber = '+330789610921';
	assertEquals(validateObject(user, UserWithPhoneNumber), []);
});
