'use strict';

const { Stack } = require('../stacks-and-queues');


/**
 * @class AnimalShelter
 */
class AnimalShelter {
  constructor() {
    this.in = new Stack;
    this.out = new Stack;
  }
  /**
   * Enqueue function
   * @param  {} pet
   */
  enqueue(pet) {
    this.in.push(pet);
  }

  /**
   * Dequeue function
   * @param  {} pref
   * @returns value of prefrence type
   */
  dequeue(preference) {
    if (preference !== 'dog' || preference !== 'cat') {
      return null;
    }
    if (this.out.isEmpty()) {
      while (!this.in.isEmpty()) {
        this.out.push(this.in.pop());
      }
    }
    if (!this.out.isEmpty()) {
      let pickedPet;
      while (this.out.top.value !== preference) {
        this.in.push(this.out.pop());
      }
      pickedPet = this.out.top.value;
      this.out.pop();
      while (!this.out.isEmpty()) {
        this.in.push(this.out.pop());
      }
      return pickedPet;
    }
  }
}

module.exports = AnimalShelter;
//Natalie, Travis, and I worked on this code challenge