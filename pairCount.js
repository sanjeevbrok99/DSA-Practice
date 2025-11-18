/**
 * ============================================================================
 * FIND PAIR INDICES WITH TARGET SUM - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Find a pair of elements (indices of the two numbers) in a given array 
 * whose sum equals a specific target number.
 * 
 * EXAMPLES:
 * Input: numbers = [10, 20, 10, 40, 50, 60, 70], target = 50
 * Output: [1, 2]
 * Explanation: numbers[1] + numbers[2] = 20 + 10 = 30... wait
 *              numbers[0] + numbers[3] = 10 + 40 = 50 ✓
 * 
 * Input: numbers = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: numbers[0] + numbers[1] = 2 + 7 = 9 ✓
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use Hash Map to find complement!
 * - For each number, check if (target - number) exists
 * - Store seen numbers with their indices
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Hash Map (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Create a Map to store {value: index}
 * 2. For each number:
 *    - Calculate complement = target - current number
 *    - If complement exists in map, return indices
 *    - Otherwise, add current number to map
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: numbers = [10, 20, 10, 40, 50, 60, 70], target = 50
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, numbers[0] = 10
 * ──────────────────────────────────────────────────────────────────────
 * complement = 50 - 10 = 40
 * Is 40 in map? NO
 * Add to map: {10: 0}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, numbers[1] = 20
 * ──────────────────────────────────────────────────────────────────────
 * complement = 50 - 20 = 30
 * Is 30 in map? NO
 * Add to map: {10: 0, 20: 1}
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, numbers[2] = 10
 * ──────────────────────────────────────────────────────────────────────
 * complement = 50 - 10 = 40
 * Is 40 in map? NO
 * Update map: {10: 2, 20: 1}  (overwrite previous 10)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, numbers[3] = 40
 * ──────────────────────────────────────────────────────────────────────
 * complement = 50 - 40 = 10
 * Is 10 in map? YES! (at index 2)
 * FOUND! Return [2, 3] ✓
 * 
 * Result: indices [2, 3] where 10 + 40 = 50
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through array
 *   - Map operations are O(1)
 * 
 * SPACE COMPLEXITY: O(n)
 *   - Store up to n elements in map
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops
 * - Hash Map gives O(1) lookups
 * - Optimal solution
 * 
 * ============================================================================
 */
function findPairIndices(numbers, target) {
    // Map to store {value: index}
    const seen = new Map();
    
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const complement = target - current;
        
        // Check if complement exists in map
        if (seen.has(complement)) {
            // Found the pair!
            return [seen.get(complement), i];
        }
        
        // Store current number with its index
        seen.set(current, i);
    }
    
    // No pair found
    return null;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * PROBLEM: Find two numbers that sum to target
 * 
 * KEY INSIGHT:
 * If we have number A, and we want A + B = target
 * Then B = target - A (the complement!)
 * 
 * STRATEGY:
 * - For each number, calculate its complement
 * - Check if we've seen this complement before
 * - If yes: we found our pair!
 * - If no: remember current number for future
 * 
 * EXAMPLE:
 * numbers = [10, 20, 10, 40], target = 50
 * 
 * At 40:
 *   complement = 50 - 40 = 10
 *   Have we seen 10? YES! (at index 2)
 *   Pair found: [2, 3]
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Nested Loops):
 * ```javascript
 * function findPairBruteForce(numbers, target) {
 *     for (let i = 0; i < numbers.length; i++) {
 *         for (let j = i + 1; j < numbers.length; j++) {
 *             if (numbers[i] + numbers[j] === target) {
 *                 return [i, j];
 *             }
 *         }
 *     }
 *     return null;
 * }
 * ```
 * Time: O(n²) ✗ Too slow
 * 
 * HASH MAP APPROACH:
 * Time: O(n) ✓
 * Space: O(n)
 * 
 * WINNER: Hash Map! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. COMPLEMENT PATTERN:
 *    - For each element, calculate complement
 *    - Check if complement seen before
 *    - Common two-sum pattern
 * 
 * 2. HASH MAP FOR LOOKUPS:
 *    - Store seen elements
 *    - O(1) lookup time
 *    - Trade space for time
 * 
 * 3. SINGLE PASS:
 *    - Build map while searching
 *    - Don't need to preprocess
 *    - Efficient approach
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("FIND PAIR INDICES WITH TARGET SUM");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: numbers = [10, 20, 10, 40, 50, 60, 70], target = 50");
console.log("Output:", findPairIndices([10, 20, 10, 40, 50, 60, 70], 50));
console.log("Expected: [2, 3] or similar valid pair");

console.log("\nTest Case 2:");
console.log("Input: numbers = [2, 7, 11, 15], target = 9");
console.log("Output:", findPairIndices([2, 7, 11, 15], 9));
console.log("Expected: [0, 1]");

// Export function
module.exports = { findPairIndices };
