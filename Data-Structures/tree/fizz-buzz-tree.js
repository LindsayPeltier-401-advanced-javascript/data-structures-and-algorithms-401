'use strict';

/**
 * Node value is changed, based upon modular operator
 * @param {*} value
 */
function fizzBuzz(value) {
  if (value % 15 === 0) {
    return 'FizzBuzz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else {
    return value.toString();
  }
}

/**
 * Recusion to evalue tree node value
 * @param {object} tree
 */
function fizzBuzzTree(tree) {
  if (!tree) {
    return 'No Tree';
  }
  let recursive = node => {
    if (node.left) recursive(node.left);
    node.value = fizzBuzz(node.value);
  };
  recursive(tree.root);
  return tree;
}

module.exports = fizzBuzzTree;