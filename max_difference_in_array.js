/**
 * ============================================================================
 * MAXIMUM DIFFERENCE IN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array arr[] of integers, find the maximum difference between any 
 * two elements such that the larger element appears after the smaller element.
 * Maximum difference = arr[j] - arr[i] where j > i
 * 
 * EXAMPLES:
 * Input: [2, 3, 10, 6, 4, 8, 1]
 * Output: 8
 * Explanation: Maximum difference is 10 - 2 = 8
 * 
 * Input: [7, 9, 5, 6, 3, 2]
 * Output: 2
 * Explanation: Maximum difference is 9 - 7 = 2
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Track minimum element seen so far!
 * For each element, calculate: current - min_so_far
 * Keep track of maximum difference
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass with Min Tracking (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Initialize minElement with first element
 * 2. Initialize maxDiff with arr[1] - arr[0]
 * 3. For each element:
 *    - Calculate difference with minElement
 *    - Update maxDiff if larger
 *    - Update minElement if current is smaller
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [2, 3, 10, 6, 4, 8, 1]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, arr[0] = 2
 * ──────────────────────────────────────────────────────────────────────
 * minElement = 2
 * maxDiff = arr[1] - arr[0] = 3 - 2 = 1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, arr[1] = 3
 * ──────────────────────────────────────────────────────────────────────
 * difference = 3 - 2 = 1
 * maxDiff = max(1, 1) = 1
 * minElement = min(2, 3) = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, arr[2] = 10
 * ──────────────────────────────────────────────────────────────────────
 * difference = 10 - 2 = 8
 * maxDiff = max(1, 8) = 8 ✓ (NEW MAX!)
 * minElement = min(2, 10) = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, arr[3] = 6
 * ──────────────────────────────────────────────────────────────────────
 * difference = 6 - 2 = 4
 * maxDiff = max(8, 4) = 8
 * minElement = min(2, 6) = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, arr[4] = 4
 * ──────────────────────────────────────────────────────────────────────
 * difference = 4 - 2 = 2
 * maxDiff = max(8, 2) = 8
 * minElement = min(2, 4) = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5, arr[5] = 8
 * ──────────────────────────────────────────────────────────────────────
 * difference = 8 - 2 = 6
 * maxDiff = max(8, 6) = 8
 * minElement = min(2, 8) = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 6, arr[6] = 1
 * ──────────────────────────────────────────────────────────────────────
 * difference = 1 - 2 = -1 (negative!)
 * maxDiff = max(8, -1) = 8
 * minElement = min(2, 1) = 1 (new minimum)
 * 
 * Final maxDiff = 8 ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass
 * - No nested loops
 * - Optimal solution
 * 
 * ============================================================================
 */
function maxDifference(arr) {
    const n = arr.length;
    if (n < 2) return 0;
    
    // Initialize with first element
    let minElement = arr[0];
    let maxDiff = arr[1] - arr[0];
    
    // Iterate from second element
    for (let i = 1; i < n; i++) {
        // Calculate difference if we sell at current price
        const currentDiff = arr[i] - minElement;
        
        // Update maximum difference
        if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
        }
        
        // Update minimum element seen so far
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    
    return maxDiff;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * CONSTRAINT: j > i (larger element must come after)
 * We want: max(arr[j] - arr[i]) where j > i
 * 
 * KEY OBSERVATION:
 * For maximum difference at position j:
 * - We need smallest element before j
 * - arr[j] - (smallest element before j)
 * 
 * STRATEGY:
 * - Track minimum element seen so far
 * - For each element, calculate difference with this minimum
 * - Keep track of maximum difference
 * 
 * VISUAL EXAMPLE:
 * [2, 3, 10, 6, 4, 8, 1]
 *  ↑     ↑
 *  min   max difference = 10 - 2 = 8
 * 
 * At index 2 (value 10):
 * - Minimum before it is 2
 * - Difference: 10 - 2 = 8 ✓
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Nested Loops):
 * ```javascript
 * function maxDiffBruteForce(arr) {
 *     let maxDiff = 0;
 *     for (let i = 0; i < arr.length; i++) {
 *         for (let j = i + 1; j < arr.length; j++) {
 *             maxDiff = Math.max(maxDiff, arr[j] - arr[i]);
 *         }
 *     }
 *     return maxDiff;
 * }
 * ```
 * Time: O(n²) ✗ Too slow
 * 
 * OPTIMIZED (Min Tracking):
 * Time: O(n) ✓
 * Space: O(1) ✓
 * 
 * WINNER: Min tracking approach! ⭐
 * 
 * ============================================================================
 * SIMILAR TO:
 * ============================================================================
 * 
 * This problem is similar to "Best Time to Buy and Sell Stock":
 * - Buy at minimum price (seen so far)
 * - Sell at current price
 * - Maximize profit
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. MINIMUM TRACKING:
 *    - Keep track of minimum seen so far
 *    - Calculate difference with current element
 *    - Update maximum difference
 * 
 * 2. ORDER CONSTRAINT:
 *    - Larger element must come after smaller
 *    - Can't look ahead, only look back
 *    - Single left-to-right pass works
 * 
 * 3. NEGATIVE DIFFERENCES:
 *    - Possible if array is decreasing
 *    - Still update minimum
 *    - May find positive difference later
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("MAXIMUM DIFFERENCE IN ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [2, 3, 10, 6, 4, 8, 1]");
console.log("Output:", maxDifference([2, 3, 10, 6, 4, 8, 1]));
console.log("Expected: 8");

console.log("\nTest Case 2:");
console.log("Input: [7, 9, 5, 6, 3, 2]");
console.log("Output:", maxDifference([7, 9, 5, 6, 3, 2]));
console.log("Expected: 2");

// Export function
module.exports = { maxDifference };
