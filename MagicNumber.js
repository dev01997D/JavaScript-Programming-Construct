const prompt = require('prompt-sync')();
let number = Math.floor(Math.random() * 101);
console.log(number);
let guess = -1;
let start = 100;
while (guess != number) {
    let temp = parseInt(start / 2);
    console.log(guess);
    console.log(temp);
    if (guess == number || guess==temp) {
        console.log("Magic number is : " + guess);
    }
    let checker = prompt("Number is greater than " + temp + " ?");
    if (checker == "y" || checker == "Y") {
        start = parseInt(start * 1.5);
        guess = Math.floor(Math.random() * (100 - 50 + 1) + 50);
    }
    else {
        start = parseInt(start / 2);
        guess = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    }
}