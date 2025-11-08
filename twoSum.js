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
