'use strict';

// Reverse an array, you can't use .reverse()

const reverseArray = (arr) => {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
};

module.exports = reverseArray;
