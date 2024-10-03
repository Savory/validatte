const magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

/**
 * Checks if the given URL is a valid Magnet URI.
 *
 * @param url - The URL string to be validated.
 * @returns `true` if the URL is a valid Magnet URI, otherwise `false`.
 */
export function isMagnetURI(url: string): boolean {
	return magnetURI.test(url.trim());
}
