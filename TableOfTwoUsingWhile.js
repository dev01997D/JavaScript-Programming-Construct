const prompt = require('prompt-sync')();
let number = prompt("Enter the number :");
let value = 0;
let index = 1;
while (value < Math.pow(2, number) && value < 256) {
    value = 2 * index;
    console.log(value);
    index++;
}