/**
 * ============================================================================
 * FIND MINIMUM AND MAXIMUM IN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Program to find the minimum and maximum element of an array.
 * 
 * EXAMPLES:
 * Input: [1, 423, 6, 46, 34, 23, 13, 53, 4]
 * Output: { min: 1, max: 423 }
 * 
 * Input: [10]
 * Output: { min: 10, max: 10 }
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Single pass through array!
 * - Track min and max as we iterate
 * - Update them when we find smaller/larger elements
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Initialize min and max with first element
 * 2. Iterate through array
 * 3. Update min if current < min
 * 4. Update max if current > max
 * 5. Return both min and max
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [1, 423, 6, 46, 34, 23, 13, 53, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, arr[0] = 1
 * ──────────────────────────────────────────────────────────────────────
 * min = 1, max = 1 (initialize)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, arr[1] = 423
 * ──────────────────────────────────────────────────────────────────────
 * Is 423 < min (1)? NO
 * Is 423 > max (1)? YES → max = 423
 * Current: min = 1, max = 423
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, arr[2] = 6
 * ──────────────────────────────────────────────────────────────────────
 * Is 6 < min (1)? NO
 * Is 6 > max (423)? NO
 * Current: min = 1, max = 423
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, arr[3] = 46
 * ──────────────────────────────────────────────────────────────────────
 * Is 46 < min (1)? NO
 * Is 46 > max (423)? NO
 * Current: min = 1, max = 423
 * 
 * ... continue for remaining elements ...
 * 
 * Final: min = 1, max = 423 ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Visit each element once
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass
 * - No sorting needed
 * - Optimal solution
 * 
 * ============================================================================
 */
function findMinAndMax(arr) {
    if (arr.length === 0) {
        return { min: null, max: null };
    }
    
    // Initialize with first element
    let min = arr[0];
    let max = arr[0];
    
    // Iterate through array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return { min, max };
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * SIMPLE TRACKING:
 * - Keep track of smallest and largest seen so far
 * - Compare each element with current min and max
 * - Update if we find smaller or larger element
 * 
 * EXAMPLE VISUALIZATION:
 * [1, 423, 6, 46, 34]
 * 
 * Start: min=1, max=1
 * See 423: min=1, max=423 (423 > 1)
 * See 6: min=1, max=423 (6 is between)
 * See 46: min=1, max=423 (46 is between)
 * See 34: min=1, max=423 (34 is between)
 * 
 * Final: min=1, max=423 ✓
 * 
 * ============================================================================
 * COMPARISON WITH OTHER APPROACHES
 * ============================================================================
 * 
 * APPROACH 1: Sorting
 * ```javascript
 * function minMaxSorting(arr) {
 *     arr.sort((a, b) => a - b);
 *     return { min: arr[0], max: arr[arr.length - 1] };
 * }
 * ```
 * Time: O(n log n) ✗ Slower
 * Also modifies original array
 * 
 * APPROACH 2: Math.min/Math.max with spread
 * ```javascript
 * function minMaxMath(arr) {
 *     return {
 *         min: Math.min(...arr),
 *         max: Math.max(...arr)
 *     };
 * }
 * ```
 * Time: O(n) ✓
 * But iterates array twice
 * 
 * APPROACH 3: Single Pass (Our Solution)
 * Time: O(n) ✓
 * Single iteration ⭐
 * 
 * WINNER: Single pass approach!
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. SINGLE PASS OPTIMIZATION:
 *    - Find both min and max in one iteration
 *    - More efficient than two separate passes
 * 
 * 2. INITIALIZATION:
 *    - Start with first element as both min and max
 *    - Avoids issues with Infinity/-Infinity
 * 
 * 3. EDGE CASES:
 *    - Empty array: return null
 *    - Single element: same element is min and max
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("FIND MINIMUM AND MAXIMUM IN ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1, 423, 6, 46, 34, 23, 13, 53, 4]");
console.log("Output:", findMinAndMax([1, 423, 6, 46, 34, 23, 13, 53, 4]));
console.log("Expected: { min: 1, max: 423 }");

console.log("\nTest Case 2:");
console.log("Input: [10]");
console.log("Output:", findMinAndMax([10]));
console.log("Expected: { min: 10, max: 10 }");

// Export function
module.exports = { findMinAndMax };
