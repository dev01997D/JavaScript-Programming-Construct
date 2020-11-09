const prompt = require('prompt-sync')();
let startRange = prompt("Enter the starting range number :");
let endRange = prompt("Enter the end range number :")
for (let range = startRange; range <= endRange; range++) {
    let flag = 0;
    for (let index = 2; index <= range / 2; index++) {
        if (range % index == 0) {
            flag = 1;
            break;
        }
    } if (flag == 1) {
        console.log(range + " is not a prime number.");
    } else {
        console.log(range + " is prime number.");
    }
}