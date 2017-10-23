/**
 * Takes two strings and returns a function when
 * provided strings correspond with to an existing
 * conversion calculation. Invalid conversions
 * throw Error.
 *
 * @param {String} inputType - A case insensitive string corresponding to the input type of an existing covert function.
 * @param {String} outputType - A case insensitive string corresponding to the output type of an existing covert function.
 * @throws Error
 * @returns {Function}
 * @example
 *
 * // returns converFeetToInches
 * convert("Feet", "Inches");
 * // returns 12
 * convert("Feet", "Inches")(1);
 */

function convert(inputType, outputType) {
  // your code goes here
  throw new Error("Method is still a skeleton");
}

module.exports = convert;
