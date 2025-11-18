/**
 * ============================================================================
 * LONGEST ALTERNATING EVEN-ODD SUBARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array a[] of N integers, find the length of the longest alternating 
 * even-odd subarray. An alternating subarray has elements alternating between 
 * even and odd.
 * 
 * EXAMPLES:
 * Input: [1, 2, 3, 4, 5, 7, 9]
 * Output: 5
 * Explanation: Subarray [1, 2, 3, 4, 5] has alternating even-odd pattern
 *   1 (odd), 2 (even), 3 (odd), 4 (even), 5 (odd) ✓
 * 
 * Input: [1, 3, 5]
 * Output: 1
 * Explanation: All odd, no alternating pattern (single element counts)
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Track current alternating sequence length!
 * - If current and previous have different parity: extend sequence
 * - If same parity: reset sequence to 1
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass with Length Tracking (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Start with currentLength = 1, maxLength = 1
 * 2. For each element, check parity with previous
 * 3. If different parity (alternating): currentLength++
 * 4. If same parity: reset currentLength = 1
 * 5. Update maxLength whenever currentLength increases
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [1, 2, 3, 4, 5, 7, 9]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, arr[0] = 1 (odd)
 * ──────────────────────────────────────────────────────────────────────
 * currentLength = 1, maxLength = 1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, arr[1] = 2 (even)
 * ──────────────────────────────────────────────────────────────────────
 * Previous: 1 (odd), Current: 2 (even)
 * Different parity! → currentLength = 2
 * maxLength = 2
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, arr[2] = 3 (odd)
 * ──────────────────────────────────────────────────────────────────────
 * Previous: 2 (even), Current: 3 (odd)
 * Different parity! → currentLength = 3
 * maxLength = 3
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, arr[3] = 4 (even)
 * ──────────────────────────────────────────────────────────────────────
 * Previous: 3 (odd), Current: 4 (even)
 * Different parity! → currentLength = 4
 * maxLength = 4
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, arr[4] = 5 (odd)
 * ──────────────────────────────────────────────────────────────────────
 * Previous: 4 (even), Current: 5 (odd)
 * Different parity! → currentLength = 5
 * maxLength = 5 ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5, arr[5] = 7 (odd)
 * ──────────────────────────────────────────────────────────────────────
 * Previous: 5 (odd), Current: 7 (odd)
 * Same parity! → Reset currentLength = 1
 * maxLength = 5 (unchanged)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 6, arr[6] = 9 (odd)
 * ──────────────────────────────────────────────────────────────────────
 * Previous: 7 (odd), Current: 9 (odd)
 * Same parity! → currentLength = 1
 * 
 * Final maxLength = 5 ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass
 * - No nested loops
 * - Optimal solution
 * 
 * ============================================================================
 */
function longestAlternatingSubarray(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let currentLength = 1;
    let maxLength = 1;
    
    for (let i = 1; i < n; i++) {
        // Check if current and previous have different parity
        // Even: arr[i] % 2 === 0
        // Odd: arr[i] % 2 !== 0
        const currentIsEven = arr[i] % 2 === 0;
        const previousIsEven = arr[i - 1] % 2 === 0;
        
        if (currentIsEven !== previousIsEven) {
            // Different parity - extend the sequence
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            // Same parity - reset sequence
            currentLength = 1;
        }
    }
    
    return maxLength;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * ALTERNATING PATTERN:
 * Elements must alternate between even and odd:
 * - Odd → Even → Odd → Even ... ✓
 * - Even → Odd → Even → Odd ... ✓
 * - Odd → Odd → ... ✗ (not alternating)
 * - Even → Even → ... ✗ (not alternating)
 * 
 * PARITY CHECK:
 * - num % 2 === 0 → even
 * - num % 2 !== 0 → odd
 * 
 * TWO CASES:
 * 1. Different parity → continue sequence
 * 2. Same parity → start new sequence
 * 
 * EXAMPLE VISUALIZATION:
 * [1, 2, 3, 4, 5, 7, 9]
 *  O  E  O  E  O  O  O
 *  └──────────┘  ↑
 *  alternating   break (two odds)
 *  length = 5
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. PARITY:
 *    - Even: divisible by 2
 *    - Odd: not divisible by 2
 *    - Check using modulo operator (%)
 * 
 * 2. SEQUENCE TRACKING:
 *    - currentLength: length of current alternating sequence
 *    - maxLength: longest sequence seen so far
 *    - Reset when pattern breaks
 * 
 * 3. EDGE CASES:
 *    - Empty array: return 0
 *    - Single element: return 1
 *    - All same parity: return 1
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("LONGEST ALTERNATING EVEN-ODD SUBARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [1, 2, 3, 4, 5, 7, 9]");
console.log("Output:", longestAlternatingSubarray([1, 2, 3, 4, 5, 7, 9]));
console.log("Expected: 5");

console.log("\nTest Case 2:");
console.log("Input: [1, 3, 5]");
console.log("Output:", longestAlternatingSubarray([1, 3, 5]));
console.log("Expected: 1");

// Export function
module.exports = { longestAlternatingSubarray };
