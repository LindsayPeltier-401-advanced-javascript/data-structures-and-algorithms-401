'use strict';

const { Stack, Queue } = require('../stacks-and-queues');
const stack = new Stack;
const queue = new Queue;


describe('Stack functionality', () => {
  test('pushes onto a stack', () => {
    stack.push('test');
    expect(stack.top.value).toEqual('test');
  });
  test('pushes multiple values off the stack', () => {
    stack.push(2);
    stack.push({ lookhere: 'hello!' });
    expect(stack.top.value.lookhere).toBe('hello!');
  });
  test('pops off the stack', () => {
    stack.pop();
    expect(stack.top.value).toBe(2);
  });
  test('empties a stack after multiple pops', () => {
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });
  test('peeks at the next item on the stack', () => {
    stack.push(1);
    expect(stack.peek()).toHaveProperty('value', 1);
  });
  test('instantiates an empty stack', () => {
    let emptyStack = new Stack;
    expect(emptyStack).toBeDefined();
    expect(emptyStack).toHaveProperty('top', null);
    //expect(emptyStack.isEmpty()).toBeTruthy();
    // emptyStack.push(1);
    // expect(emptyStack.isEmpty()).toBeFalsy();
  });
});

describe('Queue functionality', () => {
  test('enqueues into a queue', () => {
    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);
  });
  test('enqueues multiple values into a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.next.value).toBe(2);
    expect(queue.rear.value).toBe(3);
  });
  test('dequeues out of a queue the expected value', () => {
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  });
  test('peeks into a queue and see the expected value', () => {
    expect(queue.peek()).toHaveProperty('value', 2);
  });
  test('empties a queue after multiple dequeues', () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });
  test('instantiates an empty queue', () => {
    let newQueue = new Queue;
    expect(newQueue).toBeDefined();
    expect(newQueue).toHaveProperty('front', null);
    expect(newQueue).toHaveProperty('rear', null);
    //expect(newQueue.isEmpty()).toBeTruthy();
    // newQueue.enqueue(1);
    // expect(newQueue.isEmpty()).toBeFalsy();
  });
});