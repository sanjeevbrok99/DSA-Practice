/**
 * ============================================================================
 * MOVE ZEROS TO END - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of n numbers. The problem is to move all the 0's to the end 
 * of the array while maintaining the order of the other elements. 
 * Only single traversal of the array is required.
 * 
 * EXAMPLES:
 * Input: [1, 2, 0, 0, 0, 3, 6]
 * Output: [1, 2, 3, 6, 0, 0, 0]
 * 
 * Input: [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]
 * Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use a pointer to track position for next non-zero element!
 * - First pass: Place all non-zero elements at the beginning
 * - Second pass: Fill remaining positions with zeros
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Two Pass Approach (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Use `count` pointer to track position for next non-zero
 * 2. First loop: Copy all non-zero elements to front
 * 3. Second loop: Fill remaining positions with zeros
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [1, 2, 0, 0, 0, 3, 6]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * FIRST PASS: Move non-zero elements to front
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Initial: [1, 2, 0, 0, 0, 3, 6]
 * count = 0 (position for next non-zero)
 * 
 * i = 0, arr[0] = 1 (non-zero):
 *   arr[count++] = 1 → arr[0] = 1
 *   count becomes 1
 *   Array: [1, 2, 0, 0, 0, 3, 6]
 * 
 * i = 1, arr[1] = 2 (non-zero):
 *   arr[count++] = 2 → arr[1] = 2
 *   count becomes 2
 *   Array: [1, 2, 0, 0, 0, 3, 6]
 * 
 * i = 2, arr[2] = 0 (zero):
 *   Skip it
 *   count stays 2
 * 
 * i = 3, arr[3] = 0 (zero):
 *   Skip it
 *   count stays 2
 * 
 * i = 4, arr[4] = 0 (zero):
 *   Skip it
 *   count stays 2
 * 
 * i = 5, arr[5] = 3 (non-zero):
 *   arr[count++] = 3 → arr[2] = 3
 *   count becomes 3
 *   Array: [1, 2, 3, 0, 0, 3, 6]
 * 
 * i = 6, arr[6] = 6 (non-zero):
 *   arr[count++] = 6 → arr[3] = 6
 *   count becomes 4
 *   Array: [1, 2, 3, 6, 0, 3, 6]
 * 
 * After first pass: count = 4
 * All non-zeros are at positions [0, 1, 2, 3]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * SECOND PASS: Fill remaining positions with zeros
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Start from count = 4 to end (index 6):
 * 
 * i = 4: arr[4] = 0
 * i = 5: arr[5] = 0
 * i = 6: arr[6] = 0
 * 
 * Final: [1, 2, 3, 6, 0, 0, 0] ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - First loop: O(n)
 *   - Second loop: O(n)
 *   - Total: O(2n) = O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 *   - In-place modification
 *   - Only use count variable
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass (well, two passes but still O(n))
 * - In-place modification
 * - Maintains order of non-zero elements
 * 
 * ============================================================================
 */
function moveZerosToEnd(arr) {
    let count = 0; // Position for next non-zero element
    
    // First pass: Move all non-zero elements to front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    
    // Second pass: Fill remaining positions with zeros
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }
    
    return arr;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * Think of `count` as a slot machine:
 * - It always points to where the next non-zero should go
 * - We scan the array and whenever we find a non-zero:
 *   - Place it at position `count`
 *   - Move `count` forward
 * 
 * After processing all elements:
 * - All non-zeros are at the beginning
 * - `count` tells us where zeros should start
 * - Fill rest with zeros
 * 
 * Example visualization:
 * [1, 0, 2, 0, 3]
 *  ↑              count starts here
 * [1, 0, 2, 0, 3] → Found 1, place at count=0, move count to 1
 * [1, 2, 2, 0, 3] → Found 2, place at count=1, move count to 2
 * [1, 2, 3, 0, 3] → Found 3, place at count=2, move count to 3
 * [1, 2, 3, 0, 0] → Fill from count=3 onwards with zeros
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. TWO PASS TECHNIQUE:
 *    - First pass: Collect non-zeros
 *    - Second pass: Fill with zeros
 * 
 * 2. COUNT POINTER:
 *    - Tracks position for next element
 *    - Common pattern in partitioning problems
 * 
 * 3. ORDER PRESERVATION:
 *    - Non-zero elements maintain their order
 *    - We process them sequentially
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("MOVE ZEROS TO END");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1, 2, 0, 0, 0, 3, 6]");
console.log("Output:", moveZerosToEnd([1, 2, 0, 0, 0, 3, 6]));
console.log("Expected: [1, 2, 3, 6, 0, 0, 0]");

console.log("\nTest Case 2:");
console.log("Input: [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]");
console.log("Output:", moveZerosToEnd([0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));
console.log("Expected: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]");

// Export function
module.exports = { moveZerosToEnd };
