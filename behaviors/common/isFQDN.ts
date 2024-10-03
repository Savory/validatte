interface isFQDN {
	require_tld?: boolean;
	allow_underscores?: boolean;
	allow_trailing_dot?: boolean;
}

const default_fqdn_options: { [key: string]: boolean } = {
	require_tld: true,
	allow_underscores: false,
	allow_trailing_dot: false,
};

/**
 * Checks if the given string is a fully qualified domain name (FQDN).
 *
 * @param str - The string to be checked.
 * @param options - Configuration options for FQDN validation.
 * @param options.allow_trailing_dot - If true, allows the FQDN to have a trailing dot.
 * @param options.require_tld - If true, requires the FQDN to have a top-level domain (TLD).
 * @param options.allow_underscores - If true, allows underscores in the FQDN.
 * @returns `true` if the string is a valid FQDN, `false` otherwise.
 */
export function isFQDN(
	str: string,
	options: isFQDN = default_fqdn_options,
): boolean {
	/* Remove the optional trailing dot before checking validity */
	if (options.allow_trailing_dot && str[str.length - 1] === '.') {
		str = str.substring(0, str.length - 1);
	}
	const parts = str.split('.');
	for (let i = 0; i < parts.length; i++) {
		if (parts[i].length > 63) {
			return false;
		}
	}
	if (options.require_tld) {
		const tld = parts.pop()!;
		if (
			!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)
		) {
			return false;
		}
		// disallow spaces && special characers
		if (
			/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(
				tld,
			)
		) {
			return false;
		}
	}
	for (let part: string | string[], i = 0; i < parts.length; i++) {
		part = parts[i];
		if (options.allow_underscores) {
			part = part.replace(/_/g, '');
		}
		if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
			return false;
		}
		// disallow full-width chars
		if (/[\uff01-\uff5e]/.test(part)) {
			return false;
		}
		if (part[0] === '-' || part[part.length - 1] === '-') {
			return false;
		}
	}
	return true;
}
