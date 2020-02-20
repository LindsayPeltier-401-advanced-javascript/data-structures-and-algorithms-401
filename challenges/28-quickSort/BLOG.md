# Quick Sort

Quicksort is a very effective sorting algorithm because of its speed, in case the name wasn't a giveaway. And, although Quicksort is a divide and conquer algorithm, same as merge sort, it is often preferred due to its many interations and low complexity. 

Unlike other sorting algorithms, there are many different ways to implement quicksort, each with their own performance characteristics and stability concerns. 

The basic idea is to find a “pivot” item in the array to compare all other items against. Items larger than the pivot go to the right; items less than the pivot go to the left. There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array. 


## Psuedocode

```
  ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

  ALGORITHM Partition(arr, left, right)
      // set a pivot value as a point of reference
      DEFINE pivot <-- arr[right]
      // create a variable to track the largest index of numbers lower than the defined pivot
      DEFINE low <-- left - 1
      for i <- left to right do
          if arr[i] <= pivot
              low++
              Swap(arr, i, low)

      // place the value of the pivot location in the middle.
      // all numbers smaller than the pivot are on the left, larger on the right. 
      Swap(arr, right, low + 1)
      // return the pivot index point
      return low + 1

  ALGORITHM Swap(arr, i, low)
      DEFINE temp;
      temp <-- arr[i]
      arr[i] <-- arr[low]
      arr[low] <-- temp

```

## Visual
![](./assets/quickSort.jpg)

## Trace
**The basic steps to partition an array are:**
- Find a “pivot” item in the array. This item is the basis for comparison for a single round.
- Start a pointer (the left pointer) at the left of the pivot.
- Start a pointer (the right pointer) at the right of the pivot.
- While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
- While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
- If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
- Move the left pointer to the right by one and the right pointer to the left by one.
- If the left pointer and right pointer don’t meet, go to step 1.

## Submission Links
[Code](./quickSort.js) <br/>
[Travis-CI]() <br/>
[PR](https://github.com/LindsayPeltier-401-advanced-javascript/data-structures-and-algorithms-401/pull/29)

