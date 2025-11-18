/**
 * ============================================================================
 * GET LAST N ELEMENTS OF ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Write a JavaScript function to get the last element of an array. 
 * Passing the parameter 'n' will return the last 'n' elements of the array.
 * 
 * EXAMPLES:
 * Input: [7, 9, 0, -2], n = undefined
 * Output: -2
 * Explanation: Return last element
 * 
 * Input: [7, 9, 0, -2], n = 3
 * Output: [9, 0, -2]
 * Explanation: Return last 3 elements
 * 
 * Input: [7, 9, 0, -2], n = 6
 * Output: [7, 9, 0, -2]
 * Explanation: n > array length, return entire array
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use Array.slice() method!
 * - If no n, return last element
 * - If n provided, return last n elements
 * - If n > length, return entire array
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Using Array.slice() (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. If n is not provided, return last element
 * 2. If n >= array length, return entire array
 * 3. Otherwise, use slice to get last n elements
 * 
 * HOW SLICE WORKS:
 * arr.slice(start) → returns elements from start to end
 * arr.slice(-n) → returns last n elements
 * 
 * EXAMPLES:
 * 
 * [7, 9, 0, -2].slice(-3) → [9, 0, -2]
 *  0  1  2  3
 *        └──────┘ last 3 elements
 * 
 * [7, 9, 0, -2].slice(-1) → [-2]
 *  0  1  2  3
 *           └─ last 1 element
 * 
 * TIME COMPLEXITY: O(n)
 *   - slice() creates a new array with n elements
 * 
 * SPACE COMPLEXITY: O(n)
 *   - slice() returns a new array
 * 
 * WHY IT'S EFFICIENT:
 * - Built-in method (optimized)
 * - Clean and readable code
 * - Handles edge cases automatically
 * 
 * ============================================================================
 */
function last(arr, n) {
    // If n is not provided, return last element
    if (n === undefined) {
        return arr[arr.length - 1];
    }
    
    // If n is 0, return empty array
    if (n === 0) {
        return [];
    }
    
    // If n >= array length, return entire array
    if (n >= arr.length) {
        return arr;
    }
    
    // Return last n elements using slice
    return arr.slice(-n);
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * NEGATIVE INDEX IN SLICE:
 * arr.slice(-n) starts from (length - n) position
 * 
 * Example: [7, 9, 0, -2].slice(-3)
 * - Array length = 4
 * - Start position = 4 - 3 = 1
 * - Returns elements from index 1 to end: [9, 0, -2]
 * 
 * THREE CASES:
 * 1. n = undefined → return single element
 * 2. n >= length → return entire array
 * 3. Otherwise → return last n elements
 * 
 * ============================================================================
 * ALTERNATIVE APPROACHES
 * ============================================================================
 * 
 * APPROACH 1: Using Loop
 * ```javascript
 * function lastLoop(arr, n) {
 *     if (n === undefined) return arr[arr.length - 1];
 *     const result = [];
 *     const start = Math.max(0, arr.length - n);
 *     for (let i = start; i < arr.length; i++) {
 *         result.push(arr[i]);
 *     }
 *     return result;
 * }
 * ```
 * Time: O(n), but more code
 * 
 * APPROACH 2: Using splice (DESTRUCTIVE)
 * ```javascript
 * function lastSplice(arr, n) {
 *     // DON'T USE - modifies original array!
 *     return arr.splice(-n);
 * }
 * ```
 * ✗ Modifies original array
 * 
 * WINNER: Using slice() ⭐
 * Clean, non-destructive, efficient
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. ARRAY.SLICE():
 *    - Returns a shallow copy
 *    - Does NOT modify original array
 *    - Negative index counts from end
 * 
 * 2. EDGE CASES:
 *    - n = undefined → return single element
 *    - n = 0 → return empty array
 *    - n > length → return entire array
 * 
 * 3. SLICE VS SPLICE:
 *    - slice: NON-destructive, returns new array
 *    - splice: DESTRUCTIVE, modifies original
 *    - Always prefer slice for getting elements
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("GET LAST N ELEMENTS");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: last([7, 9, 0, -2])");
console.log("Output:", last([7, 9, 0, -2]));
console.log("Expected: -2");

console.log("\nTest Case 2:");
console.log("Input: last([7, 9, 0, -2], 3)");
console.log("Output:", last([7, 9, 0, -2], 3));
console.log("Expected: [9, 0, -2]");

// Export function
module.exports = { last };
