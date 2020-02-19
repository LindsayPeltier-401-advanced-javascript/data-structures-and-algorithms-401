'use strict';

const mergeSort = require('../mergeSort.js');
const mergeFunction = mergeSort.mergeSort;

describe('Testing Merge Sort', () => {

  let array;

  it('sorts an array', () => {
    array = [8, 4, 23, 42, 16, 15];
    let newArray = mergeFunction(array);
    console.log(newArray);
    expect(newArray[0]).toBe(4);
    expect(newArray[1]).toBe(8);
    expect(newArray[2]).toBe(15);
    expect(newArray[3]).toBe(16);
    expect(newArray[4]).toBe(23);
    expect(newArray[5]).toBe(42);
  });

  it('sorts a reverse-sorted array', () => {
    array = [20, 18, 12, 8, 5, -2];
    let newArray = mergeFunction(array);
    console.log(newArray);
    expect(newArray[0]).toBe(-2);
    expect(newArray[1]).toBe(5);
    expect(newArray[2]).toBe(8);
    expect(newArray[3]).toBe(12);
    expect(newArray[4]).toBe(18);
    expect(newArray[5]).toBe(20);
  });


  it('sorts a nearly-sorted array', () => {
    array = [2, 3, 5, 7, 13, 11];
    let newArray = mergeFunction(array);
    console.log(newArray);
    expect(newArray[0]).toBe(2);
    expect(newArray[1]).toBe(3);
    expect(newArray[2]).toBe(5);
    expect(newArray[3]).toBe(7);
    expect(newArray[4]).toBe(11);
    expect(newArray[5]).toBe(13);
  });

});