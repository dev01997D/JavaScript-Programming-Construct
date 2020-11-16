const prompt = require('prompt-sync')();
let startMoney = 100;
const IS_WINNER = 0;
const IS_LOOSER = 1;
while (startMoney != 200 && startMoney != 0) {
    let transaction = Math.floor(Math.random() * 10) % 2;
    if (transaction == IS_WINNER) {
        startMoney++;
    } else if (transaction == IS_LOOSER){
        startMoney--;
    }
}
if (startMoney == 0) { 
    console.log("Lost all Money !! Remaining money is " + startMoney); 
}
else{
    console.log("Won Money !! Total money is " + startMoney);
}