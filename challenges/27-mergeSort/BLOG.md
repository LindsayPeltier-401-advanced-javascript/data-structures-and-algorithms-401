# Merge Sort

Merge sort is a divide-and-conquer, recursive algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.
- Divide the unsorted list into sublists, each containing an element.
- Take adjacent pairs of two singleton lists and merge them to form a list of 2 elements. 
- Repeat the process until a single sorted list is obtained.
- While comparing two sublists for merging, the first element of both lists is taken into consideration. 
- While sorting in ascending order, the element that is of a lesser value becomes a new element of the sorted list. 
- This procedure is repeated until both the smaller sublists are empty and the new combined sublist comprises all the elements of both the sublists.

## Psuedocode

```
  ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```
## Visual
![](./assets/mergeSort.jpg)

## Trace
- Step One divides our array into two arrays, each with three elements: [8,4,23] and [42,16,15]
- Step Two tracks the left side and further divides the array of three elements into [8,4] and [23]
- Steps Three and Four completes the process of dividing each element into their own array: [8], [4]
- Step Five combines the first two single element arrays in sorted order: [4,8]
- Steps Six and Seven includes the third single element array and sorts it with the others: [4,8,23]
- Steps Eight - Fourteen repeats the same steps for the right side array of [42,16,15], ending with [15,16,42]
- Step Fifteen combines the two three-element arrays into one sorted array: [4,8,15,16,23,42]

## Efficency 

Time complexity of Merge Sort is \Theta(nLogn) in worst, average and best cases as merge sort always divides the array into two halves and take linear time to merge two halves.

Space: O(n)
