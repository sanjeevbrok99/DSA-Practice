/**
 * ============================================================================
 * FIRST NEGATIVE IN EVERY WINDOW - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array and a positive integer k, find the first negative integer 
 * for each window (contiguous subarray) of size k. 
 * If a window does not contain a negative integer, then print 0 for that window.
 * 
 * EXAMPLES:
 * Input: arr = [-8, 2, 3, -6, 10], k = 2
 * Output: [-8, 0, -6, -6]
 * Explanation:
 *   Window [-8, 2] → first negative = -8
 *   Window [2, 3] → no negative = 0
 *   Window [3, -6] → first negative = -6
 *   Window [-6, 10] → first negative = -6
 * 
 * Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
 * Output: [-1, -1, -7, -15, -15, 0]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use Sliding Window + Deque to track negative numbers!
 * - Deque stores negative numbers in current window
 * - First element of deque is the first negative in window
 * - Remove elements that are outside window
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Sliding Window with Deque (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Use two pointers (i, j) for sliding window
 * 2. Use deque to store negative numbers in current window
 * 3. When window size reaches k:
 *    - First element in deque is answer (or 0 if empty)
 *    - Slide window: remove element going out
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
 * 
 * ──────────────────────────────────────────────────────────────────────
 * j = 0, arr[0] = 12
 * ──────────────────────────────────────────────────────────────────────
 * Window: [12]
 * Is 12 negative? NO
 * deque = []
 * Window size (0-0+1=1) < k (3), so expand
 * 
 * ──────────────────────────────────────────────────────────────────────
 * j = 1, arr[1] = -1
 * ──────────────────────────────────────────────────────────────────────
 * Window: [12, -1]
 * Is -1 negative? YES
 * deque = [-1]
 * Window size (1-0+1=2) < k (3), so expand
 * 
 * ──────────────────────────────────────────────────────────────────────
 * j = 2, arr[2] = -7
 * ──────────────────────────────────────────────────────────────────────
 * Window: [12, -1, -7]
 * Is -7 negative? YES
 * deque = [-1, -7]
 * Window size (2-0+1=3) === k (3) ✓
 * 
 * First negative in window = deque[0] = -1
 * result = [-1]
 * 
 * Slide window: i++, j++
 * Remove arr[0]=12 if it's in deque? NO (12 is not negative)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * j = 3, arr[3] = 8
 * ──────────────────────────────────────────────────────────────────────
 * Window: [-1, -7, 8]
 * Is 8 negative? NO
 * deque = [-1, -7]
 * Window size (3-1+1=3) === k (3) ✓
 * 
 * First negative = deque[0] = -1
 * result = [-1, -1]
 * 
 * Slide window: i++, j++
 * Remove arr[1]=-1 if it's in deque? YES
 * deque.shift() → deque = [-7]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * j = 4, arr[4] = -15
 * ──────────────────────────────────────────────────────────────────────
 * Window: [-7, 8, -15]
 * Is -15 negative? YES
 * deque = [-7, -15]
 * Window size (4-2+1=3) === k (3) ✓
 * 
 * First negative = deque[0] = -7
 * result = [-1, -1, -7]
 * 
 * Slide window: i++, j++
 * Remove arr[2]=-7 if it's in deque? YES
 * deque.shift() → deque = [-15]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * j = 5, arr[5] = 30
 * ──────────────────────────────────────────────────────────────────────
 * Window: [8, -15, 30]
 * Is 30 negative? NO
 * deque = [-15]
 * Window size === k ✓
 * 
 * First negative = deque[0] = -15
 * result = [-1, -1, -7, -15]
 * 
 * Continue similarly...
 * 
 * Final: [-1, -1, -7, -15, -15, 0] ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Each element enters and leaves deque at most once
 * 
 * SPACE COMPLEXITY: O(k)
 *   - Deque stores at most k elements
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass through array
 * - Deque operations are O(1)
 * - No nested loops
 * 
 * ============================================================================
 */
function firstNegativeInWindow(arr, k) {
    const n = arr.length;
    const result = [];
    const deque = [];  // Stores negative numbers in current window
    let i = 0;  // Window start
    let j = 0;  // Window end
    
    while (j < n) {
        // If current element is negative, add to deque
        if (arr[j] < 0) {
            deque.push(arr[j]);
        }
        
        // If window size is less than k, expand window
        if (j - i + 1 < k) {
            j++;
        }
        // If window size equals k, process window
        else if (j - i + 1 === k) {
            // First negative is at front of deque (or 0 if empty)
            if (deque.length === 0) {
                result.push(0);
            } else {
                result.push(deque[0]);
                
                // If element leaving window is the first negative, remove from deque
                if (arr[i] === deque[0]) {
                    deque.shift();
                }
            }
            
            // Slide window forward
            i++;
            j++;
        }
    }
    
    return result;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * SLIDING WINDOW:
 * - We have a window of size k that slides through the array
 * - Window: [i, i+1, ..., j] where j-i+1 = k
 * 
 * DEQUE (Double-ended queue):
 * - Stores negative numbers in current window
 * - First element is always the first negative in window
 * - When window slides, remove elements that go out
 * 
 * WHY DEQUE?
 * - We need to know the FIRST negative
 * - We need to remove elements efficiently when they leave window
 * - Deque gives O(1) operations at both ends
 * 
 * EXAMPLE VISUALIZATION:
 * arr = [12, -1, -7, 8, -15]
 * k = 3
 * 
 * Step 1: Window [12, -1, -7]
 *         deque = [-1, -7]
 *         First negative = -1 ✓
 * 
 * Step 2: Window [-1, -7, 8]
 *         deque = [-1, -7]
 *         First negative = -1 ✓
 * 
 * Step 3: Window [-7, 8, -15]
 *         12 left window, but not in deque
 *         -1 left window, remove from deque
 *         deque = [-7, -15]
 *         First negative = -7 ✓
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. SLIDING WINDOW TECHNIQUE:
 *    - Fixed size window of k elements
 *    - Slide by moving both pointers
 *    - Process each window
 * 
 * 2. DEQUE DATA STRUCTURE:
 *    - Add elements at end (push)
 *    - Remove from front (shift)
 *    - Check front element (deque[0])
 * 
 * 3. WINDOW SIZE CHECK:
 *    - j - i + 1 gives current window size
 *    - When size < k: expand (j++)
 *    - When size === k: process and slide (i++, j++)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("FIRST NEGATIVE IN EVERY WINDOW");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: arr = [-8, 2, 3, -6, 10], k = 2");
console.log("Output:", firstNegativeInWindow([-8, 2, 3, -6, 10], 2));
console.log("Expected: [-8, 0, -6, -6]");

console.log("\nTest Case 2:");
console.log("Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3");
console.log("Output:", firstNegativeInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log("Expected: [-1, -1, -7, -15, -15, 0]");

// Export function
module.exports = { firstNegativeInWindow };
