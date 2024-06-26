// Given an array arr[] of size n, its prefix sum array is another array prefixSum[] of the same size, such that the value of prefixSum[i] is arr[0] + arr[1] + arr[2] … arr[i].

// Examples : 

// Input  : arr[] = {10, 20, 10, 5, 15}
// Output : prefixSum[] = {10, 30, 40, 45, 60}
// Explanation : While traversing the array, update the element by adding it with its previous element.
// prefixSum[0] = 10, 
// prefixSum[1] = prefixSum[0] + arr[1] = 30, 
// prefixSum[2] = prefixSum[1] + arr[2] = 40 and so on.

// const prefixSum = (arr)=>{
//     let sum = arr[0]
//     for(i=1;i<arr.length;i++){
//         arr[i]= arr[i]+ sum
//         sum = arr[i]
//     }
//     console.log(arr)
// }

const prefixSum = (arr) =>{
    let newArr = new Array(arr.length);
    newArr[0] = arr[0];
    for(i=1;i<arr.length;i++){
        newArr[i] = newArr[i-1]+ arr[i]
    }
    console.log(newArr)
}

 const array = [11, 20, 10, 5, 15]
 prefixSum(array)