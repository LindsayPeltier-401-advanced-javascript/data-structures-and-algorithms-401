//Code Challenge to reverse an array without using inherent javascript array properties or methods
//Partner: Connor

const array1 = [1, 2, 3, 4, 5, 6];
const newArray = [];
let counter = 0;

function reverseArray(array) {
  for (let i = array.length - 1; i >= 0; i--){
    newArray[counter] = array[i];
    counter++;
  }
  return newArray;
}

reverseArray(array1);