let markHeight, jhonHeight, markWeight, jhonWeight;
markHeight = 1.69;
markWeight = 78;
jhonHeight = 1.92;
jhonWeight = 95;

let markBMI = markWeight / markHeight ** 2;
let jhonBMI = jhonWeight / jhonHeight ** 2;
let markHigherBMI = (markBMI >= jhonBMI);

console.log(markBMI);
console.log(jhonBMI);
console.log(markHigherBMI);

if (markBMI > jhonBMI) {
    console.log(`Mark BMI(${markBMI}) is Greater Then Jhon BMI(${jhonBMI})`);
}
else {
    console.log(`Mark BMI(${markBMI}) is less Then Jhon BMI(${jhonBMI})`);
}

