'use strict';

const binarySearch = require('../array-binary-search.js');

describe('binarySearch functions works', () => {
  const array = [4,8,15,16,23,42,55,66,77];
  it('will return the index of the matching value in the middle index position', () => {
    expect(binarySearch(array, 23)).toBe(4);
  });
  it('will return the index of the matching value if the value is toward the start position', () => {
    expect(binarySearch(array, 4)).toBe(0);
    expect(binarySearch(array, 8)).toBe(1);
    expect(binarySearch(array, 15)).toBe(2);
    expect(binarySearch(array, 16)).toBe(3);
  });
  it('should return the correct index of the matching value if the value is toward the end of the array', () => {
    expect(binarySearch(array, 42)).toBe(5);
    expect(binarySearch(array, 55)).toBe(6);
    expect(binarySearch(array, 66)).toBe(7);
    expect(binarySearch(array, 77)).toBe(8);
  });
  // it should return -1 if there is no matching value
  it('will return -1 if there is not a matching value', () => {
    expect(binarySearch(array, 11)).toBe(-1);
  });
});