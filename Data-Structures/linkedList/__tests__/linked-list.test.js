'use strict';

const LinkedList = require('../linked-list.js');

describe('instantiate an empty linked list', () => {
  let list = new LinkedList();
  it('empty list', () => {
    expect(list).toBeTruthy();
  });
});

describe('insert into the linked list', () => {
  let list = new LinkedList();
  list.insert('10');

  it('inserts into the linked list', () => {
    expect(list.head.value).toBe('10');
  });
});

describe('head property points to the first node in the linked list', () => {
  let list = new LinkedList();
  list.insert('10');
  list.insert('20');

  it('first node is correct', () => {
    expect(list.head.value).toBe('20');
  });
});

describe('Inserts multiple nodes into the linked list', () => {
  let list = new LinkedList();
  list.insert('30');
  list.insert('40');

  it('succesfully added first value', () => {
    expect(list.head.value).toBe('40');
  });
  it('succesfully added second value', () => {
    expect(list.head.next.value).toBe('30');
  });
});

describe('Returns true when finding an existing value within the linked list', () => {
  let list = new LinkedList();
  list.insert(1);
  list.insert(2);
  let searchResult = list.includes(1);
  let badSearchResult = list.includes(5);

  it('Returns true for items that exist', () => {
    expect(searchResult).toBeTruthy();
  });
  it('Returns false for items that do not exist', () => {
    expect(badSearchResult).toBeFalsy();
  });
});

describe('Returns all values currently in the linked list', () => {
  let list = new LinkedList();
  list.insert('item1');
  list.insert('item2');
  list.insert('item3');
  it('returns a string', () => {
    expect(list.toString()).toEqual('head -> item3 -> item2 -> item1 -> NULL');
  });
});

/* Tests for Lab 06, Linked List Insertions --------------------------------------------------> */
it('adds a node to the end of the list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(10);
  linkedList.append(20);
  expect(linkedList.head.next.value).toEqual(20);
});

it('adds multiple nodes to the end of the list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(10);
  linkedList.append(20);
  linkedList.append(30);
  expect(linkedList.head.next.next.value).toEqual(30);
});

it('inserts a node before a value located in the middle of list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insertAfter(3, 10);
  expect(linkedList.head.next.next.value).toEqual(10);
  expect(linkedList.head.next.next.next.value).toEqual(2);
});

it('successfully insert a node after the last node in the list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(10);
  linkedList.insert(30);
  linkedList.insert(40);
  linkedList.insertAfter(10, 20);
  expect(linkedList.head.next.next.next.value).toEqual(20);
});

it('removes nodes from the linked list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.remove(3);
  expect(linkedList.head.next.value).toEqual(2);
});

/* Tests for Lab 07, Kth from the End  --------------------------------------------------> */
it('gives an error message if k is greater than the length of the linked list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  expect(linkedList.kthFromEnd(5)).toEqual('Error');
});

it('gives an error if k and the length of the list are the same', () => {
  let linkedList = new LinkedList();
  linkedList.insert(6);
  linkedList.insert(7);
  linkedList.insert(8);
  linkedList.insert(9);
  expect(linkedList.kthFromEnd(9)).toEqual('Error');
});

it('gives an error whenever k is not a positive integer', () => {
  let linkedList = new LinkedList();
  linkedList.insert(10);
  linkedList.insert(11);
  linkedList.insert(12);
  linkedList.insert(13);
  expect(linkedList.kthFromEnd(-1)).toEqual('Error');
});

it('gives an error when linked list has a length of 1', () => {
  let linkedList = new LinkedList();
  linkedList.insert(1);
  expect(linkedList.kthFromEnd(1)).toEqual('Error');
});

it('Returns the node value when k is found in the middle of list', () => {
  let linkedList = new LinkedList();
  linkedList.insert(14);
  linkedList.insert(15);
  linkedList.insert(16);
  linkedList.insert(17);
  expect(linkedList.kthFromEnd(3)).toEqual(16);
});