const bcrypt = require('bcrypt');

let text = "Hello world";

hashText = bcrypt.hashSync(text, 10);

console.log(hashText);
console.log(bcrypt.compareSync(text, hashText));
console.log(bcrypt.compareSync("Hello", hashText));
