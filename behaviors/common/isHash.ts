const lengths: { [key: string]: number } = {
	md5: 32,
	md4: 32,
	sha1: 40,
	sha256: 64,
	sha384: 96,
	sha512: 128,
	ripemd128: 32,
	ripemd160: 40,
	tiger128: 32,
	tiger160: 40,
	tiger192: 48,
	crc32: 8,
	crc32b: 8,
};

/**
 * Checks if a given string is a valid hash for the specified algorithm.
 *
 * @param str - The string to be checked.
 * @param algorithm - The algorithm to be used for validation. This should correspond to an index in the `lengths` array.
 * @returns `true` if the string is a valid hash for the specified algorithm, `false` otherwise.
 */
export function isHash(str: string, algorithm: number): boolean {
	const hash = new RegExp(`^[a-fA-F0-9]{${lengths[algorithm]}}$`);
	return hash.test(str);
}
