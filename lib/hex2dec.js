// Write a function that returns decimal state of hex number

/**
 * Returns the decimal state of a hex number
 * @param {string} h
 * @returns {number}
 */
function hex2dec(h) {
  return parseInt(h, 16);
}

module.exports = hex2dec;
