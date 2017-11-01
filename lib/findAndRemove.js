/**
  Find all occurances of given element in an array and removes it
  from the array
  @param {array} arr
  @param {number} b
  @returns {array or boolean} array if found atleast single occurrence else false
*/

function findAndRemove(a, b) {
  let isString = typeof a === "string";

  if (!(Array.isArray(a) || isString)) {
    throw new TypeError("First argument must be a string or array");
  } else if (b === undefined || b === null) {
    throw new Error("Second argument is required");
  } else if (isString && typeof b !== "string") {
    throw new TypeError("If first argument is a string, second argument must be a string");
  }

  return isString
    ? removeFromString(a, b)
    : removeFromArr(a, b);
}

function removeFromString(str, b) {
  let splitString = str.split("");

  return removeFromArr(splitString, b)
    ? removeFromArr(splitString, b).join("")
    : false;
}

function removeFromArr(arr, b) {
  return arr.includes(b)
    ? arr.filter((val) => val != b)
    : false;
}

module.exports = findAndRemove;
