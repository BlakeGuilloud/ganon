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

  if (isString) {
    let splitString = a.split("");
    return splitString.includes(b)
      ? splitString.filter((val) => val != b).join("")
      : false;
  } else {
    return a.includes(b)
      ? a.filter((val) => val != b)
      : false;
  }
}

module.exports = findAndRemove;
