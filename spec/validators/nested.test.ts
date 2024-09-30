import { IsString } from '../../validators/types-validators.ts';
import { IsEmail, LengthGreaterOrEqual } from '../../validators/string.ts';
import { assertEquals } from '@std/testing/asserts';
import { validateObject } from '../../validate.ts';
import { Nested } from '../../validators/nested.ts';

class Info {
	@IsString()
	@LengthGreaterOrEqual(5)
	username!: string;

	@IsString()
	@IsEmail()
	email!: string;
}

class NestedUser {
	@Nested(Info)
	info!: Info;
}

Deno.test('@Nested with wrong arguments', () => {
	const user = new NestedUser();
	user.info = {
		username: 'shor',
		email: 'notanemail',
	};
	assertEquals(validateObject(user, NestedUser), [
		{
			property: 'info.username',
			errorMessage: `Length must be greater than or equal 5`,
			constraints: [5],
		},
		{
			property: 'info.email',
			errorMessage: `String is not an email`,
			constraints: [],
		},
	]);
});

Deno.test('@Nested with wrong arguments', () => {
	const user = new NestedUser();
	user.info = {
		username: 'usernamelongenough',
		email: 'email@niceemail.com',
	};
	assertEquals(validateObject(user, NestedUser), []);
});
