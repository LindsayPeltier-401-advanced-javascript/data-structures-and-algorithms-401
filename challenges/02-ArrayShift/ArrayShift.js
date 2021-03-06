'use strict';

//Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray(array, value) {
  const newArray = [];
  let midpoint = array.length / 2;

  if (array.length % 2 !== 0) {
    midpoint = midpoint + 0.5;
  }

  for (let i = 0; i < midpoint; i++) {
    newArray[i] = array[i];
  }

  newArray[newArray.length] = value;

  for (let i = midpoint; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  return newArray;
}

console.log(insertShiftArray([2, 4, 6, 8], 0));


function removeShiftArray(array) {
  let newArray = [];

  let midpoint = array.length / 2;

  if (array.length % 2 !== 0) {
    midpoint = midpoint - 0.5;
  }

  for (let i = 0; i < array.length - 1; i++) {
    i < midpoint ? (newArray[i] = array[i]) : (newArray[i] = array[i + 1]);
  }
  return newArray;
}

console.log(removeShiftArray([2, 4, 6, 8, 10]));

/*const myfuncsObj = {
  insertShiftArray: insertShiftArray,
  removeShiftArray: removeShiftArray
};*/

module.exports = insertShiftArray;
