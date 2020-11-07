const IS_HEAD=0;
const IS_TAIL=1;
let coinFlip=Math.floor(Math.random()*10)%2;
if (coinFlip==IS_HEAD) {
    console.log("Head.");
} else {
    console.log("Tail.");
}