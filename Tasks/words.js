'use strict';

// Count words in a string

const countWords = (inputString) => {
  const wordsArray = inputString.trim().split(/\s+/);
  let numberOfWords = 0;
  
  for (const word of wordsArray) {
    if (word !== '') {
      numberOfWords++;
    }
  }

  return numberOfWords;
};

module.exports = countWords;
