/**
 * ============================================================================
 * LEADERS IN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Write a program to print all the LEADERS in the array. An element is a 
 * leader if it is greater than all the elements to its right side. 
 * The rightmost element is always a leader.
 * 
 * EXAMPLES:
 * Input: arr = [16, 17, 4, 3, 5, 2]
 * Output: [17, 5, 2]
 * Explanation:
 *   - 17 > all elements to its right (4, 3, 5, 2)
 *   - 5 > all elements to its right (2)
 *   - 2 is the rightmost element
 * 
 * Input: arr = [1, 2, 3, 4, 5, 2]
 * Output: [5, 2]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Scan from RIGHT to LEFT!
 * - Rightmost element is always a leader
 * - Keep track of maximum seen so far from right
 * - Any element > max is a leader
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Right to Left Scan (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Start from rightmost element (it's always a leader)
 * 2. Keep track of maximum element seen so far from right
 * 3. Move left: if current > max, it's a leader
 * 4. Update max as we go
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: arr = [16, 17, 4, 3, 5, 2]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 5 (Last element), arr[5] = 2
 * ──────────────────────────────────────────────────────────────────────
 * Rightmost element is ALWAYS a leader!
 * maxFromRight = 2
 * leaders = [2]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 4, arr[4] = 5
 * ──────────────────────────────────────────────────────────────────────
 * Is 5 > maxFromRight (2)? YES ✓
 * 5 is a leader!
 * maxFromRight = 5
 * leaders = [2, 5]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 3, arr[3] = 3
 * ──────────────────────────────────────────────────────────────────────
 * Is 3 > maxFromRight (5)? NO ✗
 * 3 is NOT a leader
 * maxFromRight = 5 (unchanged)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 2, arr[2] = 4
 * ──────────────────────────────────────────────────────────────────────
 * Is 4 > maxFromRight (5)? NO ✗
 * 4 is NOT a leader
 * maxFromRight = 5 (unchanged)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 1, arr[1] = 17
 * ──────────────────────────────────────────────────────────────────────
 * Is 17 > maxFromRight (5)? YES ✓
 * 17 is a leader!
 * maxFromRight = 17
 * leaders = [2, 5, 17]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * i = 0, arr[0] = 16
 * ──────────────────────────────────────────────────────────────────────
 * Is 16 > maxFromRight (17)? NO ✗
 * 16 is NOT a leader
 * 
 * Final leaders: [2, 5, 17]
 * Reverse to get left-to-right order: [17, 5, 2] ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass from right to left
 * 
 * SPACE COMPLEXITY: O(k)
 *   - k is number of leaders
 *   - In worst case: O(n) (all elements are leaders)
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass (no nested loops)
 * - No need to check all right elements for each element
 * - Optimal solution
 * 
 * ============================================================================
 */
function leadersInArray(arr) {
    const n = arr.length;
    if (n === 0) return [];
    
    const leaders = [];
    
    // Rightmost element is always a leader
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight);
    
    // Traverse from right to left
    for (let i = n - 2; i >= 0; i--) {
        // If current element is greater than max from right, it's a leader
        if (arr[i] > maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    }
    
    // Reverse to get leaders in left-to-right order
    return leaders.reverse();
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * DEFINITION OF LEADER:
 * An element is a leader if it's greater than ALL elements to its right.
 * 
 * KEY OBSERVATION:
 * If we know the maximum element from right side:
 * - Current element > max → it's leader (greater than all right elements)
 * - Current element ≤ max → NOT leader (max is to its right and ≥ current)
 * 
 * SCAN FROM RIGHT:
 * - Start with rightmost (always leader)
 * - Track max seen so far from right
 * - Compare each element with this max
 * 
 * EXAMPLE VISUALIZATION:
 * arr = [16, 17, 4, 3, 5, 2]
 * 
 * From right: 2 (leader, max=2)
 *          ← 5 > 2? YES! (leader, max=5)
 *          ← 3 > 5? NO
 *          ← 4 > 5? NO
 *          ← 17 > 5? YES! (leader, max=17)
 *          ← 16 > 17? NO
 * 
 * Leaders: [17, 5, 2] ✓
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Nested Loops):
 * ```javascript
 * function leadersBruteForce(arr) {
 *     const leaders = [];
 *     for (let i = 0; i < arr.length; i++) {
 *         let isLeader = true;
 *         for (let j = i + 1; j < arr.length; j++) {
 *             if (arr[j] > arr[i]) {
 *                 isLeader = false;
 *                 break;
 *             }
 *         }
 *         if (isLeader) leaders.push(arr[i]);
 *     }
 *     return leaders;
 * }
 * ```
 * Time: O(n²) ✗ Too slow
 * 
 * OPTIMIZED (Right to Left):
 * Time: O(n) ✓
 * Space: O(k) where k = number of leaders
 * 
 * WINNER: Right to Left scan! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. RIGHT TO LEFT SCAN:
 *    - Process array from end to beginning
 *    - Track maximum seen so far
 *    - Efficient for "greater than all right" problems
 * 
 * 2. MAXIMUM TRACKING:
 *    - Keep max of elements seen so far from right
 *    - Compare current with max
 *    - Update max when needed
 * 
 * 3. RIGHTMOST IS ALWAYS LEADER:
 *    - No elements to its right
 *    - Always include it
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("LEADERS IN ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [16, 17, 4, 3, 5, 2]");
console.log("Output:", leadersInArray([16, 17, 4, 3, 5, 2]));
console.log("Expected: [17, 5, 2]");

console.log("\nTest Case 2:");
console.log("Input: [1, 2, 3, 4, 5, 2]");
console.log("Output:", leadersInArray([1, 2, 3, 4, 5, 2]));
console.log("Expected: [5, 2]");

// Export function
module.exports = { leadersInArray };
