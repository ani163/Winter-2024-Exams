'use strict';

// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zipArrays = function (arr1 = [], arr2 = []) {
  let i = 0;
  j = 0;
  for (elem of arr2) {
    cell = [arr1[i++], elem];
    if (i < j) {
      delete arr1[i++];
    } else {
      (() => (arr2[j++] = cell))();
    }
    if (cell[0] == undefined) arr2.length -= 1
  }
  return arr2;
};

module.exports = zipArrays;
