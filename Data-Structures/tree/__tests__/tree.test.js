'use strict';

const BinarySearchTree = require('../tree');

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

  it('can successfully return a collection from a preorder traversal', () => {
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