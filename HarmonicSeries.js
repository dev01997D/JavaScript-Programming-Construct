const prompt = require('prompt-sync')();
let number = prompt("Enter the number :");
for (let index = 1; index <= number; index++) {
    console.log(1 + "/" + index);
}