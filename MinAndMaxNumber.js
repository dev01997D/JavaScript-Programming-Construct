let numOne = Math.floor(Math.random() * 1000);
let numTwo = Math.floor(Math.random() * 1000);
let numThree = Math.floor(Math.random() * 1000);
let min = numOne;
let max = numOne;
console.log("numOne :" + numOne + "\tnumTwo : " + numTwo + "\tnumThree : " + numThree);
if (numTwo > numOne && numTwo > numThree) {
    console.log("Maximum : " + numTwo);
    if (numOne < numThree) {
        console.log("Minimum : " + numOne);
    } else {
        console.log("Minimum : " + numThree);
    }
} else if (numThree > numOne && numThree > numTwo) {
    console.log("Maximum : " + numThree);
    if (numTwo < numOne) {
        console.log("Minimum : " + numTwo);
    } else {
        console.log("Minimum : " + numOne);
    }
}
else {
    console.log("Maximum : " + numOne);
    if (numTwo < numThree) {
        console.log("Minimum : " + numTwo);
    } else {
        console.log("Minimum : " + numThree);
    }
}
