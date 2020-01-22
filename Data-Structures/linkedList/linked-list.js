'use strict';

/**
 * @class Node
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @class LinkedList
 */
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   *  Creates and inserts a new node into the linked list
   * @param {*} value
   * @memberof LinkedList
   */
  insert(value) {
    let inserted = new Node(value);
    inserted.next = this.head;
    this.head = inserted;
    return this.head;
  }

  /**
   *  Compares the value to existing Node values in the Linked List and returns a boolean result depending on whether or not it finds a match
   * @param {*} value
   * @memberof LinkedList
   */
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * returns a string representing all the values in the Linked List,
   * in format "{ a } -> { b } -> { c } -> NULL"
   * @memberof Linkedlist
   */
  toString() {
    let currentNode = this.head;
    let string = 'head';
    while (currentNode !== null) {
      string = `${string} -> ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return `${string} -> NULL`;
  }
}
module.exports = LinkedList;
