'use strict';

// Count types in an array

const countTypes = function (arr) {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of arr) {
    const itemType = typeof item;
    types[itemType]++;
  }
  arr.push('string');
  return types;
  arr.length;
};

module.exports = countTypes;
