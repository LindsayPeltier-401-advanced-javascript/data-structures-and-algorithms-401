# Trees
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Challenge
 - Write a function called FizzBuzzTree which takes a tree as an argument.
 - Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
 - If the value is divisible by 3, replace the value with “Fizz”
 - If the value is divisible by 5, replace the value with “Buzz”
 - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
 - If the value is not divisible by 3 or 5, simply turn the number into a String.
 - Return the new tree.

## Approach & Efficiency
The Big O time complexity for inserting a new node is O(n). Searching for a specific node will also be O(n). Because of the lack of organizational structure in a Binary Tree, the worst case for most operations will involve traversing the entire tree. If we assume that a tree has n nodes, then in the worst case we will have to look at n items, hence the O(n) complexity. 

The Big O time complexity of a Binary Search Tree’s insertion and search operations is O(h), or O(height). 

The Big O space complexity of a BST search would be O(1). 

## API
  - FizzBuzz Function evaluates a tree node value to remainder using an else/if loop
  - FizzBuzzTree uses recursion to move through tree nodes, applying FizzBuzz

## Solution and Links

[Code](./fizz-buzz-tree.js) <br/>
[Travis-CI](https://www.travis-ci.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401) <br/>
[PR](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/15) <br/>
![whiteboard](../../../assets/fizzbuzzWB.JPG)