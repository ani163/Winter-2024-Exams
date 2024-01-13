'use strict';

// Find an intersection of two dictionaries
// Fixed

const findIntersection = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const commonKeys = keys1.filter(key => object1[key] === object2[key]);
  const intersection = Object.fromEntries(commonKeys.map(key => [key, object1[key]]));

  return intersection;
};

module.exports = findIntersection;
