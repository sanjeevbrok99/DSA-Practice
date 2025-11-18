/**
 * ============================================================================
 * SECOND LARGEST ELEMENT IN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of positive integers arr[], return the second largest element.
 * If the second largest element doesn't exist, return -1.
 * 
 * Note: The second largest element should not be equal to the largest element.
 * 
 * EXAMPLES:
 * Input: arr[] = [12, 35, 1, 10, 34, 1]
 * Output: 34
 * Explanation: Largest = 35, Second largest = 34
 * 
 * Input: arr[] = [10, 10, 10]
 * Output: -1
 * Explanation: All elements are same
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * We can find the second largest in ONE PASS through the array!
 * - Keep track of largest and second largest
 * - Update them as we iterate
 * - No sorting needed!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass Algorithm (MOST EFFICIENT - O(n))
 * ============================================================================
 * 
 * APPROACH:
 * 1. Keep track of largest and second largest
 * 2. For each element:
 *    - If it's larger than largest: update both
 *    - If it's between largest and second largest: update second largest
 * 3. Return second largest (or -1 if not found)
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [12, 35, 1, 10, 34, 1]
 * 
 * Initial:
 *   largest = -1 (or -Infinity)
 *   secondLargest = -1 (or -Infinity)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Process 12:
 * ──────────────────────────────────────────────────────────────────────
 *   12 > largest (-1)? YES
 *   Update: largest = 12, secondLargest = -1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Process 35:
 * ──────────────────────────────────────────────────────────────────────
 *   35 > largest (12)? YES
 *   Update: secondLargest = 12 (old largest)
 *           largest = 35 (new largest)
 *   
 *   Current: largest = 35, secondLargest = 12
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Process 1:
 * ──────────────────────────────────────────────────────────────────────
 *   1 > largest (35)? NO
 *   1 > secondLargest (12)? NO
 *   No update needed
 *   
 *   Current: largest = 35, secondLargest = 12
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Process 10:
 * ──────────────────────────────────────────────────────────────────────
 *   10 > largest (35)? NO
 *   10 > secondLargest (12)? NO
 *   No update needed
 *   
 *   Current: largest = 35, secondLargest = 12
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Process 34:
 * ──────────────────────────────────────────────────────────────────────
 *   34 > largest (35)? NO
 *   34 > secondLargest (12)? YES
 *   34 != largest (35)? YES (not equal)
 *   Update: secondLargest = 34
 *   
 *   Current: largest = 35, secondLargest = 34
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Process 1:
 * ──────────────────────────────────────────────────────────────────────
 *   1 > largest (35)? NO
 *   1 > secondLargest (34)? NO
 *   No update needed
 *   
 *   Final: largest = 35, secondLargest = 34
 * 
 * ──────────────────────────────────────────────────────────────────────
 * RESULT: 34 ✓
 * ──────────────────────────────────────────────────────────────────────
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through the array
 *   - Visit each element once
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables (largest, secondLargest)
 *   - No extra arrays or data structures
 * 
 * WHY IT'S EFFICIENT:
 * - No sorting needed (sorting would be O(n log n))
 * - Single pass (no nested loops)
 * - Constant space (O(1))
 */
function secondLargest(arr) {
    // Edge case: array too small
    if (arr.length < 2) {
        return -1;
    }
    
    let largest = -1;
    let secondLargest = -1;
    
    for (const num of arr) {
        /**
         * CASE 1: num is larger than current largest
         * - Move largest to secondLargest
         * - Update largest to num
         */
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        /**
         * CASE 2: num is between largest and secondLargest
         * - num is not larger than largest
         * - num is larger than secondLargest
         * - num is not equal to largest (important!)
         */
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
        /**
         * CASE 3: num is smaller or equal to secondLargest
         * - Do nothing, continue to next element
         */
    }
    
    // If secondLargest is still -1, no valid second largest exists
    return secondLargest;
}

/**
 * ============================================================================
 * IMPORTANT EDGE CASES HANDLED:
 * ============================================================================
 * 
 * 1. All elements are the same: [10, 10, 10]
 *    - No second largest exists
 *    - Return -1
 * 
 * 2. Only two distinct elements: [5, 5, 5, 10, 10]
 *    - Largest = 10, Second = 5
 *    - Return 5
 * 
 * 3. Array with two elements: [5, 10]
 *    - Largest = 10, Second = 5
 *    - Return 5
 * 
 * 4. Array with one element: [5]
 *    - No second largest
 *    - Return -1
 * 
 * 5. Empty array: []
 *    - No elements
 *    - Return -1
 * 
 * ============================================================================
 * WHY NOT USE SORTING?
 * ============================================================================
 * 
 * SORTING APPROACH:
 *   arr.sort((a, b) => b - a)
 *   Time: O(n log n)
 *   Less efficient!
 * 
 * OUR APPROACH:
 *   Single pass
 *   Time: O(n)
 *   Much better! ⭐
 * 
 * ============================================================================
 * COMMON MISTAKES TO AVOID:
 * ============================================================================
 * 
 * ❌ WRONG: Not checking if num !== largest
 *    Problem: If arr = [10, 10, 5], would give 10 as second largest
 *    
 * ❌ WRONG: Using arr.sort() and taking arr[1]
 *    Problem: O(n log n) time, not optimal
 *    
 * ❌ WRONG: Not handling duplicate largest elements
 *    Problem: [10, 10, 5] should return 5, not 10
 *    
 * ✓ CORRECT: Our approach handles all these cases!
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("SECOND LARGEST ELEMENT - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [12, 35, 1, 10, 34, 1]");
console.log("Output:", secondLargest([12, 35, 1, 10, 34, 1]));
console.log("Expected: 34");

console.log("\nTest Case 2:");
console.log("Input: [10, 10, 10]");
console.log("Output:", secondLargest([10, 10, 10]));
console.log("Expected: -1");

// Export function
module.exports = { secondLargest };

