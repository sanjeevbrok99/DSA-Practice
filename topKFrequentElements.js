/**
 * ============================================================================
 * TOP K FREQUENT ELEMENTS - Problem Solution with Detailed Explanations
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an integer array nums and an integer k, return the k most frequent 
 * elements. You may return the answer in any order.
 * 
 * WHAT DOES IT MEAN?
 * Find the k elements that appear most often in the array.
 * 
 * EXAMPLES:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Explanation: 1 appears 3 times, 2 appears 2 times, 3 appears 1 time.
 *              The 2 most frequent are [1,2]
 * 
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * We need to:
 * 1. Count how many times each number appears (frequency)
 * 2. Find the k numbers with highest frequency
 * 
 * Think of it like: "Which k numbers show up the most?"
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION 1: Hash Map + Sorting (Easiest to Understand)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Count frequency of each number using a hash map
 * 2. Sort numbers by their frequency (highest first)
 * 3. Take the first k elements
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * 
 * Step 1: Count frequencies
 *   frequencyMap = {
 *     1: 3,  // 1 appears 3 times
 *     2: 2,  // 2 appears 2 times
 *     3: 1   // 3 appears 1 time
 *   }
 * 
 * Step 2: Convert to array and sort by frequency
 *   [[1, 3], [2, 2], [3, 1]]  // [number, frequency]
 *   Sort by frequency (descending): [[1, 3], [2, 2], [3, 1]]
 * 
 * Step 3: Take first k = 2 elements
 *   [1, 2]
 * 
 * TIME COMPLEXITY: O(n log n)
 *   - Counting frequencies: O(n)
 *   - Sorting: O(n log n) where n = unique elements
 * 
 * SPACE COMPLEXITY: O(n)
 *   - Hash map stores all unique elements
 */
