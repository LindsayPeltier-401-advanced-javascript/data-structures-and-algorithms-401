'use strict';

/**
 * @class
 */
class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

/**
 * @class
 */
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  /**
  * Returns the value of the node on top of the stack while leaving the node in position
  */
  peek() {
    return this.top;
  }

  /**
  * Removes the top node from the stack and returns its value
  * @return temp
  */
  pop() {
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp;
  }

  /**
  * Pushes a value onto the stack
  * @param {*} value
  */
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  /**
  * Checks to see if the stack is empty
  * @return boolean
  */
  isEmpty() {
    if (!this.top) {
      return false;
    }
    else {
      return true;
    }
  }
}

/**
 * @class
 */
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  /**
  * Adds a node to the queue with the give value
  * @param value
  */
  enqueue(value) {
    this.stack1.push(value);
  }

  /**
  * Removes the node from the front of the queue and returns its value
  * @return value
  */
  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0)
        return 'Empty Queue';
    }
    while (this.stack1.top) {
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;


//credit https://coderbyte.com/algorithm/implement-queue-using-two-stacks