'use strict';
//Array Destructuring
/*
let arr = [2, 3, 4];

let [x, y, z] = arr;

console.log(x, y, z);

const restaurant = {
  name: 'Inidana Curries',
  starterMenu: ['Onion Rings', 'Waffle', 'Black Coffee'],
  mainMenu: ['Mongolian Rice', 'Thai Curry', 'Rossetti'],
  mealCategory: ['Vegetarian', 'Non-Vegetarian', 'Chines'],
  orders: function (starterCource, mainCource) {
    return [
      this.mainMenu[mainCource],
      this.starterMenu[starterCource],
    ];
  },
};

let [veg, nonveg] = restaurant.mealCategory;

//Switching the variables - traditional way
 let temp = veg;
veg = nonveg;
nonveg = temp;

console.log(veg, nonveg); 

//Switching the variables - destructuring way

[veg, nonveg] = [nonveg, veg];

console.log(veg, nonveg);

//Destructuring from method
let [starterCource, mainCource] = restaurant.orders(2, 0);
console.log(mainCource, starterCource);

//Destructuring Multi dimensional array

let xarr = [2, 3, [5, 6]];

let [a, , [b, c]] = xarr;

console.log(a, b, c);

//Default values of destructuring array

let [m = 1, n = 1, o = 1] = [6, 7];
console.log(m, n, o);
*/

//Object Destructuring
/*
const restaurant = {
  name: 'Inidana Curries',
  starterMenu: ['Onion Rings', 'Waffle', 'Black Coffee'],
  mainMenu: ['Mongolian Rice', 'Thai Curry', 'Rossetti'],
  mealCategory: ['Vegetarian', 'Non-Vegetarian', 'Chines'],
  openingHours: {
    Mon: { open: '10AM', close: '10PM' },
    Tue: { open: '10AM', close: '10PM' },
    Wed: { open: '10AM', close: '10PM' },
    Thu: { open: '10AM', close: '10PM' },
    Fri: { open: '10AM', close: '10PM' },
    Sat: { open: '10AM', close: '11PM' },
    Sun: { open: '10AM', close: '11PM' },
  },
  orders: function (starterCource, mainCource) {
    return [
      this.mainMenu[mainCource],
      this.starterMenu[starterCource],
    ];
  },
  orderDelivery: function ({
    time = '3 PM',
    address,
    stindex = 0,
    endidx = 0,
  }) {
    console.log(`Order Details:- 
        ${this.starterMenu[stindex]} and ${this.mainMenu[endidx]}
        will be delivered at ${time} to ${address}`);
  },
};

//Calling Function with object as argument
//restaurant.orderDelivery({
//  time: '12:30 PM',
//  address: 'Shapath 4,Nascent Info',
// starterIndex: 2,
// menuIndex: 1,
//});

restaurant.orderDelivery({
  time: '12:30 PM',
  address: 'Shapath 4,Nascent Info',
  stindex: 2,
  endidx: 1,
});

//console.log(restaurant.openingHours);

//Destructuring Object
const { name, mealCategory, openingHours } = restaurant;
console.log(name, mealCategory, openingHours);

//Destructuring Object and give a new key name

const {
  name: restaurantName,
  starterMenu: starterCource,
  mainMenu: mainCource,
  openingHours: timings,
} = restaurant;

console.log(restaurantName, starterCource, timings);

//Destructuring with assign Default values

const {
  opening = [],
  mealCategory: category,
  main = [],
} = restaurant;

console.log(opening, category, main);

//Mutating values

let a = 123;
let b = 156;

let obj = { a: 12, b: 34, c: 43 };
({ a, b } = obj);

console.log(a, b);

//DeStructuring inner object of an object and create different variable name

const {
  Mon: { open: o, close: c },
} = restaurant.openingHours;

console.log(o, c);

*/

//Spread Operator (...) because on right hand side of = operator

// Array
//e.g  let [a,b,c] = array[1,2,3]
//output - a=1 b=2 c=3

// Object
// e.g let {a,b,c} = {a:1,b:2,c:3}
// output a=1 b=2 c=3

