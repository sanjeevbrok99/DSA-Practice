/**
 * ============================================================================
 * MOST FREQUENT ELEMENT IN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Write a program to find the most frequent item in an array.
 * 
 * EXAMPLES:
 * Input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
 * Output: 'a' (appears 5 times)
 * 
 * Input: [1, 3, 2, 1, 4, 1]
 * Output: 1 (appears 3 times)
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use Hash Map to count frequencies!
 * - Count each element's frequency
 * - Track element with maximum frequency
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Hash Map Frequency Count (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Create a Map to store element frequencies
 * 2. Iterate through array and count each element
 * 3. Track element with maximum frequency
 * 4. Return the most frequent element
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Building frequency map:
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Process 3: freq = {3: 1}
 * Process 'a': freq = {3: 1, 'a': 1}
 * Process 'a': freq = {3: 1, 'a': 2} → maxFreq = 2, mostFrequent = 'a'
 * Process 'a': freq = {3: 1, 'a': 3} → maxFreq = 3, mostFrequent = 'a'
 * Process 2: freq = {3: 1, 'a': 3, 2: 1}
 * Process 3: freq = {3: 2, 'a': 3, 2: 1}
 * Process 'a': freq = {3: 2, 'a': 4, 2: 1} → maxFreq = 4, mostFrequent = 'a'
 * Process 3: freq = {3: 3, 'a': 4, 2: 1}
 * Process 'a': freq = {3: 3, 'a': 5, 2: 1} → maxFreq = 5, mostFrequent = 'a'
 * Process 2: freq = {3: 3, 'a': 5, 2: 2}
 * 
 * Final frequency map:
 * {
 *   3: 3,
 *   'a': 5,  ← Most frequent!
 *   2: 2
 * }
 * 
 * Result: 'a' appears 5 times ✓
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass to count frequencies
 *   - Map operations are O(1)
 * 
 * SPACE COMPLEXITY: O(k)
 *   - k = number of unique elements
 *   - Worst case: O(n) if all unique
 * 
 * WHY IT'S EFFICIENT:
 * - Single pass through array
 * - No nested loops
 * - Hash Map gives O(1) lookups
 * 
 * ============================================================================
 */
function mostFrequentElement(arr) {
    if (arr.length === 0) return null;
    
    // Map to store frequency of each element
    const frequencyMap = new Map();
    
    // Count frequencies
    for (let element of arr) {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    }
    
    // Find element with maximum frequency
    let maxFrequency = 0;
    let mostFrequent = null;
    
    for (let [element, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequent = element;
        }
    }
    
    return { element: mostFrequent, count: maxFrequency };
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * FREQUENCY COUNTING:
 * Need to know: "How many times does each element appear?"
 * 
 * HASH MAP IS PERFECT:
 * - Key: element value
 * - Value: count (how many times it appears)
 * - O(1) access and update
 * 
 * PROCESS:
 * 1. Count all elements → build frequency map
 * 2. Find max frequency → iterate through map
 * 3. Return element with max frequency
 * 
 * EXAMPLE VISUALIZATION:
 * [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2]
 * 
 * Frequency Map:
 * ┌─────┬───────┐
 * │ Key │ Count │
 * ├─────┼───────┤
 * │  3  │   3   │
 * │ 'a' │   5   │ ← Maximum!
 * │  2  │   2   │
 * └─────┴───────┘
 * 
 * ============================================================================
 * COMPARISON WITH BRUTE FORCE
 * ============================================================================
 * 
 * BRUTE FORCE (Nested Loops):
 * ```javascript
 * function mostFrequentBruteForce(arr) {
 *     let maxCount = 0;
 *     let mostFrequent = null;
 *     for (let i = 0; i < arr.length; i++) {
 *         let count = 0;
 *         for (let j = 0; j < arr.length; j++) {
 *             if (arr[i] === arr[j]) count++;
 *         }
 *         if (count > maxCount) {
 *             maxCount = count;
 *             mostFrequent = arr[i];
 *         }
 *     }
 *     return mostFrequent;
 * }
 * ```
 * Time: O(n²) ✗ Too slow
 * 
 * HASH MAP APPROACH:
 * Time: O(n) ✓
 * Space: O(k) where k = unique elements
 * 
 * WINNER: Hash Map! ⭐
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. FREQUENCY COUNTING:
 *    - Use Map/Object to count occurrences
 *    - element → count mapping
 *    - Very common pattern in DSA
 * 
 * 2. HASH MAP BENEFITS:
 *    - O(1) insert
 *    - O(1) lookup
 *    - O(1) update
 *    - Perfect for counting
 * 
 * 3. TWO-PASS APPROACH:
 *    - First pass: build frequency map
 *    - Second pass: find maximum
 *    - Still O(n) overall
 * 
 * 4. WORKS WITH ANY TYPE:
 *    - Numbers, strings, objects
 *    - Map can handle any data type as key
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("MOST FREQUENT ELEMENT IN ARRAY");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]");
const result1 = mostFrequentElement([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log(`Output: ${result1.element} (${result1.count} times)`);
console.log("Expected: a (5 times)");

console.log("\nTest Case 2:");
console.log("Input: [1, 3, 2, 1, 4, 1]");
const result2 = mostFrequentElement([1, 3, 2, 1, 4, 1]);
console.log(`Output: ${result2.element} (${result2.count} times)`);
console.log("Expected: 1 (3 times)");

// Export function
module.exports = { mostFrequentElement };
