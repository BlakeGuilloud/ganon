var isNumber = require("./isNumber");

/**
 * Returns a given number in scientific notation to a specified number of significant figures (optional).
 * If no significant figure amount is given, defaults to integer
 * @param  {number} input
 * @param  {number} sigFigs
 * @return {string}
 */

function scientificNotation(input, sigFigs = 1) {
  if (!isNumber(input) || typeof input === "string") {
    throw new Error("input must be a number");
  }
  if (!isNumber(sigFigs)) {
    throw new Error("sigFigs must be a number");
  }

  var exponential = input.toExponential(sigFigs - 1).split("e");

  return `${exponential[0]} x 10<sup>${parseInt(exponential[1], 10)}</sup>`;
}

module.exports = scientificNotation;