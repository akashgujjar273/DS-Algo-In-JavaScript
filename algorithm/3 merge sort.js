// pehle array ko break krte jao hald m tub tuk jb tuk array m ek single time rhe aur signle item vala array sorted hi hota h
//phr hum ek ek kre vapas join krte h unhe unki value bases pr
//we r going to use recursion for mergesort
//condition dono array sorted ho
//helper func that will merge 2 arrays
function merge(array1,array2){
    let combined=[]
    let i=0
    let j=0
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            combined.push(array1[i])
            i++
        }else{
            combined.push(array2[j])
            j++
        }
    }
    while(i<array1.length){
        combined.push(array1[i])
        i++
    }
    while(j<array2.length){
        combined.push(array2[j])
        j++
    }
    return combined
}

//merge sort is going to break array then merge will put them together with merge using recusrion
//conditions do something same we r gonna break array in half and base case is array length=1
//after reaching base case use merge func to put back
function mergeSort(array){
    if(array.length===1)return array
    let mid=Math.floor(array.length/2)
    //creating two new arrays
    let left=array.slice(0,mid)
    let right=array.slice(mid)
    //using recursion on left and right array
    //we kkep breaking until length is 1
    return merge(mergeSort(left),mergeSort(right))
    //right array will be merged firt becuase it was last to go on call stack
}
console.log(mergeSort([1,3,2,4]))

//big o of merge sort
//space complexicty is o(n) because we keep breaking and creating new array and also have the orignal array

//for breaking its o log(n) but putting them back is o(n) = o(n log n)
//o(n log n) is less effiecient then o(n) but more effiecient then o(n2) its a line between these 2

//on2 and o nlog n are 2 options for sorting and if you r sorting all types of data like string boolean etc then 0 n log n is better then buuble sort that is on2