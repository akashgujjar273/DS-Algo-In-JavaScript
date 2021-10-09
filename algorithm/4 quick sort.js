//first we take an item and make it our pivot point
//then we loop through the array and compare items with that pivot point remeber we check if pivit is less then if less then change it with the first greter then item
//4,6,1,7,3,2,5  6 is greater then 4 leave it 1 is less then for so exchange it with the first greater item that is 6// 4,1,6,7
//7 is greater then 4 leave it 3 is less then change it with first greater that 6 is// 4,1,3,7,6,2,8
//2 is less then pivit point 4 we change it with 7 bcz now it the first greater num becuase 6 exchanged the spot with 3 // 4,1,3,2,6,7,5
//,4,1,3,2,6,7,5
//last step swap pivit point 4 with last less then item that is 2 and now 4 is sorted and work as a mid point
//every thing less then 4 is on left and greater then 4 is on right

//run quick sort on left side and also on right side

//pivot is going to be a helper func and does the above thing
//in this method we dont return array but we return the swap variable because we wanna run sorting on swaps left side and right side
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex=0, endIndex=array.length-1) { 
    let swapIndex = pivotIndex
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
    console.log(array)
    return swapIndex
}

function quickSort(array, left=0, right=array.length-1) {
    if(left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex-1)
        quickSort(array, pivotIndex+1, right)
    }
    console.log(array)
    return array
} 

           
quickSort([4,1,6,7,3,2,5])


//big o of quick sort
//we didn't create any new item we only did changes in orignal one
//so in space complexcity its 0(1)

//time complexicty is on bcz we used loop
//but we looped three times that is 0 log0 so its a 0(n log n)

//worst case if array is sorted means the array is sorted and only items on the right will be looped
//that is on2