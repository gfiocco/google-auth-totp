const gaTOTP = require('../index');

// This will generate a random base32 string with the default length of 16 characters
const secret = gaTOTP.randomBase32();

// The library is hardcoded to refesh the OTP every 30 seconds, this will calculate the time before the code expires
const secondsLeft = 30 - Math.round(new Date() / 1000) % 30;

/**
 * Display in console the 6 digits code every time it changes
 */
console.log(`Your random secret is: ${secret} and the current code is ${gaTOTP.getOTP(secret)} and will expire in ${secondsLeft}s`);

function refreshOTP() {
    if (Math.round(new Date().getTime() / 1000) % 30 === 0) {
        console.log(`New code ${gaTOTP.getOTP(secret)} will expire in 30s`);
    }
}
setInterval(() => refreshOTP(), 1000);
