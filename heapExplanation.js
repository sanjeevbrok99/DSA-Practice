/**
 * ============================================================================
 * WHAT IS A HEAP? - Complete Explanation for Beginners
 * ============================================================================
 * 
 * SIMPLE DEFINITION:
 * A heap is a special tree structure where:
 * - Parent is always smaller (min heap) OR larger (max heap) than its children
 * - It's like a pyramid where the top always has the smallest/largest value
 * 
 * ============================================================================
 * VISUAL EXAMPLE: MIN HEAP
 * ============================================================================
 * 
 * Think of it like a tournament where the SMALLEST always wins and goes up!
 * 
 *        2          ← Top (root) - SMALLEST value
 *       / \
 *      5   3        ← Children are BIGGER than parent
 *     / \   \
 *    9   7   8      ← Children are BIGGER than their parents
 * 
 * RULES:
 * - Parent (2) < Left Child (5)  ✓
 * - Parent (2) < Right Child (3) ✓
 * - Parent (5) < Left Child (9)  ✓
 * - Parent (5) < Right Child (7) ✓
 * 
 * Array representation: [2, 5, 3, 9, 7, 8]
 *                        0  1  2  3  4  5  (indices)
 * 
 * PARENT-CHILD RELATIONSHIP:
 * - Parent of index i: Math.floor((i-1)/2)
 * - Left child of i: 2*i + 1
 * - Right child of i: 2*i + 2
 * 
 * ============================================================================
 * WHY USE HEAP? (Instead of Array or Sorting)
 * ============================================================================
 * 
 * COMPARISON:
 * 
 * 1. SORTED ARRAY:
 *    - Insert: O(n) - need to find correct position and shift
 *    - Get min: O(1) - just take first element
 *    - Delete min: O(n) - need to shift all elements
 * 
 * 2. MIN HEAP:
 *    - Insert: O(log n) - just bubble up ✓
 *    - Get min: O(1) - always at top ✓
 *    - Delete min: O(log n) - remove top and bubble down ✓
 * 
 * HEAP IS FASTER! ⚡
 * 
 * ============================================================================
 * WHY USE HEAP FOR "TOP K FREQUENT ELEMENTS"?
 * ============================================================================
 * 
 * PROBLEM: Find k most frequent elements
 * 
 * METHOD 1: Sort all elements by frequency
 *   Time: O(n log n)
 *   Example: If n = 1,000,000 → ~20,000,000 operations
 * 
 * METHOD 2: Use Min Heap of size k
 *   Time: O(n log k)
 *   Example: If n = 1,000,000 and k = 10 → ~3,300,000 operations
 *   6x FASTER! 🚀
 * 
 * HOW IT WORKS:
 * 
 * Keep only k elements in heap:
 * - If new element has HIGHER frequency than smallest in heap
 * - Remove smallest (top of min heap)
 * - Add new element
 * 
 * VISUAL EXAMPLE: k = 2 (keep only 2 most frequent)
 * 
 * Frequencies: {1:3, 2:2, 3:1}
 * 
 * Step 1: Add [1,3]
 *   Heap: [1,3]
 * 
 * Step 2: Add [2,2]
 *   Heap:  [2,2]  ← Top (smallest frequency)
 *          /
 *       [1,3]    ← Larger frequency
 * 
 * Step 3: Try to add [3,1]
 *   Heap is full (size = k = 2)
 *   Top is [2,2] with freq 2
 *   [3,1] has freq 1 < 2
 *   Don't add it! (it's less frequent)
 * 
 * Result: Heap contains [1,3] and [2,2] - the 2 most frequent!
 * 
 * ============================================================================
 * TYPES OF PROBLEMS THAT USE HEAP
 * ============================================================================
 * 
 * 1. TOP K PROBLEMS ⭐⭐⭐ (Most Common)
 *    - Top K Frequent Elements
 *    - K Largest Elements in Array
 *    - K Smallest Elements in Array
 *    - Kth Largest Element
 *    - Top K Frequent Words
 * 
 * 2. MERGE K SORTED LISTS/ARRAYS ⭐⭐⭐
 *    - Merge K Sorted Lists
 *    - Merge K Sorted Arrays
 *    - Find Smallest Range Covering K Lists
 * 
 * 3. MEDIAN PROBLEMS ⭐⭐
 *    - Find Median from Data Stream
 *    - Sliding Window Median
 *    (Use 2 heaps: max heap and min heap)
 * 
 * 4. SCHEDULING PROBLEMS ⭐⭐
 *    - Meeting Rooms II
 *    - Task Scheduler
 *    - Process Tasks Using Servers
 * 
 * 5. SHORTEST PATH PROBLEMS ⭐⭐
 *    - Dijkstra's Algorithm
 *    - A* Search Algorithm
 *    - Cheapest Flights Within K Stops
 * 
 * 6. PRIORITY-BASED PROBLEMS ⭐
 *    - Last Stone Weight
 *    - Reorganize String
 *    - Furthest Building You Can Reach
 * 
 * ============================================================================
 * WHEN TO USE MIN HEAP vs MAX HEAP
 * ============================================================================
 * 
 * MIN HEAP (smallest at top):
 * - Find K LARGEST elements → Use min heap of size k
 * - Find K most frequent → Use min heap of size k
 * - Get minimum value quickly
 * 
 * MAX HEAP (largest at top):
 * - Find K SMALLEST elements → Use max heap of size k
 * - Get maximum value quickly
 * 
 * WHY OPPOSITE?
 * To find K LARGEST, we use MIN heap because:
 * - We keep k largest elements
 * - The smallest of these k elements is at top
 * - If we find something bigger, we remove the smallest (top)
 * 
 * ============================================================================
 * HOW TO RECOGNIZE HEAP PROBLEMS
 * ============================================================================
 * 
 * 🔍 Look for these keywords:
 * - "Top K..."
 * - "K largest..."
 * - "K smallest..."
 * - "Kth largest..."
 * - "Priority..."
 * - "Median..."
 * - "Merge K sorted..."
 * 
 * ============================================================================
 * HEAP vs OTHER DATA STRUCTURES
 * ============================================================================
 * 
 * | Operation      | Array | Sorted Array | Heap      |
 * |----------------|-------|--------------|-----------|
 * | Insert         | O(1)  | O(n)         | O(log n)  |
 * | Get Min/Max    | O(n)  | O(1)         | O(1)      |
 * | Delete Min/Max | O(n)  | O(n)         | O(log n)  |
 * | Build          | O(1)  | O(n log n)   | O(n)      |
 * 
 * USE HEAP WHEN:
 * - You need frequent insert + get min/max operations
 * - You're working with priority-based data
 * - You need to maintain top K elements
 * 
 * ============================================================================
 * SIMPLE ANALOGY
 * ============================================================================
 * 
 * Think of a HEAP like a SPORTS TOURNAMENT:
 * 
 * MIN HEAP:
 * - Weakest player always at the top (easy to eliminate)
 * - When new player arrives, if they're stronger than weakest, replace them
 * - Always know who the weakest is (O(1) access)
 * 
 * MAX HEAP:
 * - Strongest player always at the top
 * - When new player arrives, if they're weaker than strongest, they don't matter
 * - Always know who the strongest is (O(1) access)
 * 
 * ============================================================================
 */

