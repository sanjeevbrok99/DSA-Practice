/**
 * ============================================================================
 * GROUP ANAGRAMS - Problem Solution with Detailed Explanations
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an array of strings strs, group all anagrams together.
 * You can return the answer in any order.
 * 
 * WHAT ARE ANAGRAMS?
 * Anagrams are words that have the same characters with the same frequency,
 * just arranged in different orders.
 * Examples: "eat", "tea", "ate" are all anagrams of each other.
 * 
 * EXAMPLES:
 * Input: ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Input: [""]
 * Output: [[""]]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * All anagrams have the same character frequency. If we can create a unique
 * "signature" or "key" for each group of anagrams, we can group them together.
 * 
 * Two ways to create this signature:
 * 1. Sort the characters - All anagrams will have the same sorted string
 * 2. Count character frequencies - All anagrams will have the same frequency pattern
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION 1: Using Sorted String as Key (Recommended for Interviews)
 * ============================================================================
 * 
 * APPROACH:
 * 1. For each string, sort its characters alphabetically to create a unique key
 * 2. All anagrams will produce the same sorted key
 * 3. Use a hash map to group strings with the same key together
 * 
 * EXAMPLE WALKTHROUGH:
 * Input: ["eat", "tea", "tan"]
 * 
 * Step 1: Process "eat"
 *   - Sort: "eat" → ['a','e','t'] → "aet"
 *   - Key: "aet"
 *   - Map: {"aet": ["eat"]}
 * 
 * Step 2: Process "tea"
 *   - Sort: "tea" → ['a','e','t'] → "aet"
 *   - Key: "aet" (same as "eat"!)
 *   - Map: {"aet": ["eat", "tea"]}
 * 
 * Step 3: Process "tan"
 *   - Sort: "tan" → ['a','n','t'] → "ant"
 *   - Key: "ant" (different from "aet")
 *   - Map: {"aet": ["eat", "tea"], "ant": ["tan"]}
 * 
 * Result: [["eat", "tea"], ["tan"]]
 * 
 * TIME COMPLEXITY: O(n × k log k)
 *   - n = number of strings
 *   - k = average length of strings
 *   - We iterate through n strings (O(n))
 *   - For each string, we sort k characters (O(k log k))
 * 
 * SPACE COMPLEXITY: O(n × k)
 *   - We store all strings in the map
 *   - Each string takes O(k) space
 */
function groupAnagrams(strs) {
    // Create a map to store groups of anagrams
    // Key: sorted string (e.g., "aet" for "eat", "tea", "ate")
    // Value: array of original strings that are anagrams
    const anagramMap = new Map();
    
    // Iterate through each string in the input array
    for (const str of strs) {
        // Sort the characters of the string to create a unique key
        // Example: "eat" → ['e','a','t'] → ['a','e','t'] → "aet"
        // All anagrams will have the same sorted key
        const sortedKey = str.split('').sort().join('');
        
        // If this key doesn't exist in the map, create a new array for it
        if (!anagramMap.has(sortedKey)) {
            anagramMap.set(sortedKey, []);
        }
        
        // Add the original string to its corresponding group
        anagramMap.get(sortedKey).push(str);
    }
    
    // Convert map values (arrays of anagrams) to a single array of arrays
    return Array.from(anagramMap.values());
}

/**
 * ============================================================================
 * SOLUTION 2: Using Character Frequency as Key (More Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Count how many times each character appears in the string
 * 2. Create a unique key from this frequency pattern
 * 3. All anagrams will have the same frequency pattern
 * 4. Group strings with the same frequency key together
 * 
 * EXAMPLE WALKTHROUGH:
 * Input: ["eat", "tea"]
 * 
 * For "eat":
 *   - Count: a=1, e=1, t=1
 *   - Frequency array: [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
 *   - Key: "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"
 * 
 * For "tea":
 *   - Count: a=1, e=1, t=1 (same as "eat"!)
 *   - Same frequency array → Same key
 *   - They get grouped together!
 * 
 * WHY USE DELIMITER (#)?
 * Without delimiter: [1, 0, 1] and [10, 1] both become "101" (collision!)
 * With delimiter: [1, 0, 1] → "1#0#1" and [10, 1] → "10#1" (no collision!)
 * 
 * TIME COMPLEXITY: O(n × k)
 *   - n = number of strings
 *   - k = average length of strings
 *   - We iterate through n strings (O(n))
 *   - For each string, we count characters (O(k))
 *   - NO SORTING NEEDED! This is faster when strings are long
 * 
 * SPACE COMPLEXITY: O(n × k)
 *   - Same as Solution 1
 * 
 * WHEN TO USE:
 * - Use this when strings are long (more efficient)
 * - Use Solution 1 for interviews (easier to explain)
 */
