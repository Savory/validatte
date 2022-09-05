export const ValidateSymbol = Symbol('validator');

// deno-lint-ignore no-explicit-any
export type Constructor = abstract new (...args: any[]) => any;

export type ValidateFunction = (
	// deno-lint-ignore no-explicit-any
	property: any,
) => boolean;
export type ValidateInfo = Record<string, Array<Validator> | undefined>;
export type ValidateFunctionOptions = {
	errorMessage?: string;
	// deno-lint-ignore no-explicit-any
	constraints?: any[];
};
export type Validator = {
	behavior: ValidateFunction;
	options?: ValidateFunctionOptions;
};
