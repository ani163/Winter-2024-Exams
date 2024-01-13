'use strict';

// Get one random element from an array
// Fixed

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomElement = (arr) => {
  return arr[getRandomIndex(arr.length)];
};

module.exports = getRandomElement;
