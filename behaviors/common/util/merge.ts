/**
 * Merges the properties of the `defaults` object into the `obj` object.
 * If a property in `defaults` does not exist in `obj`, it will be added to `obj`.
 *
 * @param obj - The target object to merge properties into. Defaults to an empty object.
 * @param defaults - The source object containing default properties.
 * @returns The merged object with properties from both `obj` and `defaults`.
 */
// deno-lint-ignore no-explicit-any
export function merge(obj: any = {}, defaults: any) {
	for (const key in defaults) {
		if (typeof obj[key] === 'undefined') {
			obj[key] = defaults[key];
		}
	}
	return obj;
}
