'use strict';

class Node {
  constructor (value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.length = 0;
  }

  push (value) {
    if(!value) return false;
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop(){
    let temp = this.top.value;
    this.top = this.top.next;
    this.length--;
    return temp;
  }

  peek () {
    if(!this.top){
      return null;
    } else {
      return this.top.value;
    }
  }
}
 
class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  
  enqueue(value){
    this.stack1.push(value);
  }

  dequeue(){
    if(this.stack2.length === 0) {
      if(this.stack1.length === 0) 
        return 'Empty Queue';
      }
      while(this.stack1.length > 0){
        let p = this.stack1.pop();
        this.stack2.push(p);
      }
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;

//credit https://coderbyte.com/algorithm/implement-queue-using-two-stacks
