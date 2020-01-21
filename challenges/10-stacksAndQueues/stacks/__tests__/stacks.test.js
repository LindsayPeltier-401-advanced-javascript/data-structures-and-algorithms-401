'use strict';

const Stack = require('../stacks.js');

describe('stack module function', () => {
  it('pushes a value onto the stack'), () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsey();
  });

  it('pushes more than one value', () => {
    const stack = new Stack ();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

});