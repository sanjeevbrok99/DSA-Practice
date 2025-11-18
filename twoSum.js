/**
 * ============================================================================
 * TWO SUM - Problem Solution with Detailed Explanations
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of integers nums and an integer target, return indices of the 
 * two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may 
 * not use the same element twice. You can return the answer in any order.
 * 
 * EXAMPLES:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 * 
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Instead of checking every pair (O(n²)), use a hash map to remember what 
 * we've seen and find the complement in O(1) time!
 * 
 * For each number, calculate: complement = target - current number
 * If complement exists in our map, we found the pair!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Hash Map (One Pass - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Use a Map to store: value → index
 * 2. For each number, calculate what we need: need = target - current
 * 3. Check if we've already seen "need" in our map
 * 4. If yes, return [old index, current index]
 * 5. If no, store current number and index for future
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [2, 7, 11, 15], target = 9
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, nums[0] = 2
 * ──────────────────────────────────────────────────────────────────────
 * need = target - nums[0] = 9 - 2 = 7
 * Is 7 in map? NO
 * Store: map.set(2, 0)  // value 2 is at index 0
 * 
 * Map: {2 → 0}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, nums[1] = 7
 * ──────────────────────────────────────────────────────────────────────
 * need = target - nums[1] = 9 - 7 = 2
 * Is 2 in map? YES! (at index 0)
 * Found pair: [0, 1] ✓
 * 
 * Return: [0, 1]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * WHY IT WORKS:
 * ──────────────────────────────────────────────────────────────────────
 * When we see 7, we need 2 to make 9
 * We already saw 2 at index 0
 * So indices [0, 1] give us 2 + 7 = 9 ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Map lookup/insert is O(1)
 * 
 * SPACE COMPLEXITY: O(n)
 *   - Worst case: store all elements in map
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops (avoids O(n²))
 * - Hash map gives O(1) lookup
 * - Single pass through array
 */
function twoSum(nums, target) {
    // Map stores: value → index
    const seen = new Map();
    
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

/**
 * ============================================================================
 * DETAILED WALKTHROUGH WITH ANOTHER EXAMPLE
 * ============================================================================
 * 
 * Input: nums = [3, 2, 4], target = 6
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, nums[0] = 3
 * ──────────────────────────────────────────────────────────────────────
 * val = 3
 * need = 6 - 3 = 3
 * Is 3 in map? NO (map is empty)
 * Store: map.set(3, 0)
 * 
 * Map: {3 → 0}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, nums[1] = 2
 * ──────────────────────────────────────────────────────────────────────
 * val = 2
 * need = 6 - 2 = 4
 * Is 4 in map? NO
 * Store: map.set(2, 1)
 * 
 * Map: {3 → 0, 2 → 1}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, nums[2] = 4
 * ──────────────────────────────────────────────────────────────────────
 * val = 4
 * need = 6 - 4 = 2
 * Is 2 in map? YES! (at index 1)
 * Found pair: [1, 2] ✓
 * 
 * Return: [1, 2]
 * Verification: nums[1] + nums[2] = 2 + 4 = 6 ✓
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Nested Loops):
 * ```javascript
 * for (let i = 0; i < nums.length; i++) {
 *   for (let j = i + 1; j < nums.length; j++) {
 *     if (nums[i] + nums[j] === target) {
 *       return [i, j];
 *     }
 *   }
 * }
 * ```
 * Time: O(n²) - checks every pair
 * Space: O(1) - no extra space
 * 
 * OUR APPROACH (Hash Map):
 * Time: O(n) - single pass ⭐
 * Space: O(n) - stores seen values
 * 
 * WINNER: Hash Map approach! Much faster for large arrays.
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. HASH MAP PATTERN:
 *    - Store what we've seen
 *    - Check if complement exists
 *    - O(1) lookup time!
 * 
 * 2. COMPLEMENT LOGIC:
 *    - If we need target, and we have val
 *    - Then we need: target - val
 *    - Example: target=9, val=2 → need=7
 * 
 * 3. SINGLE PASS:
 *    - Don't need to iterate twice
 *    - Store and check in same loop
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("TWO SUM - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: nums = [2,7,11,15], target = 9");
console.log("Output:", twoSum([2,7,11,15], 9));
console.log("Expected: [0, 1]");

console.log("\nTest Case 2:");
console.log("Input: nums = [3,2,4], target = 6");
console.log("Output:", twoSum([3,2,4], 6));
console.log("Expected: [1, 2]");

// Export function
module.exports = { twoSum };
