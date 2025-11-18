/**
 * ============================================================================
 * KTH LARGEST ELEMENT IN AN ARRAY - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * Given an integer array nums and an integer k, return the kth largest element 
 * in the array.
 * 
 * Note: It is the kth largest element in the sorted order, not the kth distinct 
 * element.
 * 
 * EXAMPLES:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * Explanation: Sorted: [1,2,3,4,5,6]. 2nd largest is 5
 * 
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 * Explanation: Sorted: [1,2,2,3,3,4,5,5,6]. 4th largest is 4
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * We need to find the kth largest element WITHOUT sorting the entire array.
 * 
 * Two efficient approaches:
 * 1. Quick Select (O(n) average) - Most efficient!
 * 2. Min Heap of size k (O(n log k)) - Also very good
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION 1: Quick Select Algorithm (MOST EFFICIENT - O(n) average)
 * ============================================================================
 * 
 * APPROACH:
 * - Use partition logic from Quick Sort
 * - Instead of sorting both sides, only recurse on the side that contains k
 * - This eliminates half the work each time!
 * 
 * HOW IT WORKS:
 * 1. Pick a pivot and partition the array
 * 2. If pivot is at position (n-k), we found it!
 * 3. If pivot position < (n-k), search in right side
 * 4. If pivot position > (n-k), search in left side
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [3,2,1,5,6,4], k = 2 (find 2nd largest)
 * 
 * We need element at index (6-2) = 4 in sorted array
 * 
 * Pass 1: Pivot = 4 (last element)
 *   Partition: [3,2,1,4,6,5]
 *   Pivot index = 3
 *   3 < 4? Yes, search right side [6,5]
 * 
 * Pass 2: Right side [6,5], Pivot = 5
 *   Partition: [5,6]
 *   Pivot index = 0 (relative to right side)
 *   Need index 4, which is index 1 in right side
 *   0 < 1? Yes, search right side [6]
 * 
 * Pass 3: Right side [6]
 *   Only one element, return 6... wait, let me recalculate
 * 
 * Actually, we need to track the absolute position. Let me explain better:
 * 
 * TIME COMPLEXITY:
 *   - Average Case: O(n) - Each partition eliminates half the elements
 *   - Worst Case: O(n²) - Bad pivot selection (rare)
 * 
 * SPACE COMPLEXITY: O(1) - In-place algorithm
 * 
 * WHY IT'S FASTEST:
 * - Doesn't sort entire array
 * - Only processes the side that contains k
 * - Average case is linear time!
 */
function findKthLargest(nums, k) {
    // We need the element at position (n-k) in sorted array
    // kth largest = (n-k)th smallest
    const n = nums.length;
    const targetIndex = n - k;
    
    function quickSelect(left, right) {
        if (left === right) {
            return nums[left];
        }
        
        // Partition and get pivot index
        const pivotIndex = partition(left, right);
        
        if (pivotIndex === targetIndex) {
            // Found it!
            return nums[pivotIndex];
        } else if (pivotIndex < targetIndex) {
            // Target is in right side
            return quickSelect(pivotIndex + 1, right);
        } else {
            // Target is in left side
            return quickSelect(left, pivotIndex - 1);
        }
    }
    
    function partition(left, right) {
        // Choose rightmost element as pivot
        const pivot = nums[right];
        let i = left;
        
        // Move all elements smaller than pivot to left
        for (let j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }
        
        // Place pivot in correct position
        [nums[i], nums[right]] = [nums[right], nums[i]];
        return i;
    }
    
    return quickSelect(0, nums.length - 1);
}

/**
 * ============================================================================
 * SOLUTION 2: Min Heap of Size K (O(n log k))
 * ============================================================================
 * 
 * APPROACH:
 * - Keep a min heap of size k
 * - The top of heap will be the kth largest element
 * 
 * HOW IT WORKS:
 * 1. Add elements to min heap
 * 2. If heap size > k, remove smallest (top)
 * 3. After processing all, top of heap is kth largest
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * 
 * Process 3: heap = [3], size = 1
 * Process 2: heap = [2, 3], size = 2
 * Process 1: heap = [1, 2, 3], size = 3 > 2
 *            Remove top (1): heap = [2, 3]
 * Process 5: heap = [2, 3, 5], size = 3 > 2
 *            Remove top (2): heap = [3, 5]
 * Process 6: heap = [3, 5, 6], size = 3 > 2
 *            Remove top (3): heap = [5, 6]
 * Process 4: heap = [4, 5, 6], size = 3 > 2
 *            Remove top (4): heap = [5, 6]
 * 
 * Top of heap = 5 (2nd largest) ✓
 * 
 * TIME COMPLEXITY: O(n log k)
 *   - Process n elements
 *   - Each heap operation: O(log k)
 * 
 * SPACE COMPLEXITY: O(k)
 *   - Heap stores k elements
 * 
 * WHEN TO USE:
 * - When k is much smaller than n (k << n)
 * - When you need guaranteed O(n log k) performance
 */
function findKthLargestHeap(nums, k) {
    // Min Heap Implementation
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
        
        size() {
            return this.heap.length;
        }
    }
    
    const minHeap = new MinHeap();
    
    for (const num of nums) {
        minHeap.push(num);
        
        // Keep only k largest elements
        if (minHeap.size() > k) {
            minHeap.pop(); // Remove smallest
        }
    }
    
    // Top of heap is the kth largest
    return minHeap.top();
}

/**
 * ============================================================================
 * COMPARISON OF APPROACHES
 * ============================================================================
 * 
 * | Approach      | Time Complexity | Space | Best For          |
 * |---------------|-----------------|-------|-------------------|
 * | Quick Select  | O(n) average   | O(1)  | Most efficient ⭐ |
 * | Min Heap      | O(n log k)      | O(k)  | When k << n       |
 * | Sorting       | O(n log n)      | O(1)  | Simple but slower |
 * 
 * RECOMMENDATION:
 * - Use Quick Select for best average performance
 * - Use Min Heap when k is very small compared to n
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. QUICK SELECT:
 *    - Like Quick Sort but only recurses on one side
 *    - Eliminates half the work each time
 *    - Average O(n) time!
 * 
 * 2. MIN HEAP FOR K LARGEST:
 *    - Keep k largest elements
 *    - Smallest of those k is at top
 *    - That's the kth largest!
 * 
 * 3. KTH LARGEST = (N-K)TH SMALLEST:
 *    - In sorted array: [1,2,3,4,5,6]
 *    - 2nd largest (k=2) is at index 4 (n-k = 6-2 = 4)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("KTH LARGEST ELEMENT - TEST CASES");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: nums = [3,2,1,5,6,4], k = 2");
console.log("Output (Quick Select):", findKthLargest([3,2,1,5,6,4], 2));
console.log("Output (Min Heap):", findKthLargestHeap([3,2,1,5,6,4], 2));
console.log("Expected: 5");

console.log("\nTest Case 2:");
console.log("Input: nums = [3,2,3,1,2,4,5,5,6], k = 4");
console.log("Output (Quick Select):", findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log("Output (Min Heap):", findKthLargestHeap([3,2,3,1,2,4,5,5,6], 4));
console.log("Expected: 4");

// Export functions
module.exports = { 
    findKthLargest, 
    findKthLargestHeap 
};



