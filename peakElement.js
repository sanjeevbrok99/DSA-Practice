/**
 * ============================================================================
 * FIND PEAK ELEMENT - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Find a peak element which is not smaller than its neighbors.
 * An array element is a peak if it is greater than or equal to its neighbors.
 * For corner elements, we only consider one neighbor.
 * 
 * EXAMPLES:
 * Input: [5, 10, 20, 15]
 * Output: 20
 * Explanation: 20 is greater than both neighbors (10 and 15)
 * 
 * Input: [10, 20, 15, 2, 23, 90, 67]
 * Output: 20 or 90 (multiple peaks exist)
 * Explanation: Both 20 and 90 are greater than their neighbors
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Check three cases:
 * 1. First element (compare with next only)
 * 2. Last element (compare with previous only)
 * 3. Middle elements (compare with both neighbors)
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Linear Scan (O(n) - Simple and Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Check if first element is peak (arr[0] >= arr[1])
 * 2. Check if last element is peak (arr[n-1] >= arr[n-2])
 * 3. For middle elements, check if arr[i] >= both neighbors
 * 4. Return index of first peak found
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [10, 20, 15, 2, 23, 90, 67]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Check first element: arr[0] = 10
 * ──────────────────────────────────────────────────────────────────────
 * Is 10 >= arr[1] (20)? NO
 * Not a peak
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Check middle elements:
 * ──────────────────────────────────────────────────────────────────────
 * 
 * i = 1, arr[1] = 20
 * Is 20 >= arr[0] (10)? YES ✓
 * Is 20 >= arr[2] (15)? YES ✓
 * PEAK FOUND! Return index 1
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Check each element once
 * 
 * SPACE COMPLEXITY: O(1)
 *   - No extra space used
 * 
 * WHY IT'S EFFICIENT:
 * - Simple linear scan
 * - Returns first peak found
 * - No complicated logic
 * 
 * ============================================================================
 */
function findPeakElement(arr) {
    const n = arr.length;
    
    // Handle empty or single element array
    if (n === 0) return -1;
    if (n === 1) return 0;
    
    // Check if first element is peak
    if (arr[0] >= arr[1]) {
        return 0;
    }
    
    // Check if last element is peak
    if (arr[n - 1] >= arr[n - 2]) {
        return n - 1;
    }
    
    // Check middle elements
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            return i;
        }
    }
    
    // No peak found (should not happen in valid input)
    return -1;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * PEAK DEFINITION:
 * An element is a peak if:
 * - First element: arr[0] >= arr[1]
 * - Last element: arr[n-1] >= arr[n-2]
 * - Middle element: arr[i] >= arr[i-1] AND arr[i] >= arr[i+1]
 * 
 * VISUAL EXAMPLE:
 * [10, 20, 15, 2, 23, 90, 67]
 *      ^           ^
 *     peak        peak
 * 
 * 20: 20 >= 10 AND 20 >= 15 ✓
 * 90: 90 >= 23 AND 90 >= 67 ✓
 * 
 * GUARANTEED PEAK:
 * Every array has at least one peak!
 * - If array is increasing: last element is peak
 * - If array is decreasing: first element is peak
 * - Otherwise: at least one local maximum exists
 * 
 * ============================================================================
 * ADVANCED SOLUTION: Binary Search O(log n)
 * ============================================================================
 * 
 * For very large arrays, can use binary search:
 * 
 * ```javascript
 * function findPeakBinarySearch(arr) {
 *     let left = 0;
 *     let right = arr.length - 1;
 *     
 *     while (left < right) {
 *         let mid = Math.floor((left + right) / 2);
 *         
 *         if (arr[mid] < arr[mid + 1]) {
 *             // Peak is on right side
 *             left = mid + 1;
 *         } else {
 *             // Peak is on left side or mid itself
 *             right = mid;
 *         }
 *     }
 *     
 *     return left;
 * }
 * ```
 * 
 * Time: O(log n) - Even faster for large arrays!
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. CORNER ELEMENTS:
 *    - First and last elements are special
 *    - Only one neighbor to check
 * 
 * 2. MULTIPLE PEAKS:
 *    - Array can have multiple peaks
 *    - We return any one peak (usually first found)
 * 
 * 3. GUARANTEED PEAK:
 *    - Every non-empty array has at least one peak
 *    - Worst case: first or last element
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("FIND PEAK ELEMENT");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
const arr1 = [5, 10, 20, 15];
const peak1 = findPeakElement(arr1);
console.log("Input:", arr1);
console.log("Peak Index:", peak1);
console.log("Peak Element:", arr1[peak1]);
console.log("Expected: 20");

console.log("\nTest Case 2:");
const arr2 = [10, 20, 15, 2, 23, 90, 67];
const peak2 = findPeakElement(arr2);
console.log("Input:", arr2);
console.log("Peak Index:", peak2);
console.log("Peak Element:", arr2[peak2]);
console.log("Expected: 20 or 90");

// Export function
module.exports = { findPeakElement };
