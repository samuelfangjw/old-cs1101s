---
id: searchingandsorting
title: "Searching and Sorting"
---

It might be a bit hard to visualise some of the algorithms so head over to [visualgo](https://visualgo.net/en) to see pretty visualisations!

:::note
The implementation of the following algorithms may vary depending on the data structure or programming language used.
:::

## Searching Algorithms
We will be covering two kinds of searching algorithms, *linear search* and *binary search*.

### Linear Search
Check each element sequentially until target is found.

```
function linear_search(A, v) {
    const len = array_length(A);
    let idx = 0;
    while (idx < len && A[idx] !== v) {
        idx = idx + 1;
    }
    return idx < len;
}
```
* Time Complexity: O(n), where n is the length of the array to be searched.

### Binary Search
Binary search only works on **sorted arrays**. We divide the array by half, identify which half contains the element that we want and perform binary search on that half.

It is more efficient than linear search since we are dividing the problem by 2 each time.

```
function binary_search(A, v) {
    let low = 0;
    let high = array_length(A) - 1;

    while (low <= high) {
        const mid = math_floor((low + high) / 2 );
        if (v === A[mid]) {
            break;
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}
```

* Time Complexity: O(log n), where n is the length of the array to be searched.

## Sorting Algorithms
We will be covering *Selection Sort*, *Insertion Sort* and *Merge Sort*. Some other basic algorithms that are commonly used are *Bubble Sort* and *Quick Sort*

### Selection Sort
Take the smallest (largest) element from the unsorted array and swap it with the element at the front (back) of the unsorted array. This element is now sorted. Repeat the process for the remaining elements until all elements have been processed.

```
function selection_sort(A) {
    const len = array_length(A);

    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos);
    }
}

function find_min_pos(A, low, high) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        } else {}
    }
    return min_pos;
}

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
```

* Time Complexity: O(n²), where n is the length of the array to be sorted.
* Space Complexity: O(1)

### Insertion Sort
Consider the first element. This element is already sorted. 

Consider the second element. If the second element is smaller than the first element, swap them, else it is already in the correct position. The fist two elements are now sorted.

Consider the third element. While the third element is smaller than the element to the left of it, swap the two elements. The first three elements are now sorted.

Repeat until all elements are sorted.

```
function insertion_sort(A) {
    const len = array_length(A);
    
    for (let i = 1; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j]; // shift right
            j = j - 1;
        }
        A[j + 1] = x;
    }
}
```

* Time Complexity: O(n²), where n is the length of the array to be sorted.
* Space Complexity: O(1)

:::note
The best case time complexity for insertion sort is O(n)! This occurs when the array is already sorted.
:::

### Merge sort
Split the array into halves until you cannot split anymore. Merge and sort each neighbouring half, this can be done in O(n) time, where n is the length of the array. Since you have to merge O(log n) times, time complexity is O(n log n). 

```
function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}

function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    } else {}
}

function merge(A, low, mid, high) {
    const B = [];
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    
    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }   
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}
```

* Time Complexity: O(n log n), where n is the length of the array to be sorted.
* Space Complexity: O(n) with arrays, O(1) with linked lists, where n is the length of the array to be sorted. 