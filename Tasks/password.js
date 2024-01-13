'use strict';

// Generate random password

const generatePassword = (alphabet, length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    password += alphabet[randomIndex];
  }
  return password;
};

module.exports = generatePassword;
