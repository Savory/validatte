## A Savory class validator for Deno.

![Made for Deno](https://img.shields.io/badge/made%20for-Deno-6B82F6?style=flat-square)
[![CI](https://github.com/Savory/validatte/actions/workflows/run-tests.yml/badge.svg)](https://github.com/Savory/validatte/actions/workflows/run-tests.yml)
[![codecov](https://codecov.io/gh/Savory/validatte/branch/main/graph/badge.svg?token=R6WXVC669Z)](https://codecov.io/gh/Savory/validatte)

## Available decorators

| Decorator                            | Description                                                                                                                                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Type validation decorators**       |                                                                                                                                                                                                   |
| `@IsBoolean()`                       | Checks if a value is a boolean.                                                                                                                                                                   |
| `@IsString()`                        | Checks if the string is a string.                                                                                                                                                                 |
| `@IsNumber()`                        | Checks if the value is a number.                                                                                                                                                                  |
| `@IsBigInt()`                        | Checks if the value is a big int.                                                                                                                                                                 |
| `@IsArray()`                         | Checks if the value is an array                                                                                                                                                                   |
| `@IsObject()`                        | Checks if the value is an object                                                                                                                                                                  |
| `@IsSymbol()`                        | Checks if the value is a Symbol                                                                                                                                                                   |
| `@IsUndefined()`                     | Checks if the value is undefined                                                                                                                                                                  |
| **Number validation decorators**     |                                                                                                                                                                                                   |
| `@GreaterOrEqual(num: number)`       | Checks if the value is greater than or equal to the specified number.                                                                                                                             |
| `@Greater(num: number)`              | Checks if the value is greater than the specified number.                                                                                                                                         |
| `@LowerOrEqual(num: number)`         | Checks if the value is lower than or equal to the specified number.                                                                                                                               |
| `@Lower(num: number)`                | Checks if the value is lower than the specified number.                                                                                                                                           |
| **String validation decorators**     |                                                                                                                                                                                                   |
| `@LengthGreaterOrEqual(num: number)` | Checks if the length is greater than or equal to the specified number.                                                                                                                            |
| `@LengthGreater(num: number)`        | Checks if the length is greater than the specified number.                                                                                                                                        |
| `@LengthLowerOrEqual(num: number)`   | Checks if the length is lower than or equal to the specified number.                                                                                                                              |
| `@LengthLower(num: number)`          | Checks if the length is lower than the specified number.                                                                                                                                          |
| `@IsRegex(regex: RegExp)`            | Checks if the string match the given RegExp.                                                                                                                                                      |
| `@IsEmail()`                         | Checks if the string is an email.                                                                                                                                                                 |
| `@IsPhoneNumber(country: string)`    | Checks if the string is a local phone number for a country. Country must be ISO 3166 c.a.d 2 letter code. Example: FR, US, UK, DE                                                                 |
| `@IsInternationalPhoneNumber()`      | Checks if the string is an international phone number with extension and with or without leading 0. Example: +330XXXXXXXXX or +33XXXXXXXXX                                                        |
| **Object validation decorators**     |                                                                                                                                                                                                   |
| `@Nested(class: Class)`              | Checks if the property is a valid "instance" of Class. This means that all Validators of Class will be checked on the given object. The property can either be a plain object or a class instance |

## Usage

Create a Class using TypeScript Decorators and run `validateObject`.

If you need more built-in validators, please **open an issue** or **create merge request**

```ts
import {
	createValidator,
	IsEmail, // this is a decorator (PascalCase)
	isEmail, // this is a check function, called behavior (camelCase)
	IsString,
	LengthLowerOrEqual,
	validateObject,
} from 'https://deno.land/x/validatte/mod.ts';

// Custom validator with custom error message containing argument. $constraint1 will be replaced by first argument. $constraint2 by second etc...
const IsWhiteListedEmailDomain = createValidator(
	(whiteListedDomain: string) => {
		return (prop) => {
			if (isEmail(prop)) {
				return false;
			}
			return prop.indexOf(`@${whiteListedDomain}`) !== -1;
		};
	},
	'Email shoud be from $constraint1 domain',
);

class User {
	@IsString()
	@IsEmail()
	@IsWhiteListedEmailDomain('mydomain.com')
	email!: string;
}

// ---------- //

// Valid
const user = new User();
user.email = 'myemail@mydomain.com';
console.log(validateObject(user, User));
// []

// ---------- //

// Invalid
const failingUser = new User();
failingUser.email = 'wrongemail@email.com';
console.log(validateObject(failingUser, User));

/*
[
	{
		property: 'email',
		errorMessage: `Email shoud be from mydomain.com domain`,
		constraints: ['mydomain.com'],
	},
];
*/
```

## Come with us on this awesome journey

We always welcome contributors, feel free to submit a new feature or report a bug on our
[Github Repository](https://github.com/Savory/validatte) and [join our discord](https://discord.gg/Q7ZHuDPgjA)

## License

MIT
