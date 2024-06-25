// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// Output: 5 6 7 1 2 3 4


const rotateArr = (arr,d)=>{

    const newArr = []
    for(let i=d;i<arr.length;i++){
        newArr.push(arr[i])
    }
    for(let i=0;i<d;i++){
        newArr.push(arr[i])
    }
    return console.log(newArr)
}

let array = [3, 4, 5, 6, 7, 1, 2]
let d = 2
rotateArr(array,d)