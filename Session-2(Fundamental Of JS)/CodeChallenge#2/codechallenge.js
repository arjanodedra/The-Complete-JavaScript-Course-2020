'use strict'

const calcTip = amount => {

    return amount > 0 && amount <= 300 ? amount * 15 / 100 : amount * 20 / 100;
}

const bill = [125, 555, 44];
const tip = [calcTip(125), calcTip(555), calcTip(44)];
const total = [calcTip(125) + bill[0], calcTip(555) + bill[1], calcTip(44) + bill[2]];

console.log(`Bills Array ${bill}`);
console.log(`Tip Array ${tip}`);
console.log(`Total Array ${total}`);