/**
 * ============================================================================
 * PREFIX SUM ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array arr[] of size n, create a prefix sum array where each 
 * element prefixSum[i] = arr[0] + arr[1] + ... + arr[i].
 * 
 * EXAMPLES:
 * Input: [10, 20, 10, 5, 15]
 * Output: [10, 30, 40, 45, 60]
 * Explanation:
 *   prefixSum[0] = 10
 *   prefixSum[1] = 10 + 20 = 30
 *   prefixSum[2] = 30 + 10 = 40
 *   prefixSum[3] = 40 + 5 = 45
 *   prefixSum[4] = 45 + 15 = 60
 * 
 * Input: [1, 2, 3, 4, 5]
 * Output: [1, 3, 6, 10, 15]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use previous prefix sum to calculate current!
 * prefixSum[i] = prefixSum[i-1] + arr[i]
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Build Prefix Sum (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Create new array of same size
 * 2. First element = arr[0]
 * 3. For each i: prefixSum[i] = prefixSum[i-1] + arr[i]
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [10, 20, 10, 5, 15]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0
 * ──────────────────────────────────────────────────────────────────────
 * prefixSum[0] = arr[0] = 10
 * prefixSum = [10, _, _, _, _]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1
 * ──────────────────────────────────────────────────────────────────────
 * prefixSum[1] = prefixSum[0] + arr[1] = 10 + 20 = 30
 * prefixSum = [10, 30, _, _, _]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2
 * ──────────────────────────────────────────────────────────────────────
 * prefixSum[2] = prefixSum[1] + arr[2] = 30 + 10 = 40
 * prefixSum = [10, 30, 40, _, _]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3
 * ──────────────────────────────────────────────────────────────────────
 * prefixSum[3] = prefixSum[2] + arr[3] = 40 + 5 = 45
 * prefixSum = [10, 30, 40, 45, _]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4
 * ──────────────────────────────────────────────────────────────────────
 * prefixSum[4] = prefixSum[3] + arr[4] = 45 + 15 = 60
 * prefixSum = [10, 30, 40, 45, 60] ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 * 
 * SPACE COMPLEXITY: O(n)
 *   - New array of size n
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass
 * - Each element calculated once
 * - No nested loops
 * 
 * ============================================================================
 */
function prefixSum(arr) {
    const n = arr.length;
    if (n === 0) return [];
    
    const result = new Array(n);
    
    // First element stays same
    result[0] = arr[0];
    
    // Each element = previous sum + current element
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] + arr[i];
    }
    
    return result;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * PREFIX SUM DEFINITION:
 * prefixSum[i] = sum of all elements from index 0 to i
 * 
 * KEY OBSERVATION:
 * prefixSum[i] = prefixSum[i-1] + arr[i]
 * 
 * Why? Because:
 * - prefixSum[i-1] already contains sum of elements 0 to i-1
 * - Just add current element arr[i] to get sum up to i
 * 
 * VISUAL EXAMPLE:
 * arr = [10, 20, 10, 5, 15]
 * 
 * prefixSum[0] = 10
 * prefixSum[1] = 10 + 20 = 30 (use previous sum!)
 * prefixSum[2] = 30 + 10 = 40 (use previous sum!)
 * prefixSum[3] = 40 + 5 = 45 (use previous sum!)
 * prefixSum[4] = 45 + 15 = 60 (use previous sum!)
 * 
 * ============================================================================
 * USE CASES OF PREFIX SUM
 * ============================================================================
 * 
 * Prefix sum is extremely useful for:
 * 
 * 1. RANGE SUM QUERIES:
 *    Find sum of elements from index L to R in O(1) time
 *    sum(L, R) = prefixSum[R] - prefixSum[L-1]
 * 
 *    Example: Sum from index 1 to 3 in [10, 20, 10, 5, 15]
 *    prefixSum = [10, 30, 40, 45, 60]
 *    sum(1, 3) = prefixSum[3] - prefixSum[0] = 45 - 10 = 35 ✓
 *    (20 + 10 + 5 = 35)
 * 
 * 2. SUBARRAY SUM PROBLEMS:
 *    - Check if subarray sum equals k
 *    - Count subarrays with given sum
 * 
 * 3. EQUILIBRIUM INDEX:
 *    - Find index where left sum = right sum
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. PREFIX SUM TECHNIQUE:
 *    - Precompute cumulative sums
 *    - Answer range queries in O(1)
 *    - Build in O(n), query in O(1)
 * 
 * 2. DYNAMIC PROGRAMMING:
 *    - Use previous result to compute current
 *    - Avoid recalculating from scratch
 * 
 * 3. TRADE-OFF:
 *    - Space: O(n) - store prefix array
 *    - Time: O(1) for each query
 *    - Worth it for multiple queries!
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("PREFIX SUM ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [10, 20, 10, 5, 15]");
console.log("Output:", prefixSum([10, 20, 10, 5, 15]));
console.log("Expected: [10, 30, 40, 45, 60]");

console.log("\nTest Case 2:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", prefixSum([1, 2, 3, 4, 5]));
console.log("Expected: [1, 3, 6, 10, 15]");

// Export function
module.exports = { prefixSum };
