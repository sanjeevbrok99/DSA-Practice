// Given an array of n numbers. The problem is to move all the 0’s to the end of the array while maintaining the order of the other elements. Only single traversal of the array is required.
// Examples: 
 

// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6}
// Output : 1 2 3 6 0 0 0

const moveZeroToEnd = (arr) => {
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]!=0)
        arr[count++] = arr[i]
    }
    console.log(count)
    for(i=count;i<arr.length;i++){
        arr[i]= 0
    }
    return arr
}
let array = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]
console.log(moveZeroToEnd(array))