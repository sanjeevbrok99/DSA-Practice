/**
 * ============================================================================
 * CONTAINS DUPLICATE - Problem Solution with Detailed Explanations
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an integer array nums, return true if any value appears at least twice 
 * in the array, and return false if every element is distinct.
 * 
 * EXAMPLES:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation: The element 1 occurs at the indices 0 and 3.
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use a Set to remember what we've seen!
 * - If we see a number that's already in the Set → duplicate found!
 * - If we finish the loop without finding duplicates → all unique
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Hash Set (Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Use a Set to track seen numbers
 * 2. For each number:
 *    - If already in Set → duplicate found, return true
 *    - If not in Set → add it
 * 3. If loop completes → no duplicates, return false
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [1, 2, 3, 1]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, nums[0] = 1
 * ──────────────────────────────────────────────────────────────────────
 * Is 1 in seen? NO
 * Add 1 to seen
 * 
 * seen = {1}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, nums[1] = 2
 * ──────────────────────────────────────────────────────────────────────
 * Is 2 in seen? NO
 * Add 2 to seen
 * 
 * seen = {1, 2}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, nums[2] = 3
 * ──────────────────────────────────────────────────────────────────────
 * Is 3 in seen? NO
 * Add 3 to seen
 * 
 * seen = {1, 2, 3}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, nums[3] = 1
 * ──────────────────────────────────────────────────────────────────────
 * Is 1 in seen? YES! ✓
 * DUPLICATE FOUND!
 * Return true
 * 
 * ──────────────────────────────────────────────────────────────────────
 * EXAMPLE WITHOUT DUPLICATES:
 * ──────────────────────────────────────────────────────────────────────
 * Input: nums = [1, 2, 3, 4]
 * 
 * Process 1: seen = {1}
 * Process 2: seen = {1, 2}
 * Process 3: seen = {1, 2, 3}
 * Process 4: seen = {1, 2, 3, 4}
 * 
 * Loop completed, no duplicates found
 * Return false
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Set operations (has, add) are O(1)
 * 
 * SPACE COMPLEXITY: O(n)
 *   - Worst case: all elements are unique
 *   - Store all n elements in Set
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops (avoids O(n²))
 * - Set provides O(1) lookup
 * - Early return when duplicate found
 * 
 * ============================================================================
 */
function containsDuplicate(nums) {
    const seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) {
            return true;  // Duplicate found
        }
        seen.add(num);
    }
    
    return false;  // No duplicates
}

/**
 * ============================================================================
 * COMPARISON WITH OTHER APPROACHES
 * ============================================================================
 * 
 * APPROACH 1: Brute Force (Nested Loops)
 * ```javascript
 * for (let i = 0; i < nums.length; i++) {
 *   for (let j = i + 1; j < nums.length; j++) {
 *     if (nums[i] === nums[j]) return true;
 *   }
 * }
 * return false;
 * ```
 * Time: O(n²) - very slow
 * Space: O(1)
 * 
 * APPROACH 2: Sorting First
 * ```javascript
 * nums.sort((a, b) => a - b);
 * for (let i = 0; i < nums.length - 1; i++) {
 *   if (nums[i] === nums[i + 1]) return true;
 * }
 * return false;
 * ```
 * Time: O(n log n) - sorting takes time
 * Space: O(1)
 * 
 * APPROACH 3: Hash Set (Our Approach) ⭐
 * Time: O(n) - fastest!
 * Space: O(n)
 * 
 * WINNER: Hash Set approach! Best time complexity.
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. SET DATA STRUCTURE:
 *    - Stores unique values only
 *    - Fast lookup: O(1)
 *    - Fast insertion: O(1)
 * 
 * 2. EARLY RETURN:
 *    - Return as soon as duplicate found
 *    - Don't need to check rest of array
 * 
 * 3. SPACE VS TIME TRADEOFF:
 *    - Use extra space (Set) for faster time
 *    - Worth it for large arrays
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("CONTAINS DUPLICATE - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1,2,3,1]");
console.log("Output:", containsDuplicate([1,2,3,1]));
console.log("Expected: true");

console.log("\nTest Case 2:");
console.log("Input: [1,2,3,4]");
console.log("Output:", containsDuplicate([1,2,3,4]));
console.log("Expected: false");

// Export function
module.exports = { containsDuplicate };
