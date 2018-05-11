const crypto = require('crypto');
const base32ToHex = require('./base32ToHex');

/**
 * Calculate totp for the given secret
 */
module.exports = function getOTP(secret) {
    // Calculate number of 30-seconds intervals from epoch time, encode this to hex and then 0-pad to obtain a 12 character string. 
    // Finally place this hex string into a buffer and store it into the variable "mssg".
    const mssg = Buffer.from((Array(16).fill(0).join('') + (Math.floor(Math.round(new Date().getTime() / 1000) / 30)).toString(16)).slice(-16), 'hex');

    // Encode the secret from base-32 to hex, place it into a buffer and store it as the variable "key".
    const key = Buffer.from(base32ToHex(secret), 'hex');

    // FYI - we have stored the message and secret into the buffer because the crypto hmac function requires buffer inputs.

    // Use crypto to obtain an SH1 HMAC digest from the key and mssg
    const hmac = crypto.createHmac('sha1', key); // create Hmac instances
    hmac.setEncoding('hex'); // instruct the Hmac instance that mssg is hex encoded
    hmac.update(mssg);
    hmac.end();

    const sha1 = hmac.read(); // the SH1 HMAC output
    // Bitwise operations to convert the SH1 HMAC output into a 6 digits code
    return ((parseInt((sha1.substr(parseInt(sha1.slice(-1), 16) * 2, 8)), 16) & 2147483647) + '').slice(-6);
}
