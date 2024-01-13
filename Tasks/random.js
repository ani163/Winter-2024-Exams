'use strict'

// Generate random integer value in given range

const getRandomInt = (min, max = min) => {
  const range = max - min + 1;
  return min + Math.floor(Math.random() * range);
};

module.exports = getRandomInt;
