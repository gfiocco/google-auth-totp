const gaTOTP = require('../index');

// This will generate a random base32 string with the default length of 16 characters
const secret = gaTOTP.randomBase32();

console.log('Your random secret is: ' + secret);
