/**
 * Returns bitwise OR of all parameters.
 * Given only booleans, the result is a logical OR.
 * @param  {...number|boolean|array} args - array arguments can contain either numbers, booleans or arrays.
 * @return {number|boolean}
 */

const isNumber = require("./isNumber.js");
const isArray = require("./isArray.js");

var allBoolean = true;

function checkTypes(input) {
  input.forEach(item => {
    if (!isNumber(item) && typeof item !== "boolean" && !isArray(item)) {
      throw Error("Invalid type");
    } else if (isArray(item)) {
      checkTypes(item);
    } else if (isNumber(item)) {
      allBoolean = false;
    }
  });
}

function convertToBinary(input) {
  return parseInt(Number(input).toString(2));
}

function singleBitwiseOr(a, b) {
  let digitArray = (a + b).toString().split("");
  let binaryArray = digitArray.map(digit => {
    return digit > 0 ? 1 : 0;
  });
  return parseInt(binaryArray.join(""), 2);
}

function addBinary(input) {
  if (isArray(input)) {
    return input.reduce((accumulator, current) => {
      if (isArray(current)) {
        current = convertToBinary(addBinary(current));
      } else {
        current = convertToBinary(current);
      }
      accumulator = convertToBinary(accumulator);

      return singleBitwiseOr(current, accumulator);
    }, 0);
  } else {
    return input;
  }
}

function or(...args) {
  checkTypes(args);

  if (allBoolean) return addBinary(args) === 1;
  return addBinary(args);
}

module.exports = or;
