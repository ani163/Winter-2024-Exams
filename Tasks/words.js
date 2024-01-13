'use strict';

// Count words in a string
// Fixed

const countWords = (inputString) => inputString.trim().split(/\s+/).filter(word => word !== '').length;

module.exports = countWords;
