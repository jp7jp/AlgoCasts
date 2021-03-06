// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    //this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
    //return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }
    // return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);

    // if (!this.head) {
    //   return;
    // }

    // this.head = this.head.next;
  }

  removeLast() {
    this.removeAt(this.size() - 1);
    // if (!this.head) {
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let previous = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null
  }

  insertLast(data) {
    this.insertAt(data, this.size());
    // const node = new Node(data);
    // const last = this.getLast();
    // if (last) {
    //   last.next = node;
    // } else {
    //   this.head = node;
    // }
  }

  getAt(index) {
    let node = this.head
    let counter = 0;
    while (node) {
      if (counter == index) {
        return node;
      }
      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {

    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;

  }

  insertAt(data, index) {

    if (!this.head || index === 0) {
      this.head = new Node(data, this.head)
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();

    previous.next = new Node(data, previous.next);
    return;

  }

  forEach(fn) {

    let node = this.head;
    let counter = 0
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }

  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
