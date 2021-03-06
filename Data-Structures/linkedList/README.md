# Linked Lists


## Challenge

Write tests to prove the following functionality:

- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not exist
- Can properly return a collection of all the values that exist in the linked list
- Can successfully add a node to the end of the linked list
- Can successfully add multiple nodes to the end of a linked list
- Can successfully insert a node before a node located i the middle of a linked list
- Can successfully insert a node before the first node of a linked list
- Can successfully insert after a node in the middle of the linked list
- Can successfully insert a node after the last node of the linked list
- Where k is greater than the length of the linked list
- Where k and the length of the list are the same
- Where k is not a positive integer
- Where the linked list is of a size 1


## Approach & Efficiency

*Create a node class with the properties of 'value' and 'next' which connects to the next node
*Create a LinkedList class, include a head property.
*Upon instantiation, an empty Linked List should be created.
*Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
*Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
*Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"

*Write the following methods for the Linked List class:
  .append(value) which adds a new node with the given value to the end of the list
  .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
  .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
*Stretch Goal: Write an additional method to delete a node with the given value from the linked list.

*Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Links and Resources

[Pull Request Lab 05](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/11/)
[Pull Request Lab 06](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/12/)
[Pull Request Lab 07](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/17)
[Pull Request Lab 08](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/26)

[Travis](https://www.travis-ci.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401)

[Jsdocs](../../docs/LinkedList.html)

## Solution
![whiteboard](../../assets/06ll-insertions.JPG)
![whiteboard](../../assets/06ll-insertions.JPG)
![whiteboard](../../assets/kthfromendWB.JPG)
![whiteboard](../../assets/IMG_4238.JPG)


