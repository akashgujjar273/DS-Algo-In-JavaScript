//queue is like a line of persons and they wait in queue
//removing a thing from queue is called dequeue and adding is in queue
//its fifo first in first out in short opposite of lifo jo pehle ayega vo pehle jayega
//so in queue you need to add it from an end and remove it from other end
//in array adding from right or removing is o(1) but adding from left is o(n)
//in ll adding from right isde is o(1) but removing is o(n) and adding and removing from left side is o(1)
//so if we use ll add it from right end and remove it from left end both are o(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myQueue = new Queue(11);
myQueue.enqueue(3);
myQueue.enqueue(23);
myQueue.enqueue(7);
