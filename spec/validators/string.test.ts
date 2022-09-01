import TestContext = Deno.TestContext;
import { validateObject } from '../../validate.ts';
import { assertArrayIncludes, assertEquals } from 'https://deno.land/std@0.135.0/testing/asserts.ts';
import {
  IsEmail, IsRegex,
  LengthGreater,
  LengthGreaterOrEqual,
  LengthLower,
  LengthLowerOrEqual
} from '../../validators/string.ts';

class StringTest {

  @LengthGreaterOrEqual(11)
  gte!: string;

  @LengthGreater(10)
  gt!: string;

  @LengthLowerOrEqual(9)
  lte!: string;

  @LengthLower(8)
  lt!: string;

  @IsEmail()
  email!: string;

  @IsRegex(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/)
  regexp!: string;
}

Deno.test('Wrong values', async (ctx: TestContext) => {
  const wrongValueInstance: StringTest = new StringTest();
  wrongValueInstance.gte = "tooshort";
  wrongValueInstance.gt = "short";
  wrongValueInstance.lte = "waytoooooolong";
  wrongValueInstance.lt = "longerthanexpectedwow";
  wrongValueInstance.email = 'wrongemail';
  wrongValueInstance.regexp = 'weakpassword';
  const errors = validateObject(wrongValueInstance, StringTest);
  await ctx.step('Greater Or Equal', () => {
    assertArrayIncludes(errors, [
      {
        property: 'gte',
        errorMessage: `Length must be greater than or equal 11`,
        constraints: [11],
      },
    ]);
  })
  await ctx.step('Greater', () => {
    assertArrayIncludes(errors, [
      {
        property: 'gt',
        errorMessage: `Length must be greater than 10`,
        constraints: [10],
      },
    ]);
  })
  await ctx.step('Lower Or Equal', () => {
    assertArrayIncludes(errors, [
      {
        property: 'lte',
        errorMessage: `Length must be lower than or equal 9`,
        constraints: [9],
      },
    ]);
  })
  await ctx.step('Lower', () => {
    assertArrayIncludes(errors, [
      {
        property: 'lt',
        errorMessage: `Length must be lower than 8`,
        constraints: [8],
      },
    ]);
  })
  await ctx.step('Email', () => {
    assertArrayIncludes(errors, [
      {
        property: 'email',
        errorMessage: `String is not an email`,
        constraints: [],
      },
    ]);
  })
  await ctx.step('Regexp', () => {
    assertArrayIncludes(errors, [
      {
        property: 'regexp',
        errorMessage: `String does not validate regex: /((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W]).{8,64})/`,
        constraints: [/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/],
      },
    ]);
  })
})


Deno.test('Right values', async (ctx: TestContext) => {
  const rightValueInstance: StringTest = new StringTest();
  await ctx.step('GTE, LTE, GT, LT', () => {
    rightValueInstance.gte = "thisislongenough";
    rightValueInstance.gt = "thisistoobelieveme";
    rightValueInstance.lte = "short";
    rightValueInstance.lt = "metoo";
    rightValueInstance.email = 'thisemail@email.com'
    rightValueInstance.regexp = 'erewreerwAerwer2023423!1'
    const errors = validateObject(rightValueInstance, StringTest);
    assertEquals([], errors);
  });

  await ctx.step('GTE and LTE specific case where equal', () => {
    rightValueInstance.gte = "equalto11ish";
    rightValueInstance.lte = "thiseigt";
    const errors = validateObject(rightValueInstance, StringTest);
    assertEquals([], errors);
  })
})