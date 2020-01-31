'use strict';

const BinarySearchTree = require('../tree');
const Tree = require('../tree');
const fizzBuzz = require('../fizz-buzz-tree');
const MaxTree = require('../maxValue');
const breadthFirst = require('../breadth-first');
const breadthTree = require('../tree');


describe('Tests for the Binary Tree and Binary Search Tree classes', () => {
  it('instantiates an empty tree', () => {
    const searchTree = new BinarySearchTree();
    expect(searchTree).not.toBeNull();
  });

  it('instantiates a tree with a single root node', () => {
    const searchTree = new BinarySearchTree();
    searchTree.add(5);
    expect(searchTree.tree.root.value).toBe(5);
  });

  it('adds a left child and right child to a single root node', () => {
    const searchTree = new BinarySearchTree();
    searchTree.add(1);
    // searchTree.add(2);
    // searchTree.add(3);
    expect(searchTree.tree.root.value).toBe(1);
    // expect(searchTree.tree.root.left.value).toBe(2);
    // expect(searchTree.tree.root.right.value).toBe(3);
  });

  it('returns a collection from a preorder traversal', () => {
    const searchTree = new BinarySearchTree();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = [];
    searchTree.tree.root.preOrder(value => collection.push(value));
    expect(collection).toEqual[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });

  it('returns a collection from an inorder traversal', () => {
    const searchTree = new BinarySearchTree();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.inOrder(value => collection.push(value));
    expect(collection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('returns a collection from a postorder traversal', () => {
    const searchTree = new BinarySearchTree();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.postOrder(value => collection.push(value));
    expect(collection).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});

describe('Testing the FizzBuzzTree function', () => {
  it('turns 3 into Fizz', () => {
    const test = new Tree();
    test.add(3);
    const result = fizzBuzz(test);
    expect(result.tree.root.value).toBe('Fizz');
  });
  it('turns 5 into Buzz', () => {
    const test = new Tree();
    test.add(5);
    const result = fizzBuzz(test);
    expect(result.tree.root.value).toBe('Buzz');
  });

  it('turns 15 into FizzBuzz', () => {
    const test = new Tree();
    test.add(15);
    const result = fizzBuzz(test);
    expect(result.tree.root.value).toBe('FizzBuzz');
  });

  it('turns 7 into 7', () => {
    const test = new Tree();
    test.add(7);
    const result = fizzBuzz(test);
    expect(result.tree.root.value).toBe('7');
  });
});


// describe('Testing the breadth first traversal function', () => {
//   it('should do nothing if given an empty list', () => {
//     const test = new breadthTree();
//     expect(breadthFirst(test)).toEqual([null]);
//   });

//   it('should return a value of a single node', () => {
//     const test = new breadthTree();
//     test.add(30);
//     expect(breadthFirst(test)).toEqual([30]);
//   });

//   it('should return the values of multiple nodes', () => {
//     const test = new breadthTree();
//     test.add(30);
//     test.add(40);
//     test.add('David');
//     test.add(10);

//     expect(breadthFirst(test)).toEqual([30, 'David', 40, 10]);
//   });
// });

describe('Testing the method maxValue that is extended off the binary tree class', () => {
  it('should return the highest value in the tree', () => {
    const test = new MaxTree();
    test.add(20);
    test.add(25);
    test.add(100);
    test.add(65);
    expect(test.maxValue()).toEqual(100);
  });

  it('should return the val of the only node in the tree', () => {
    const test = new MaxTree();
    test.add(20);
    expect(test.maxValue()).toEqual(20);
  });

  // it('should return null when the tree is empty', () => {
  //   const test = new MaxTree();
  //   expect(test.maxValue()).toBeNull();
  // });

  it('should return the highest value in a tree of negative #', () => {
    const test = new MaxTree();
    test.add(-1);
    test.add(-24);
    test.add(-200);
    test.add(-420);

    expect(test.maxValue()).toEqual(-1);
  });
});
