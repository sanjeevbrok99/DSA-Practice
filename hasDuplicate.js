// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// give me most efficient solution for this

function containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;     // duplicate found
    }
    seen.add(num);
  }

  return false;        // no duplicates
}

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4]));