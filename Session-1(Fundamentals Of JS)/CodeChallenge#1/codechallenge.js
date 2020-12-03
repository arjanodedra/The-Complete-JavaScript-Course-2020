let markHeight, jhonHeight, markWeight, jhonWeight;
markHeight = 1.88;
markWeight = 95;
jhonHeight = 1.76;
jhonWeight = 85;

let markBMI = markWeight / markHeight ** 2;
let jhonBMI = jhonWeight / jhonHeight ** 2;
let markHigherBMI = (markBMI >= jhonBMI);

console.log(markBMI);
console.log(jhonBMI);
console.log(markHigherBMI);

