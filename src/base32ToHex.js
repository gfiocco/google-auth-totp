/**
 * Convert a base-32 to hexadecimal with a different base-32 alphabet 
 * from the one used by the parseInt() function
 */
module.exports = function base32ToHex(base32String) {    
    const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

	let bits = '';
    let hex = '';

	for (let i = 0; i < base32String.length; i++) {
		const value = base32Chars.indexOf(base32String.charAt(i).toUpperCase());
		bits += (Array(5).fill(0).join('') + value.toString(2)).slice(-5);
	}

    for (let i = 0; i < bits.length - 3; i += 4) {
		hex = hex + parseInt(bits.substr(i, 4), 2).toString(16);
	}

    return hex;
}
