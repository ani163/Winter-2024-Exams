'use strict';

// Split an array into two parts

const splitArray = (index, array) => {
  const beginning = array.slice(0, index);
  array = array.slice(index, len);
  return [beginning, array];
};

module.exports = splitArray;
