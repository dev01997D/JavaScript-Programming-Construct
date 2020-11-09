const prompt = require('prompt-sync')();
let number = prompt("Enter the number!  ");
for (let index = 2; index * index < number; index++) {
    let flag = 0;
    for (let i = 2; i <= index / 2; i++) {
        if (index % i == 0) {
            flag = 1;
        }
    }
    if (flag == 0 && number % (index * index) == 0) {
        console.log("Prime factors of " + number + " is " + index);
    }
}