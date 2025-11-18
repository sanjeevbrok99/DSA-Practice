/**
 * ============================================================================
 * HOW TO IMPORT AND USE MinHeap IN JAVASCRIPT
 * ============================================================================
 */

// ============================================================================
// METHOD 1: Using require() (CommonJS - Node.js)
// ============================================================================

const MinHeap = require('./MinHeap');

// Create a new heap instance
const heap = new MinHeap();

// Use the heap
heap.push(5);
heap.push(3);
heap.push(7);
heap.push(1);
heap.push(9);

console.log("Heap:", heap.heap);
console.log("Top (smallest):", heap.top()); // 1
console.log("Size:", heap.size()); // 5

// Remove smallest
console.log("Popped:", heap.pop()); // 1
console.log("New top:", heap.top()); // 3

// ============================================================================
// METHOD 2: Using import (ES6 Modules)
// ============================================================================

// If you're using ES6 modules, you would do:
// import MinHeap from './MinHeap.js';
//
// But you need to add to package.json:
// { "type": "module" }
//
// OR use .mjs extension

// ============================================================================
// EXAMPLE 1: Using MinHeap for Simple Numbers
// ============================================================================

function findKthLargest(nums, k) {
    const MinHeap = require('./MinHeap');
    const minHeap = new MinHeap(); // Default: compares numbers
    
    for (const num of nums) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    
    return minHeap.top();
}

// ============================================================================
// EXAMPLE 2: Using MinHeap for Pairs [number, frequency]
// ============================================================================

function topKFrequentUsingImportedHeap(nums, k) {
    const MinHeap = require('./MinHeap');
    const frequencyMap = new Map();
    
    // Count frequencies
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Create MinHeap with custom comparison for pairs
    // Compare by frequency (second element): [num, freq]
    const minHeap = new MinHeap((a, b) => a[1] - b[1]);
    
    for (const [num, freq] of frequencyMap.entries()) {
        minHeap.push([num, freq]);
        
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    
    // Extract results
    const result = [];
    while (!minHeap.empty()) {
        result.push(minHeap.pop()[0]); // Get number (first element)
    }
    
    return result;
}

// Tests
console.log("\n" + "=".repeat(60));
console.log("Example 1: Kth Largest using imported MinHeap");
console.log("=".repeat(60));
console.log("Input: [3,2,1,5,6,4], k = 2");
console.log("Output:", findKthLargest([3,2,1,5,6,4], 2));
console.log("Expected: 5");

console.log("\n" + "=".repeat(60));
console.log("Example 2: Top K Frequent using imported MinHeap");
console.log("=".repeat(60));
console.log("Input: [1,1,1,2,2,3], k = 2");
console.log("Output:", topKFrequentUsingImportedHeap([1,1,1,2,2,3], 2));
console.log("Expected: [1, 2]");

// ============================================================================
// IMPORTANT NOTES:
// ============================================================================
//
// 1. JavaScript has NO built-in heap
// 2. You must create your own or use a library
// 3. CommonJS (require) works in Node.js
// 4. ES6 modules (import) need special setup
//
// ============================================================================

