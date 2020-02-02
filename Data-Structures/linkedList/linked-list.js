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
      while (current.next.value !== value) {
        current = current.next;
      }
    }
    newNode.next = current.next;
    current.next = current.next.next;
  }

  /**
   * Inserts newValue after a value in the list
   * @param {*} value
   * @param {*} newValue
   */

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  /* Stretch Goal-----------------------------------------------> */
  /**
   * Remove a value from the linked list
   * param {*} value
   */

  remove(value) {
    let current = this.head;
    let previousList;

    if (current.value === value) {
      current.next = current.next.next;
    } else {
      while (current.value !== value) {
        previousList = current;
        current = current.next;
      }
      previousList.next = current.next;
    }
  }

  /* k-th Value to the end of the linked list- Lab 07 ---------------------> */

  /**
     * Returns the listC value based on given input from length of array
     * @param {*} k 
     */

  kthFromEnd(k) {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      counter++;
      current = current.next;
    }

    current = this.head;

    if (k < 0) return 'Error';

    for (let i = 0; i < counter - k; i++) {
      current = current.next;
    }

    if (k > counter - 1) return 'Error';

    return current.value;
  }
  /* Merge Linked List- Lab 08 ---------------------> */
  /**
   * @function
   * @param {object} listA 
   * @param {object} listB 
   * @returns {object}
   */
  mergeLists(listA, listB) {
    let listC = new LinkedList();
    let nodeA = listA.head;
    let nodeB = listB.head;

    if (!nodeA && !nodeB) return 'Error';

    while (nodeA !== null && nodeB !== null) {
      if (nodeA.value <= nodeB.value) {
        listC.next = nodeA;
        nodeA = nodeA.next;
      } else {
        listC.next = nodeB;
        nodeB = nodeB.next;
      }
      listC = listC.next;
    }

    if (nodeA === null) { listC.next = nodeB; }
    if (nodeB === null) { listC.next = nodeA; }

    return listC;
  }
}

module.exports = LinkedList;
