import { assertEquals } from 'https://deno.land/std@0.135.0/testing/asserts.ts';
import TestContext = Deno.TestContext;

export type TestSuite = {
	// deno-lint-ignore no-explicit-any
	behavior: (...args: any[]) => (prop: any) => boolean;
	arguments: unknown[];
	testedValues: unknown[];
	results: unknown[];
	names: string[];
};

export const executeTestSuite = async (testSuites: TestSuite[]) => {
	for (const test of testSuites) {
		await Deno.test(test.behavior.name, async (ctx: TestContext) => {
			for (const idx in test.testedValues) {
				await ctx.step(
					test.names[idx],
					() =>
						assertEquals(
							test.behavior(...test.arguments)(test.testedValues[idx]),
							test.results[idx],
						),
				);
			}
		});
	}
};
