const magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

export function isMagnetURI(url: string): boolean {
	return magnetURI.test(url.trim());
}
