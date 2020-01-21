'use strict';

const QueueWithStacks = require('../queue-with-stacks.js');


describe('Queue with Stacks Tests', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new QueueWithStacks();
  });

  it('should actually work', () => {
    expect(pseudoQueue).toBeDefined();
    expect(pseudoQueue).toBeInstanceOf(QueueWithStacks);
  });

  it('should create two stacks', () => {
    expect(pseudoQueue.stack1).toBeDefined();
    expect(pseudoQueue.stack2).toBeDefined();
  });
});
