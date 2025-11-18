/**
 * ============================================================================
 * MAXIMUM SUBARRAY SUM (Kadane's Algorithm)
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an integer array nums, find the subarray with the largest sum, and 
 * return its sum.
 * 
 * EXAMPLES:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * Input: nums = [1]
 * Output: 1
 * 
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * 
 * ============================================================================
 * KEY INSIGHT - Kadane's Algorithm:
 * ============================================================================
 * At each position, we have a choice:
 * 1. Start a new subarray from this element
 * 2. Extend the previous subarray
 * 
 * Choose whichever gives a larger sum!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Kadane's Algorithm (Most Efficient - O(n))
 * ============================================================================
 * 
 * APPROACH:
 * 1. Track two variables:
 *    - currentSum: max sum ending at current position
 *    - maxSum: maximum sum found so far (global maximum)
 * 2. At each element:
 *    - Decide: start fresh OR extend previous subarray
 *    - currentSum = max(element, currentSum + element)
 *    - Update maxSum if currentSum is larger
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, nums[0] = -2
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(-2, -2) = -2
 * maxSum = max(-2, -2) = -2
 * 
 * Best subarray so far: [-2] with sum -2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, nums[1] = 1
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(1, -2 + 1) = max(1, -1) = 1
 *   Decision: Start fresh with 1 (better than extending -2)
 * maxSum = max(-2, 1) = 1
 * 
 * Best subarray so far: [1] with sum 1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, nums[2] = -3
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(-3, 1 + (-3)) = max(-3, -2) = -2
 *   Decision: Extend with -3 (gives -2, better than -3 alone)
 * maxSum = max(1, -2) = 1
 * 
 * Best subarray so far: [1] with sum 1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, nums[3] = 4
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(4, -2 + 4) = max(4, 2) = 4
 *   Decision: Start fresh with 4 (better than 2)
 * maxSum = max(1, 4) = 4
 * 
 * Best subarray so far: [4] with sum 4
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, nums[4] = -1
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(-1, 4 + (-1)) = max(-1, 3) = 3
 *   Decision: Extend (4, -1) gives 3
 * maxSum = max(4, 3) = 4
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5, nums[5] = 2
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(2, 3 + 2) = max(2, 5) = 5
 *   Decision: Extend (4, -1, 2) gives 5
 * maxSum = max(4, 5) = 5
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 6, nums[6] = 1
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(1, 5 + 1) = max(1, 6) = 6
 *   Decision: Extend (4, -1, 2, 1) gives 6
 * maxSum = max(5, 6) = 6
 * 
 * Best subarray: [4, -1, 2, 1] with sum 6 ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 7, nums[7] = -5
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(-5, 6 + (-5)) = max(-5, 1) = 1
 * maxSum = max(6, 1) = 6
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 8, nums[8] = 4
 * ──────────────────────────────────────────────────────────────────────
 * currentSum = max(4, 1 + 4) = max(4, 5) = 5
 * maxSum = max(6, 5) = 6
 * 
 * FINAL: Maximum subarray sum = 6 ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops
 * - Single pass
 * - Optimal solution
 * 
 * ============================================================================
 */
function maxSubArray(nums) {
    let currentSum = nums[0];  // Max sum ending at current position
    let maxSum = nums[0];      // Global maximum sum
    
    for (let i = 1; i < nums.length; i++) {
        // Decision: Start fresh or extend previous subarray?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update global maximum if we found a better sum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * At each position, we ask: "Should I include this element in my subarray?"
 * 
 * If currentSum + nums[i] < nums[i]:
 *   - The previous subarray is dragging us down
 *   - Better to start fresh from nums[i]
 * 
 * If currentSum + nums[i] >= nums[i]:
 *   - The previous subarray is helping
 *   - Keep extending it
 * 
 * Example: [-2, 1, -3, 4]
 *   - At 1: Previous -2 drags us down, start fresh
 *   - At 4: Previous [1, -3] = -2 drags us down, start fresh with 4
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Check all subarrays):
 * ```javascript
 * let maxSum = -Infinity;
 * for (let i = 0; i < nums.length; i++) {
 *   let sum = 0;
 *   for (let j = i; j < nums.length; j++) {
 *     sum += nums[j];
 *     maxSum = Math.max(maxSum, sum);
 *   }
 * }
 * ```
 * Time: O(n²) - nested loops
 * 
 * KADANE'S ALGORITHM:
 * Time: O(n) - single pass ⭐
 * 
 * WINNER: Kadane's Algorithm! Much faster.
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. KADANE'S ALGORITHM:
 *    - Dynamic programming approach
 *    - Track max sum ending at each position
 *    - O(n) time, O(1) space
 * 
 * 2. DECISION AT EACH STEP:
 *    - Start new subarray OR extend previous
 *    - Choose based on which gives larger sum
 * 
 * 3. HANDLING NEGATIVE NUMBERS:
 *    - Works even with all negative numbers
 *    - Returns the largest (least negative) number
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("MAXIMUM SUBARRAY SUM (Kadane's Algorithm)");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [-2,1,-3,4,-1,2,1,-5,4]");
console.log("Output:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log("Expected: 6");

console.log("\nTest Case 2:");
console.log("Input: [5,4,-1,7,8]");
console.log("Output:", maxSubArray([5,4,-1,7,8]));
console.log("Expected: 23");

// Export function
module.exports = { maxSubArray };
