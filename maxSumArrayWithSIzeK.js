/**
 * ============================================================================
 * MAXIMUM SUM SUBARRAY OF SIZE K - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of integers arr[] and an integer k, find the maximum 
 * possible sum among all contiguous subarrays of size exactly k.
 * 
 * EXAMPLES:
 * Input: arr = [100, 200, 300, 400], k = 2
 * Output: 700
 * Explanation: Maximum sum from subarray [300, 400]
 * 
 * Input: arr = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
 * Output: 39
 * Explanation: Maximum sum from subarray [4, 2, 10, 23]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use SLIDING WINDOW technique!
 * - Calculate sum of first k elements
 * - Slide window: remove leftmost, add rightmost
 * - Track maximum sum
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Sliding Window (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Calculate sum of first k elements (initial window)
 * 2. Slide window one position at a time:
 *    - Add new element entering window
 *    - Remove element leaving window
 * 3. Track maximum sum seen
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: arr = [100, 200, 300, 400], k = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 1: Calculate first window sum
 * ──────────────────────────────────────────────────────────────────────
 * Window: [100, 200]
 * windowSum = 100 + 200 = 300
 * maxSum = 300
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 2: Slide window to [200, 300]
 * ──────────────────────────────────────────────────────────────────────
 * Remove arr[0] = 100
 * Add arr[2] = 300
 * windowSum = 300 - 100 + 300 = 500
 * maxSum = max(300, 500) = 500
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 3: Slide window to [300, 400]
 * ──────────────────────────────────────────────────────────────────────
 * Remove arr[1] = 200
 * Add arr[3] = 400
 * windowSum = 500 - 200 + 400 = 700
 * maxSum = max(500, 700) = 700 ✓
 * 
 * Final: Maximum sum = 700
 * 
 * ──────────────────────────────────────────────────────────────────────
 * VISUAL REPRESENTATION:
 * ──────────────────────────────────────────────────────────────────────
 * arr = [100, 200, 300, 400], k = 2
 * 
 * Window 1: [100, 200] → sum = 300
 *            └────┘
 * 
 * Window 2: [100, 200, 300] → sum = 500
 *                 └────┘
 * 
 * Window 3: [100, 200, 300, 400] → sum = 700 ✓
 *                      └────┘
 * 
 * TIME COMPLEXITY: O(n)
 *   - Calculate first window: O(k)
 *   - Slide window n-k times: O(n-k)
 *   - Total: O(k) + O(n-k) = O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use few variables
 * 
 * WHY IT'S EFFICIENT:
 * - Each element added once, removed once
 * - No recalculation from scratch
 * - Optimal solution
 * 
 * ============================================================================
 */
function maxSumSubarray(arr, k) {
    const n = arr.length;
    
    // Edge case: array smaller than k
    if (n < k) return null;
    
    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let maxSum = windowSum;
    
    // Slide the window from start to end
    for (let i = k; i < n; i++) {
        // Add new element entering window, remove element leaving window
        windowSum = windowSum + arr[i] - arr[i - k];
        
        // Update maximum sum
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * SLIDING WINDOW CONCEPT:
 * Imagine a window of size k sliding across the array:
 * 
 * [100, 200, 300, 400]
 *  └────┘              Window 1: sum = 300
 *       └────┘         Window 2: sum = 500
 *            └────┘    Window 3: sum = 700
 * 
 * EFFICIENCY TRICK:
 * Instead of recalculating sum each time:
 * New sum = Old sum - element leaving + element entering
 * 
 * Example: From [100,200] to [200,300]
 * New sum = 300 - 100 + 300 = 500
 * Only 2 operations instead of k additions!
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Recalculate each window):
 * ```javascript
 * function maxSumBruteForce(arr, k) {
 *     let maxSum = -Infinity;
 *     for (let i = 0; i <= arr.length - k; i++) {
 *         let currentSum = 0;
 *         for (let j = 0; j < k; j++) {
 *             currentSum += arr[i + j];
 *         }
 *         maxSum = Math.max(maxSum, currentSum);
 *     }
 *     return maxSum;
 * }
 * ```
 * Time: O(n * k) ✗ Slower for large k
 * 
 * SLIDING WINDOW:
 * Time: O(n) ✓
 * Space: O(1) ✓
 * 
 * WINNER: Sliding Window! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. SLIDING WINDOW TECHNIQUE:
 *    - Fixed or variable size window
 *    - Slide across array
 *    - Update incrementally
 *    - Very efficient pattern
 * 
 * 2. INCREMENTAL UPDATE:
 *    - Don't recalculate from scratch
 *    - Add new, remove old
 *    - Reuse previous computation
 * 
 * 3. COMMON APPLICATIONS:
 *    - Maximum/minimum sum of k elements
 *    - Average of k elements
 *    - Longest substring with condition
 *    - Many subarray problems
 * 
 * 4. WINDOW SIZE:
 *    - Fixed size k (this problem)
 *    - Variable size (other problems)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("MAXIMUM SUM SUBARRAY OF SIZE K");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: arr = [100, 200, 300, 400], k = 2");
console.log("Output:", maxSumSubarray([100, 200, 300, 400], 2));
console.log("Expected: 700");

console.log("\nTest Case 2:");
console.log("Input: arr = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4");
console.log("Output:", maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log("Expected: 39");

// Export function
module.exports = { maxSumSubarray };
