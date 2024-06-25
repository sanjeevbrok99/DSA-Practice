// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// Output: 5 6 7 1 2 3 4


// const rotateArr = (arr, d) => {
//     const n = arr.length;
//     const newArr = new Array(n);
    
//     for (let i = 0; i < n - d; i++) {
//         newArr[i] = arr[d + i];
//     }
    
//     for (let i = 0; i < d; i++) {
//         newArr[n - d + i] = arr[i];
//     }
    
//     console.log(newArr);
// }

// Example usage:

// const rotateArr =(arr,d) => {
//     const n= arr.length;
//     const newArr = new Array(n);
//     for(let i = 0; i < n-d; i++) {
//         newArr[i]= arr[d+i] }

//     for (let i = 0; i<d; i++) {
//         newArr[n-d+i]= arr[i];
//     }
//          console.log(newArr);

// }


const rotateArr = (arr,d)=>{
    const n = arr.length;

   const rebverseArr = (arr, start , end)=>{
    while(start<end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
   }
    rebverseArr(arr,0,n-1)
    rebverseArr(arr,0,n-d-1)
    rebverseArr(arr,n-d,n-1)
   console.log(arr)
}

rotateArr([1, 2, 3, 4, 5], 2); // Output: [3, 4, 5, 1, 2]
