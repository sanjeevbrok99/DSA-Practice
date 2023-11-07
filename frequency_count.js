// Given a sorted array, arr[] consisting of N integers, the task is to find the frequencies of each array element.

// Examples: 

// Input: arr[] = {1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10} 
// Output: Frequency of 1 is: 3
//               Frequency of 2 is: 1
//               Frequency of 3 is: 2
//               Frequency of 5 is: 2
//               Frequency of 8 is: 3
//               Frequency of 9 is: 2
//               Frequency of 10 is: 1

// Input: arr[] = {2, 2, 6, 6, 7, 7, 7, 11} 
// Output:  Frequency of 2 is: 2
//               Frequency of 6 is: 2
//               Frequency of 7 is: 3
//               Frequency of 11 is: 1
              
        
function countElementOccurrences(arr) {
    for (let i = 0; i < arr.length; i++) {
      let count = 1; // Initialize the count to 1 for the current element
      if (arr[i] === null) continue; // Skip null elements
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
          arr[j] = null; // Mark the matched element as null to avoid counting it again
        }
      }
      if (count > 0) {
        console.log(`Frequency of ${arr[i]} is : ${count} times`);
      }
    }
  }
  
  const arr = [2, 2, 6, 6, 7, 7, 7, 11];
  countElementOccurrences(arr);
  
  
  
  
  
  