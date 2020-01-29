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

  /**
   * @param value
   */
  add(value) {
    this.getPosition(this.tree.root, value);
  }

  /**
   * @param root
   * @param value
   */
  getPosition(root, value) {

    if (!root.value) {
      root.value = value;
    } else {

      if (root.value < value) {
        if (!root.right) root.right = new Node(value);
        else {
          this.getPosition(root.right, value);
        }
      } else {
        if (!root.left) root.left = new Node(value);
        else {
          this.getPosition(root.left, value);
        }
      }
    }
  }
  /**
   * @param value
   * @returns boolean
   */
  contains(value) {
    return this.search(this.tree.root, value);
  }
  /**
   * @param root
   * @param value
   * @returns function
   */
  search(root, value) {
    if (root.value === value) return true;
    if (root.value < value) {
      if (!root.right) return false;
      return this.search(root.right, value);
    }
    if (!root.left) return false;
    return this.search(root.left, value);
  }
}

module.exports = BinarySearchTree;