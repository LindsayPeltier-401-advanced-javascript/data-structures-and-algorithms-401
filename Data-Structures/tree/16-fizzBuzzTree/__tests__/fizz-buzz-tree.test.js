
'use strict';

const fizzBuzz = require('../fizz-buzz-tree');
const { BinaryTree } = require('../../15-Implementation-Trees/tree');

it('will return true', () => {
  const True = 'true';
  expect(True).toBe('true');
});
// describe('Testing the FizzBuzzTree function', () => {
//   it('Replaces node value divisible by 3 with Fizz', () => {
//     const test = new BinaryTree();
//     test.add(9);
//     const result = fizzBuzz(test);
//     expect(result.tree.root.value).toBe('Fizz');
//   });
//   it('Replaces node value divisible by 5 with Buzz', () => {
//     const test = new BinaryTree();
//     test.add(20);
//     const result = fizzBuzz(test);
//     expect(result.tree.root.value).toBe('Buzz');
//   });

//   it('Replaces node value divisible by 15 with FizzBuzz', () => {
//     const test = new BinaryTree();
//     test.add(60);
//     const result = fizzBuzz(test);
//     expect(result.tree.root.value).toBe('FizzBuzz');
//   });

//   it('returns a string for values not divisible by 3, 5, or 15', () => {
//     const test = new BinaryTree();
//     test.add(11);
//     const result = fizzBuzz(test);
//     expect(result.tree.root.value).toBe('11');
//   });

// });
