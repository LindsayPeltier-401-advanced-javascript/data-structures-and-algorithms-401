# Multi-Bracket Validation

## Code Challenge #13

**Create a function called multiBracketValidation(input)**

This function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. 

There are 3 types of brackets:
- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

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
* [SUBMISSION PR](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/25)
* [TRAVIS-CI](https://www.travis-ci.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/builds/)

#### Documentation
Run live-server on /doc files for full code documentation
* [DOCUMENTATION]()

### Solutions

[CODE](./multi-bracket-validation.js)