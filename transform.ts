export const plainToClass = <
	T extends abstract new (...args: unknown[]) => unknown,
>(
	data: unknown,
	Class: T,
): InstanceType<T> => {
	return Object.assign(Reflect.construct(Class, []), data) as InstanceType<T>;
};

export const classToPlain = <T>(instance: T): T => {
	return Object.assign(new Object(), instance);
};
