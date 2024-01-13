'use strict';

// Split an array into two parts

const splitArray = (index, array) => {
  const beginning = array.slice(0, index);
  const remaining = array.slice(index);
  return [beginning, remaining];
};

module.exports = splitArray;
