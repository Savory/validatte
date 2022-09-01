import { Greater, GreaterOrEqual, Lower, LowerOrEqual } from '../../validators/number.ts';
import TestContext = Deno.TestContext;
import { validateObject } from '../../validate.ts';
import { assertArrayIncludes, assertEquals } from 'https://deno.land/std@0.135.0/testing/asserts.ts';

class NumberTest {
	@GreaterOrEqual(5)
	gte!: number;

	@Greater(10)
	gt!: number;

	@LowerOrEqual(6)
	lte!: number;

	@Lower(4)
	lt!: number;
}

Deno.test('Wrong values', async (ctx: TestContext) => {
	const wrongValueInstance: NumberTest = new NumberTest();
	wrongValueInstance.gte = -1000;
	wrongValueInstance.gt = -10000;
	wrongValueInstance.lte = 10000;
	wrongValueInstance.lt = 10000;
	const errors = validateObject(wrongValueInstance, NumberTest);
	await ctx.step('Greater Or Equal', () => {
		assertArrayIncludes(errors, [
			{
				property: 'gte',
				errorMessage: `Number must be greater than or equal 5`,
				constraints: [5],
			},
		]);
	});
	await ctx.step('Greater', () => {
		assertArrayIncludes(errors, [
			{
				property: 'gt',
				errorMessage: `Number must be greater than 10`,
				constraints: [10],
			},
		]);
	});
	await ctx.step('Lower Or Equal', () => {
		assertArrayIncludes(errors, [
			{
				property: 'lte',
				errorMessage: `Number must be lower than or equal 6`,
				constraints: [6],
			},
		]);
	});
	await ctx.step('Lower', () => {
		assertArrayIncludes(errors, [
			{
				property: 'lt',
				errorMessage: `Number must be lower than 4`,
				constraints: [4],
			},
		]);
	});
});

Deno.test('Right values', async (ctx: TestContext) => {
	const rightValueInstance: NumberTest = new NumberTest();
	await ctx.step('GTE, LTE, GT, LT', () => {
		rightValueInstance.gte = 1000;
		rightValueInstance.gt = 10000;
		rightValueInstance.lte = -10000;
		rightValueInstance.lt = -10000;
		const errors = validateObject(rightValueInstance, NumberTest);
		assertEquals([], errors);
	});

	await ctx.step('GTE and LTE specific case where equal', () => {
		rightValueInstance.gte = 5;
		rightValueInstance.lte = 6;
		const errors = validateObject(rightValueInstance, NumberTest);
		assertEquals([], errors);
	});
});
