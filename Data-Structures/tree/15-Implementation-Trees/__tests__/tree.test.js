'use strict';

const BinarySearchTree = require('../tree');

// Instantiate an empty tree
describe('Binary Tree and Binary Search Tree classes', () => {
  it('instantiates an empty tree', () => {
    const searchTree = new BinarySearchTree();
    expect(searchTree).not.toBeNull();
  });

  // Instantiate a tree with a single root node
  // it('instantiates a tree with a single root node', () => {
  //   const searchTree = new BinarySearchTree();
  //   searchTree.add(5);
  //   expect(searchTree.tree.root.val).toBe(5);
  // });

  // Add a left child and right child to a single root node
  // it('adds a left child and right child to a single root node', () => {
  //   const searchTree = new BinarySearchTree();
  //   searchTree.add(10);
  //   searchTree.add(20);
  //   searchTree.add(30);
  //   expect(searchTree.tree.root.left.value).toBe(20);
  //   expect(searchTree.tree.root.right.value).toBe(30);
  // });

  // Return a collection from a preorder traversal
  // it('returns a collection from a preorder traversal', () => {
  //   const searchTree = new BinarySearchTree();
  //   for (let i = 0; i < 11; i++) searchTree.add(i);
  //   const collection = new Array();
  //   searchTree.tree.root.preOrder(value => collection.push(value));
  //   expect(collection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // });

  // Return a collection from an inorder traversal
  it('returns a collection from an inorder traversal', () => {
    const searchTree = new BinarySearchTree();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.inOrder(value => collection.push(value));
    expect(collection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  // Return a collection from a postorder traversal
  it('returns a collection from a postorder traversal', () => {
    const searchTree = new BinarySearchTree();
    for (let i = 0; i < 11; i++) searchTree.add(i);
    const collection = new Array();
    searchTree.tree.root.postOrder(value => collection.push(value));
    expect(collection).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