function topKFrequent(nums, k) {
    // Step 1: Count frequency of each number
    const frequencyMap = new Map();
    
    for (const num of nums) {
        // If number exists, increment count; otherwise set to 1
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Convert map to array of [number, frequency] pairs
    const entries = Array.from(frequencyMap.entries());
    
    /**
     * ============================================================================
     * WHAT DOES entries.sort((a, b) => b[1] - a[1]) DO? (Line 81)
     * ============================================================================
     * 
     * This line SORTS the array by frequency in DESCENDING order (highest first)
     * 
     * BREAKDOWN:
     * - entries = [[number, frequency], [number, frequency], ...]
     * - a and b are two elements being compared
     * - a[1] = frequency of first element
     * - b[1] = frequency of second element
     * - b[1] - a[1] = sort in descending order (largest first)
     * 
     * EXAMPLE:
     * Before sorting:
     *   entries = [[1, 3], [2, 2], [3, 1]]
     *              [num, freq]
     * 
     * After sorting:
     *   entries = [[1, 3], [2, 2], [3, 1]]
     *              (sorted by frequency: 3, 2, 1 - highest to lowest)
     * 
     * HOW IT WORKS:
     * 
     * Compare [1, 3] and [2, 2]:
     *   b[1] - a[1] = 2 - 3 = -1 (negative)
     *   Negative means: a comes before b
     *   So [1, 3] stays before [2, 2] ✓
     * 
     * Compare [2, 2] and [3, 1]:
     *   b[1] - a[1] = 1 - 2 = -1 (negative)
     *   Negative means: a comes before b
     *   So [2, 2] stays before [3, 1] ✓
     * 
     * RESULT: [[1, 3], [2, 2], [3, 1]]
     *         Highest frequency first!
     * 
     * ============================================================================
     * SORTING RULES:
     * ============================================================================
     * 
     * b[1] - a[1] means:
     * - If result is NEGATIVE → a comes before b (a has higher frequency)
     * - If result is POSITIVE → b comes before a (b has higher frequency)
     * - If result is ZERO → keep original order
     * 
     * This gives us DESCENDING order (highest frequency first)
     * 
     * ============================================================================
     * VISUAL COMPARISON:
     * ============================================================================
     * 
     * BEFORE: [[2, 2], [1, 3], [3, 1]]  (random order)
     * 
     * AFTER:  [[1, 3], [2, 2], [3, 1]]  (sorted by frequency: 3, 2, 1)
     *         ↑ Highest freq first
     * 
     * ============================================================================
     */
    
    // Step 3: Sort by frequency (descending order - highest first)
    entries.sort((a, b) => b[1] - a[1]);
    
    /**
     * ============================================================================
     * WHAT DOES entries.slice(0, k).map(entry => entry[0]) DO? (Line 145)
     * ============================================================================
     * 
     * This line does TWO things:
     * 1. Take first k elements (slice)
     * 2. Extract only the numbers, not frequencies (map)
     * 
     * BREAKDOWN:
     * 
     * PART 1: entries.slice(0, k)
     * - Takes the first k elements from the sorted array
     * - slice(0, k) means: start at index 0, take k elements
     * 
     * PART 2: .map(entry => entry[0])
     * - Goes through each element and extracts only the number
     * - entry = [number, frequency]
     * - entry[0] = number (first element of the pair)
     * - entry[1] = frequency (second element of the pair)
     * 
     * ============================================================================
     * STEP-BY-STEP EXAMPLE:
     * ============================================================================
     * 
     * Input: nums = [1,1,1,2,2,3], k = 2
     * 
     * After sorting (line 142):
     *   entries = [[1, 3], [2, 2], [3, 1]]
     *             [num, freq]
     * 
     * ──────────────────────────────────────────────────────────────────────
     * STEP 1: entries.slice(0, k)
     * ──────────────────────────────────────────────────────────────────────
     * 
     * slice(0, 2) means: take elements from index 0 to index 1 (first 2)
     * 
     * Result:
     *   [[1, 3], [2, 2]]
     *   ↑ First k=2 elements (most frequent)
     * 
     * We removed [3, 1] because it's the 3rd most frequent (we only need top 2)
     * 
     * ──────────────────────────────────────────────────────────────────────
     * STEP 2: .map(entry => entry[0])
     * ──────────────────────────────────────────────────────────────────────
     * 
     * For each [number, frequency] pair, take only the number
     * 
     * Process [[1, 3], [2, 2]]:
     * 
     *   entry = [1, 3]
     *   entry[0] = 1  (the number)
     *   entry[1] = 3  (the frequency - we don't need this)
     * 
     *   entry = [2, 2]
     *   entry[0] = 2  (the number)
     *   entry[1] = 2  (the frequency - we don't need this)
     * 
     * Result: [1, 2]
     * 
     * ──────────────────────────────────────────────────────────────────────
     * FINAL RESULT:
     * ──────────────────────────────────────────────────────────────────────
     * 
     * [1, 2] - The 2 most frequent numbers!
     * 
     * ============================================================================
     * VISUAL TRANSFORMATION:
     * ============================================================================
     * 
     * Start:  [[1, 3], [2, 2], [3, 1]]
     *         [num, freq]
     * 
     *         ↓ slice(0, 2) - take first 2
     * 
     * After slice: [[1, 3], [2, 2]]
     * 
     *               ↓ map(entry => entry[0]) - extract numbers only
     * 
     * Final:  [1, 2]
     *         ↑ Only numbers, no frequencies!
     * 
     * ============================================================================
     * WHY DO WE DO THIS?
     * ============================================================================
     * 
     * Problem asks: "return the k most frequent elements"
     * - We need: [1, 2] (just the numbers)
     * - We DON'T need: [[1, 3], [2, 2]] (numbers with frequencies)
     * 
     * So we:
     * 1. Take first k elements (most frequent)
     * 2. Extract only the numbers (remove frequencies)
     * 
     * ============================================================================
     */
    
    // Step 4: Take first k elements and return only the numbers
    return entries.slice(0, k).map(entry => entry[0]);
}

/**
 * ============================================================================
 * SOLUTION 2: Using Min Heap (Keep Only K Most Frequent)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Count frequency of each number
 * 2. Use a min heap of size k to track the k most frequent elements
 * 3. If heap is full and we find a more frequent element, remove the smallest
 * 
 * WHAT IS A MIN HEAP?
 * Think of it like a "priority line" where the SMALLEST frequency is always at 
 * the front (top). When we keep only k elements in this line, the top will be
 * the k-th most frequent element.
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * 
 * Step 1: Count frequencies
 *   frequencyMap = {
 *     1: 3,  // 1 appears 3 times
 *     2: 2,  // 2 appears 2 times
 *     3: 1   // 3 appears 1 time
 *   }
 * 
 * Step 2: Process each [number, frequency] pair
 *   Process [1, 3]: heap = [[1, 3]]
 *   Process [2, 2]: heap = [[2, 2], [1, 3]]  // min heap: smallest freq on top
 *   Process [3, 1]: heap is full (size k=2)
 *                   Top is [2, 2] with freq 2
 *                   [3, 1] has freq 1 < 2, so skip it
 * 
 * Step 3: Return all numbers from heap
 *   Result: [2, 1] or [1, 2] (order doesn't matter)
 * 
 * VISUAL EXPLANATION:
 *   Min Heap (size k=2):
 *       [2,2]  ← Top (smallest frequency in our k elements)
 *        /
 *     [1,3]   ← Has higher frequency
 * 
 * WHY MIN HEAP?
 * - We keep the top K most frequent
 * - Min heap lets us quickly remove the "weakest" element (smallest frequency)
 * - When heap is full, if new element has higher freq, we remove top (smallest)
 * 
 * TIME COMPLEXITY: O(n log k)
 *   - Counting: O(n)
 *   - Heap operations: O(n log k) - each insertion/deletion is O(log k)
 * 
 * SPACE COMPLEXITY: O(n + k)
 *   - Hash map: O(n)
 *   - Heap: O(k)
 */

// ============================================================================
// WHY DO WE NEED TO CREATE MinHeap CLASS?
// ============================================================================
// JavaScript does NOT have a built-in heap/priority queue like:
// - Python has: heapq module
// - Java has: PriorityQueue class
// - C++ has: priority_queue
//
// So we must implement our own MinHeap class!
// ============================================================================

// Min Heap Implementation - We create this because JavaScript lacks built-in heap
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // Heapify up to maintain min heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            
            // Compare frequencies (heap[i][1] is the frequency)
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    // Heapify down to maintain min heap property
    heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = leftChild;
            
            // Find child with smaller frequency
            if (rightChild < this.heap.length && 
                this.heap[rightChild][1] < this.heap[leftChild][1]) {
                smallest = rightChild;
            }
            
            if (this.heap[index][1] <= this.heap[smallest][1]) break;
            
            this.swap(index, smallest);
            index = smallest;
        }
    }
    
    // Insert element into the min heap
    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    // Remove and return the top element (smallest)
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    
    // Get the top element (smallest)
    top() {
        return this.heap[0];
    }
    
    // Check if the heap is empty
    empty() {
        return this.heap.length === 0;
    }
}

