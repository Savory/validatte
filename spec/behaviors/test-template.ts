import { assertEquals, assertThrows } from '@std/testing/asserts';
import validator from './utils.ts';

interface Options {
	validator: string;
	valid?: string[];
	invalid?: string[];
	error?: string[];
	// deno-lint-ignore no-explicit-any
	args?: (number | string | { [key: string]: any })[];
}

export default function test(options: Options): void {
	Deno.test(
		options.validator +
			(options.args ? ' ' + JSON.stringify(options.args) : ''),
		function (): void {
			const args = options.args || [];
			if (options.valid) {
				options.valid.forEach((valid) => {
					assertEquals(validator[options.validator](valid, ...args), true);
				});
			}

			if (options.invalid) {
				options.invalid.forEach((invalid) => {
					assertEquals(validator[options.validator](invalid, ...args), false);
				});
			}

			if (options.error) {
				options.error.forEach((error) => {
					assertThrows((): void => validator[options.validator](error, ...args));
				});
			}
		},
	);
}
