//there are couple of more ways to store a graph
//one adjacency matrix and other is adjacency list

//matrix
//symetrical means  
//An exact matching of form and arrangement of parts on opposite sides of a boundary, such as a plane or line, or around a central point or axis.

/* this looks like a matrix design
        45
     /     \
   50       54
    \      |
     56 _10

*/ 
//in diagram a points to b and e
//b ponits to a and c and all others to have something to point

//a table

/** a ponit krega b aur e pr y niche table m show kia gya h
 *    a b c d e
 * a  0 1 0 0 1
 * b  1 0 1 0 0
 * c  0 1 0 1 0
 * d  0 0 1 0 1
 * e  1 0 0 1 0
 */
//a cant ponit to a b cant point to b and so on
//so in a adjacency matrix there will a 45 digree line of 0s in it

//if all vertex  have a bidirectional connection then matrix is going to be symmetrical acroos that 45 digree

//if not bidirectional its not a symmetrical 

//if we use weighted we can use those number instead of 1


////////////////////////////////////////////
//adjacency list
//use same graph or diagram from above but instead of matrix we use list
//its an obj and a is key and b and e are its edges
list={
  A:["B","E"],
  B:["A","C"]
}