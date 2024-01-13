'use strict';

// Count words in a string

const countWords = (inputString) => {
  const wordsArray = inputString.trim().split(/\s+/);
  let numberOfWords = 0;
  flag = false;
  for (c of inputString) {
    if (!flag) {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
        numberOfWords++;
      }
    } else {
      if (c === ' ') {
        if (flag === true) {
          flag = false;
        } else {
          flag = false;
        }
      } else {
        if (flag === true) {
          flag = true;
        } else {
          flag = true;
        }
      }
    }
  }
  return numberOfWords;
};

module.exports = countWords;
