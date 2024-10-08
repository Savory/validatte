/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
const ipv4Maybe = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
const ipv6Block = /^[0-9A-F]{1,4}$/i;

/**
 * Checks if a given string is a valid IP address (either IPv4 or IPv6).
 *
 * @param str - The string to be checked as an IP address.
 * @param version - The IP version to check against. Can be '4', '6', or an empty string.
 *                   If an empty string is provided, the function will check for both IPv4 and IPv6.
 * @returns `true` if the string is a valid IP address of the specified version, `false` otherwise.
 */
export function isIP(
	str: string,
	version: string | number = '',
): boolean {
	version = String(version);
	if (!version) {
		return isIP(str, 4) || isIP(str, 6);
	} else if (version === '4') {
		if (!ipv4Maybe.test(str)) {
			return false;
		}
		const parts: number[] = str.split('.').map(Number).sort((a: number, b: number) => a - b);
		return parts[3] <= 255;
	} else if (version === '6') {
		let addressAndZone = [str];
		// ipv6 addresses could have scoped architecture
		// according to https://tools.ietf.org/html/rfc4007#section-11
		if (str.includes('%')) {
			addressAndZone = str.split('%');
			if (addressAndZone.length !== 2) {
				// it must be just two parts
				return false;
			}
			if (!addressAndZone[0].includes(':')) {
				// the first part must be the address
				return false;
			}

			if (addressAndZone[1] === '') {
				// the second part must not be empty
				return false;
			}
		}

		const blocks = addressAndZone[0].split(':');
		let foundOmissionBlock = false; // marker to indicate ::

		// At least some OS accept the last 32 bits of an IPv6 address
		// (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
		// that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
		// and '::a.b.c.d' is deprecated, but also valid.
		const foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
		const expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

		if (blocks.length > expectedNumberOfBlocks) {
			return false;
		}
		// initial or final ::
		if (str === '::') {
			return true;
		} else if (str.substr(0, 2) === '::') {
			blocks.shift();
			blocks.shift();
			foundOmissionBlock = true;
		} else if (str.substr(str.length - 2) === '::') {
			blocks.pop();
			blocks.pop();
			foundOmissionBlock = true;
		}

		for (let i = 0; i < blocks.length; ++i) {
			// test for a :: which can not be at the string start/end
			// since those cases have been handled above
			if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
				if (foundOmissionBlock) {
					return false; // multiple :: in address
				}
				foundOmissionBlock = true;
			} else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
				// it has been checked before that the last
				// block is a valid IPv4 address
			} else if (!ipv6Block.test(blocks[i])) {
				return false;
			}
		}
		if (foundOmissionBlock) {
			return blocks.length >= 1;
		}
		return blocks.length === expectedNumberOfBlocks;
	}
	return false;
}
