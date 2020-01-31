
'use strict';

const Tree = require('./tree');

/**
 * @class
 */
class MaxTree extends Tree {
  constructor() {
    super();
  }
  /**
   * @returns number
   */
  maxValue() {
    let currentHighest = null;
    this.tree.root.inOrder(value => {
      if (!currentHighest) currentHighest = value;
      if (value > currentHighest) currentHighest = value;
    });
    return currentHighest;
  }
}

module.exports = MaxTree;
