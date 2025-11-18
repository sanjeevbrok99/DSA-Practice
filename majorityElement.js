/**
 * ============================================================================
 * MAJORITY ELEMENT - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Find the majority element in the array. A majority element in an array A[] 
 * of size n is an element that appears more than n/2 times (and hence there 
 * is at most one such element).
 * 
 * EXAMPLES:
 * Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
 * Output: 4
 * Explanation: 4 appears 5 times, which is > 9/2 = 4.5
 * 
 * Input: [3, 3, 4, 2, 4, 4, 2, 4]
 * Output: "No Majority Element"
 * Explanation: No element appears more than 8/2 = 4 times
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use MOORE'S VOTING ALGORITHM!
 * - If an element appears > n/2 times, it will "survive" a voting process
 * - Each occurrence votes for itself
 * - Each non-occurrence votes against
 * - The survivor is the candidate
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Moore's Voting Algorithm (O(n) Time, O(1) Space - Most Efficient)
 * ============================================================================
 * 
 * APPROACH (Two Phases):
 * 
 * PHASE 1: Find Candidate
 * - Assume first element is candidate
 * - Keep a count
 * - When we see candidate, count++
 * - When we see different element, count--
 * - If count becomes 0, change candidate
 * 
 * PHASE 2: Verify Candidate
 * - Count how many times candidate actually appears
 * - If count > n/2, it's the majority element
 * - Otherwise, no majority element exists
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * PHASE 1: FIND CANDIDATE
 * ──────────────────────────────────────────────────────────────────────
 * 
 * i = 0, arr[0] = 3
 * candidate = 3, count = 1
 * 
 * i = 1, arr[1] = 3 (same as candidate)
 * count++ → count = 2
 * 
 * i = 2, arr[2] = 4 (different from candidate)
 * count-- → count = 1
 * 
 * i = 3, arr[3] = 2 (different from candidate)
 * count-- → count = 0
 * Count reached 0! Need new candidate.
 * 
 * i = 4, arr[4] = 4
 * candidate = 4, count = 1 (new candidate!)
 * 
 * i = 5, arr[5] = 4 (same as candidate)
 * count++ → count = 2
 * 
 * i = 6, arr[6] = 2 (different from candidate)
 * count-- → count = 1
 * 
 * i = 7, arr[7] = 4 (same as candidate)
 * count++ → count = 2
 * 
 * i = 8, arr[8] = 4 (same as candidate)
 * count++ → count = 3
 * 
 * Candidate after Phase 1: 4
 * 
 * ──────────────────────────────────────────────────────────────────────
 * PHASE 2: VERIFY CANDIDATE
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Count occurrences of 4:
 * [3, 3, 4, 2, 4, 4, 2, 4, 4]
 *        ✓    ✓  ✓     ✓  ✓
 * 
 * Count = 5
 * Is 5 > 9/2 (4.5)? YES ✓
 * 
 * Result: 4 is the majority element!
 * 
 * TIME COMPLEXITY: O(n)
 *   - Phase 1: O(n) - single pass
 *   - Phase 2: O(n) - single pass
 *   - Total: O(2n) = O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables (candidate, count)
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops
 * - No hash map needed
 * - Constant space
 * - Optimal solution
 * 
 * ============================================================================
 */
function majorityElement(arr) {
    const n = arr.length;
    
    // PHASE 1: Find candidate for majority element
    let candidate = arr[0];
    let count = 1;
    
    for (let i = 1; i < n; i++) {
        if (arr[i] === candidate) {
            count++;
        } else {
            count--;
            // If count becomes 0, change candidate
            if (count === 0) {
                candidate = arr[i];
                count = 1;
            }
        }
    }
    
    // PHASE 2: Verify if candidate is actually majority element
    count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    
    // Check if candidate appears more than n/2 times
    if (count > n / 2) {
        return candidate;
    } else {
        return "No Majority Element";
    }
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * VOTING ANALOGY:
 * Imagine each element is a candidate in an election.
 * - Each occurrence votes for itself (+1)
 * - Each different element votes against it (-1)
 * 
 * If an element appears > n/2 times:
 * - Even if ALL other elements vote against it
 * - It will still have positive votes remaining
 * - It will be the final candidate
 * 
 * EXAMPLE: [4, 4, 2, 4, 4]
 * - 4 appears 4 times (80%)
 * - Even if 2 cancels one 4
 * - We still have three 4's remaining
 * - 4 will be the final candidate
 * 
 * WHY PHASE 2 IS NEEDED:
 * Phase 1 gives us a candidate, but doesn't guarantee it's majority.
 * Example: [1, 2, 3]
 * - Phase 1 might give us candidate = 3
 * - But 3 only appears once (not > 3/2)
 * - Phase 2 catches this!
 * 
 * ============================================================================
 * COMPARISON WITH OTHER APPROACHES
 * ============================================================================
 * 
 * APPROACH 1: Brute Force (Nested Loops)
 * ```javascript
 * function majorityBruteForce(arr) {
 *     for (let i = 0; i < arr.length; i++) {
 *         let count = 0;
 *         for (let j = 0; j < arr.length; j++) {
 *             if (arr[i] === arr[j]) count++;
 *         }
 *         if (count > arr.length / 2) return arr[i];
 *     }
 *     return "No Majority Element";
 * }
 * ```
 * Time: O(n²) ✗ Too slow
 * Space: O(1)
 * 
 * APPROACH 2: Hash Map
 * ```javascript
 * function majorityHashMap(arr) {
 *     const freq = new Map();
 *     for (let num of arr) {
 *         freq.set(num, (freq.get(num) || 0) + 1);
 *         if (freq.get(num) > arr.length / 2) return num;
 *     }
 *     return "No Majority Element";
 * }
 * ```
 * Time: O(n) ✓
 * Space: O(n) ✗ Uses extra space
 * 
 * APPROACH 3: Moore's Voting Algorithm
 * Time: O(n) ✓
 * Space: O(1) ✓
 * 
 * WINNER: Moore's Voting Algorithm! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. MOORE'S VOTING ALGORITHM:
 *    - Two phase approach
 *    - Phase 1: Find candidate
 *    - Phase 2: Verify candidate
 * 
 * 2. CANCELLATION PRINCIPLE:
 *    - Each majority element cancels one non-majority
 *    - Majority element will still survive
 * 
 * 3. VERIFICATION IS CRUCIAL:
 *    - Phase 1 only gives candidate
 *    - Must verify it actually appears > n/2 times
 * 
 * 4. MAJORITY ELEMENT DEFINITION:
 *    - Must appear MORE than n/2 times
 *    - Not equal to, but strictly greater than
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("MAJORITY ELEMENT (Moore's Voting Algorithm)");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]");
console.log("Output:", majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));
console.log("Expected: 4");

console.log("\nTest Case 2:");
console.log("Input: [3, 3, 4, 2, 4, 4, 2, 4]");
console.log("Output:", majorityElement([3, 3, 4, 2, 4, 4, 2, 4]));
console.log("Expected: No Majority Element");

// Export function
module.exports = { majorityElement };
