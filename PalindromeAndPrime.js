const prompt = require('prompt-sync')();
function primeAndPalindrome(number) {
    let flag = 0;
    for (let index = 2; index <= number / 2; index++) {
        if (number % index == 0) {
            flag = 1;
        }
    }
    let check = palindrome(number);
    if (flag == 0 && check == 0) {
        console.log("prime number and Palindrome.");
    }
    else if (flag == 0 && check == 1) {
        console.log("Prime number but not palindrome");
    }
    else if (flag == 1 && check == 0) {
        console.log("Not prime but palindrome.");
    }
    else {
        console.log("neither prime nor palindrome")
    }
}
function palindrome(number) {
    let reverse = 0;
    let temp = number;
    while (number > 0) {
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = parseInt(number / 10);
    }
    if (temp == reverse) {
        return 0;
    }
    else {
        return 1;
    }
}
let number = prompt("Enter a number? ");
primeAndPalindrome(number);