// Given an array a[] of N integers, the task is to find the length of the longest Alternating Even Odd subarray present in the array. 

// Examples:

// Input: a[] = {1, 2, 3, 4, 5, 7, 9}
// Output: 5 
// Explanation: 
// The subarray {1, 2, 3, 4, 5} has alternating even and odd elements.

// Input: a[] = {1, 3, 5} 
// Output: 0 
// Explanation: 
// There is no such alternating sequence possible. 


const longestEvenOddSubArr = (arr)=>{
    if(arr.length<2){
        return 0;
    }
    let currentLength = 1
    let maxLength = 1; // At least one element counts as a valid subarray
        for(i=1; i<arr.length;i++){
        if(arr[i]%2 === 0 && arr[i-1]%2 !=0 || arr[i-1]%2 === 0 && arr[i]%2 !=0){
            currentLength++
            maxLength = Math.max(maxLength,currentLength)
        }else {
            currentLength = 1
        }
            

    }
    console.log(maxLength)
}

const array = [1, 2, 1,4, 5, 7, 9]
longestEvenOddSubArr(array)