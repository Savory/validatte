const eth = /^(0x)[0-9a-f]{40}$/i;

export function isEthereumAddress(str: string): boolean {
	return eth.test(str);
}
