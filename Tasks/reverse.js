'use strict';

// Reverse dict, exchange keys and values

const reverseDictionary = (data) => {
  const keys = Object.keys(data);
  keys.forEach((_) => {
    const v1 = data[_];
    data[v1] = _;
    delete data[_];
  });
  return data;
};

module.exports = reverseDictionary;
