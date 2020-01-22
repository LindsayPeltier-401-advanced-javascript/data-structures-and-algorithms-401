'use strict';

const insertShiftArray = require('../ArrayShift');
//const removeShiftArray = require('../ArrayShift');

//Proof of Life Test
describe('proof of live', () => {
  it('lives', () => {
    expect(1).toEqual(1);
  });
});

//Happy Path
describe('insertShiftArray works correctly', () => {
  it('returns an array with the new value in the middle index position', () => {
    expect(insertShiftArray([2, 4, 6, 8], 0)).toStrictEqual([2, 4, 0, 6, 8]);
  });
  it('works with an array with odd number of indexes', () => {
    expect(insertShiftArray([2, 4, 6, 8, 10], 0)).toStrictEqual([
      2,
      4,
      6,
      0,
      8,
      10
    ]);
  });
  it('should not insert a value in any other index position but the middle', () => {
    expect(insertShiftArray([2, 4, 6, 8], 0)).not.toBe([0, 2, 4, 6, 8]);
    expect(insertShiftArray([2, 4, 6, 8], 0)).not.toBe([2, 0, 4, 6, 8]);
    expect(insertShiftArray([2, 4, 6, 8], 0)).not.toBe([2, 4, 6, 0, 8]);
    expect(insertShiftArray([2, 4, 6, 8], 0)).not.toBe([2, 4, 6, 8, 0]);
  });
});

/* Stretch Goal Testing 

//Happy Path

describe('removeShiftArray works correctly', () => {
  it('returns an array with the middle index position removed, 1 less index', () => {
    expect(removeShiftArray([2, 4, 6, 8, 10])).toStrictEqual([2, 4, 8, 10]);
  });
}); 

//Expected Failures
*/
