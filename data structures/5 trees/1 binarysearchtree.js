//it is different from binary tree
//everything that is greater then its parent goes right
//and anything less then parent goes left

//eg 47 is parent we add a node 76 it goes right and after that if we add a another node we comapre it to the top parent 
//means we always start the comparison from top
//we add 56 its greater then top the 47 it goes right but less then 76 so it will be added to left side of 76
//82 anode it is higher then 47 and also higher then 76 it goes to the right side of 76
//21 is less then 47 and also less then ghoes to left
//18 is also less then 47 and 21 too so goes to left side of 21
//27 is less then  47 goes left but higher then 21 so goes to the right of 21

/*
       47
    21    76
  18 27  52  82

*/ 

//all the items less then 47(top parent) on left and all the greater are on right
//same all the greater then 21 are on right and less thenj are on left