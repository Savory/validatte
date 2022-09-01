import { executeTestSuite, TestSuite } from '../utils.ts';
import { greater, greaterOrEqual, lower, lowerOrEqual } from '../../behaviors/number.ts';

const testSuites: TestSuite[] = [
	{
		behavior: greaterOrEqual,
		arguments: [5],
		testedValues: [4, 5, 6],
		results: [false, true, true],
		names: ['Lower', 'Equal', 'Greater'],
	},
	{
		behavior: greater,
		arguments: [5],
		testedValues: [4, 5, 6],
		results: [false, false, true],
		names: ['Lower', 'Equal', 'Greater'],
	},
	{
		behavior: lowerOrEqual,
		arguments: [5],
		testedValues: [4, 5, 6],
		results: [true, true, false],
		names: ['Lower', 'Equal', 'Greater'],
	},

	{
		behavior: lower,
		arguments: [5],
		testedValues: [4, 5, 6],
		results: [true, false, false],
		names: ['Lower', 'Equal', 'Greater'],
	}
];

await executeTestSuite(testSuites);