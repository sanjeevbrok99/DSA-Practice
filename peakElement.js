//Find a peak element which is not smaller than its neighbours
// Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

// Note: If the array is increasing then just print the last element will be the maximum value.

// Example:

// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

// Input: array[] = {10, 20, 15, 2, 23, 90, 67}
// Output: 20 or 90
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.
const newArr = [10, 20, 15, 2, 23, 90, 67]
let n = newArr.length

const isPeak = (arr,n) =>{
    if(arr[0]>arr[1])
    return 0;
    if (arr[n-1]>arr[n-2])
    return n-1

    for(let i=1;i<n;i++){
        

        if(arr[i-1]<arr[i]&& arr[i+1]<arr[i]){
             console.log("peak element is :",arr[i])
        }
    }
}

isPeak(newArr,n)