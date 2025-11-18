/**
 * ============================================================================
 * CHECK IF ARRAY IS SORTED - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of size n, write a program to check if it is sorted in 
 * ascending order or not. Equal values are allowed in an array and two 
 * consecutive equal values are considered sorted.
 * 
 * EXAMPLES:
 * Input: [20, 21, 45, 89, 89, 90]
 * Output: true
 * 
 * Input: [20, 21, 10, 89, 90]
 * Output: false
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Check each adjacent pair of elements!
 * If any element is greater than the next, array is not sorted.
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Iterate through array
 * 2. For each element, check if it's <= next element
 * 3. If any element > next element, return false
 * 4. If we reach end, array is sorted, return true
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [20, 21, 45, 89, 89, 90]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0: Compare arr[0]=20 with arr[1]=21
 * ──────────────────────────────────────────────────────────────────────
 * 20 <= 21? YES ✓
 * Continue...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1: Compare arr[1]=21 with arr[2]=45
 * ──────────────────────────────────────────────────────────────────────
 * 21 <= 45? YES ✓
 * Continue...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2: Compare arr[2]=45 with arr[3]=89
 * ──────────────────────────────────────────────────────────────────────
 * 45 <= 89? YES ✓
 * Continue...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3: Compare arr[3]=89 with arr[4]=89
 * ──────────────────────────────────────────────────────────────────────
 * 89 <= 89? YES ✓ (Equal values allowed!)
 * Continue...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4: Compare arr[4]=89 with arr[5]=90
 * ──────────────────────────────────────────────────────────────────────
 * 89 <= 90? YES ✓
 * Continue...
 * 
 * Reached end of array → Return true ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * COUNTER EXAMPLE:
 * ──────────────────────────────────────────────────────────────────────
 * Input: [20, 21, 10, 89, 90]
 * 
 * i = 0: 20 <= 21? YES ✓
 * i = 1: 21 <= 10? NO ✗
 * 
 * Found violation! Return false immediately.
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Check each adjacent pair once
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use one variable for loop
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops
 * - Early return when unsorted pair found
 * - Single pass
 * 
 * ============================================================================
 */
function isSorted(arr) {
    // Check each adjacent pair
    for (let i = 0; i < arr.length - 1; i++) {
        // If current element is greater than next, not sorted
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    
    // All pairs are in order
    return true;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * In a sorted array: arr[0] <= arr[1] <= arr[2] <= ... <= arr[n-1]
 * 
 * We only need to check adjacent pairs!
 * - If arr[i] <= arr[i+1] for all i, then array is sorted
 * - If any arr[i] > arr[i+1], array is NOT sorted
 * 
 * Why adjacent pairs are enough?
 * - If arr[0] <= arr[1] and arr[1] <= arr[2], then arr[0] <= arr[2]
 * - Transitivity property!
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. ADJACENT COMPARISON:
 *    - Only need to check neighbors
 *    - Don't need to compare all pairs
 * 
 * 2. EQUAL VALUES ALLOWED:
 *    - Use <= not just <
 *    - [1, 2, 2, 3] is considered sorted
 * 
 * 3. EARLY RETURN:
 *    - Return false as soon as violation found
 *    - Don't need to check rest of array
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("CHECK IF ARRAY IS SORTED");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [20, 21, 45, 89, 89, 90]");
console.log("Output:", isSorted([20, 21, 45, 89, 89, 90]));
console.log("Expected: true");

console.log("\nTest Case 2:");
console.log("Input: [20, 21, 10, 89, 90]");
console.log("Output:", isSorted([20, 21, 10, 89, 90]));
console.log("Expected: false");

// Export function
module.exports = { isSorted };
