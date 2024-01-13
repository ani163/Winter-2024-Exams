'use strict';

// Generate random password

const generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * MAX);
    password = password + alphabet[randomIndex];
  }
  return password;
};

module.exports = generatePassword;
