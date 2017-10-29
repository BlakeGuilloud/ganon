// Write a function that returns hex state of decimal number

function dec2hex(a) {
  return (+a).toString(16).toUpperCase();
}

module.exports = dec2hex;
