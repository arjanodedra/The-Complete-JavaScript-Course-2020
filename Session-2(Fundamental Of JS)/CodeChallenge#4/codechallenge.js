'use strict'
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
let totalBill = [];

const arrSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        sum += arr[i];
        console.log(sum);
    }
    return sum;

}

const calcAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

const calcTip = amount => {
    return amount > 0 && amount <= 300 ? amount * 15 / 100 : amount * 20 / 100;
}

for (let i = 0; i <= bills.length - 1; i++) {
    tip.push(calcTip(bills[i]));
    totalBill.push(calcTip(bills[i]) + bills[i]);

}

console.log(`Tip : ${tip}`);
console.log(`Bill : ${totalBill}`);
console.log(`Total Amount : ${arrSum(bills)}`);
console.log(`Avg Amount: ${calcAverage(bills)}`);
