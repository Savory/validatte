export const lengthGreaterOrEqual = (minLength: number) => (str: string) => str.length >= minLength;
export const lengthGreater = (minLength: number) => (str: string) => str.length > minLength;
export const lengthLowerOrEqual = (maxLength: number) => (str: string) => str.length <= maxLength;
export const lengthLower = (maxLength: number) => (str: string) => str.length < maxLength;
export const isRegex = (regex: RegExp) => (str: string) => regex.test(str);
export const isEmail = () => (str: string) => /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
