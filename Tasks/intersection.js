'use strict';

// Find an intersection of two dictionaries

const findIntersection = function findIntersection(object1, object2) {
  const keys1 = Object.keys(object1);

  for (const key of keys1) {
    if (object1[key] === object2[key]) {
      object2[key] = object1[key];
    } else {
      delete object1[key];
    }
  }
  return object1;
};

module.exports = findIntersection;
