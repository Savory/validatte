const charsetRegex = /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;

/**
 * Checks if the given string is a valid slug.
 *
 * A slug is typically a URL-friendly string that contains only lowercase letters, numbers, and hyphens.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid slug, `false` otherwise.
 */
export function isSlug(str: string): boolean {
	return (charsetRegex.test(str));
}
