// Given an array of integers arr[] and an integer k, find the maximum possible sum among all contiguous subarrays of size exactly k.
// A subarray is a sequence of consecutive elements from the original array. Return the maximum sum that can be obtained from any such subarray of length k.

// Examples: 

// Input  : arr[] = [100, 200, 300, 400],  k = 2
// Output : 700
// Explanation: We get maximum sum by adding subarray [300,400] of size 2

// Input  : arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4 
// Output : 39
// Explanation: We get maximum sum by adding subarray [4, 2, 10, 23] of size 4.

// Input  : arr[] = [2, 3], k = 1
// Output : 3
// Explanation: The subarrays of size 1 are [2] and [3]. The maximum sum is 3.


function maxSumArr(arr,k){
    const n = arr.length

    let windowSum = 0
    for(let i=0;i<k;i++){
        windowSum += arr[i]
    }
    let maxsum = windowSum

    for(i=k;i<n;i++){
        windowSum += arr[i] - arr[i-k]
        maxsum = Math.max(maxsum,windowSum)
    }

//     for(let i = 0;i<=n-k;i++){
//         let cursum = 0
//         for(let j=0;j<k;j++){
//             cursum += arr[i + j];
//     }
//         maxsum = Math.max(maxsum, cursum)
// }
    return maxsum

}
const arr =  [100, 200, 300, 400],  k = 2
console.log(maxSumArr(arr,k))