function topKFrequentOptimized(nums, k) {
    // Step 1: Count frequency of each number
    const frequencyMap = new Map();
    
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Use min heap to keep track of k most frequent elements
    // We store [number, frequency] pairs in the heap
    const minHeap = new MinHeap();
    
    /**
     * ============================================================================
     * STEP-BY-STEP EXPLANATION OF THIS LOOP (Lines 238-246)
     * ============================================================================
     * 
     * GOAL: Keep only K most frequent elements in the heap
     * 
     * EXAMPLE: nums = [1,1,1,2,2,3], k = 2
     * 
     * After Step 1, we have:
     *   frequencyMap = {
     *     1: 3,  // number 1 appears 3 times
     *     2: 2,  // number 2 appears 2 times
     *     3: 1   // number 3 appears 1 time
     *   }
     * 
     * NOW LET'S GO THROUGH EACH ITERATION:
     * 
     * ──────────────────────────────────────────────────────────────────────
     * ITERATION 1: Process [1, 3]
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Line 240: minHeap.push([1, 3])
     *   - Add number 1 with frequency 3 to heap
     *   - Heap: [[1, 3]]
     *   - Size: 1
     * 
     * Line 243: if (minHeap.heap.length > k)
     *   - Check: 1 > 2? NO
     *   - Don't remove anything
     *   - Heap still: [[1, 3]]
     * 
     * ──────────────────────────────────────────────────────────────────────
     * ITERATION 2: Process [2, 2]
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Line 240: minHeap.push([2, 2])
     *   - Add number 2 with frequency 2 to heap
     *   - Heap: [[2, 2], [1, 3]]
     *            ↑ Top (smallest frequency = 2)
     *   - Size: 2
     * 
     * Line 243: if (minHeap.heap.length > k)
     *   - Check: 2 > 2? NO
     *   - Don't remove anything
     *   - Heap still: [[2, 2], [1, 3]]
     * 
     * ──────────────────────────────────────────────────────────────────────
     * ITERATION 3: Process [3, 1]
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Line 240: minHeap.push([3, 1])
     *   - Add number 3 with frequency 1 to heap
     *   - Heap: [[3, 1], [2, 2], [1, 3]]
     *            ↑ Top (smallest frequency = 1)
     *   - Size: 3
     * 
     * Line 243: if (minHeap.heap.length > k)
     *   - Check: 3 > 2? YES! ✓
     *   - Heap is too big, we need to remove one
     * 
     * Line 244: minHeap.pop()
     *   - Remove the top element (smallest frequency)
     *   - Removes [3, 1] because it has frequency 1 (smallest)
     *   - Heap now: [[2, 2], [1, 3]]
     *                ↑ Top (smallest frequency = 2)
     *   - Size: 2 (back to k)
     * 
     * ──────────────────────────────────────────────────────────────────────
     * FINAL RESULT:
     * ──────────────────────────────────────────────────────────────────────
     * 
     * Heap contains: [[2, 2], [1, 3]]
     * These are the 2 most frequent elements!
     * - Number 1 appears 3 times (most frequent)
     * - Number 2 appears 2 times (second most frequent)
     * - Number 3 was removed (only 1 time, least frequent)
     * 
     * ============================================================================
     * KEY INSIGHT:
     * ============================================================================
     * 
     * We ALWAYS keep the heap size = k
     * - When heap size > k, we remove the element with SMALLEST frequency
     * - This ensures we always have the K MOST FREQUENT elements
     * 
     * Think of it like: "Keep only the top k players, kick out the weakest!"
     * 
     * ============================================================================
     */
    
    for (const [num, freq] of frequencyMap.entries()) {
        // Add [number, frequency] pair to heap
        minHeap.push([num, freq]);
        
        // If heap size exceeds k, remove the element with smallest frequency
        if (minHeap.heap.length > k) {
            minHeap.pop();
        }
    }
    
    // Step 3: Extract all numbers from heap
    const result = [];
    while (!minHeap.empty()) {
        result.push(minHeap.pop()[0]); // Get only the number, not frequency
    }
    
    return result;
}

