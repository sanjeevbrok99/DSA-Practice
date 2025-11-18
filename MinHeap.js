/**
 * ============================================================================
 * MIN HEAP - Reusable Implementation
 * ============================================================================
 * 
 * This is a reusable MinHeap class that you can import in other files.
 * JavaScript doesn't have a built-in heap, so we create our own.
 * 
 * USAGE:
 *   const MinHeap = require('./MinHeap');
 *   const heap = new MinHeap();
 *   heap.push(5);
 *   heap.push(3);
 *   console.log(heap.top()); // 3 (smallest)
 * 
 * ============================================================================
 */

class MinHeap {
    constructor(compareFn = null) {
        this.heap = [];
        // Custom comparison function
        // Default: compare simple numbers
        // For pairs: (a, b) => a[1] - b[1] (compare by second element)
        this.compare = compareFn || ((a, b) => a - b);
    }
    
    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // Compare two elements
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }
    
    // Heapify up to maintain min heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            
            // Use custom comparison
            if (!this.lessThan(this.heap[index], this.heap[parentIndex])) break;
            
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
            
            // Find child with smaller value using custom comparison
            if (rightChild < this.heap.length && 
                this.lessThan(this.heap[rightChild], this.heap[leftChild])) {
                smallest = rightChild;
            }
            
            if (!this.lessThan(this.heap[smallest], this.heap[index])) break;
            
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
    
    // Get the top element (smallest) without removing it
    top() {
        return this.heap[0];
    }
    
    // Check if the heap is empty
    empty() {
        return this.heap.length === 0;
    }
    
    // Get heap size
    size() {
        return this.heap.length;
    }
}

// Export for use in other files
module.exports = MinHeap;

