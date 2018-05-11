/**
 *   A Time-based One-time Password Algorithm with Google authenticator
 *
 *   - Generate a 80 bits random base 32 secret (i.e. a string with 16 base 32 values)
 *   - Send the secret to the client as QR code generated with googleapis chart
 *   - Display in console the 6 digit code on new 30-seconds intervals from epoch time
 *
 */
module.exports = {
	getOTP: require('./lib/getOTP'),
	randomBase32: require('./lib/randomBase32'),
	base32ToHex: require('./lib/base32ToHex'),
}
