export const lengthGreaterOrEqual = (str: string, minLength: number) => str.length >= minLength;
export const lengthGreater = (str: string, minLength: number) => str.length > minLength;
export const lengthLowerOrEqual = (str: string, maxLength: number) => str.length <= maxLength;
export const lengthLower = (str: string, maxLength: number) => str.length < maxLength;
export const isRegex = (str: string, regex: RegExp) => regex.test(str);
