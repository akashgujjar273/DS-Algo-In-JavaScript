//top is 47 left right 21l 76r 
//21l=18l and 27r
//76r=52l 82r

const { BADFLAGS } = require("dns");

//in this method we will have 2 arrays queue and results in queue we add the entire node and in results we add the value of that node and final array is result
//we r gonna reutn array with items in order

//q[47n] r[] then q[] r[47]

//we had entire node in q so there is also the value of left and right
//then in 27 l and r is q[21,76] r[47] we say whats on left  and its 21
//now we r gonna  do 3 things
//first take 21 vale put it in r array
//then look to the left of 21 and add those value to q
//q[76,18,27] r[47,21]
//now push 76 in r and look into its value
//q[18,27,52,82]
//these last nodes l and r are null so we will return the array results

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
         const newNode = new Node(value)
         if (this.root === null) {
             this.root = newNode
             return this
         }
         let temp = this.root
         while(true) {
             if (newNode.value === temp.value) return undefined
             if (newNode.value < temp.value) {
                 if (temp.left === null) {
                     temp.left = newNode
                     return this
                 }
                 temp = temp.left
             } else {
                 if (temp.right === null) {
                     temp.right = newNode
                     return this
                 } 
                 temp = temp.right
             }
         }
     }

     contains(value) {
         if (this.root === null) return false
         let temp = this.root
         while(temp) {
             if (value < temp.value) {
                 temp = temp.left
             } else if (value > temp.value) {
                 temp = temp.right
             } else {
                 return true
             }
         }
         return false
     }

    BFS() {
        let currentNode = this.root
        let results = []
        let queue = []
        queue.push(currentNode)

        while(queue.length) {
           currentNode = queue.shift()
           results.push(currentNode.value)
           if(currentNode.left) queue.push(currentNode.left)
           if(currentNode.right) queue.push(currentNode.right)
        }
        return results
    }
}


let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

// [47, 21, 76, 18, 27, 52, 82]