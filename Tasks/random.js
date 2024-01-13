'use strict'

// Generate random integer value in given range
// Fixed

const calculateRange = (min, max) => {
  return max - min + 1;
};

const getRandomInt = (min, max = min) => {
  const range = calculateRange(min, max);
  return min + Math.floor(Math.random() * range);
};

module.exports = getRandomInt;
