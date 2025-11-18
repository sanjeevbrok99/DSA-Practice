/**
 * ============================================================================
 * COUNT FREQUENCY IN SORTED ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given a sorted array arr[] consisting of N integers, the task is to find 
 * the frequencies of each array element.
 * 
 * EXAMPLES:
 * Input: arr = [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]
 * Output: 
 *   Frequency of 1 is: 3
 *   Frequency of 2 is: 1
 *   Frequency of 3 is: 2
 *   Frequency of 5 is: 2
 *   Frequency of 8 is: 3
 *   Frequency of 9 is: 2
 *   Frequency of 10 is: 1
 * 
 * Input: arr = [2, 2, 6, 6, 7, 7, 7, 11]
 * Output:
 *   Frequency of 2 is: 2
 *   Frequency of 6 is: 2
 *   Frequency of 7 is: 3
 *   Frequency of 11 is: 1
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Array is SORTED! Use this property!
 * - Identical elements are next to each other
 * - Count consecutive identical elements
 * - Single pass is enough!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass for Sorted Array (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Start with first element, count = 1
 * 2. Compare each element with next element
 * 3. If same, increment count
 * 4. If different (or end of array), print frequency and reset count
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: arr = [2, 2, 6, 6, 7, 7, 7, 11]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, arr[0] = 2
 * ──────────────────────────────────────────────────────────────────────
 * count = 1 (start counting 2)
 * Compare arr[0] with arr[1]: 2 === 2? YES
 * Same element, continue...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, arr[1] = 2
 * ──────────────────────────────────────────────────────────────────────
 * count = 2 (found another 2)
 * Compare arr[1] with arr[2]: 2 === 6? NO
 * Different element! Print frequency of 2
 * Output: "Frequency of 2 is: 2"
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, arr[2] = 6
 * ──────────────────────────────────────────────────────────────────────
 * count = 1 (start counting 6)
 * Compare arr[2] with arr[3]: 6 === 6? YES
 * Same element, continue...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, arr[3] = 6
 * ──────────────────────────────────────────────────────────────────────
 * count = 2 (found another 6)
 * Compare arr[3] with arr[4]: 6 === 7? NO
 * Different element! Print frequency of 6
 * Output: "Frequency of 6 is: 2"
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, arr[4] = 7
 * ──────────────────────────────────────────────────────────────────────
 * count = 1 (start counting 7)
 * Compare arr[4] with arr[5]: 7 === 7? YES
 * count = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5, arr[5] = 7
 * ──────────────────────────────────────────────────────────────────────
 * count = 2
 * Compare arr[5] with arr[6]: 7 === 7? YES
 * count = 3
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 6, arr[6] = 7
 * ──────────────────────────────────────────────────────────────────────
 * count = 3
 * Compare arr[6] with arr[7]: 7 === 11? NO
 * Different element! Print frequency of 7
 * Output: "Frequency of 7 is: 3"
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 7, arr[7] = 11 (LAST ELEMENT)
 * ──────────────────────────────────────────────────────────────────────
 * count = 1 (start counting 11)
 * No next element, so print frequency
 * Output: "Frequency of 11 is: 1"
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Visit each element once
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use count variable
 *   - No extra data structures
 * 
 * WHY IT'S EFFICIENT:
 * - Takes advantage of sorted property
 * - No nested loops
 * - No hash map needed
 * - Optimal for sorted arrays
 * 
 * ============================================================================
 */
function countFrequency(arr) {
    if (arr.length === 0) return;
    
    let count = 1;
    
    for (let i = 0; i < arr.length; i++) {
        // If current element equals next element, increment count
        if (i < arr.length - 1 && arr[i] === arr[i + 1]) {
            count++;
        } 
        // If different element or last element, print frequency
        else {
            console.log(`Frequency of ${arr[i]} is: ${count}`);
            count = 1;  // Reset count for next element
        }
    }
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * SORTED ARRAY PROPERTY:
 * In a sorted array: [2, 2, 6, 6, 7, 7, 7, 11]
 * - All 2's are together
 * - All 6's are together  
 * - All 7's are together
 * - All 11's are together
 * 
 * STRATEGY:
 * - Count consecutive identical elements
 * - When element changes (or end reached), output the count
 * - Reset count for next element
 * 
 * EXAMPLE VISUALIZATION:
 * [2, 2, 6, 6, 7, 7, 7, 11]
 *  ───→    Different! Print "2 appears 2 times"
 *      ───→    Different! Print "6 appears 2 times"
 *          ─────→  Different! Print "7 appears 3 times"
 *                      End! Print "11 appears 1 time"
 * 
 * ============================================================================
 * COMPARISON: SORTED VS UNSORTED ARRAYS
 * ============================================================================
 * 
 * FOR SORTED ARRAY (This Problem):
 * Solution: Single Pass
 * Time: O(n)
 * Space: O(1)
 * ✓ Most efficient!
 * 
 * FOR UNSORTED ARRAY:
 * Solution: Hash Map
 * Time: O(n)
 * Space: O(n) - need to store all unique elements
 * 
 * Example Hash Map approach for unsorted:
 * ```javascript
 * function countFrequencyUnsorted(arr) {
 *     const freq = new Map();
 *     for (let num of arr) {
 *         freq.set(num, (freq.get(num) || 0) + 1);
 *     }
 *     for (let [num, count] of freq) {
 *         console.log(`Frequency of ${num} is: ${count}`);
 *     }
 * }
 * ```
 * 
 * WINNER for sorted arrays: Single Pass approach! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. LEVERAGING SORTED PROPERTY:
 *    - Identical elements are consecutive
 *    - No need to search entire array
 *    - Can use single pass
 * 
 * 2. TWO CONDITIONS TO PRINT:
 *    - When next element is different
 *    - When we reach the last element
 * 
 * 3. COUNT RESET:
 *    - After printing, reset count to 1
 *    - Ready for next element
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("COUNT FREQUENCY IN SORTED ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]");
countFrequency([1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10]);

console.log("\nTest Case 2:");
console.log("Input: [2, 2, 6, 6, 7, 7, 7, 11]");
countFrequency([2, 2, 6, 6, 7, 7, 7, 11]);

// Export function
module.exports = { countFrequency };
