/**
 * in js there already hash tables that is objects
 * 
 * but we are gonna create our own hashtable
 * 
 * in adress space we put items but we are gonna use arrays as address spaces
 * 
 * 
 * we r gonna put items but we r gonna use hash for alloting that spcae for an item
 * 
 * items are gonna be in key and value pairs{"nails":1000}
 * 
 * we r gonna run this item thorough hash
 * and only key is gonna be used for hash because all letter have a numerical value
 * it is going to run a calculation on that key and give us an address
 * 
 * ater getting hash we r gonna put that item to that address with that hash
 * we can get that item very fast by using that hash and goes to that same address
 * 
 * 0 to 7 in memory address
 * hash are one way if we get a hash of 2 we cannot put that 2 in hash func to get the nails key
 * deterministic = if we put nails and we get hash 2 it will be the same if we put nails again in hash func it will always be the same
 * 
 * 
 * we use set(nails,1000) we run it through hash func we get a array and we r gonna put this array into the array that we r using as a memory space 
 * 
 * we used nuts,800  and it give us a hash 2 same as nails we dont wanna override the previous item
 * we want both of them to be in hash 2 address space and its called // collision
 *
 * get method we pass a key and we get the value and if it has 2 items in it we will look for one with that key
 * 
 */

/** dealing with collisions
 * 
 * it happens when 2 items map to a same memory
 * 
 * [[item1],[item2]] the 2 nitems are stored in a array and seperated by a comma
 * this method is called seperate chaining
 * 
 * 
 * linear probing is a method when there is a item in a space and we check the next spcae if its empty we put it there
 * //its a type of open addressing and therer are manyt more open adressing too
 * 
 * we can also use linked list insted of seperating chain too
 * 
 * 
 */
