'use strict';

// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
// Fixed

const zipArrays = (arr1 = [], arr2 = []) => {
  const result = [];
  let i = 0;

  for (const elem of arr2) {
    const cell = [arr1[i++], elem];

    if (cell[0] !== undefined) {
      result.push(cell);
    }
  }

  return result;
};

module.exports = zipArrays;