/*const restaurant = {
  name: 'Inidana Curries',
  starterMenu: ['Onion Rings', 'Waffle', 'Black Coffee'],
  mainMenu: ['Mongolian Rice', 'Thai Curry', 'Rossetti'],
  mealCategory: ['Vegetarian', 'Non-Vegetarian', 'Chines'],
  openingHours: {
    Mon: { open: '10AM', close: '10PM' },
    Tue: { open: '10AM', close: '10PM' },
    Wed: { open: '10AM', close: '10PM' },
    Thu: { open: '10AM', close: '10PM' },
    Fri: { open: '10AM', close: '10PM' },
    Sat: { open: '10AM', close: '11PM' },
    Sun: { open: '10AM', close: '11PM' },
  },
  orders: function (starterCource, mainCource) {
    return [
      this.mainMenu[mainCource],
      this.starterMenu[starterCource],
    ];
  },
  orderDelivery: function ({
    time = '3 PM',
    address,
    stindex = 0,
    endidx = 0,
  }) {
    console.log(`Order Details:- 
          ${this.starterMenu[stindex]} and ${this.mainMenu[endidx]}
          will be delivered at ${time} to ${address}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your food with ${ing1},${ing2} and ${ing3}`);
  },
};

//ARRAY EXAMPLE

const arr = [2, 3, 4];
const newArr = [1, ...arr];

console.log(...newArr);

//Adding element to exiting array

const newMenu = [...restaurant.mainMenu, 'Noodles'];

console.log(newMenu);

//Combine two array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

//const ings = [
//  prompt(`Add ingredients1:`),
//  prompt(`Add ingredients2:`),
// prompt(`Add ingredients3:`),
//];

//restaurant.orderPasta(...ings);
//console.log(ings);


//OBJECT EXAMPLE

//Adding new properties to object
const newRestaurant = {
  ...restaurant,
  foundedIn: 1981,
  founder: 'JB Bosky',
  Cities: ['Rajkot', 'Ahmedabad', 'Surat', 'Vadodara'],
};
console.log(newRestaurant);

//Make a copy of object and change values of some of properties

const newRestaurantCopy = { ...newRestaurant };

newRestaurantCopy.founder = 'Rey Jhonson';

console.log(newRestaurant.founder);
console.log(newRestaurantCopy.founder);



//Rest assignment Operator because on left hand side of assignment operator
const [a, , b, ...others] = [1, 2, 3, 4, 5, 56, 6];
console.log(a, b, others);

const restaurant = {
  name: 'Inidana Curries',
  starterMenu: ['Onion Rings', 'Waffle', 'Black Coffee'],
  mainMenu: ['Mongolian Rice', 'Thai Curry', 'Rossetti'],
  mealCategory: ['Vegetarian', 'Non-Vegetarian', 'Chines'],
  openingHours: {
    Mon: { open: '10AM', close: '10PM' },
    Tue: { open: '10AM', close: '10PM' },
    Wed: { open: '10AM', close: '10PM' },
    Thu: { open: '10AM', close: '10PM' },
    Fri: { open: '10AM', close: '10PM' },
    Sat: { open: '10AM', close: '11PM' },
    Sun: { open: '10AM', close: '11PM' },
  },
  orders: function (starterCource, mainCource) {
    return [
      this.mainMenu[mainCource],
      this.starterMenu[starterCource],
    ];
  },
  orderDelivery: function ({
    time = '3 PM',
    address,
    stindex = 0,
    endidx = 0,
  }) {
    console.log(`Order Details:- 
            ${this.starterMenu[stindex]} and ${this.mainMenu[endidx]}
            will be delivered at ${time} to ${address}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your food with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function (vegg, ...otherVegg) {
    console.log(vegg, otherVegg);
  },
};

//ARRAY REST OPERATOR
const [onionring, waffle, ...othersMenu] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(onionring, waffle, othersMenu);

//OBJECT REST OPERATOR
const {
  Sat: weekendsSat,
  Sun: weekendsSun,
  ...otherDays
} = restaurant.openingHours;

console.log(weekendsSat, weekendsSun, otherDays);

//FUNCTION REST OPERATOR - collect values and convert it to array argument

const add = (...values) => {
  console.log(values);
  return values.reduce((a, b) => a + b, 0);
};

console.log(add(2, 3, 4));
console.log(add(3, 5, 6, 7, 8));
console.log(add(3, 5, 6, 7, 8, 89, 89));

restaurant.orderPizza(
  'mahrooms',
  'spinach',
  'aspargus',
  'baby tomcato',
  'chilli',
);

//Difference between spread and rest is that spread will unnest array and convert it into single values
//where rest will collect single values and convert it into array. we use rest for variable name and
//spread for variable values

*/

//Short Circuiting (& and ||)

//The logical operators & and || can be used to return any data type not
// only boolean values based on conditions evaluated here the truthy value will return if found first
//and no further evaluation will happen but falsy value like(undefined,null,0,NaN) etc will be ignored
//

const restaurant = {
  name: 'Inidana Curries',
  starterMenu: ['Onion Rings', 'Waffle', 'Black Coffee'],
  mainMenu: ['Mongolian Rice', 'Thai Curry', 'Rossetti'],
  mealCategory: ['Vegetarian', 'Non-Vegetarian', 'Chines'],
  openingHours: {
    Mon: { open: '10AM', close: '10PM' },
    Tue: { open: '10AM', close: '10PM' },
    Wed: { open: '10AM', close: '10PM' },
    Thu: { open: '10AM', close: '10PM' },
    Fri: { open: '10AM', close: '10PM' },
    Sat: { open: '10AM', close: '11PM' },
    Sun: { open: '10AM', close: '11PM' },
  },
  orders: function (starterCource, mainCource) {
    return [
      this.mainMenu[mainCource],
      this.starterMenu[starterCource],
    ];
  },
  orderDelivery: function ({
    time = '3 PM',
    address,
    stindex = 0,
    endidx = 0,
  }) {
    console.log(`Order Details:- 
            ${this.starterMenu[stindex]} and ${this.mainMenu[endidx]}
            will be delivered at ${time} to ${address}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your food with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function (vegg, ...otherVegg) {
    console.log(vegg, otherVegg);
  },
};

//OR Short Circuit - It will evaluate the expression and return a value immediately if found truthy values in expression
//otherwise it will evaluate whole expression and give result

console.log(
  '-------------------OR Short Circuit------------------------------',
);
console.log(3 || 'Arjan');

restaurant.numGuest = 0;

const guestCount = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guestCount);

const guestCountNew = restaurant.guestCount || 10;
console.log(guestCount);

//And Short Circuit - It will evaluate the expression and if found falsy value then return immediately
//otherwise it will keep on evaluate and give result then after

console.log(
  '-------------------AND Short Circuit------------------------------',
);

console.log('Hello' && 0 && null && undefined && NaN && 10);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mashroom', 'spinch');
}
restaurant.orderPizza('mashroom', 'spinch');
