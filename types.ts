export const ValidateSymbol = Symbol('validator');
export type ValidateFunction = <T>(
	property: T,
) => boolean | ValidateResult<T>;
export interface ValidateResult<T> {
	replace?: T;
	valid: boolean;
}
export type ValidateInfo = Record<string, Array<Validator> | undefined>;
export type ValidateFunctionOptions = {
	errorMessage?: string;
	constraints?: unknown[];
};
export type Validator = {
	behavior: ValidateFunction;
	options?: ValidateFunctionOptions;
};
