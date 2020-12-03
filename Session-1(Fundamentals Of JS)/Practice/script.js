/*
//Basic of javascript
//-----------------------------------------------------
let me = 'hi';
if (me === 'hi')
    console.log(me);
else
    console.log('some other script');
//-------------------------------------------------

//Variables and Values
// variable should write in camelcase and reserved words and special character
// excluding $ and _ other should not contain in variable name

//---------------------------------------------------
let myName = 'arjan';
let mySurename = 'Odedra';
let $be4me = 'b4me';
let _underscore = 'underscore';

console.log(myName);
console.log(mySurename);
console.log($be4me)
console.log(_underscore);

//---------------------------------------------------


//Data Types
//---------------------------------------------------

let isThisGood = true;

console.log(isThisGood);
console.log(typeof isThisGood);
console.log(typeof 56);
console.log(typeof "hi");

isThisGood = 'Hi';
console.log(typeof isThisGood);

let year;
console.log(year)
console.log(typeof year);

year = 2013;
console.log(typeof year);

console.log(typeof null);



//Let,var,const where to use

let age = 23;
age = 26;

console.log(age);

const gender = 'Male';
console.log(gender);

var myName = 'Arajn';

console.log(myName);


//Operators in details

let myAge = 1990;

console.log(2020 - myAge);
console.log(2040 - myAge);

//console.log(myAge = 1978, 2035 - myAge / 20, 3 ** 3);
let x = 25 + 10;
x += 32; // x = x + 32
x *= 2; // x = x * 2
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
let now = 2020;
console.log(2020 - myAge > 55);
console.log(2020 - myAge == 30);
let isFullYear = 1990 - now == 2020 - now;

console.log(isFullYear);


//String Operations And Template Literals

let nameOfPerson = 'Arjan';
let occupation = 'Programer';
let currentYear = 2020;
let birthYear = 2014;

console.log('I Am ' + nameOfPerson + ' And My Occupation is '
    + occupation + ' Having ' + (currentYear - birthYear) + ' Years of Experiance..');
console.log('\n');
//Template string literal
let job = `I am ${nameOfPerson} \n`;
console.log(job);

// now using template literal new line is added on enter which is not possible in above
console.log(`I Am
Arjan Odedra and doing cool things
Now a days..!!`);



//IF..Else Statements
let age = 14;
let isEligible = age >= 18;

if (isEligible) {
    console.log('Go Get it You Are Old Enough..');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Arjan has still ${yearsLeft} to go fore licence`);
}

//Type Conversion and coercion
let inputNumber = '1990';
console.log(inputNumber + 18, Number(inputNumber) + 18);
console.log(Number('arjan'));
console.log(typeof String(34));

//Type Coercion
console.log('25' - '5' - '15');
console.log('25' / 4);
console.log('11' + 3 - 4);
console.log('15' * 3);


//Truthy and Falsy values (five falsy - value 0, '' , null , undefined, NaN)

console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean('Arjan'))
console.log(Boolean({}));

const salary = 100;
if (salary) {
    console.log("Don't do it for free ..!!");
}
else {
    console.log(`Get the salary..!!`);
}


//Equality Operator "=" vs "==" vs "==="

//const salary = 80000;
let mySalary = '60000';
let salaryToBe = prompt('what is your dream salary');

if (salaryToBe > mySalary) {
    console.log(`Yes This Is What I Want ...!!`);
}
else if (salaryToBe === mySalary) {
    console.log(`Not much happy on this`);
}
else {
    console.log(`Are you kiding me...😉 No..!!`);
}


//Logical Operator

let hasDrivingLicence = true;
let hasGoodVision = true;
let isTired = false;
let age = 15;
console.log(hasDrivingLicence && hasGoodVision);
console.log(hasDrivingLicence || hasGoodVision);
console.log(hasDrivingLicence != hasGoodVision);

if (hasGoodVision && hasDrivingLicence && !isTired) {
    console.log(`Yes she can drive`);
}
else {
    console.log(`Someone else should drive...!!`);
}


//Switch Case
let selectDay = prompt(`Select Day..`);

switch (selectDay) {
    case 'Sunday':
        console.log(`Ohh nothing to do today it's holiday..!!`);
        break;
    case 'Monday':
        console.log(`Lets Start work on ${selectDay}..!!`);
        break;
    case 'Tuesday':
        console.log(`Lets Start work on ${selectDay}..!!`);
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log(`There is more work on ${selectDay}..!!`);
        break;
    case 'Friday':
        console.log(`Lets Start work on ${selectDay}..!!`);
        break
    case 'Saturday':
        console.log(`Lets Start work on ${selectDay}..!!`);
        break;
    default:
        console.log(`${selectDay} is invalid option..!!`);
        break;
}



//Ternory Operator

//age = 35;
age = 25;
//age >= 18 ? console.log(`I am old enough..!!`) : console.log(`Not yet ..!!!`);

let drink = age >= 18 ? 'Wine🍷' : 'Water 🍹';
//console.log(drink);

console.log(`I Want To Drink ${age >= 18 ? 'Wine🍷' : 'Water 🍹'}`);
*/









