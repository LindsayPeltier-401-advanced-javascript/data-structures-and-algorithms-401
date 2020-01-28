
'use strict';

const fizzBuzz = require('../fizz-buzz-tree');
const { BinarySearchTree } = require('../../15-Implementation-Trees/tree');

describe('Fizz Buzz Tree', () => {

  let BST;

  beforeEach(() => {
    BST = new BinarySearchTree(12);
  });

  it('Replaces node value divisible by 3 with Fizz', () => {
    let fizz = fizzBuzz(BST);
    expect(fizz.root.val).toBe('Fizz');
  });

  it('Replaces node value divisible by 5 with Buzz', () => {
    BST.add(50);
    let fizz = fizzBuzz(BST);
    expect(fizz.root.right.val).toBe('Buzz');
  });

  it('Replaces node value divisible by 15 with FizzBuzz', () => {
    let FizzTree = new BinarySearchTree(45);
    let fizz = fizzBuzz(FizzTree);
    expect(fizz.root.val).toBe('FizzBuzz');
  });

  it('Returns an error with no tree argument', () => {
    let fizz = fizzBuzz();
    expect(fizz).toBe('No tree value');
  });
});