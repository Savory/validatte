import { assertEquals } from 'https://deno.land/std@0.135.0/testing/asserts.ts';
import {
	isEmail,
	isRegex,
	lengthGreater,
	lengthGreaterOrEqual,
	lengthLower,
	lengthLowerOrEqual,
} from '../../behaviors/string.ts';
import { executeTestSuite, TestSuite } from '../utils.ts';

const testSuites: TestSuite[] = [
	{
		behavior: lengthLowerOrEqual,
		arguments: [5],
		testedValues: ['tooLongForIt', 'short'],
		results: [false, true],
		names: ['Too long', 'Matching str'],
	},
	{
		behavior: lengthLower,
		arguments: [5],
		testedValues: ['tooLongForIt', 'shor'],
		results: [false, true],
		names: ['Too long', 'Matching str'],
	},
	{
		behavior: lengthGreater,
		arguments: [5],
		testedValues: ['LongEnough', 'shor'],
		results: [true, false],
		names: ['Long enough', 'too short'],
	},

	{
		behavior: lengthGreaterOrEqual,
		arguments: [5],
		testedValues: ['LongE', 'shor'],
		results: [true, false],
		names: ['Long enough', 'too short'],
	},
	{
		behavior: isEmail,
		arguments: [],
		testedValues: ['aniceemail@email.com', 'notanemail'],
		results: [true, false],
		names: ['is email', 'is not email'],
	},
	{
		behavior: isRegex,
		arguments: [/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/],
		testedValues: ['erewreerwAerwer2023423!1', 'notANicePassword'],
		results: [true, false],
		names: ['Match regex', 'does not match regex'],
	},
];

await executeTestSuite(testSuites);