const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err,hash) => {
//         console.log(hash);
//     });
// });

var hashedpassword = '$2a$10$IjoKNitr7MJqcKo5w2/dlep.JhjredZ59s3uWMaWYpe39ayaZXEIe';

bcrypt.compare('123abc!', hashedpassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded',decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);