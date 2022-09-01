## A Savory class validator for Deno.

![Made for Deno](https://img.shields.io/badge/made%20for-Deno-6B82F6?style=flat-square)
[![CI](https://github.com/Sorikairox/Danet/actions/workflows/run-tests.yml/badge.svg)](https://github.com/Sorikairox/Danet/actions/workflows/run-tests.yml)
[![codecov](https://codecov.io/gh/Savory/Danet/branch/main/graph/badge.svg?token=R6WXVC669Z)](https://codecov.io/gh/Savory/Danet)
![Licence MIT](https://img.shields.io/github/license/lkwr/vade?color=blue&style=flat-square)

## Usage

Create a Class using TypeScript Decorators and run `validateObject`.

If you need more built-in validators, please **open an issue** or **create merge request**

```ts
import {
  createValidator,
  LengthLowerOrEqual,
  IsString,
  IsEmail, // this is a decorator (PascalCase)
  isEmail, // this is a check function, called behavior (camelCase)
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
  }, 'Email shoud be from $constraint1 domain');

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
// ExampleClass { specialNumber: 13, randomValue: "asd" }

// ---------- //

// Invalid
const failingUser = new User();
failingUser.email = 'wrongemail@email.com';
console.log(validateObject(failingUser, User));
[
  {
    property: 'email',
    errorMessage: `Email shoud be from mydomain.com domain`,
    constraints: [ 'mydomain.com' ],
  }
]

```

## Come with us on this awesome journey

We always welcome contributors, feel free to submit a new feature or report a
bug on our [Github Repository](https://github.com/Savory/validatte) and
[join our discord](https://discord.gg/Q7ZHuDPgjA)

## License

MIT
