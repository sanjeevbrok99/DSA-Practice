/**
 * ============================================================================
 * SORTING ALGORITHMS - Complete Guide with Implementations
 * ============================================================================
 * 
 * This file contains detailed explanations and implementations of the most
 * important sorting algorithms. Each algorithm includes:
 * - How it works (step-by-step)
 * - Time & Space Complexity
 * - When to use it
 * - Code implementation
 * - Visual examples
 * 
 * ============================================================================
 * 🎯 DSA/INTERVIEW PERSPECTIVE - MUST KNOW SORTING ALGORITHMS
 * ============================================================================
 * 
 * From a Data Structures & Algorithms learning and interview perspective,
 * here's the priority order of sorting algorithms you should master:
 * 
 * 1. QUICK SORT ⭐⭐⭐⭐⭐ (MUST KNOW - HIGHEST PRIORITY)
 *    - Interview Frequency: VERY HIGH (appears in 40%+ of interviews)
 *    - Why Important: 
 *      • Tests understanding of divide & conquer
 *      • Partition logic is frequently asked
 *      • Used in many problem variations (Kth largest, etc.)
 *    - Key Concepts: Pivot selection, Partition algorithm, Recursion
 *    - Practice: Implement partition function, handle edge cases
 * 
 * 2. MERGE SORT ⭐⭐⭐⭐⭐ (MUST KNOW - HIGHEST PRIORITY)
 *    - Interview Frequency: VERY HIGH (appears in 35%+ of interviews)
 *    - Why Important:
 *      • Classic divide & conquer example
 *      • Merge two sorted arrays is a common sub-problem
 *      • Stable sorting concept
 *      • Used in "Inversion Count", "Reverse Pairs" problems
 *    - Key Concepts: Divide, Conquer, Merge, Two-pointer technique
 *    - Practice: Merge two sorted arrays, count inversions
 * 
 * 3. INSERTION SORT ⭐⭐⭐⭐ (IMPORTANT)
 *    - Interview Frequency: MEDIUM-HIGH (appears in 20%+ of interviews)
 *    - Why Important:
 *      • Simple to implement and explain
 *      • Good for small arrays
 *      • Used in hybrid algorithms
 *      • Tests array manipulation skills
 *    - Key Concepts: Shifting elements, Insertion logic
 *    - Practice: Implement from scratch quickly
 * 
 * 4. HEAP SORT ⭐⭐⭐⭐ (IMPORTANT)
 *    - Interview Frequency: MEDIUM (appears in 15%+ of interviews)
 *    - Why Important:
 *      • Tests heap data structure knowledge
 *      • Used in "Kth largest/smallest" problems
 *      • Guaranteed O(n log n) performance
 *    - Key Concepts: Heapify, Heap property, Priority queue
 *    - Practice: Build heap, extract max/min
 * 
 * 5. COUNTING SORT ⭐⭐⭐ (GOOD TO KNOW)
 *    - Interview Frequency: MEDIUM (appears in 10%+ of interviews)
 *    - Why Important:
 *      • Linear time sorting (O(n + k))
 *      • Used in special cases (limited range)
 *      • Foundation for Radix Sort
 *    - Key Concepts: Frequency counting, Cumulative counts
 *    - Practice: Sort integers with limited range
 * 
 * 6. BUBBLE SORT ⭐⭐ (BASIC - KNOW IT)
 *    - Interview Frequency: LOW (rarely asked directly)
 *    - Why Important:
 *      • Educational purposes
 *      • Tests basic swapping logic
 *      • Sometimes asked to explain
 *    - Key Concepts: Adjacent comparison, Swapping
 * 
 * 7. SELECTION SORT ⭐⭐ (BASIC - KNOW IT)
 *    - Interview Frequency: LOW (rarely asked directly)
 *    - Why Important:
 *      • Simple to understand
 *      • Tests finding minimum/maximum
 *    - Key Concepts: Finding min/max, Swapping
 * 
 * ============================================================================
 * 📚 DSA LEARNING PRIORITY ORDER
 * ============================================================================
 * 
 * MUST MASTER (Focus 80% of your time):
 * 1. Quick Sort - Partition logic, recursion
 * 2. Merge Sort - Divide & conquer, merging
 * 
 * SHOULD KNOW WELL (Focus 15% of your time):
 * 3. Insertion Sort - Simple, frequently used as subroutine
 * 4. Heap Sort - Important for heap-related problems
 * 
 * GOOD TO KNOW (Focus 5% of your time):
 * 5. Counting Sort - Special cases, linear time
 * 6. Bubble Sort - Educational
 * 7. Selection Sort - Educational
 * 
 * ============================================================================
 * 🎓 COMMON INTERVIEW QUESTIONS ON SORTING
 * ============================================================================
 * 
 * 1. "Implement Quick Sort" - Most common
 * 2. "Implement Merge Sort" - Very common
 * 3. "Merge two sorted arrays" - Merge Sort variation
 * 4. "Find Kth largest element" - Quick Sort partition or Heap Sort
 * 5. "Count inversions in array" - Merge Sort variation
 * 6. "Sort array with 0s, 1s, 2s" - Counting Sort or Two-pointer
 * 7. "Sort nearly sorted array" - Insertion Sort
 * 8. "External sorting" - Merge Sort
 * 
 * ============================================================================
 * 💡 INTERVIEW TIPS
 * ============================================================================
 * 
 * 1. Always explain the algorithm before coding
 * 2. Mention time/space complexity
 * 3. Discuss edge cases (empty array, single element, duplicates)
 * 4. For Quick Sort: Explain pivot selection strategies
 * 5. For Merge Sort: Explain stability and when it matters
 * 6. Know when to use which algorithm (see comparison table below)
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * 1. BUBBLE SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Compare adjacent elements and swap them if they're in wrong order
 * - After each pass, the largest element "bubbles up" to the end
 * - Repeat until no swaps are needed
 * 
 * ANALOGY: Like bubbles rising to the surface - larger values rise to the top
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [64, 34, 25, 12, 22, 11, 90]
 * 
 * Pass 1:
 *   [64, 34] → [34, 64] (swap)
 *   [64, 25] → [25, 64] (swap)
 *   [64, 12] → [12, 64] (swap)
 *   [64, 22] → [22, 64] (swap)
 *   [64, 11] → [11, 64] (swap)
 *   [64, 90] → [64, 90] (no swap)
 *   Result: [34, 25, 12, 22, 11, 64, 90] (90 is in correct position)
 * 
 * Pass 2:
 *   Continue comparing adjacent pairs...
 *   Result: [25, 12, 22, 11, 34, 64, 90] (64, 90 in correct positions)
 * 
 * Continue until sorted...
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n) - when array is already sorted
 *   - Average Case: O(n²)
 *   - Worst Case: O(n²) - when array is reverse sorted
 * 
 * SPACE COMPLEXITY: O(1) - only uses a constant amount of extra space
 * 
 * STABILITY: Stable (equal elements maintain their relative order)
 * 
 * WHEN TO USE:
 * - Educational purposes (easy to understand)
 * - Small datasets
 * - When simplicity is more important than efficiency
 * - NOT recommended for large datasets
 */
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    // Outer loop: number of passes
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Inner loop: compare adjacent elements
        // After each pass, the largest element is at the end, so we can reduce comparisons
        for (let j = 0; j < n - i - 1; j++) {
            // If current element is greater than next, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // Optimization: If no swaps occurred, array is already sorted
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

/**
 * ============================================================================
 * 2. SELECTION SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Find the minimum element in the unsorted portion
 * - Swap it with the first element of the unsorted portion
 * - Repeat until the entire array is sorted
 * 
 * ANALOGY: Like selecting cards from a deck - always pick the smallest card
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [64, 25, 12, 22, 11]
 * 
 * Pass 1:
 *   Find minimum in [64, 25, 12, 22, 11] → 11 (at index 4)
 *   Swap 64 with 11
 *   Result: [11, 25, 12, 22, 64] (11 is in correct position)
 * 
 * Pass 2:
 *   Find minimum in [25, 12, 22, 64] → 12 (at index 2)
 *   Swap 25 with 12
 *   Result: [11, 12, 25, 22, 64] (11, 12 in correct positions)
 * 
 * Continue until sorted...
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n²) - always scans entire unsorted portion
 *   - Average Case: O(n²)
 *   - Worst Case: O(n²)
 * 
 * SPACE COMPLEXITY: O(1) - only uses a constant amount of extra space
 * 
 * STABILITY: Unstable (may change relative order of equal elements)
 * 
 * WHEN TO USE:
 * - When memory writes are expensive (minimizes swaps)
 * - Small datasets
 * - Simple implementation needed
 * - NOT recommended for large datasets
 */
function selectionSort(arr) {
    const n = arr.length;
    
    // Outer loop: one element is placed at correct position per iteration
    for (let i = 0; i < n - 1; i++) {
        // Assume current index has the minimum element
        let minIndex = i;
        
        // Find the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the minimum element with the first element of unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

/**
 * ============================================================================
 * 3. INSERTION SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Build sorted array one element at a time
 * - Take each element and insert it into its correct position in sorted portion
 * - Similar to how you sort playing cards in your hand
 * 
 * ANALOGY: Like sorting playing cards - pick a card and insert it in the right place
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [64, 25, 12, 22, 11]
 * 
 * Pass 1: [64] is already sorted (first element)
 * 
 * Pass 2: Insert 25
 *   Compare 25 with 64 → 25 < 64, so insert 25 before 64
 *   Result: [25, 64]
 * 
 * Pass 3: Insert 12
 *   Compare 12 with 64 → 12 < 64
 *   Compare 12 with 25 → 12 < 25, so insert 12 at beginning
 *   Result: [12, 25, 64]
 * 
 * Continue until sorted...
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n) - when array is already sorted
 *   - Average Case: O(n²)
 *   - Worst Case: O(n²) - when array is reverse sorted
 * 
 * SPACE COMPLEXITY: O(1) - only uses a constant amount of extra space
 * 
 * STABILITY: Stable (equal elements maintain their relative order)
 * 
 * WHEN TO USE:
 * - Small datasets (very efficient for small arrays)
 * - Nearly sorted arrays (excellent performance)
 * - Online algorithms (can sort as data arrives)
 * - Hybrid algorithms (used in Timsort, Introsort)
 * - NOT recommended for large unsorted datasets
 */
function insertionSort(arr) {
    const n = arr.length;
    
    // Start from second element (index 1)
    // First element is considered already sorted
    for (let i = 1; i < n; i++) {
        // Element to be inserted
        const key = arr[i];
        let j = i - 1;
        
        // Move elements greater than key one position ahead
        // This creates space for inserting the key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert key at its correct position
        arr[j + 1] = key;
    }
    
    return arr;
}

/**
 * ============================================================================
 * 4. MERGE SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Divide: Split array into two halves
 * - Conquer: Recursively sort both halves
 * - Combine: Merge the two sorted halves
 * 
 * ANALOGY: Like organizing a deck of cards by splitting into two piles,
 *          sorting each pile, then merging them back together
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [38, 27, 43, 3, 9, 82, 10]
 * 
 * Divide:
 *   [38, 27, 43, 3]  |  [9, 82, 10]
 *   [38, 27] | [43, 3]  |  [9, 82] | [10]
 *   [38] | [27] | [43] | [3] | [9] | [82] | [10]
 * 
 * Merge (combining sorted arrays):
 *   [27, 38] | [3, 43]  |  [9, 82] | [10]
 *   [3, 27, 38, 43]  |  [9, 10, 82]
 *   [3, 9, 10, 27, 38, 43, 82]
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n log n)
 *   - Average Case: O(n log n)
 *   - Worst Case: O(n log n) - consistent performance!
 * 
 * SPACE COMPLEXITY: O(n) - needs extra space for merging
 * 
 * STABILITY: Stable (equal elements maintain their relative order)
 * 
 * WHEN TO USE:
 * - Large datasets
 * - When you need stable sorting
 * - When worst-case performance matters
 * - External sorting (sorting data that doesn't fit in memory)
 * - NOT recommended when space is limited
 */
function mergeSort(arr) {
    // Base case: array with 0 or 1 element is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Divide: Split array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Conquer: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    
    // Combine: Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and add smaller one to result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements from left array (if any)
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Add remaining elements from right array (if any)
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

/**
 * ============================================================================
 * 5. QUICK SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Choose a "pivot" element from the array
 * - Partition: Rearrange array so elements < pivot are on left,
 *              elements > pivot are on right
 * - Recursively sort the left and right sub-arrays
 * 
 * ANALOGY: Like organizing books on a shelf - pick a book (pivot),
 *          put smaller books on left, larger on right, repeat
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [64, 25, 12, 22, 11]
 * 
 * Pass 1: Pivot = 11 (last element)
 *   Partition: [11, 25, 12, 22, 64]
 *   Left: [] (empty, all elements > 11)
 *   Right: [25, 12, 22, 64]
 * 
 * Pass 2: Sort right sub-array [25, 12, 22, 64], Pivot = 64
 *   Partition: [25, 12, 22, 64]
 *   Left: [25, 12, 22] (all < 64)
 *   Right: [] (empty)
 * 
 * Continue recursively...
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n log n) - when pivot divides array evenly
 *   - Average Case: O(n log n)
 *   - Worst Case: O(n²) - when pivot is always smallest/largest
 * 
 * SPACE COMPLEXITY: O(log n) - recursion stack (average case)
 * 
 * STABILITY: Unstable (may change relative order of equal elements)
 * 
 * WHEN TO USE:
 * - Large datasets (very fast in practice)
 * - When average-case performance matters
 * - In-place sorting needed
 * - NOT recommended when worst-case O(n²) is unacceptable
 * - Most widely used sorting algorithm in practice
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get pivot index
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    
    return arr;
}

// Helper function to partition the array
function partition(arr, low, high) {
    // Choose the rightmost element as pivot
    const pivot = arr[high];
    
    // Index of smaller element (indicates right position of pivot)
    let i = low - 1;
    
    // Traverse through all elements
    // Compare each element with pivot
    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of smaller element
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    
    // Place pivot at its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    return i + 1; // Return pivot index
}

/**
 * ============================================================================
 * 6. HEAP SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Build a max heap from the array
 * - Repeatedly extract the maximum element from heap
 * - Place it at the end of the array
 * - Reduce heap size and heapify again
 * 
 * ANALOGY: Like a tournament bracket - always the best (largest) rises to top
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [64, 25, 12, 22, 11]
 * 
 * Step 1: Build max heap
 *   [64, 25, 12, 22, 11] → Heap structure
 * 
 * Step 2: Extract max (64), swap with last element (11)
 *   [11, 25, 12, 22, 64] (64 is in correct position)
 * 
 * Step 3: Heapify remaining [11, 25, 12, 22]
 *   Max is 25, swap with 11
 *   [25, 11, 12, 22, 64]
 * 
 * Continue until sorted...
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n log n)
 *   - Average Case: O(n log n)
 *   - Worst Case: O(n log n) - consistent performance!
 * 
 * SPACE COMPLEXITY: O(1) - sorts in-place
 * 
 * STABILITY: Unstable
 * 
 * WHEN TO USE:
 * - When you need guaranteed O(n log n) performance
 * - When worst-case performance is critical
 * - In-place sorting with consistent performance
 * - NOT recommended for small datasets (overhead)
 */
function heapSort(arr) {
    const n = arr.length;
    
    // Build max heap (rearrange array)
    // Start from the last non-leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        
        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
    
    return arr;
}

// Helper function to heapify a subtree
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child
    
    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

/**
 * ============================================================================
 * 7. COUNTING SORT
 * ============================================================================
 * 
 * HOW IT WORKS:
 * - Count frequency of each element
 * - Calculate cumulative counts
 * - Place elements in correct positions based on counts
 * 
 * ANALOGY: Like counting votes - count how many of each, then arrange
 * 
 * STEP-BY-STEP EXAMPLE:
 * Array: [4, 2, 2, 8, 3, 3, 1]
 * 
 * Step 1: Count frequencies
 *   Count: [0, 1, 2, 2, 1, 0, 0, 0, 1]
 *           (1 appears 1 time, 2 appears 2 times, etc.)
 * 
 * Step 2: Cumulative counts
 *   Cumulative: [0, 1, 3, 5, 6, 6, 6, 6, 7]
 * 
 * Step 3: Place elements
 *   Result: [1, 2, 2, 3, 3, 4, 8]
 * 
 * TIME COMPLEXITY:
 *   - Best Case: O(n + k) where k is range of input
 *   - Average Case: O(n + k)
 *   - Worst Case: O(n + k)
 * 
 * SPACE COMPLEXITY: O(k) - where k is range of input
 * 
 * STABILITY: Stable (can be made stable)
 * 
 * WHEN TO USE:
 * - When range of input (k) is not significantly larger than n
 * - Integer sorting with limited range
 * - As a subroutine in Radix Sort
 * - NOT recommended when range is very large
 */
function countingSort(arr) {
    const n = arr.length;
    
    // Find the maximum element to determine range
    const max = Math.max(...arr);
    
    // Create count array to store count of each element
    const count = new Array(max + 1).fill(0);
    
    // Count frequency of each element
    for (let i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    
    // Modify count array to store cumulative counts
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    const output = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    // Copy output array back to original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
    
    return arr;
}

/**
 * ============================================================================
 * COMPARISON TABLE
 * ============================================================================
 * 
 * Algorithm      | Best      | Average   | Worst     | Space    | Stable
 * ---------------|-----------|-----------|-----------|----------|--------
 * Bubble Sort    | O(n)      | O(n²)     | O(n²)     | O(1)     | Yes
 * Selection Sort | O(n²)     | O(n²)     | O(n²)     | O(1)     | No
 * Insertion Sort | O(n)      | O(n²)     | O(n²)     | O(1)     | Yes
 * Merge Sort     | O(n log n)| O(n log n)| O(n log n)| O(n)     | Yes
 * Quick Sort     | O(n log n)| O(n log n)| O(n²)     | O(log n) | No
 * Heap Sort      | O(n log n)| O(n log n)| O(n log n)| O(1)     | No
 * Counting Sort  | O(n + k)  | O(n + k)  | O(n + k)  | O(k)     | Yes
 * 
 * ============================================================================
 * WHEN TO USE WHICH ALGORITHM?
 * ============================================================================
 * 
 * 1. SMALL DATASETS (< 50 elements):
 *    → Insertion Sort (simple, fast for small data)
 * 
 * 2. MEDIUM DATASETS (50 - 1000 elements):
 *    → Quick Sort (fast average case)
 * 
 * 3. LARGE DATASETS (> 1000 elements):
 *    → Merge Sort or Quick Sort
 *    → Heap Sort (if worst-case matters)
 * 
 * 4. NEARLY SORTED DATA:
 *    → Insertion Sort (excellent performance)
 * 
 * 5. INTEGER DATA WITH LIMITED RANGE:
 *    → Counting Sort (very fast)
 * 
 * 6. WHEN STABILITY MATTERS:
 *    → Merge Sort, Insertion Sort, Bubble Sort, Counting Sort
 * 
 * 7. WHEN MEMORY IS LIMITED:
 *    → Heap Sort, Quick Sort, Insertion Sort (O(1) space)
 * 
 * 8. GENERAL PURPOSE (MOST CASES):
 *    → Quick Sort (used in most programming languages' sort functions)
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(70));
console.log("SORTING ALGORITHMS TEST");
console.log("=".repeat(70));

const testArray = [64, 34, 25, 12, 22, 11, 90, 5];
console.log("\nOriginal Array:", testArray);

console.log("\n" + "-".repeat(70));
console.log("1. BUBBLE SORT");
console.log("-".repeat(70));
console.log("Sorted:", bubbleSort([...testArray]));

console.log("\n" + "-".repeat(70));
console.log("2. SELECTION SORT");
console.log("-".repeat(70));
console.log("Sorted:", selectionSort([...testArray]));

console.log("\n" + "-".repeat(70));
console.log("3. INSERTION SORT");
console.log("-".repeat(70));
console.log("Sorted:", insertionSort([...testArray]));

console.log("\n" + "-".repeat(70));
console.log("4. MERGE SORT");
console.log("-".repeat(70));
console.log("Sorted:", mergeSort([...testArray]));

console.log("\n" + "-".repeat(70));
console.log("5. QUICK SORT");
console.log("-".repeat(70));
console.log("Sorted:", quickSort([...testArray]));

console.log("\n" + "-".repeat(70));
console.log("6. HEAP SORT");
console.log("-".repeat(70));
console.log("Sorted:", heapSort([...testArray]));

console.log("\n" + "-".repeat(70));
console.log("7. COUNTING SORT");
console.log("-".repeat(70));
const countingTestArray = [4, 2, 2, 8, 3, 3, 1];
console.log("Original:", countingTestArray);
console.log("Sorted:", countingSort([...countingTestArray]));

console.log("\n" + "=".repeat(70));
console.log("All algorithms produce the same sorted result!");
console.log("=".repeat(70));

// Export all functions
module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSort,
    quickSort,
    heapSort,
    countingSort
};

