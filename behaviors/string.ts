export const lengthGreaterOrEqual = (minLength: number) => (str: any) =>
	str.length >= minLength;
export const lengthGreater = (minLength: number) => (str: any) =>
	str.length > minLength;
export const lengthLowerOrEqual = (maxLength: number) => (str: any) =>
	str.length <= maxLength;
export const lengthLower = (maxLength: number) => (str: any) =>
	str.length < maxLength;
export const isRegex = (regex: RegExp) => (str: any) => regex.test(str);
export const isEmail = () => (str: any) =>
	/^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
