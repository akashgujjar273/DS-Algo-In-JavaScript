//it's like a pringle box with tennis balls in it and only the top item can be removed not anything below the top one
//its called lifo last in first out in short jo last me aya vo pehle jayega
//it doesnt matter which side from we use it but it matters on some cases like array
//in array from end point removing adding is o(1) but from left side means beggining it is o(n)
//and in linked list it's from start becuase we dont want null terminated side on top and in ll adding at beggining is o(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

let myStack = new Stack(7);
myStack.push(23);
myStack.push(3);
myStack.push(11);
