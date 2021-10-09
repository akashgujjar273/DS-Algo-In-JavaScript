//linked list is often compared to arrays
//linked list(ll) have no index numbers they have a head and a tail and each items point to the next and the last num that is tail points to null
//in a memory a array is placed in a line
//but ll can be all over the place in memory eg if there are 20 slots it can be in any slot like num 1 will be in slot 3 num2 will be ine slot 10 num 3 will be in slot 17

//11-3-21-7-4-
//its like a linked list and 11 was head and 7 was tail
//but then we want to add 4 at the end we ponited 7 to 4(node) and now its pointing to that node so we can say tail is equal to that node(4)
//we wanted to push something in the end its a constant time so it will be o(1) no matter if list is 100 or 1000 it will be always 1 operation


//but removing the last item is hard because ll doesnt move in backward direction
//if we remove 4 then we need something to point to the 7 so we can set it as a tail
//we need to iterate throught entire list because only 21 is pointing to 7
//at 21 we set that pointer to 7 now and it will be a o(n) becxause we iterated throught the list

//////////////////////////head
//adding and removing from head is o(1) for both
// the head is pointing to the first node so if we wanna add sonething at start we set the pointer from the newnode equal to the pointer from head 
//and say the new node is equal to head
//and for removing from start just say head.next and the next node will be the head note the next is a method we create

//////////inserting in middle

//first loop will start if we qanna add it before 7 then loop the ll and then ponit newnode to 7 and then ponit 21 that was before 7 to newnode
//but because it looped it will be a o(n)
//same if we wanna removee it point 21 to 7 then drop newnode and its o(n)

//iif we wanna find something by value or index it will be o(n) because we iterate through ll for that