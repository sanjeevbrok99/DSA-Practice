/**
 * ============================================================================
 * FIND ALL OCCURRENCES OF ELEMENT - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array and a target element, find all indices where the element 
 * occurs in the array.
 * 
 * EXAMPLES:
 * Input: array = [10, 8, 2, 31, 10, 1, 65, 10], element = 10
 * Output: [0, 4, 7]
 * Explanation: 10 appears at indices 0, 4, and 7
 * 
 * Input: array = [1, 2, 3, 4, 5], element = 3
 * Output: [2]
 * Explanation: 3 appears only at index 2
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Single pass through array!
 * - Check each element
 * - If it matches target, store its index
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Create empty array for indices
 * 2. Iterate through array
 * 3. When element matches target, add index to result
 * 4. Return all indices
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: array = [10, 8, 2, 31, 10, 1, 65, 10], element = 10
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, array[0] = 10
 * ──────────────────────────────────────────────────────────────────────
 * Is 10 === 10? YES! ✓
 * Add index 0 to indices: [0]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, array[1] = 8
 * ──────────────────────────────────────────────────────────────────────
 * Is 8 === 10? NO
 * indices: [0]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, array[2] = 2
 * ──────────────────────────────────────────────────────────────────────
 * Is 2 === 10? NO
 * indices: [0]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, array[3] = 31
 * ──────────────────────────────────────────────────────────────────────
 * Is 31 === 10? NO
 * indices: [0]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, array[4] = 10
 * ──────────────────────────────────────────────────────────────────────
 * Is 10 === 10? YES! ✓
 * Add index 4 to indices: [0, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5, array[5] = 1
 * ──────────────────────────────────────────────────────────────────────
 * Is 1 === 10? NO
 * indices: [0, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 6, array[6] = 65
 * ──────────────────────────────────────────────────────────────────────
 * Is 65 === 10? NO
 * indices: [0, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 7, array[7] = 10
 * ──────────────────────────────────────────────────────────────────────
 * Is 10 === 10? YES! ✓
 * Add index 7 to indices: [0, 4, 7]
 * 
 * Final: [0, 4, 7] ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Check each element once
 * 
 * SPACE COMPLEXITY: O(k)
 *   - k = number of occurrences
 *   - Worst case: O(n) if all elements match
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass
 * - No nested loops
 * - Optimal solution
 * 
 * ============================================================================
 */
function findAllIndices(array, element) {
    const indices = [];
    
    // Single pass through array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            indices.push(i);
        }
    }
    
    return indices;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * SIMPLE LINEAR SEARCH:
 * - Check each position
 * - If element matches, record the index
 * - Continue to find all occurrences
 * 
 * VISUAL EXAMPLE:
 * array = [10, 8, 2, 31, 10, 1, 65, 10]
 *          ↑              ↑           ↑
 *        index 0       index 4     index 7
 * 
 * Looking for 10:
 * - Found at index 0 → add to result
 * - Found at index 4 → add to result
 * - Found at index 7 → add to result
 * 
 * Result: [0, 4, 7]
 * 
 * ============================================================================
 * ALTERNATIVE: Using indexOf in Loop
 * ============================================================================
 * 
 * ```javascript
 * function findAllIndicesIndexOf(array, element) {
 *     const indices = [];
 *     let currentIndex = array.indexOf(element);
 *     
 *     while (currentIndex !== -1) {
 *         indices.push(currentIndex);
 *         currentIndex = array.indexOf(element, currentIndex + 1);
 *     }
 *     
 *     return indices;
 * }
 * ```
 * 
 * Time: O(n * k) where k = number of occurrences
 * Less efficient than single pass!
 * 
 * ============================================================================
 * ALTERNATIVE: Using reduce
 * ============================================================================
 * 
 * ```javascript
 * function findAllIndicesReduce(array, element) {
 *     return array.reduce((indices, value, index) => {
 *         if (value === element) {
 *             indices.push(index);
 *         }
 *         return indices;
 *     }, []);
 * }
 * ```
 * 
 * Time: O(n) - Same complexity, functional style
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. LINEAR SEARCH:
 *    - Check each element sequentially
 *    - O(n) time complexity
 *    - Works on unsorted arrays
 * 
 * 2. COLLECTING RESULTS:
 *    - Build result array as we find matches
 *    - Don't stop at first occurrence
 *    - Continue to find all
 * 
 * 3. EMPTY RESULT:
 *    - If element not found, return []
 *    - Empty array is valid result
 * 
 * 4. USE CASES:
 *    - Finding all positions of a value
 *    - Filtering by index
 *    - Pattern matching
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("FIND ALL OCCURRENCES OF ELEMENT");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: array = [10, 8, 2, 31, 10, 1, 65, 10], element = 10");
console.log("Output:", findAllIndices([10, 8, 2, 31, 10, 1, 65, 10], 10));
console.log("Expected: [0, 4, 7]");

console.log("\nTest Case 2:");
console.log("Input: array = [1, 2, 3, 4, 5], element = 3");
console.log("Output:", findAllIndices([1, 2, 3, 4, 5], 3));
console.log("Expected: [2]");

// Export function
module.exports = { findAllIndices };
