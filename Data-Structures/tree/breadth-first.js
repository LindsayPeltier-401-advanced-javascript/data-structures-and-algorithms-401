'use strict';

// const Tree = require('./tree');
// const Queue = require('');

// /**
//  * 
//  * @param {*} tree 
//  */
// function breadthFirst(tree) {
//   return breadthFirst(tree.tree.root);
// }

// /**
//  * 
//  * @param {*} root 
//  */
// function breadthFirstList(root) {
//   const values = new Array();
//   const queue = new Queue();
//   if (!root) return null;
//   queue.enqueue(root);
//   while (!queue.isEmpty()) {
//     let node = queue.dequeue();
//     values.push(node.val);
//     if (node.left) queue.enqueue(node.left);
//     if (node.right) queue.enqueue(node.right);
//   }
//   return values;
// }

// module.exports = breadthFirstList;

