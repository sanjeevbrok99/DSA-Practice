/**
 * ============================================================================
 * BINARY SEARCH - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given a sorted array arr[] and a target value x, find the index of x in 
 * the array. If x is not present, return -1.
 * 
 * EXAMPLES:
 * Input: arr = [2, 3, 4, 10, 40], x = 10
 * Output: 3
 * Explanation: Element 10 is at index 3
 * 
 * Input: arr = [2, 3, 4, 10, 40], x = 5
 * Output: -1
 * Explanation: Element 5 is not in the array
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Array is SORTED! Use this property!
 * - Compare target with middle element
 * - Eliminate half of the array in each step
 * - Repeat until found or array is empty
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Binary Search Recursive (O(log n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Find middle element
 * 2. If middle == target, found!
 * 3. If middle > target, search left half
 * 4. If middle < target, search right half
 * 5. Repeat until found or no elements left
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: arr = [2, 3, 4, 10, 40], x = 10
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 1: Search in [2, 3, 4, 10, 40]
 * ──────────────────────────────────────────────────────────────────────
 * left = 0, right = 4
 * mid = 0 + (4 - 0) / 2 = 2
 * arr[2] = 4
 * 
 * Is 4 === 10? NO
 * Is 4 > 10? NO
 * Is 4 < 10? YES → Search right half
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 2: Search in [10, 40]
 * ──────────────────────────────────────────────────────────────────────
 * left = 3, right = 4
 * mid = 3 + (4 - 3) / 2 = 3
 * arr[3] = 10
 * 
 * Is 10 === 10? YES! ✓
 * Return index 3
 * 
 * ──────────────────────────────────────────────────────────────────────
 * VISUAL REPRESENTATION:
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Array: [2, 3, 4, 10, 40]  Target: 10
 *         └──────┴──────┘
 *            mid = 4
 *         4 < 10, go right →
 * 
 * Array: [2, 3, 4, 10, 40]
 *                  └───┴───┘
 *                  mid = 10
 *         10 === 10, FOUND! ✓
 * 
 * TIME COMPLEXITY: O(log n)
 *   - Eliminate half in each step
 *   - log₂(n) steps maximum
 * 
 * SPACE COMPLEXITY: 
 *   - Recursive: O(log n) - call stack
 *   - Iterative: O(1) - no extra space
 * 
 * WHY IT'S EFFICIENT:
 * - Much faster than linear search O(n)
 * - For array of 1,000,000 elements:
 *   - Linear: 1,000,000 comparisons worst case
 *   - Binary: 20 comparisons worst case!
 * 
 * ============================================================================
 */

// Recursive Approach
function binarySearchRecursive(arr, left, right, x) {
    // Base case: element not found
    if (right < left) {
        return -1;
    }
    
    // Find middle index (avoids overflow)
    let mid = left + Math.floor((right - left) / 2);
    
    // If element found at middle
    if (arr[mid] === x) {
        return mid;
    }
    
    // If element is smaller than mid, search left half
    if (arr[mid] > x) {
        return binarySearchRecursive(arr, left, mid - 1, x);
    }
    
    // If element is larger than mid, search right half
    return binarySearchRecursive(arr, mid + 1, right, x);
}

// Iterative Approach (More Space Efficient)
function binarySearchIterative(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        // Find middle index
        let mid = left + Math.floor((right - left) / 2);
        
        // If element found at middle
        if (arr[mid] === x) {
            return mid;
        }
        
        // If element is smaller than mid, search left half
        if (arr[mid] > x) {
            right = mid - 1;
        }
        // If element is larger than mid, search right half
        else {
            left = mid + 1;
        }
    }
    
    // Element not found
    return -1;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * SORTED ARRAY PROPERTY:
 * In sorted array: [2, 3, 4, 10, 40]
 * - Elements increase from left to right
 * - If middle element < target, target must be on right
 * - If middle element > target, target must be on left
 * 
 * DIVIDE AND CONQUER:
 * - Divide array in half
 * - Conquer by searching only relevant half
 * - Reduce problem size by half each time
 * 
 * EXAMPLE: Finding 40 in [2, 3, 4, 10, 40]
 * Step 1: Check middle (4) → 40 > 4, go right
 * Step 2: Check middle (40) → Found!
 * 
 * Only 2 steps for 5 elements!
 * 
 * ============================================================================
 * COMPARISON: LINEAR VS BINARY SEARCH
 * ============================================================================
 * 
 * LINEAR SEARCH (Unsorted/Sorted):
 * - Check each element one by one
 * - Time: O(n)
 * - Space: O(1)
 * - Works on unsorted arrays
 * 
 * BINARY SEARCH (Sorted Only):
 * - Eliminate half each step
 * - Time: O(log n)
 * - Space: O(1) iterative, O(log n) recursive
 * - Requires sorted array
 * 
 * Example: Array of 1024 elements
 * - Linear: Up to 1024 comparisons
 * - Binary: Up to 10 comparisons (log₂ 1024 = 10)
 * 
 * WINNER for sorted arrays: Binary Search! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. MID CALCULATION:
 *    - Use: mid = left + (right - left) / 2
 *    - NOT: mid = (left + right) / 2
 *    - Avoids integer overflow for large values
 * 
 * 2. BASE CASE:
 *    - When left > right, element not found
 *    - Return -1
 * 
 * 3. RECURSIVE VS ITERATIVE:
 *    - Recursive: Cleaner code, uses call stack
 *    - Iterative: More efficient, no stack space
 * 
 * 4. REQUIRES SORTED ARRAY:
 *    - Binary search ONLY works on sorted arrays
 *    - If unsorted, must sort first (or use linear search)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("BINARY SEARCH");
console.log("=".repeat(60));

console.log("\nTest Case 1 (Recursive):");
console.log("Input: arr = [2, 3, 4, 10, 40], x = 10");
let result1 = binarySearchRecursive([2, 3, 4, 10, 40], 0, 4, 10);
console.log("Output:", result1);
console.log("Expected: 3");

console.log("\nTest Case 2 (Iterative):");
console.log("Input: arr = [2, 3, 4, 10, 40], x = 5");
let result2 = binarySearchIterative([2, 3, 4, 10, 40], 5);
console.log("Output:", result2);
console.log("Expected: -1");

// Export functions
module.exports = { binarySearchRecursive, binarySearchIterative };
