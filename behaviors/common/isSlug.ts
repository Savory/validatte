const charsetRegex = /^[^-_](?!.*?[-_]{2,})([a-z0-9\\-]{1,}).*[^-_]$/;

export function isSlug(str: string): boolean {
	return (charsetRegex.test(str));
}
