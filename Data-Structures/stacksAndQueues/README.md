# Stacks and Queues

## Code Challenge #10 

**Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.**
**Create a Stack class that has a top property. It creates an empty Stack when instantiated.**
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the stack is empty.

**Create a Queue class that has a front property. It creates an empty Queue when instantiated.**
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
- Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency

Stack: 
  * O(1) - push, pop, peek, isEmpty
Queue: 
  * O(1) - enqueue, dequeue, peek, isEmpty

### Stack
* push(value) - adds to top of stack
* pop() - removes from top of stack
* peek() - returns value of top node
* isEmpty() - returns boolean based on whether stack is empty

### Queue
* enqueue(value) - adds to end of queue
* dequeue() - removes from front of queue
* peek() - returns value at front of queue
* isEmpty() - returns boolean based of whether queue is empty

### Links and Resources
* [SUBMISSION PR](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/21)
* [TRAVIS-CI](https://www.travis-ci.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/builds/146864198)

#### Documentation
Run live-server on /doc files for full code documentation
* [DOCUMENTATION](/Users/lpeltier/DevStation/devstation/401/data-structures-and-algorithms-401/docs/stacksAndQueues_stacks-and-queues.js.html)

### Solutions

[CODE](./stacks-and-queues.js)