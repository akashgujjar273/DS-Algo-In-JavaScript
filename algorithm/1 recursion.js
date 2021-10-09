//its a func that call itself until it doesent

//requirments
// the process should be same each time eg opening a box should be same everytime
//each time we use that func we made the problem smaller

//prevention from stack over flow and infinite loops
//if the statement is true it is base case and if it the code running again then that is recursive case
//1 always use a condition that will be true and it will cause the func to stop eg a if else condtition
//2 dont make key mistakes like a if statment that will never be true like 1>2
//3 use retun in conditions like we use if 1===1 console.log("hello")
//this is still a loop because only return can end not console or other code


function Call(n){
    console.log(n)
    if(n===0){
        return "The End"
    }
    Call(n-1)
}
Call(8)

//every example of recusrion maximum times ueses factoial
//factorial 4!=4*3*2*1
//4=24  how = 4*3*2*1

//it is better to watch in dev tools because of call stack explanation
function factorial(n) {
    if(n === 1) return 1
    return n * factorial(n-1)
}

factorial(4)
//return 4*factorial(3)
//return 3*2 same
//return 2*1 same
//return 1
//its work even after returniong 1 because in call stack the other recusrive fincs are there 
//then they will be solved one by one then return 24
//2*1 then 2*3 then 6*4=24
//note mrko jo smjh aya jo stack m h na factorial uski value change ho jati h uppe ate ate islie vo end m 486 h na ki 483 it is 4*3!(6)