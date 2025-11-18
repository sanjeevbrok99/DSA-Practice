// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false; // Anagrams must be the same length
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

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false