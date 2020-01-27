# Trees
Binary Tree and Binary Search Tree Implementation

## Challenge
 - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
 - Create a BinaryTree class
 - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

 - Create a BinarySearchTree class
 - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
 - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
The Big O time complexity for inserting a new node is O(n). Searching for a specific node will also be O(n). Because of the lack of organizational structure in a Binary Tree, the worst case for most operations will involve traversing the entire tree. If we assume that a tree has n nodes, then in the worst case we will have to look at n items, hence the O(n) complexity. 

The Big O time complexity of a Binary Search Tree’s insertion and search operations is O(h), or O(height). 

The Big O space complexity of a BST search would be O(1). 
[Source](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/Trees.html)

## API
  - preOrder(callback) : Traverse the tree using the callback before going to the next node
  - postOrder(callback) : Traverse the tree using the callback after traversing the tree
  - inOrder(callback) : Traverse the tree using the callback between left and right child traversal
  - add(value) : adds a value to the correct position in the tree
  - contains(value) : searches the tree for a specific value and returns a boolean value

## Solution and Links

[Code](./tree.js) <br/>
[Travis-CI](https://www.travis-ci.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401) <br/>
[PR](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/13)

