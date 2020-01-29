'use strict';

class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const breadthFirstTraversal = (tree, callback) => {
  if (tree == null) {
    return;
  }

  let queue = [tree];

  while (queue.length > 0) {
    let item = queue.shift();
    let value = item.value;
    callback(value);

    if (item.left == null && item.right == null) {
      continue;
    }
    if (item.left != null) {
      queue.push(item.left);
    }
    if (item.right != null) {
      queue.push(item.right);
    }
  }
};

let tree = new Tree(2,
  new Tree(7, null, null),
  new Tree(5,
    new Tree(2, null, null),
    new Tree(6,
      new Tree(9, null, null),
      new Tree(5,
        new Tree(11, null, null),
        new Tree(4, null)))));

breadthFirstTraversal(tree, console.log);

module.exports = breadthFirstTraversal;


// breadthFirst(tree) {
//   if (tree === null || tree === undefined) {
//     return 'error';
//   }

//   let queue = [tree.root];
//   let currentNode = queue.shift();

//   while (currentNode) {
//     console.log(currentNode.value);
//     queue.push(currentNode.left);
//     queue.push(currentNode.right);
//     currentNode = queue.shift();
//   }
// }