// Example 1: Find K Largest Elements
function kLargestElements(arr, k) {
    // Use MIN heap of size k
    // Why? Because we want k largest, so the smallest of those k is at top
    const minHeap = new MinHeap();
    
    for (let num of arr) {
        minHeap.push(num);
        
        // If heap exceeds size k, remove smallest
        if (minHeap.heap.length > k) {
            minHeap.pop(); // Remove smallest
        }
    }
    
    // Heap now contains k largest elements
    return minHeap.heap;
}

// Example 2: Find Kth Largest Element
function kthLargest(arr, k) {
    // Use MIN heap of size k
    const minHeap = new MinHeap();
    
    for (let num of arr) {
        minHeap.push(num);
        if (minHeap.heap.length > k) {
            minHeap.pop();
        }
    }
    
    // Top of heap is the kth largest
    return minHeap.top();
}

// Simple MinHeap for demonstration
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = leftChild;
            
            if (rightChild < this.heap.length && 
                this.heap[rightChild] < this.heap[leftChild]) {
                smallest = rightChild;
            }
            
            if (this.heap[index] <= this.heap[smallest]) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }
    
    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    
    top() {
        return this.heap[0];
    }
}

// ============================================================================
// TEST EXAMPLES
// ============================================================================

console.log("=".repeat(70));
console.log("HEAP EXAMPLES");
console.log("=".repeat(70));

console.log("\nExample 1: Find 3 Largest Elements");
const arr1 = [3, 1, 5, 12, 2, 11];
console.log("Array:", arr1);
console.log("3 Largest:", kLargestElements(arr1, 3));
console.log("Expected: [5, 11, 12] (or any order)");

console.log("\nExample 2: Find Kth Largest Element");
const arr2 = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log("Array:", arr2);
console.log(`${k}th Largest:`, kthLargest(arr2, k));
console.log("Expected: 5 (2nd largest element)");

console.log("\nExample 3: Understanding Min Heap");
const heap = new MinHeap();
console.log("Building heap with: 5, 3, 7, 1, 9");
[5, 3, 7, 1, 9].forEach(num => heap.push(num));
console.log("Heap array:", heap.heap);
console.log("Top (minimum):", heap.top());
console.log("Expected: 1 (smallest element at top)");

console.log("\n" + "=".repeat(70));
console.log("KEY TAKEAWAY:");
console.log("Heap is perfect when you need to repeatedly get min/max values");
console.log("and keep adding/removing elements efficiently!");
console.log("=".repeat(70));

module.exports = { MinHeap, kLargestElements, kthLargest };



