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

let tree = new Tree(1,
  new Tree(2, null, null), new Tree(3,
    new Tree(4, null, null), null));

breadthFirstTraversal(tree, console.log);
// Will print "1,2,3,4"

