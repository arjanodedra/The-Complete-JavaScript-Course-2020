
//'use strict mode' - Activate Strict Mode
'use strict'
/*
let hasRightsToVote = false;
let isVoted = true;
if (isVoted) hasRightsToVote = true;

if (hasRightsToVote)
    console.log(`Lets Go For Voting`);

// reserved words are not allowed in variable name
let interface = '';



//Functions

function loggerFn(n) {
    console.log(`Hi My name is :-${n}`);
}

loggerFn('Arjan');

function fruitProcessing(apples, barries) {
    const jouice = `Juice With ${apples} apples and ${barries} barries`;
    return jouice;
}

fruitProcessing(3, 2);



//Function Declaration vs Function Expression
// Function Declaration
function calcAge(currentAge) {
    return 2020 - currentAge;
}

//Function Expressions
const calAge2 = function (currentAge) {
    return 2020 - currentAge;
}
console.log(calAge2(1990));

//In above example in case of function declaration we can execute function before declaration
//while in case of Function expression function can not be executed before declaration
// the preferred way is use function expression

// Arrow Functions


//Arrow Function With Single Argument
const calAgeArrow = currentAge => 2020 - currentAge;
calAgeArrow(23);

//Arrow Function With More Then One Argument
const yearsOfRetirement = (personName, dateOfBirth) => {
    return `${personName} Will Be Retired After ${65 - (2020 - dateOfBirth)}`;
}



//Call Function inside Another Function
const cutInPieces = cut => cut * 4;
const fruitProcessing = (apples, oranges) => {
    return `${apples} apples will be cut in ${cutInPieces(apples)} pieces and ${oranges} oranges will be cut in ${cutInPieces(oranges)} pieces`;
}
console.log(fruitProcessing(3, 5));


//Reviewing Functions

const calcYear = function (yearHere) {
    return 2020 - yearHere;
}

const yearsOfRetirement = (personName, dateOfBirth) => {
    const year = calcYear(dateOfBirth);
    const retireMent = 65 - year;

    if (retireMent > 0) {
        return `${personName} Will Be Retired After ${retireMent}`;
    }
    else {
        return `${personName} is retired...!!`;
    }

}


//An Arrays

const friends = ['Mike', 'Jhon', 'Katty'];
const years = Array(1990, 1992, 1976);

friends[friends.length - 1] = 'Áj';
console.log(friends, years);

const mixedMode = Array('Arjan', 'Odedra', 2020 - 1990, years);
console.log(mixedMode[3]);

const calcYear = function (yearHere) {
    return 2020 - yearHere;
};

const ages = [calcYear(years[0]), calcYear(years[1]), calcYear(years[2])];

console.log(ages);

//Array Methods

//1.Push - it add items a end of array
ages.push(calcYear(1985), 55);
console.log(ages);

//2. Pop - It remove items from end of array

ages.pop();
console.log(ages);

//3.Unshift - It adds items at beginig of array
ages.unshift('Arjan', 'Jayu');
console.log(ages);

//4.Shift - It removes items from begining of array no param required
ages.shift();
console.log(ages);

//5.IndexOF - It is used to get position of item in array

const indexOfAt = ages.indexOf('Jayu');
console.log(indexOfAt);

//6. Includes - It will check if items searched is present in array or not and return boolean

const isItemThere = ages.includes(30);
console.log(isItemThere);


//Objects
// The basic difference using Arrays and Objects is that in array we can not give name to 
// item but in object we can provide key value pair

const myDescription = {
    firstName: 'Arjan',
    lastName: "Odedra",
    age: 30,
    yearOfBirth: 1990,
    job: 'Developer',
    employers: ['Mpcost', 'Tm Systems', 'Nascent'],
    hasRightsToVote: true,
    fullName: (firstName, lastName) => {
        return firstName + ' ' + lastName;
    }/* ,
    Here below arrow function will give error because it has not reference to this
    arrow function has not its own this binding so not advisable to use as method
    fullNameThis: () => {
        return this.firstName + ' ' + this.lastName;
    } 
    ,
    get fullNameThis() {
        this.myFullName = this.firstName + ' ' + this.lastName;
        //return this.firstName + ' ' + this.lastName;
        return this.myFullName;
    },
    get calcAge() {
        this.age = 2020 - this.yearOfBirth;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} old ${this.job} has ${this.hasRightsToVote ? 'Yes' : 'No'}`;
    }
}

console.log(myDescription);

//Retrive values from object Dot VS Bracket Notation

console.log(myDescription.firstName);
console.log(myDescription['firstName']);

//const option = prompt('See This Description ...!!');
const option = 'employers';
if (myDescription[option]) {
    console.log(myDescription[option]);
}
else {
    console.log('Wrong Option Please Choose Correct One..!!');
}

console.log(`${myDescription.firstName} Worked With ${myDescription.employers.length} Employeer 
And His Fav Is ${myDescription.employers[1]}`);

console.log(myDescription.fullNameThis);
console.log(myDescription.fullName('Mahesh', 'Bhhat'));
console.log(myDescription.getSummary());


//Loops 

//For loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`${rep} has joined out of 10`);
}

//Looping Arrays

//1.

const employers = ['Mpcost', 'Tm Systems', 'Nascent'];
var types = [];
for (let i = 0; i < employers.length; i++) {
    console.log(`${employers[i]}`);
    types.push(typeof employers[i]);

}
console.log(types);

//2.

const years = [1990, 1996, 1959, 'arjan', 1967, 2006];
const calcYear = function (yearHere) {
    return 2020 - yearHere;
}
let currentAge = [];
for (let i = 0; i < years.length; i++) {
    if (typeof years[i] == 'string') break;
    currentAge.push(calcYear(years[i]));

}
console.log(currentAge);


const years = [
    1990,
    1996,
    1959,
    ['Orange', 'Apple', 'CranBerry'],
    'arjan',
    1967,
    2006
];

let fruits = [];
for (let i = years.length - 1; i >= 0; i--) {

    if (typeof years[i] == 'object') {
        fruits.push(years[i]);

        for (let j = fruits.length; j >= 0; j--) {
            console.log(`${fruits[j]}`);
        }
    }
    console.log(`${years[i]}`);

}
*/
//While Loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lets Start a count ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while (dice !== 6) {
    console.log(`You rolled dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You win..!!`);
















