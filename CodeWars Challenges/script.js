//Print Character Value instead String
/*
==================================================================================================
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
===============================================================================================
*/

function alphabetPosition(text) {
  let alphaString = '';
  let str = text.replace(/[^A-Za-z]+/g, '');
  console.log(str);
  for (let i = 0; i <= str.length; i++) {
    let code = str.toUpperCase().charCodeAt(i);
    if (code > 64) {
      alphaString += code - 64 + ' ';
    }
  }
  return alphaString.trim();
}

//Even Odd Array Check
/*
===============================================================================================
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
================================================================================================
*/
const checkArray = arr => {
  let isEven = num => num % 2 === 0;
  let oddArr = [];
  let evenArr = [];

  for (item of arr) {
    if (parseInt(item) == item) {
      isEven(item) ? evenArr.push(item) : oddArr.push(item);
    }
  }

  let printArr = evenArr.length < oddArr.length ? evenArr : oddArr;
  return printArr[0];
};

checkArray([2, 4, 0, 100, 4, 11, 2602, 36]);

//Min and Max Temprature from array
/*
Find a amplitude value from array of values which is coming from sensors and having some errors

Example : checkAmplitude([23,34,56,21,'err',true,65],[78,'errr'])

*/
//let arr = [];
//const minArr = arr => arr.reduce((a, b) => Math.max(a, b));
//const maxArr = arr => arr.reduce((a, b) => Math.min(a, b));

const checkAmplitude = (arr1, arr2) => {
  let arr = arr1.concat(arr2);
  let maxArr = arr[0];
  let minArr = arr[0];

  for (item of arr) {
    if (typeof item === 'number') {
      if (item > maxArr) maxArr = item;
      if (item < minArr) minArr = item;
    }
  }
  return {
    maxTemp: maxArr,
    minTemp: minArr,
    ampVal: maxArr - minArr,
  };
};
