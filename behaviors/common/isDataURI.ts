const validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;

const validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;

const validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

/**
 * Checks if a given string is a valid Data URI.
 *
 * A Data URI typically consists of a scheme (`data:`), an optional media type,
 * optional attributes (such as `base64`), and the actual data.
 *
 * This function performs the following checks:
 * - The string must contain at least one comma.
 * - The scheme must start with `data:`.
 * - The media type, if present, must be valid.
 * - Each attribute must be valid, with the last attribute optionally being `base64`.
 * - The data part must be valid.
 *
 * @param str - The string to be checked.
 * @returns `true` if the string is a valid Data URI, `false` otherwise.
 */
export function isDataURI(str: string): boolean {
	const data: string[] = str.split(',');
	if (data.length < 2) {
		return false;
	}
	const attributes: string[] | undefined = data.shift()?.trim().split(';');
	if (attributes) {
		const schemeAndMediaType = attributes.shift();
		if (schemeAndMediaType?.substr(0, 5) !== 'data:') {
			return false;
		}
		const mediaType = schemeAndMediaType.substr(5);
		if (mediaType !== '' && !validMediaType.test(mediaType)) {
			return false;
		}
		for (let i = 0; i < attributes.length; i++) {
			if (
				i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64'
			) {
				// ok
			} else if (!validAttribute.test(attributes[i])) {
				return false;
			}
		}
		for (let i = 0; i < data.length; i++) {
			if (!validData.test(data[i])) {
				return false;
			}
		}
		return true;
	} else return false;
}
