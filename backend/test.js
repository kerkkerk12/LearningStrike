var crypto = require('crypto');

function randomRoomCode (len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len).toLowerCase();   // return required number of characters
}

var string = randomRoomCode(5);
console.log(string);