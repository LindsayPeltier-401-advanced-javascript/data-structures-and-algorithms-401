'use strict';

let quickSort = require('../quickSort');

describe('passing test', () => {
  it('will pass with true', () => {
    expect(true).toEqual(true);
  });

  it('should throw an error if an element is not number or cant be coerced into a number', () => {
    let array = [9, 8, 'Hello!!!'];
    expect(() => {
      quickSort(array, 0, array.length - 1)(array).toThrow();
    });
  });
});

describe('quick sort test ', () => {

  it('should sort an unsorted array', () => {
    let testArray = [8, 4, 23, 42, 16, 15];

    quickSort(testArray, 0, testArray.length - 1);
    console.log(testArray);
    expect(testArray[0]).toBe(4);
    expect(testArray[1]).toBe(8);
    expect(testArray[2]).toBe(15);
    expect(testArray[3]).toBe(16);
    expect(testArray[4]).toBe(23);
    expect(testArray[5]).toBe(42);
  });

  it('should sort an unsorted array', () => {
    let testArray = [8, 4, 23, 42, 16, 15];

    quickSort(testArray, 0, testArray.length - 1);
    console.log(testArray);
    expect(testArray[0]).toBe(4);
    expect(testArray[1]).toBe(8);
    expect(testArray[2]).toBe(15);
    expect(testArray[3]).toBe(16);
    expect(testArray[4]).toBe(23);
    expect(testArray[5]).toBe(42);
  });

  it('should sort an unsorted array', () => {
    let testArray = [8, 4, 23, 42, 16, 15];

    quickSort(testArray, 0, testArray.length - 1);
    console.log(testArray);
    expect(testArray[0]).toBe(4);
    expect(testArray[1]).toBe(8);
    expect(testArray[2]).toBe(15);
    expect(testArray[3]).toBe(16);
    expect(testArray[4]).toBe(23);
    expect(testArray[5]).toBe(42);
  });

});