//in binary tree we dont keep a track of lenght
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class BST{
//     constructor(value){
//         const newNode=new Node(value)
//         //this is an obj and evry obj has to be pointed by something else it will be in garbagecollection
//         //only the top parent is not pointed so we point root variable to it
//         this.root=newNode
//     }
// }

//we dont have to create a node then create a bst we can build a framke work then we can insert a node
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value){
    if(this.root===null) return undefined
    let temp=this.root
    while(temp){
      if(value<temp.value){
        temp=temp.left
      }else if(vale>temp.value){
        temp=temp.right
      }else{
        return true
      }
      return false
    }
  }
}
