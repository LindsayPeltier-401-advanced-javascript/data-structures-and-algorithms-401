'use strict';

var array = [8, 4, 23, 42, 16, 15];

//Algorithm Swap
function swap(array, leftIndex, rightIndex) {
  var temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

//Algorithm Partition
function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

//Algorithm QuickSort
function quickSort(array, left, right) {
  var index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

var sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);

module.exports = quickSort;
//Reference: https://www.guru99.com/quicksort-in-javascript.html