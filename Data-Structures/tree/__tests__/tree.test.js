'use strict';

const BinarySearchTree = require('../tree');
const Tree = require('../tree');
const fizzBuzz = require('../fizz-buzz-tree');

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

