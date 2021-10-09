//also known asd loop within loop
//this one will be o(n2)(o event square) means n ki power 2 n^2 also means n square
function logItems(n){
    for(let i =0; i<n;i++){
        for(let j =0; j<n;j++){
            console.log(i,j)
        }
    }
}
//if we nest another loop it will be n*n*n that will be n^3 means n cube and it will print thousand if we put 10 in func
//no matter how many powers we put means n*n*n*n it will be n^2 and that is called o event square
//on graph it will take less n to produce higher operations
//and o event is a better code in big o notaion compare to first o event square

//different terms for inputs
function logItems(a,b){
    for(let i =0; i<a;i++){
        for(let j =0; j<b;j++){
            console.log(a,b)
        }
    }
}

//if its nested it's 0(a*b)
//if its two different loops then o(a+b)
////////////////////////////////////////////////////////////////

//drop the non dominants is another way of simplifying big o noation
function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j) 
        }       
    } 

    for(let k = 0; k < n; k++) {
        console.log(k)
    }
}

logItems(10)
//in here o(n2)is the dominant and the single n is non dominant so we dropt it
//instead of o(n2 +n) it will be o(n2)
//in here n is not kind of affecting the number of operations on the other hand n2 is affecting it thats why its dominant


///////////////////////////////////////////////////////////////////////////////////
//also known as constant times
//big o notaions o(1) it is most effiecient and its a flat line on graph on horizontal axis
function addItems(n){
    return n+n+n
}
//if it was only n+n it will be only one operation that would be o(1)
//but if number of operations stay same like + no matter how n changes it will always be o(1)
//eg in n+n+n the operation + is constant
//simply if operations that is constant no matter what n is the number of operations does not change as n changes

