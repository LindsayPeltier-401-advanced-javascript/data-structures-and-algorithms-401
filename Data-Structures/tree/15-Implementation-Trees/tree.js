'use strict';

/**
 * Node
 * @class 
 */
class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * @param callback
   */
  preOrder(callback) {
    callback(this.value);
    if (this.left) this.left.preorder(callback);
    if (this.right) this.right.preorder(callback);
  }

  /**
   * @param callback
   */
  postOrder(callback) {
    if (this.left) this.left.postOrder(callback);
    if (this.right) this.right.postOrder(callback);
    callback(this.value);
  }

  /**
   * @param callback
   */
  inOrder(callback) {
    if (this.left) this.left.inOrder(callback);
    callback(this.value);
    if (this.right) this.right.inOrder(callback);
  }
}

/**
 * Binary Tree
 * @class
 */
class BinaryTree {
  constructor() {
    this.root = new Node();
  }
}

/**
 * Binary Search Tree
 * @class
 */
class BinarySearchTree {
  constructor(tree = new BinaryTree()) {
    this.tree = tree;
  }



}
