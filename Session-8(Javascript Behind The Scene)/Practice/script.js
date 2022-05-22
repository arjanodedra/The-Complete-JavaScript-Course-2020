'use strict';
/*
//Scope Chain,Execution Callstack,Scopes
//Javascript Multi paradiam Programing language (imperative and declarative)
//Imperative - how to do (Procedural,OOP)
//Declarative -  what to do(Functional)

//Scopes - Global(var),function/local(block of code inside function),block(if,switch,for)
//let and const are block scoped

const calcAge = function (birthYear) {
  const age = 2030 - birthYear;

  const printAge = () => {
    let output = `${firstName} You are ${age} and birthyear ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = 'See i am accesible...!!';

      //CREATED VARIABLE WITH SAME NAME AS PARENT SCOPE
      const firstName = 'Millan';

      //REASSIGN VALUES TO PARENT VARIABLE
      output = 'NEW OUTPUT';
      const isMillennial = `${firstName} you are millenial`;
      console.log(isMillennial);
      console.log(output);
    }
    console.log(millenial);
  };
  printAge();
  //console.log(firstName);
  return age;
};
let firstName = 'Arjan';
calcAge(1990);
//calcAge(1990);
//let firstName = 'Arjan';
*/

/*
//Hoisting of variables and TDZ(temporary death zone)
*/
/*
console.log(city);
//console.log(name);
//console.log(age);

var city = 'Ahmedabad';
let name = 'Arjan';
const age = 30;

console.log(addNumbers(2, 3));
//console.log(addNumber(2, 3));
//console.log(addNumberArrow(2, 3));

function addNumbers(a, b) {
  return a + b;
}

const addNumber = function (a, b) {
  return a + b;
};

const addNumberArrow = (a, b) => a + b;

//Here numProducts is giving undefined which is falsy value so block executes
if (!numProducts) {
  console.log(numProducts);
  deleteAllProducts();
}
var numProducts = 10;
function deleteAllProducts() {
  console.log(`Woops .. its gone..!!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

//"this" keyword in practice
//console.log(this);
/*
const calAge = function (year) {
  console.log(this);
  return 2037 - year;
};

const calAgeArrow = year => {
  console.log(this);
  return 2037 - year;
};

calAge(1990);
calAgeArrow(1990);

//this keyword is always point to parent object where it is used

const objMy = {
  name: 'arjan',
  lastname: 'odedra',
  fullName: function () {
    console.log(this);
    console.log(this.name + ' ' + this.lastname);
  },
};

objMy.fullName();

const otherObj = {
  name: 'Ave',
};

//so now because for otherObj this is pointed to name of otherObj
//it will read that value instead of objMy's name

//Method borrowing it is used to copy/reuse methods of one object to another

otherObj.fullName = objMy.fullName;
otherObj.fullName();

const objMyGreet = {
  name: 'arjan',
  lastname: 'odedra',
  fullName: function () {
    console.log(this);
    console.log(this.name + ' ' + this.lastname);
  },
  greet: () => {
    console.log(`My name is ${this.firstname}`);
  },
};
objMyGreet.greet();
*/

//Regular Vs Arrow Functions
/*const objMy = {
  firstName: 'arjan',
  lastName: 'odedra',
  year: 1991,
  fullName: function () {
    //console.log(this);
    console.log(this.firstName + ' ' + this.lastName);
  },
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1 : simple function refers to this of global scope not the parent scope
    /* const self = this;
    const isMillennial = function () {
      console.log(self.year);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennial();
 
    //Solution 2 : arrow function inherit its this from parent scope
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
  greet: () => {
    console.log(this);
    console.log(`My name is ${this.firstName}`);
  },
};

objMy.greet();
objMy.calcAge();
*/

//Arguments keyword (available with fn expression and declarations but not in arrow fn)
/*
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addExpArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addExp(4, 5);
//addExpArrow(4, 5);

*/
/*
//Primitives Vs Reference Types

//Primitives Types(for this identifier e.g age is refere to memory address e.g 00ff
//so for below if we assign oldage to age then old age will pointing to age's memory address
//and age=31 will have new memory address assigned to it)

let age = 30;
let oldage = age;
age = 31;

console.log(age);
console.log(oldage);

// Reference Types(in this when we create object there is memory address is created
//for this and then after it keep another reference address value not the real value of object
//so if we mutate it at one place it will change for every occurance of that object)

const me = {
  firstName: 'Arjan',
  age: 30,
};

const friend = me;

console.log('Brfore....');
console.log('Me:', me, 'Friends:', friend);

friend.age = 35;
console.log('After.....');
console.log('Me:', me, 'Friends:', friend);
*/
//Primitives types
let lastName = 'Odedra';
let oldLastName = lastName;
lastName = 'Karavadara';

//Reference Type
console.log('Last Name:- ' + oldLastName);
console.log('Old Lastname:- ' + lastName);

const myMarriage = {
  firstName: 'Arjan',
  lastName: 'Odedra',
  age: 30,
};

const myNewName = myMarriage;
myNewName.firstName = 'Raju';
console.log(myMarriage, myNewName);

//Copying object
const myMarriage1 = {
  firstName: 'Arjan',
  lastName: 'Odedra',
  age: 30,
  family: ['bro', 'sis', 'wife', 'mom'],
};

const myMarriageCopy = Object.assign({}, myMarriage1);
myMarriageCopy.family.push('Anna');
console.log(myMarriage1, myMarriageCopy);
