/**
 * ============================================================================
 * VALID ANAGRAM - Problem Solution with Detailed Explanations
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given two strings s and t, return true if t is an anagram of s, and false 
 * otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a 
 * different word or phrase, using all the original letters exactly once.
 * 
 * EXAMPLES:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Anagrams have the SAME characters with the SAME frequency!
 * - "anagram" and "nagaram" both have: 3 a's, 1 n, 1 g, 1 r, 1 m
 * - Just count and compare!
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Hash Map (Character Frequency Count)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Check lengths first (anagrams must be same length)
 * 2. Count character frequency in string s
 * 3. Decrease counts while going through string t
 * 4. If all counts reach zero, it's an anagram!
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: s = "anagram", t = "nagaram"
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 1: Check lengths
 * ──────────────────────────────────────────────────────────────────────
 * s.length = 7, t.length = 7 ✓ Same length, continue
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 2: Count characters in s = "anagram"
 * ──────────────────────────────────────────────────────────────────────
 * charCount = {
 *   'a': 3,
 *   'n': 1,
 *   'g': 1,
 *   'r': 1,
 *   'm': 1
 * }
 * 
 * ──────────────────────────────────────────────────────────────────────
 * STEP 3: Decrease counts using t = "nagaram"
 * ──────────────────────────────────────────────────────────────────────
 * 
 * Process 'n': count['n'] = 1 - 1 = 0 ✓
 * Process 'a': count['a'] = 3 - 1 = 2 ✓
 * Process 'g': count['g'] = 1 - 1 = 0 ✓
 * Process 'a': count['a'] = 2 - 1 = 1 ✓
 * Process 'r': count['r'] = 1 - 1 = 0 ✓
 * Process 'a': count['a'] = 1 - 1 = 0 ✓
 * Process 'm': count['m'] = 1 - 1 = 0 ✓
 * 
 * All counts reached 0! Return true ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * COUNTER EXAMPLE:
 * ──────────────────────────────────────────────────────────────────────
 * Input: s = "rat", t = "car"
 * 
 * Count s = "rat": {'r': 1, 'a': 1, 't': 1}
 * 
 * Process t = "car":
 *   'c': NOT in charCount! Return false ✗
 * 
 * TIME COMPLEXITY: O(n) where n = length of strings
 *   - Count characters in s: O(n)
 *   - Process characters in t: O(n)
 * 
 * SPACE COMPLEXITY: O(1) or O(26)
 *   - At most 26 lowercase letters
 *   - Constant space!
 * 
 * ============================================================================
 */
function isAnagram(s, t) {
    // Anagrams must be same length
    if (s.length !== t.length) {
        return false;
    }
    
    const charCount = new Map();
    
    // Count characters in string s
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Decrease count for characters in string t
    for (let char of t) {
        if (!charCount.has(char)) {
            return false; // Character in t not found in s
        }
        charCount.set(char, charCount.get(char) - 1);
        if (charCount.get(char) < 0) {
            return false; // More occurrences in t than in s
        }
    }
    
    return true; // All character counts matched
}

/**
 * ============================================================================
 * ALTERNATIVE SOLUTION: Sorting
 * ============================================================================
 * 
 * function isAnagram(s, t) {
 *     if (s.length !== t.length) return false;
 *     
 *     const sortedS = s.split('').sort().join('');
 *     const sortedT = t.split('').sort().join('');
 *     
 *     return sortedS === sortedT;
 * }
 * 
 * Time: O(n log n) - sorting
 * Space: O(n) - creating new strings
 * 
 * Hash Map approach is better! O(n) time.
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. CHARACTER FREQUENCY:
 *    - Count how many times each character appears
 *    - Use Map or object for counting
 * 
 * 2. LENGTH CHECK:
 *    - Always check lengths first
 *    - Saves time if different
 * 
 * 3. ANAGRAM PROPERTY:
 *    - Same characters, same frequency
 *    - Order doesn't matter
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("VALID ANAGRAM - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log('Input: s = "anagram", t = "nagaram"');
console.log("Output:", isAnagram("anagram", "nagaram"));
console.log("Expected: true");

console.log("\nTest Case 2:");
console.log('Input: s = "rat", t = "car"');
console.log("Output:", isAnagram("rat", "car"));
console.log("Expected: false");

// Export function
module.exports = { isAnagram };
