'use strict';

// Count types in an array
// Fixed

const countTypes = (arr) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const item of arr) {
    const itemType = typeof item;
    if (!types[itemType]) {
      types[itemType] = 0;
    }
    types[itemType]++;
  }

  return types;
};

module.exports = countTypes;
