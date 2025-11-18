/**
 * ============================================================================
 * LEFT ROTATE ARRAY BY D POSITIONS - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of integers arr[] of size N and an integer d, the task is 
 * to rotate the array elements to the left by d positions.
 * 
 * EXAMPLES:
 * Input: arr = [1, 2, 3, 4, 5, 6, 7], d = 2
 * Output: [3, 4, 5, 6, 7, 1, 2]
 * Explanation: Rotate left by 2: first 2 elements move to end
 * 
 * Input: arr = [3, 4, 5, 6, 7, 1, 2], d = 2
 * Output: [5, 6, 7, 1, 2, 3, 4]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use the REVERSAL ALGORITHM!
 * - Reverse first d elements
 * - Reverse remaining n-d elements
 * - Reverse entire array
 * Magic! Array is rotated left by d positions!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Reversal Algorithm (O(n) Time, O(1) Space - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Reverse first d elements: [0...d-1]
 * 2. Reverse remaining elements: [d...n-1]
 * 3. Reverse entire array: [0...n-1]
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: arr = [1, 2, 3, 4, 5, 6, 7], d = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 1: Reverse first d elements [0...1]
 * ──────────────────────────────────────────────────────────────────────
 * Original: [1, 2, 3, 4, 5, 6, 7]
 *            ────
 *            reverse these
 * 
 * After:    [2, 1, 3, 4, 5, 6, 7]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 2: Reverse remaining elements [2...6]
 * ──────────────────────────────────────────────────────────────────────
 * Current:  [2, 1, 3, 4, 5, 6, 7]
 *                  ──────────────
 *                  reverse these
 * 
 * After:    [2, 1, 7, 6, 5, 4, 3]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 3: Reverse entire array [0...6]
 * ──────────────────────────────────────────────────────────────────────
 * Current:  [2, 1, 7, 6, 5, 4, 3]
 *           ─────────────────────
 *           reverse entire array
 * 
 * Final:    [3, 4, 5, 6, 7, 1, 2] ✓
 * 
 * Success! Array rotated left by 2 positions!
 * 
 * ──────────────────────────────────────────────────────────────────────
 * WHY THIS WORKS - VISUAL PROOF
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Original: [A B | C D E F G]  (want to rotate by 2)
 *           └─┘   └─────────┘
 *            d      n-d
 * 
 * Step 1: Reverse first d → [B A | C D E F G]
 * Step 2: Reverse rest    → [B A | G F E D C]
 * Step 3: Reverse all     → [C D E F G | A B] ✓
 * 
 * Perfect rotation!
 * 
 * TIME COMPLEXITY: O(n)
 *   - Each reversal is O(n/2) at most
 *   - Total: O(d/2) + O((n-d)/2) + O(n/2) = O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 *   - In-place rotation
 *   - No extra array needed
 * 
 * WHY IT'S EFFICIENT:
 * - In-place (no extra space)
 * - Only three passes
 * - Optimal solution
 * 
 * ============================================================================
 */

function leftRotate(arr, d) {
    const n = arr.length;
    
    // Handle edge cases
    if (n === 0 || d === 0) return arr;
    
    // Optimize: if d > n, only need to rotate d % n times
    d = d % n;
    
    // Helper function to reverse array between start and end
    const reverse = (start, end) => {
        while (start < end) {
            // Swap elements
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };
    
    // Step 1: Reverse first d elements
    reverse(0, d - 1);
    
    // Step 2: Reverse remaining n-d elements
    reverse(d, n - 1);
    
    // Step 3: Reverse entire array
    reverse(0, n - 1);
    
    return arr;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * Think of rotation as moving elements from front to back:
 * [1, 2, 3, 4, 5] → rotate left by 2 → [3, 4, 5, 1, 2]
 * 
 * The reversal trick:
 * - First d elements need to go to the end
 * - Last n-d elements need to come to front
 * 
 * By reversing strategically:
 * 1. Reverse parts separately → positions elements
 * 2. Reverse entire array → corrects the order
 * 
 * It's like flipping pancakes!
 * 
 * ============================================================================
 * ALTERNATIVE APPROACHES (Less Efficient)
 * ============================================================================
 * 
 * APPROACH 1: Using Extra Array
 * ```javascript
 * function leftRotateExtraSpace(arr, d) {
 *     const n = arr.length;
 *     const temp = new Array(n);
 *     for (let i = 0; i < n; i++) {
 *         temp[i] = arr[(i + d) % n];
 *     }
 *     return temp;
 * }
 * ```
 * Time: O(n), Space: O(n) ✗ Uses extra space
 * 
 * APPROACH 2: One by One Rotation
 * ```javascript
 * function leftRotateOneByOne(arr, d) {
 *     for (let i = 0; i < d; i++) {
 *         let first = arr[0];
 *         for (let j = 0; j < arr.length - 1; j++) {
 *             arr[j] = arr[j + 1];
 *         }
 *         arr[arr.length - 1] = first;
 *     }
 *     return arr;
 * }
 * ```
 * Time: O(n * d) ✗ Too slow
 * 
 * WINNER: Reversal Algorithm ⭐
 * Time: O(n), Space: O(1)
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. REVERSAL ALGORITHM:
 *    - Clever use of array reversal
 *    - Three reversals = rotation
 *    - Very efficient
 * 
 * 2. MODULO OPTIMIZATION:
 *    - If d > n, use d % n
 *    - Example: rotate array of 5 by 7 = rotate by 2
 *    - Avoids unnecessary work
 * 
 * 3. IN-PLACE MODIFICATION:
 *    - No extra array
 *    - O(1) space
 *    - Very efficient
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("LEFT ROTATE ARRAY BY D POSITIONS");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: arr = [1, 2, 3, 4, 5, 6, 7], d = 2");
console.log("Output:", leftRotate([1, 2, 3, 4, 5, 6, 7], 2));
console.log("Expected: [3, 4, 5, 6, 7, 1, 2]");

console.log("\nTest Case 2:");
console.log("Input: arr = [3, 4, 5, 6, 7, 1, 2], d = 2");
console.log("Output:", leftRotate([3, 4, 5, 6, 7, 1, 2], 2));
console.log("Expected: [5, 6, 7, 1, 2, 3, 4]");

// Export function
module.exports = { leftRotate };
