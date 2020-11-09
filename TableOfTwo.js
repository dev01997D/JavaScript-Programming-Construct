const prompt = require('prompt-sync')();
let number = prompt("Enter the number :");
for (let index = 1; (2 * index) < Math.pow(2, number); index++) { 
    console.log(2 * index); 
}