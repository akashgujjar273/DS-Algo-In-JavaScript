//bubble sort using loop within loop for each and every item comparison
function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

bubbleSort([4, 2, 6, 5, 1, 3]);

//selection sort we sor this by using index number if the index is higher then other index in the array swap them
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      //if i is greater then j then swap them
      if (array[j] < array[min]) {
        min = j;
      }
    }
    //means if i is less then anything in array then it is in right place so dont run this code
    //means i to tha hi apne index pr min i k baraber yaani agr dono equal h to i less then h
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

selectionSort([4, 2, 6, 5, 1, 3]);

//insertion sort //in this we pick an item and compare it to the previous on if small change place 
//we set i =1 because we wanna start at 2nd item to compare it to previous
function insertionSort(array){
  let temp
  for(let i=1; i<array.length; i++){
    temp=array[i]
    //we need to use j outside that why we use var
    for(var j=i-1; array[j]>temp && j >-1; j--){
      //setting the next index to what we stored at j
      array[j+1]=array[j]
    }
    array[j+1]=temp
  }
  return array
}

console.log(insertionSort([1,2,4,3,5,6]))