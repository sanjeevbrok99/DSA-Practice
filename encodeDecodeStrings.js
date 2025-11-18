/**
 * ============================================================================
 * ENCODE AND DECODE STRINGS - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Design an algorithm to encode a list of strings to a single string.
 * The encoded string is then decoded back to the original list of strings.
 * 
 * EXAMPLES:
 * Input: ["neet","code","love","you"]
 * Output: ["neet","code","love","you"]
 * 
 * Input: ["we","say",":","yes"]
 * Output: ["we","say",":","yes"]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * 
 * The challenge: How to separate strings when encoding?
 * - Can't use simple delimiter (like comma) because strings might contain it
 * - Solution: Use LENGTH PREFIX pattern
 * 
 * PATTERN: length#string
 * - Store length of string, then delimiter, then the string
 * - When decoding, read length, then read that many characters
 * 
 * Example:
 *   ["neet","code"] → "4#neet4#code"
 *   - "4#neet" means: length=4, string="neet"
 *   - "4#code" means: length=4, string="code"
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Length Prefix Pattern (Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Encode: For each string, write "length#string"
 * 2. Decode: Read length, then read that many characters
 * 
 * STEP-BY-STEP EXAMPLE:
 * 
 * ENCODE: ["neet","code","love","you"]
 * 
 * String 1: "neet"
 *   Length = 4
 *   Encoded: "4#neet"
 * 
 * String 2: "code"
 *   Length = 4
 *   Encoded: "4#code"
 * 
 * String 3: "love"
 *   Length = 4
 *   Encoded: "4#love"
 * 
 * String 4: "you"
 *   Length = 3
 *   Encoded: "3#you"
 * 
 * Final: "4#neet4#code4#love3#you"
 * 
 * DECODE: "4#neet4#code4#love3#you"
 * 
 * Position 0: Read until '#'
 *   Length = 4
 *   Read next 4 characters: "neet"
 *   Result: ["neet"]
 * 
 * Position 5: Read until '#'
 *   Length = 4
 *   Read next 4 characters: "code"
 *   Result: ["neet", "code"]
 * 
 * Continue...
 * Final: ["neet","code","love","you"]
 * 
 * TIME COMPLEXITY: O(n) where n = total characters in all strings
 *   - Encode: O(n) - iterate through all characters once
 *   - Decode: O(n) - iterate through encoded string once
 * 
 * SPACE COMPLEXITY: O(n)
 *   - Encoded string stores all characters
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops
 * - Single pass through data
 * - Handles any characters (even delimiters!)
 * - No escaping needed
 */
function encode(strs) {
    let encoded = '';
    
    for (const str of strs) {
        // Format: length#string
        // Example: "neet" → "4#neet"
        encoded += str.length + '#' + str;
    }
    
    return encoded;
}

function decode(s) {
    const result = [];
    let i = 0;
    
    /**
     * ============================================================================
     * STEP-BY-STEP EXPLANATION OF DECODE FUNCTION (Lines 114-126)
     * ============================================================================
     * 
     * GOAL: Convert encoded string back to array of strings
     * 
     * EXAMPLE: Decode "4#neet4#code"
     * 
     * Encoded string: "4#neet4#code"
     *                  ↑
     *                  i=0 (starting position)
     * 
     * ──────────────────────────────────────────────────────────────────────
     * ITERATION 1: Decode first string "neet"
     * ──────────────────────────────────────────────────────────────────────
     * 
     * STEP 1: Read the length (Lines 114-118)
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Encoded: "4#neet4#code"
     *          ↑
     *          i=0
     * 
     * Line 114: let length = '';  // Start with empty string
     * 
     * Line 115-118: while (s[i] !== '#')
     *   - Check: s[0] = '4', is it '#'? NO
     *   - Line 116: length += s[0]  → length = '4'
     *   - Line 117: i++  → i = 1
     * 
     *   - Check: s[1] = '#', is it '#'? YES! Stop loop
     * 
     * After Step 1:
     *   length = '4'  (as string)
     *   i = 1  (pointing at '#')
     * 
     * ──────────────────────────────────────────────────────────────────────
     * STEP 2: Skip the '#' delimiter (Line 121)
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Encoded: "4#neet4#code"
     *           ↑
     *           i=1 (at '#')
     * 
     * Line 121: i++;  // Move past '#'
     * 
     * After Step 2:
     *   i = 2  (now pointing at 'n' in "neet")
     * 
     * ──────────────────────────────────────────────────────────────────────
     * STEP 3: Read the string (Lines 124-126)
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Encoded: "4#neet4#code"
     *            ↑
     *            i=2 (at 'n')
     * 
     * Line 124: const strLength = parseInt(length);
     *   - Convert '4' (string) to 4 (number)
     *   - strLength = 4
     * 
     * Line 125: const str = s.substring(i, i + strLength);
     *   - s.substring(2, 2 + 4) = s.substring(2, 6)
     *   - Read characters from index 2 to 5: "neet"
     *   - str = "neet"
     * 
     * Line 126: result.push(str);
     *   - Add "neet" to result array
     *   - result = ["neet"]
     * 
     * After Step 3:
     *   result = ["neet"]
     *   i = 2 (still at 'n', but we'll move past it)
     * 
     * ──────────────────────────────────────────────────────────────────────
     * STEP 4: Move to next string (Line 129)
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Encoded: "4#neet4#code"
     *            ↑
     *            i=2 (at 'n')
     * 
     * Line 129: i += strLength;
     *   - i = 2 + 4 = 6
     *   - Now pointing at '4' in "4#code"
     * 
     * After Step 4:
     *   i = 6  (ready for next iteration)
     * 
     * ──────────────────────────────────────────────────────────────────────
     * ITERATION 2: Decode second string "code"
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Encoded: "4#neet4#code"
     *                 ↑
     *                 i=6
     * 
     * STEP 1: Read length
     *   - s[6] = '4', s[7] = '#'
     *   - length = '4'
     *   - i = 7 (at '#')
     * 
     * STEP 2: Skip '#'
     *   - i = 8 (at 'c')
     * 
     * STEP 3: Read string
     *   - strLength = 4
     *   - s.substring(8, 12) = "code"
     *   - result = ["neet", "code"]
     * 
     * STEP 4: Move forward
     *   - i = 8 + 4 = 12 (end of string)
     * 
     * ──────────────────────────────────────────────────────────────────────
     * FINAL RESULT:
     * ──────────────────────────────────────────────────────────────────────
     * 
     * result = ["neet", "code"] ✓
     * 
     * ============================================================================
     * VISUAL WALKTHROUGH:
     * ============================================================================
     * 
     * Encoded: "4#neet4#code"
     * 
     * Position: 0 1 2 3 4 5 6 7 8 9 10 11
     *           ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  ↓
     *           "4 # n e e t 4 # c o  d  e"
     * 
     * Iteration 1:
     *   i=0: Read '4' → length='4'
     *   i=1: Skip '#'
     *   i=2-5: Read "neet" (4 chars)
     *   i=6: Move to next
     * 
     * Iteration 2:
     *   i=6: Read '4' → length='4'
     *   i=7: Skip '#'
     *   i=8-11: Read "code" (4 chars)
     *   i=12: End of string
     * 
     * ============================================================================
     * KEY INSIGHT:
     * ============================================================================
     * 
     * The length tells us EXACTLY how many characters to read!
     * - We read length first (until '#')
     * - Then we read exactly that many characters
     * - No guessing, no ambiguity!
     * 
     * ============================================================================
     */
    
    while (i < s.length) {
        // Step 1: Read the length (until we hit '#')
        let length = '';
        while (s[i] !== '#') {
            length += s[i];
            i++;
        }
        
        // Step 2: Skip the '#' delimiter
        i++; // Move past '#'
        
        // Step 3: Read the string (length characters)
        const strLength = parseInt(length);
        const str = s.substring(i, i + strLength);
        result.push(str);
        
        // Step 4: Move to next string
        i += strLength;
    }
    
    return result;
}

