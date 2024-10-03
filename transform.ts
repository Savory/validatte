/**
 * @module
 * Helper functions to transform plain object to class and vice versa
 */

/**
 * Transforms a plain object into an instance of a given class.
 *
 * @template T - The constructor type of the class.
 * @param data - The plain object to be transformed.
 * @param Class - The class constructor to instantiate.
 * @returns An instance of the specified class with properties assigned from the plain object.
 */
export const plainToClass = <
	T extends abstract new (...args: unknown[]) => unknown,
>(
	data: unknown,
	Class: T,
): InstanceType<T> => {
	return Object.assign(Reflect.construct(Class, []), data) as InstanceType<T>;
};

/**
 * Converts a class instance to a plain object by copying all enumerable properties.
 *
 * @template T - The type of the class instance.
 * @param {T} instance - The class instance to be converted.
 * @returns {T} - A plain object with the same properties as the class instance.
 */
export const classToPlain = <T>(instance: T): T => {
	return Object.assign(new Object(), instance);
};
