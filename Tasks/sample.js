'use strict';

// Get one random element from an array

const getRandomElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = getRandomElement;
