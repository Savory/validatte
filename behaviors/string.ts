export function lengthGreaterOrEqual(str: string, minLength: number): boolean {return str.length >= minLength; }
export function lengthGreater(str: string, minLength: number): boolean {return str.length > minLength; }
export function lengthLowerOrEqual(str: string, maxLength: number): boolean {return str.length <= maxLength; }
export function lengthLower(str: string, maxLength: number): boolean {return str.length < maxLength; }
export function isRegex(str: string, regex: RegExp): boolean { return regex.test(str) };
