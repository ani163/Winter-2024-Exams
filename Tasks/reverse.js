'use strict';

// Reverse dict, exchange keys and values

const reverseDictionary = (data) => {
  const keys = Object.keys(data);
  const reversedData = {};

  for (const key of keys) {
    const value = data[key];
    reversedData[value] = key;
  }

  return reversedData;
};

module.exports = reverseDictionary;
