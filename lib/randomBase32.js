const DEFAULT_LENGTH = 16;

/**
* Generate a random base-32 secret
*/
module.exports = function randomBase32(length = DEFAULT_LENGTH) {
   const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
   const fixedLength = length % 2 === 0 ? length : length + 1; // ensuring even length
   const secret = [];

   for (let i = 0; i < fixedLength; i++) {
       secret.push(base32chars.split('')[Math.floor(Math.random() * 32)]);
   }

   return secret.join('');
}
