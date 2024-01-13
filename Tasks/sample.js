'use strict';

// Get one random element from an array

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

module.exports = getRandomElement;
