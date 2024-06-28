// Maximum Subarray Sum

// Given an array arr[], the task is to find the elements of a contiguous subarray of numbers that has the largest sum.

// Examples:

// Input: arr = [-2, -3, 4, -1, -2, 1, 5, -3]
// Output: [4, -1, -2, 1, 5]
// Explanation: 
// In the above input the maximum contiguous subarray sum is 7 and the elements of the subarray are [4, -1, -2, 1, 5]

// Input: arr = [-2, -5, 6, -2, -3, 1, 5, -6] 
// Output: [6, -2, -3, 1, 5] 
// Explanation: 
// In the above input the maximum contiguous subarray sum is 7 and the elements 
// of the subarray are [6, -2, -3, 1, 5]

// Naive Approach: The naive approach is to generate all the possible subarray and print that subarray which has maximum sum. 
// Time complexity: O(N2)
// Auxiliary Space: O(1)

// Efficient Approach: The idea is to use the Kadane’s Algorithm to find the maximum subarray sum and store the starting and ending index of the subarray having maximum sum and print the subarray from starting index to ending index. Below are the steps:

// Initialize 3 variables endIndex to 0, currMax, and globalMax to first value of the input array.
// For each element in the array starting from index(say i) 1, update currMax to max(nums[i], nums[i] + currMax) and globalMax and endIndex to i only if currMax > globalMax.
// To find the start index, iterate from endIndex in the left direction and keep decrementing the value of globalMax until it becomes 0. The point at which it becomes 0 is the start index.
// Now print the subarray between [start, end].



// const maxSubArr = (arr)=>{
//     let maxi = Number.MIN_SAFE_INTEGER; // maximum sum
//     const n = arr.length
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             // subarray = arr[i.....j]
//             let sum = 0;

//             //add all the elements of subarray:
//             for (let k = i; k <= j; k++) {
//                 sum += arr[k];
//             }

//             maxi = Math.max(maxi, sum);
//         }
//     }

//     return maxi;
// }

function maxSubarraySum(arr, n) {
    let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // current subarray = arr[i.....j]

            //add the current element arr[j]
            // to the sum i.e. sum of arr[i...j-1]
            sum += arr[j];

            maxi = Math.max(maxi, sum); // getting the maximum
        }
    }

    return maxi;
}








const maxSubArr = (arr)=>{
    const n =  arr.length;
    let max_end_here = arr[0];
    let max_so_far = arr[0]

    for(let i=1;i<n;i++){
        max_end_here = Math.max(arr[i],max_end_here + arr[i])
        max_so_far = Math.max(max_so_far,max_end_here)
        console.log(max_so_far)

        }
    console.log(max_so_far)
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArr(array)
