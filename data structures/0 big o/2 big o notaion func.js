//o(n) o event also knoiwn as propotional
function logItems(n){
    for(let i =0; i<n;i++){
        console.log(i)
    }
}

logItems(10)
//its one of the big o notaion
//it is o event
//its also a o of n operation // operation === n
//its a straight line on a graph because number of operations will be same as n 
//note on graph vertical is number of operation and horizontal represents n
//it is propotional means(operaions is propotional to operation===n)

//////////////////////////////////////////////////////
//drop the constants
function logItems(n){
    for(let i =0; i<n;i++){
        console.log(i)
    }
    for(let j =0; j<n;j++){
        console.log(j)
    }
}

logItems(3)
//it means simplifying big o notaion
//code runs n+n time means 2n and if there is a constants drop that
//it will drop or also means removes that even if there are 100 n in there  means even if there are 100 loops with 100 n it will drop the 100 and it will be just n
//means it will be  a O(n) instead of o(2n)


