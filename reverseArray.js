// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

const reverseArr = (arr)=>{
    let start = 0
    let end = arr.length-1;
    let temp;
    while(start<end){
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}
let array = [1,2,3,4]
console.log(reverseArr(array))
