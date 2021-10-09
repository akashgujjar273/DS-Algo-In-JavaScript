// o(log n) it is very flat not compare to o(1) but flat
//if you want to do this you must have a sorted data
//aslo known as divide and concure o(log n)
const array=[1,2,3,4,5,6,7,8]
//its only 8 if it was millions this would help because we dont have to look into that half in which our number was not present
//find 1 first we split array in half(1 operation) and then half(2operation) then we find 1(3 operation)
//it took 3 operations so 2^3=8
// basically we are saying 2^?=8 2 to the what power is equals to 8 
//ye dono ek hi h
//log 8=? and that number is 3  // it means how many times do i have to cut 8 in half(2) to get down to the one item and that is 3 times
//   2

//eg the real power of the divide and conqure method shines here
//log2 1,073,741,824=31
// means we have to cute this billion number 31 times to get down to 1 item if we dont use it we have to iterate it billion times




/////////////////////////////////////////////////////
//big o of arrays comparing bog o of arrays to other ds
const myarray=[11,23,4,7]
//if we push and pop we dont need to change the index of entire array so these two methods are o(1)

// if we use shift or unshift we have to re index the entire array that is 0(n) and n is the number of items in array because it took the number of items time to re index

//if we use splic(1,0,our thing we wanna add) // this will add it in anywhere in the array
//splic the index where we wanna put     and the number of element we wanna remove 0 means none     and then the element
//this will be an o(n) event even if we say it's a half array  the half is constant fropt it and in big o we always mesure worst case no average no best


//array are good ds for finding things by index number that will be o1 and if we iterate it that will be on
//arrays are good ds if we add things in the end but not good if we add them at starting
//basically arrays are good for finding items annd we use ds based on what we wanna do and based on big o