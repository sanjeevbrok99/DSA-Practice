// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums, target) {
  const seen = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const need = target - val;

    // If we've already seen the needed value, we have our answer
    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    // Otherwise remember this value's index for later
    seen.set(val, i);
  }

  // By problem statement there is exactly one solution, so we never get here
  return [];
}
