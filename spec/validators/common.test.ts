import TestContext = Deno.TestContext;
import { validateObject } from '../../validate.ts';
import { assertArrayIncludes } from 'https://deno.land/std@0.135.0/testing/asserts.ts';
import { IsAfter } from '../../validators/common.ts';

class CommonStringTest {
  @IsAfter('2020-01-01')
  isAfter!: string;
}

Deno.test('IsAfter', async (ctx: TestContext) => {
  await ctx.step('Date not after', () => {
    const wrongValueInstance: CommonStringTest = new CommonStringTest();
    wrongValueInstance.isAfter = '2019-01-01';
    const errors = validateObject(wrongValueInstance, CommonStringTest);
    assertArrayIncludes(errors, [
      {
        property: 'isAfter',
        errorMessage: `String must be a date later than 2020-01-01`,
        constraints: ['2020-01-01'],
      },
    ]);
  });
  await ctx.step('Not a date', () => {
    const wrongValueInstance: CommonStringTest = new CommonStringTest();
    wrongValueInstance.isAfter = 'qwerweqrqw';
    const errors = validateObject(wrongValueInstance, CommonStringTest);
    assertArrayIncludes(errors, [
      {
        property: 'isAfter',
        errorMessage: `String must be a date later than 2020-01-01`,
        constraints: ['2020-01-01'],
      },
    ]);
  });
  await ctx.step('Right date', () => {
    const rightValueInstance: CommonStringTest = new CommonStringTest();
    rightValueInstance.isAfter = '2022-01-01';
    const errors = validateObject(rightValueInstance, CommonStringTest);
    assertArrayIncludes(errors, []);
  });
});
