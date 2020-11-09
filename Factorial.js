const prompt = require('prompt-sync')();
let number = prompt("Enter the number!  ");
let factorial = 1;
for (let index = 1; index < number; index++) {
    factorial += factorial * index;
}
console.log("Factorial of " + number + " is equal to : " + factorial);