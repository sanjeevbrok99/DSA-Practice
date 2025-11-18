/**
 * ============================================================================
 * FIND DUPLICATES IN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Find duplicates in O(n) time and O(1) extra space.
 * Given an array, find all elements that appear more than once.
 * 
 * EXAMPLES:
 * Input: [1, 2, 3, 6, 3, 6, 1]
 * Output: [1, 3, 6]
 * Explanation: Numbers 1, 3, and 6 appear more than once
 * 
 * Input: [4, 3, 2, 7, 8, 2, 3, 1]
 * Output: [2, 3]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use Set to track seen elements!
 * - Use one Set for seen elements
 * - Use another Set for duplicates (to avoid duplicate duplicates)
 * - Single pass through array
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Using Sets (O(n) Time, O(n) Space - Most Practical)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Create two Sets: seen and duplicates
 * 2. For each element:
 *    - If in seen → it's a duplicate, add to duplicates Set
 *    - Otherwise → add to seen Set
 * 3. Return duplicates as array
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [1, 2, 3, 6, 3, 6, 1]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, arr[0] = 1
 * ──────────────────────────────────────────────────────────────────────
 * Is 1 in seen? NO
 * Add to seen: {1}
 * duplicates: {}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, arr[1] = 2
 * ──────────────────────────────────────────────────────────────────────
 * Is 2 in seen? NO
 * Add to seen: {1, 2}
 * duplicates: {}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, arr[2] = 3
 * ──────────────────────────────────────────────────────────────────────
 * Is 3 in seen? NO
 * Add to seen: {1, 2, 3}
 * duplicates: {}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, arr[3] = 6
 * ──────────────────────────────────────────────────────────────────────
 * Is 6 in seen? NO
 * Add to seen: {1, 2, 3, 6}
 * duplicates: {}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, arr[4] = 3
 * ──────────────────────────────────────────────────────────────────────
 * Is 3 in seen? YES! (DUPLICATE FOUND!)
 * Add to duplicates: {3}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5, arr[5] = 6
 * ──────────────────────────────────────────────────────────────────────
 * Is 6 in seen? YES! (DUPLICATE FOUND!)
 * Add to duplicates: {3, 6}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 6, arr[6] = 1
 * ──────────────────────────────────────────────────────────────────────
 * Is 1 in seen? YES! (DUPLICATE FOUND!)
 * Add to duplicates: {3, 6, 1}
 * 
 * Final: [1, 3, 6] ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Set operations are O(1)
 * 
 * SPACE COMPLEXITY: O(n)
 *   - Two Sets can store up to n elements
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass
 * - Fast Set lookups (O(1))
 * - No nested loops
 * 
 * ============================================================================
 */
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (let num of arr) {
        // If we've seen this number before, it's a duplicate
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    
    // Convert Set to Array and sort for consistent output
    return Array.from(duplicates).sort((a, b) => a - b);
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * DUPLICATE DETECTION:
 * An element is duplicate if we've seen it before
 * 
 * TWO SETS STRATEGY:
 * - seen: Tracks all elements we've encountered
 * - duplicates: Tracks only elements that appeared more than once
 * 
 * WHY TWO SETS?
 * - seen: To check if we've encountered element before
 * - duplicates: To store duplicates only once (avoid [3, 3, 3])
 * 
 * EXAMPLE VISUALIZATION:
 * [1, 2, 3, 6, 3, 6, 1]
 *  ✓  ✓  ✓  ✓  ✗  ✗  ✗
 *              ↑   ↑   ↑
 *              duplicates found
 * 
 * ============================================================================
 * ALTERNATIVE: O(1) Space (With Constraints)
 * ============================================================================
 * 
 * If array elements are in range [1, n] and you can modify the array:
 * 
 * ```javascript
 * function findDuplicatesConstantSpace(arr) {
 *     const duplicates = [];
 *     
 *     for (let i = 0; i < arr.length; i++) {
 *         const index = Math.abs(arr[i]) - 1;
 *         
 *         if (arr[index] < 0) {
 *             // Already negative, means we've seen this before
 *             duplicates.push(Math.abs(arr[i]));
 *         } else {
 *             // Mark as visited by making negative
 *             arr[index] = -arr[index];
 *         }
 *     }
 *     
 *     return duplicates;
 * }
 * ```
 * 
 * Time: O(n), Space: O(1)
 * But modifies original array and only works for specific range!
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. SET DATA STRUCTURE:
 *    - Stores unique values
 *    - O(1) add, delete, has operations
 *    - Perfect for duplicate detection
 * 
 * 2. TWO PASS ALTERNATIVE:
 *    - First pass: count frequencies
 *    - Second pass: collect elements with count > 1
 *    - Same complexity, different approach
 * 
 * 3. HASH MAP ALTERNATIVE:
 *    - Map element → count
 *    - Then filter elements with count > 1
 *    - More memory but gives frequency info
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("FIND DUPLICATES IN ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1, 2, 3, 6, 3, 6, 1]");
console.log("Output:", findDuplicates([1, 2, 3, 6, 3, 6, 1]));
console.log("Expected: [1, 3, 6]");

console.log("\nTest Case 2:");
console.log("Input: [4, 3, 2, 7, 8, 2, 3, 1]");
console.log("Output:", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log("Expected: [2, 3]");

// Export function
module.exports = { findDuplicates };
