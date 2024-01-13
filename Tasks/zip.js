'use strict';

// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
// Fixed

const zipArrays = (arr1 = [], arr2 = []) => {
  const result = [];

  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
};

module.exports = zipArrays;
