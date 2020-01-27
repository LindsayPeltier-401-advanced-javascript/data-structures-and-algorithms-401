'use strict';

const BinarySearchTree = require('../tree');

// Instantiate an empty tree
// Instantiate a tree with a single root node

describe('Binary Tree and Binary Search Tree classes', () => {
  it('instantiates an empty tree', () => {
    const searchTree = new BinarySearchTree();
    expect(searchTree).not.toBeNull();
  });

  it('instantiates a tree with a single root node', () => {
    const searchTree = new BinarySearchTree();
    searchTree.add(5);
    expect(searchTree.tree.root.val).toBe(5);
  });
});
