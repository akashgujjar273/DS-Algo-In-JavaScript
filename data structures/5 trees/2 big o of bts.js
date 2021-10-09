//it uses O(log n) method

//a single node is 2^2-1=1 yani 281=2 and -1 = 1 iska mtlb ek baari m hi item mil jayega
//now the -1 is releveant so remove it
//262 means 2 rows nodes so it will take 2 turns to find something
//2^3 or 2^4 and so on means if power is 4 it will take 4 turns toi find something

//its the best case senario omega 
//it doesnt matter for finding inserting and removing it will be a 0(log n)

//a bts with few branches might be a theta

//but our worst case will be if it was a straight light like the next node will be higher then higher so we dont get that divide and concure advantage
//we will have to loop it and it would be like a linked list that is o(n)