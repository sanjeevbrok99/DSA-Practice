// Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 

// Examples : 

// Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
// Output : 4
// Explanation: The frequency of 4 is 5 which is greater than the half of the size of the array size. 

// Input : {3, 3, 4, 2, 4, 4, 2, 4}
// Output : No Majority Element
// Explanation: There is no element whose frequency is greater than the half of the size of the array size.

// The basic solution is to have two loops and keep track of the maximum count for all different elements. If the maximum count becomes greater than n/2 then break the loops and return the element having the maximum count. If the maximum count doesn’t become more than n/2 then the majority element doesn’t exist.

const majorityElement  = (arr)=>{
    let maxCount = 0;
    let index = -1
    for (let i=0; i<arr.length; i++){
        let count = 0;

        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++;
                if(count>maxCount){
                    maxCount = count;
                    index = i;
                }
            }
        }
       
    }
    if(maxCount>arr.length/2){
        console.log(maxCount)
        console.log(arr[index])
    }else{
        console.log("No Majority Element")
    }

}
let array = [3, 3, 4, 2, 4, 4, 2, 4, 4]
majorityElement(array)

// Majority Element Using Moore’s Voting Algorithm:
// This is a two-step process:

// The first step gives the element that may be the majority element in the array. If there is a majority element in an array, then this step will definitely return majority element, otherwise, it will return candidate for majority element.
// Check if the element obtained from the above step is the majority element. This step is necessary as there might be no majority element. 