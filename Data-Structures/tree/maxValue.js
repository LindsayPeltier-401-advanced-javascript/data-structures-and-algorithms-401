'use strict';

class BinaryTree {
  constructor(node) {
    this.root = node;
  }

  findMaximumValue(tree) {
    if (tree === null || tree === undefined) {
      return 'error';
    }
    let max = tree.root.value;

    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      if (max < node.value) {
        max = node.value;
      }
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(tree.root);
    return max;
  }
}

module.exports = BinaryTree;
