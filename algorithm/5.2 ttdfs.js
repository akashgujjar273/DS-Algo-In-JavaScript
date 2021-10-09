//dfs 3 types preorder post order and n order
//we will take item and put them in array its just a matter of order how we do it

//pre order we take first every left side on an item then right side

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

    DFSPreOrder() {
        //better smjh ayega call stack h kioki yt recursion func use kia h
        //result array bnai usme traverse m jo node h uski value push krenge
        //top node pr traverse chlaya usne result m value dali phr if run hua left m gya uski value dali
        //phr usleft pr if run kia uski left value m gye uspr func run kia uski value li uspr koi l or r node ni tha
        //vo call stack se gya phr upper vale node pr aye ab uspr right vala if run kia
        //uski value li uska na koi l or r phr vapas ayr phr ab top node pr aye uspr right if run kia  
        let results = []
        function traverse(currentNode) {
            results.push(currentNode.value)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
    //[47,21,18,27,76,52,82]

    DFSPreOrder() {
        let results = []
        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.value)
        }
        traverse(this.root)
        return results
    }
    //[18,27,21,52,82,76,47]

    //in order like assending order
    DFSInorder(){
        let results=[]
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.value)
            if(currentNode.right) traverse(currentNode.right)
        }
        traverse(this.root)
        return results
    }
    //[18,21,27,47,52,76,82]
}


let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

// [47, 21, 18, 27, 76, 52, 82]
