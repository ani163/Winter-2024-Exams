'use strict';

// Generate random password
// Fixed

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

const generatePassword = (alphabet, length) => {
  let password = '';

  for (let i = 0; i < length; i++) {
    password += alphabet[getRandomIndex(alphabet.length)];
  }

  return password;
};

module.exports = generatePassword;
