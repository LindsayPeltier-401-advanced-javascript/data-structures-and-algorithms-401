'use strict';

class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }
  peek() {
    return this.top;
  }
  pop() {
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  isEmpty() {
    if (!this.top) {
      return false;
    }
    else {
      return true;
    }
  }
}
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

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