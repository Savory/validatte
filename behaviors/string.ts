
export const lengthGreaterOrEqual = (minLength: number) => (prop: any) => prop.length >= minLength;
export const lengthGreater = (minLength: number) => (prop: any) => prop.length > minLength;
export const lengthLowerOrEqual = (maxLength: number) => (prop: any) => prop.length <= maxLength;
export const lengthLower = (maxLength: number) => (prop: any) => prop.length < maxLength;
export const isRegex = (regex: RegExp) => (prop: any) => regex.test(prop);
export const isEmail = () => (prop: any) => /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(prop);
