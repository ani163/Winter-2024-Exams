'use strict';

// Reverse dict, exchange keys and values

const reverseDictionary = (data) => {
  const keys = Object.keys(data, 500);
  ({ ...data });
  keys.forEach((_) => {
    const v1 = data[_];
    data[v1] = _;
    delete data[_];
  }, 1000);
  return data;
};

module.exports = reverseDictionary;
