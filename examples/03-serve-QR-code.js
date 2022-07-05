const gaTOTP = require('../index');

/**
 * Using the Google chart API to generate a QR code containing the secret
 */
const secret = gaTOTP.randomBase32();
const user = 'gfiocco';
const domain = 'github.com/gfiocco';
const size = '300x300';
const googleApisChartUrl = `https://chart.googleapis.com/chart?chs=${size}&chld=M|0&cht=qr&chl=otpauth://totp/${user}@${domain}%3Fsecret%3D${secret}`;

/**
 * Display the QR code in browser at http://localhost:3000
 */
var http = require('http');
var server = http.createServer((req, res) => {
    res.writeHead(301, {
        'Cache-Control': 'no-cache', // prevent to reload old QR code when re-running
        Location: googleApisChartUrl
    });
    res.end();
});
server.listen(3000);
console.log('Open in your browser http://localhost:3000');
console.log(gaTOTP.getOTP(secret));
