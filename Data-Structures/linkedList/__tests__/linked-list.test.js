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
