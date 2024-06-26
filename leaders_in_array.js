// // Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

// // For example:

// // Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// // Output: 17, 5, 2

// // Input: arr[] = {1, 2, 3, 4, 5, 2}, 
// // Output: 5, 2

// const func = (arr)=>{
//     let a = []
//     let first_leader = arr[arr.length-1]
//     console.log(first_leader)
//     a.push(first_leader)
//     for(let i = arr.length-2;i>=0;i--){
//         if(first_leader<arr[i])
//     {
//          first_leader = arr[i]
//          a.push(first_leader)
//         console.log(first_leader)
//     }
       
        
        
//         // let j;
//         // for( j =i+1;j<arr.length;j++){
//         //     if(arr[i]<=arr[j])
//         //     break
//         // }
//         // if( j == arr.length)
        
//         // console.log(arr[i])
        
//     }return console.log(a)

// }
// let array = [16, 17, 4, 3, 5, 2]
// func(array)
// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2}, 
// Output: 5, 2

// Naive Approach: The problem can be solved based on the idea mentioned below:

// Use two loops. The outer loop runs from 0 to size – 1 and one by one pick all elements from left to right. The inner loop compares the picked element to all the elements on its right side. If the picked element is greater than all the elements to its right side, then the picked element is the leader. 

// Follow the below steps to implement the idea:

// We run a loop from the first index to the 2nd last index.
// And for each index, we run another loop from the next index to the last index.
// If all the values to the right of that index are smaller than the index, we simply add the value in our answer data structure. 

const leadersInArray =(arr ) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let isLeader = true;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                isLeader = false;
                break; // Break out of the loop if any element to the right is greater
            }
        }
        if (isLeader) {
            console.log(arr[i]);
        }

}
}
let array = [16, 17, 4, 3, 5, 2]
leadersInArray(array)