/**
 * ============================================================================
 * ALTERNATIVE SOLUTION: Using Different Delimiter
 * ============================================================================
 * 
 * If you want to use a different delimiter (not '#'), you can:
 * 
 * function encode(strs) {
 *     return strs.map(str => str.length + '|' + str).join('');
 * }
 * 
 * But '#' is safe because it's rarely in strings.
 * 
 * ============================================================================
 * EDGE CASES HANDLED:
 * ============================================================================
 * 
 * 1. Empty strings: "0#" (length 0, no string)
 * 2. Strings with '#' character: Works! (we read length first)
 * 3. Strings with numbers: Works! (length is separate)
 * 4. Single string: Works!
 * 5. Empty array: Returns empty string, decodes to empty array
 * 
 * ============================================================================
 * WHY THIS PATTERN WORKS:
 * ============================================================================
 * 
 * 1. Length tells us exactly how many characters to read
 * 2. '#' delimiter separates length from string
 * 3. No ambiguity - we always know where each string starts/ends
 * 4. Works with ANY characters in the strings
 * 
 * Example with special characters:
 *   Input: ["we","say",":","yes"]
 *   Encoded: "2#we3#say1#:3#yes"
 *   Decoded: ["we","say",":","yes"] ✓
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("ENCODE AND DECODE STRINGS - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
const input1 = ["neet","code","love","you"];
console.log("Input:", input1);
const encoded1 = encode(input1);
console.log("Encoded:", encoded1);
const decoded1 = decode(encoded1);
console.log("Decoded:", decoded1);
console.log("Match:", JSON.stringify(input1) === JSON.stringify(decoded1) ? "✓" : "✗");

console.log("\nTest Case 2:");
const input2 = ["we","say",":","yes"];
console.log("Input:", input2);
const encoded2 = encode(input2);
console.log("Encoded:", encoded2);
const decoded2 = decode(encoded2);
console.log("Decoded:", decoded2);
console.log("Match:", JSON.stringify(input2) === JSON.stringify(decoded2) ? "✓" : "✗");

console.log("\nTest Case 3: Empty strings");
const input3 = ["hello","","world"];
console.log("Input:", input3);
const encoded3 = encode(input3);
console.log("Encoded:", encoded3);
const decoded3 = decode(encoded3);
console.log("Decoded:", decoded3);
console.log("Match:", JSON.stringify(input3) === JSON.stringify(decoded3) ? "✓" : "✗");

console.log("\nTest Case 4: Strings with '#' character");
const input4 = ["test#string","code"];
console.log("Input:", input4);
const encoded4 = encode(input4);
console.log("Encoded:", encoded4);
const decoded4 = decode(encoded4);
console.log("Decoded:", decoded4);
console.log("Match:", JSON.stringify(input4) === JSON.stringify(decoded4) ? "✓" : "✗");

console.log("\nTest Case 5: Single string");
const input5 = ["hello"];
console.log("Input:", input5);
const encoded5 = encode(input5);
console.log("Encoded:", encoded5);
const decoded5 = decode(encoded5);
console.log("Decoded:", decoded5);
console.log("Match:", JSON.stringify(input5) === JSON.stringify(decoded5) ? "✓" : "✗");

// Export functions
module.exports = { encode, decode };

