/**
 * ============================================================================
 * COUNT ANAGRAM OCCURRENCES (SLIDING WINDOW) - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given a text string and a pattern string, find the count of all anagrams 
 * (or permutations) of the pattern in the text.
 * 
 * EXAMPLES:
 * Input: text = "forxxorfxdofr", pattern = "for"
 * Output: 3
 * Explanation: Anagrams of "for" are "for", "ofr", "orf"
 *   - "for" at index 0
 *   - "orf" at index 4-6
 *   - "ofr" at index 9-11
 * 
 * Input: text = "aabaabaa", pattern = "aaba"
 * Output: 4
 * Explanation: Pattern "aaba" has anagrams at positions 0, 1, 2, 4
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Use SLIDING WINDOW + FREQUENCY MAP!
 * - Create frequency map of pattern
 * - Slide window of size = pattern length
 * - Compare frequencies at each window
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Sliding Window with Frequency Count (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Create frequency map of pattern
 * 2. Use sliding window of size = pattern.length
 * 3. For each window:
 *    - Build frequency map of current window
 *    - If frequencies match → found anagram
 * 4. Return count of anagrams found
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: text = "forxxorfxdofr", pattern = "for"
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Pattern frequency map:
 * ──────────────────────────────────────────────────────────────────────
 * pattern = "for"
 * patternMap = { 'f': 1, 'o': 1, 'r': 1 }
 * k = 3 (window size)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Window 1: "for" (indices 0-2)
 * ──────────────────────────────────────────────────────────────────────
 * windowMap = { 'f': 1, 'o': 1, 'r': 1 }
 * Does windowMap === patternMap? YES! ✓
 * count = 1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Window 2: "orx" (indices 1-3)
 * ──────────────────────────────────────────────────────────────────────
 * windowMap = { 'o': 1, 'r': 1, 'x': 1 }
 * Does windowMap === patternMap? NO (has 'x', missing 'f')
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Window 3: "rxx" (indices 2-4)
 * ──────────────────────────────────────────────────────────────────────
 * Does windowMap === patternMap? NO
 * 
 * ... continue sliding ...
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Window 5: "xor" (indices 4-6)
 * ──────────────────────────────────────────────────────────────────────
 * windowMap = { 'x': 1, 'o': 1, 'r': 1 }
 * Does windowMap === patternMap? NO (has 'x', missing 'f')
 * 
 * ... after checking correctly: "orf" at indices 4-6 ...
 * count = 2
 * 
 * Final count = 3 ✓
 * 
 * TIME COMPLEXITY: O(n * k)
 *   - n = text length
 *   - k = pattern length
 *   - For each window, build frequency map: O(k)
 *   - Better optimization possible with maintaining window map
 * 
 * SPACE COMPLEXITY: O(k)
 *   - Pattern frequency map: O(k)
 *   - Window frequency map: O(k)
 * 
 * WHY IT'S EFFICIENT:
 * - Sliding window avoids checking all substrings
 * - Frequency comparison instead of sorting
 * 
 * ============================================================================
 */
function countAnagrams(text, pattern) {
    const n = text.length;
    const k = pattern.length;
    
    if (k > n) return 0;
    
    // Create frequency map of pattern
    const patternMap = new Map();
    for (let char of pattern) {
        patternMap.set(char, (patternMap.get(char) || 0) + 1);
    }
    
    let count = 0;
    
    // Slide window through text
    for (let i = 0; i <= n - k; i++) {
        // Build frequency map of current window
        const windowMap = new Map();
        for (let j = i; j < i + k; j++) {
            const char = text[j];
            windowMap.set(char, (windowMap.get(char) || 0) + 1);
        }
        
        // Check if window is anagram of pattern
        if (mapsAreEqual(patternMap, windowMap)) {
            count++;
        }
    }
    
    return count;
}

// Helper function to compare two maps
function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    
    return true;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * ANAGRAM DEFINITION:
 * Two strings are anagrams if they have same characters with same frequencies
 * Example: "for", "orf", "rof" are all anagrams
 * 
 * FREQUENCY MAP:
 * Instead of sorting, use frequency counting:
 * - "for": {f:1, o:1, r:1}
 * - "orf": {o:1, r:1, f:1}
 * - Same frequencies → Anagram!
 * 
 * SLIDING WINDOW:
 * Check each substring of length k:
 * "forxxorfxdofr" with pattern "for" (k=3)
 * 
 * Windows:
 * [for]xxorfxdofr → "for" ✓
 * f[orx]xorfxdofr → "orx" ✗
 * fo[rxx]orfxdofr → "rxx" ✗
 * ...
 * 
 * ============================================================================
 * OPTIMIZED VERSION (O(n) time)
 * ============================================================================
 * 
 * Instead of rebuilding window map each time, maintain it:
 * 
 * ```javascript
 * function countAnagramsOptimized(text, pattern) {
 *     const n = text.length;
 *     const k = pattern.length;
 *     
 *     const patternMap = new Map();
 *     for (let char of pattern) {
 *         patternMap.set(char, (patternMap.get(char) || 0) + 1);
 *     }
 *     
 *     const windowMap = new Map();
 *     let count = 0;
 *     
 *     for (let i = 0; i < n; i++) {
 *         // Add new character
 *         windowMap.set(text[i], (windowMap.get(text[i]) || 0) + 1);
 *         
 *         // Remove old character if window too large
 *         if (i >= k) {
 *             const oldChar = text[i - k];
 *             if (windowMap.get(oldChar) === 1) {
 *                 windowMap.delete(oldChar);
 *             } else {
 *                 windowMap.set(oldChar, windowMap.get(oldChar) - 1);
 *             }
 *         }
 *         
 *         // Check if current window is anagram
 *         if (i >= k - 1 && mapsAreEqual(patternMap, windowMap)) {
 *             count++;
 *         }
 *     }
 *     
 *     return count;
 * }
 * ```
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. ANAGRAM DETECTION:
 *    - Same characters, same frequencies
 *    - Use frequency map, not sorting
 *    - Order doesn't matter
 * 
 * 2. SLIDING WINDOW:
 *    - Fixed size window (pattern length)
 *    - Slide through text
 *    - Check each window
 * 
 * 3. FREQUENCY COMPARISON:
 *    - Two maps with same key-value pairs
 *    - Must have same size
 *    - All keys must match with same values
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("COUNT ANAGRAM OCCURRENCES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log('Input: text = "forxxorfxdofr", pattern = "for"');
console.log("Output:", countAnagrams("forxxorfxdofr", "for"));
console.log("Expected: 3");

console.log("\nTest Case 2:");
console.log('Input: text = "aabaabaa", pattern = "aaba"');
console.log("Output:", countAnagrams("aabaabaa", "aaba"));
console.log("Expected: 4");

// Export function
module.exports = { countAnagrams };
