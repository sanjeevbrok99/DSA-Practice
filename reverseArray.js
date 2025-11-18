/**
 * ============================================================================
 * REVERSE AN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array (or string), the task is to reverse the array/string.
 * 
 * EXAMPLES:
 * Input: [1, 2, 3, 4]
 * Output: [4, 3, 2, 1]
 * 
 * Input: [5, 6, 7, 8, 9]
 * Output: [9, 8, 7, 6, 5]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use two pointers - one at start, one at end.
 * Swap them and move towards center!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Two Pointer Approach (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Use two pointers: start (at 0) and end (at n-1)
 * 2. Swap elements at start and end
 * 3. Move start forward, end backward
 * 4. Repeat until start >= end
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [1, 2, 3, 4, 5]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Initial: [1, 2, 3, 4, 5]
 *           ↑           ↑
 *         start        end
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Swap arr[0] and arr[4]: [5, 2, 3, 4, 1]
 * Move pointers: start++, end--
 * 
 * ──────────────────────────────────────────────────────────────────────
 * After swap 1: [5, 2, 3, 4, 1]
 *                  ↑     ↑
 *                start  end
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Swap arr[1] and arr[3]: [5, 4, 3, 2, 1]
 * Move pointers: start++, end--
 * 
 * ──────────────────────────────────────────────────────────────────────
 * After swap 2: [5, 4, 3, 2, 1]
 *                     ↑
 *                 start=end
 * ──────────────────────────────────────────────────────────────────────
 * 
 * start >= end, STOP!
 * 
 * Final: [5, 4, 3, 2, 1] ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * VISUAL WALKTHROUGH:
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Original:     [1, 2, 3, 4, 5]
 * After swap 1: [5, 2, 3, 4, 1]  (swap 1 and 5)
 * After swap 2: [5, 4, 3, 2, 1]  (swap 2 and 4)
 * Done!         [5, 4, 3, 2, 1]  (middle element 3 stays)
 * 
 * TIME COMPLEXITY: O(n)
 *   - Visit each element once
 *   - n/2 swaps needed
 * 
 * SPACE COMPLEXITY: O(1)
 *   - In-place reversal
 *   - Only use temp variable for swapping
 * 
 * WHY IT'S EFFICIENT:
 * - In-place (no extra array)
 * - Single pass
 * - Optimal solution
 * 
 * ============================================================================
 */
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    // Swap elements from both ends moving towards center
    while (start < end) {
        // Swap arr[start] and arr[end]
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        // Move pointers towards center
        start++;
        end--;
    }
    
    return arr;
}

/**
 * ============================================================================
 * ALTERNATIVE: Using Destructuring (Modern JavaScript)
 * ============================================================================
 * 
 * function reverseArray(arr) {
 *     let start = 0;
 *     let end = arr.length - 1;
 *     
 *     while (start < end) {
 *         // Swap using array destructuring
 *         [arr[start], arr[end]] = [arr[end], arr[start]];
 *         start++;
 *         end--;
 *     }
 *     
 *     return arr;
 * }
 * 
 * Both approaches are equally efficient!
 * 
 * ============================================================================
 * WHY TWO POINTERS WORK
 * ============================================================================
 * 
 * Think of it like flipping a line of people:
 * - First person swaps with last person
 * - Second person swaps with second-to-last
 * - Continue until meeting in middle
 * 
 * For odd length arrays (e.g., [1,2,3,4,5]):
 * - Middle element (3) doesn't need to move
 * - It stays in place automatically
 * 
 * For even length arrays (e.g., [1,2,3,4]):
 * - All elements get swapped
 * - No middle element
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. TWO POINTER TECHNIQUE:
 *    - Start from both ends
 *    - Move towards center
 *    - Common pattern in array problems
 * 
 * 2. IN-PLACE MODIFICATION:
 *    - Modify original array
 *    - No extra space needed
 *    - Very efficient
 * 
 * 3. SWAPPING:
 *    - Use temp variable
 *    - Or use destructuring [a, b] = [b, a]
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("REVERSE AN ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1, 2, 3, 4]");
console.log("Output:", reverseArray([1, 2, 3, 4]));
console.log("Expected: [4, 3, 2, 1]");

console.log("\nTest Case 2:");
console.log("Input: [5, 6, 7, 8, 9]");
console.log("Output:", reverseArray([5, 6, 7, 8, 9]));
console.log("Expected: [9, 8, 7, 6, 5]");

// Export function
module.exports = { reverseArray };
