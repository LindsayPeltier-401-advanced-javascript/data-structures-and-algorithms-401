# Challenge Summary
Breadth First Traversal of a Binary Tree

## Challenge Description
Write a breadth first traversal method which takes a Binary Tree as its unique input. 
Traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
I start at the root node, and move down the tree, from left to right, one layer at a time. 
An empty queue is created, and the first node (the root node) is the first element enqueued. Additional nodes are enqueued while traversind across and down the tree. 

Time is 0(n), dependant on how many nodes are present. 

## Solution
[Code](./breadth-first.js) <br/>
[Travis-CI](https://www.travis-ci.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401) <br/>
[PR](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/18) <br/>
![whiteboard](../../../assets/BreadthFirstWB.JPG)