/**
 * ============================================================================
 * IMPORTANT CONCEPTS TO REMEMBER
 * ============================================================================
 * 
 * 1. HASH MAP FOR COUNTING:
 *    - Always use Map/Object to count frequencies
 *    - Pattern: map.set(key, (map.get(key) || 0) + 1)
 * 
 * 2. MIN HEAP PATTERN:
 *    - Keep smallest element at top
 *    - Use to maintain k largest elements
 *    - When heap is full, remove smallest if we find larger
 * 
 * 3. SORTING BY FREQUENCY:
 *    - Convert map to array of [key, value] pairs
 *    - Sort by value: arr.sort((a, b) => b[1] - a[1])
 * 
 * 4. TOP K PATTERN:
 *    - Count frequencies first
 *    - Then find k largest/smallest
 *    - Can use sorting or heap
 * 
 * ============================================================================
 * COMPARISON OF APPROACHES
 * ============================================================================
 * 
 * | Approach      | Time Complexity | Space | Best For              |
 * |---------------|--------------------|-------|-----------------------|
 * | Hash + Sort   | O(n log n)         | O(n)  | Easy to understand    |
 * | Min Heap      | O(n log k)         | O(k)  | When k is small ⭐    |
 * 
 * RECOMMENDATION:
 * - For interviews: Use Heap when k << n (k is much smaller than n)
 * - For learning: Start with Hash + Sort (easier to understand)
 * 
 * WHY HEAP IS BETTER WHEN K IS SMALL:
 * - If k = 10 and n = 1,000,000
 *   Sorting: O(1,000,000 log 1,000,000) ≈ 20,000,000 operations
 *   Heap: O(1,000,000 log 10) ≈ 3,300,000 operations (6x faster!)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("TOP K FREQUENT ELEMENTS - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: nums = [1,1,1,2,2,3], k = 2");
console.log("Output:", topKFrequent([1,1,1,2,2,3], 2));
console.log("Expected: [1, 2]");

console.log("\nTest Case 2:");
console.log("Input: nums = [1], k = 1");
console.log("Output:", topKFrequent([1], 1));
console.log("Expected: [1]");

// Export functions
module.exports = { 
    topKFrequent, 
    topKFrequentOptimized
};

 