function groupAnagramsOptimized(strs) {
    const anagramMap = new Map();
    
    for (const str of strs) {
        // Create frequency array for 26 lowercase letters (a-z)
        // Index 0 = count of 'a', Index 1 = count of 'b', ..., Index 25 = count of 'z'
        const charCount = new Array(26).fill(0);
        
        // Count frequency of each character in the string
        for (const char of str) {
            // Convert character to index: 'a' → 0, 'b' → 1, ..., 'z' → 25
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            charCount[index]++;
        }
        
        // Create a unique key from frequency array
        // Using '#' as delimiter to avoid collisions
        // Example: [2, 1, 3] → "2#1#3" (means 2 a's, 1 b, 3 c's)
        const key = charCount.join('#');
        
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        
        anagramMap.get(key).push(str);
    }
    
    return Array.from(anagramMap.values());
}

/**
 * ============================================================================
 * IMPORTANT CONCEPTS TO REMEMBER
 * ============================================================================
 * 
 * 1. HASH MAP / DICTIONARY PATTERN:
 *    - This problem uses the classic "group by key" pattern
 *    - Use a map to group items that share a common property
 *    - Create a unique key that identifies each group
 * 
 * 2. ANAGRAMS PROPERTY:
 *    - Anagrams have the same character frequency
 *    - Sorting or counting frequencies reveals this property
 *    - This is the KEY INSIGHT for solving the problem
 * 
 * 3. STRING MANIPULATION:
 *    - str.split('') → Convert string to array of characters
 *    - arr.sort() → Sort array alphabetically
 *    - arr.join('') → Convert array back to string
 *    - char.charCodeAt(0) → Get ASCII code of character
 * 
 * 4. MAP OPERATIONS:
 *    - map.has(key) → Check if key exists
 *    - map.set(key, value) → Add/update key-value pair
 *    - map.get(key) → Get value for key
 *    - Array.from(map.values()) → Convert map values to array
 * 
 * ============================================================================
 * EDGE CASES TO CONSIDER
 * ============================================================================
 * 
 * 1. Empty string: [""] → [[""]]
 * 2. Single character: ["a"] → [["a"]]
 * 3. No anagrams: ["abc", "def", "ghi"] → [["abc"], ["def"], ["ghi"]]
 * 4. All anagrams: ["abc", "bca", "cab"] → [["abc", "bca", "cab"]]
 * 5. Mixed case: Usually problem states lowercase, but check constraints
 * 
 * ============================================================================
 * COMPARISON OF APPROACHES
 * ============================================================================
 * 
 * | Aspect          | Sorting Method | Frequency Method |
 * |-----------------|----------------|------------------|
 * | Time            | O(n × k log k) | O(n × k)         |
 * | Space           | O(n × k)       | O(n × k)         |
 * | Ease            | ⭐⭐⭐⭐⭐      | ⭐⭐⭐            |
 * | Best For        | Interviews     | Production       |
 * 
 * RECOMMENDATION:
 * - For interviews: Use Solution 1 (easier to explain)
 * - For production: Use Solution 2 (more efficient)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("TEST CASE 1: Basic Example");
console.log("=".repeat(60));
console.log("Input:", ["eat","tea","tan","ate","nat","bat"]);
console.log("Output:", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log("Expected: [['bat'],['nat','tan'],['ate','eat','tea']]");
console.log("Explanation:");
console.log("  - 'eat', 'tea', 'ate' are anagrams → grouped together");
console.log("  - 'tan', 'nat' are anagrams → grouped together");
console.log("  - 'bat' has no anagrams → separate group");

console.log("\n" + "=".repeat(60));
console.log("TEST CASE 2: Empty String");
console.log("=".repeat(60));
console.log("Input:", [""]);
console.log("Output:", groupAnagrams([""]));
console.log("Expected: [['']]");

console.log("\n" + "=".repeat(60));
console.log("TEST CASE 3: Single Character");
console.log("=".repeat(60));
console.log("Input:", ["a"]);
console.log("Output:", groupAnagrams(["a"]));
console.log("Expected: [['a']]");

console.log("\n" + "=".repeat(60));
console.log("TEST CASE 4: No Anagrams");
console.log("=".repeat(60));
console.log("Input:", ["abc", "def", "ghi"]);
console.log("Output:", groupAnagrams(["abc", "def", "ghi"]));
console.log("Expected: [['abc'], ['def'], ['ghi']]");

console.log("\n" + "=".repeat(60));
console.log("TEST CASE 5: All Anagrams");
console.log("=".repeat(60));
console.log("Input:", ["abc", "bca", "cab"]);
console.log("Output:", groupAnagrams(["abc", "bca", "cab"]));
console.log("Expected: [['abc', 'bca', 'cab']]");

// Export for use in other files
module.exports = { groupAnagrams, groupAnagramsOptimized };

