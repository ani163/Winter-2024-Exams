'use strict';

// Find an intersection of two dictionaries
// Fixed

const findIntersection = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const intersection = object1;

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      delete intersection[key];
    }
  }

  return intersection;
};

module.exports = findIntersection;
