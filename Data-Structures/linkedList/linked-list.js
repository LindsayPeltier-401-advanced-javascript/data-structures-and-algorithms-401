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

/* Linked List Insertions (Code Challenge 06)---------------------------------------------------------> */

  /**
   * Appends a value to the end of the linked list 
   * @param {*} value
   */

append(value) {
  let newNode = new Node(value);
  let current = this.head;

  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  newNode.next = null;
}
 
  /**
   * Inserts newValue before a value in the linked list
   * @param {*} value
   * @param {*} newValue 
   */

insertBefore(value, newValue) {
  let newNode = new Node(newValue);
  let current = this.head;

  if (current.value === value) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    while (curent.next.value !== value) {
      current = current.next;
    }
  }
    newNode.next = current.next;
    current.next = current.next;
  }
 
  
module.exports = LinkedList;
