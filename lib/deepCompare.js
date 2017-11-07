/**
 * Check if all properties on the provided parameters are equal.
 * This should recurse through all objects in the parameters' object graph.
 * Equivalence should be asserted on numbers, strings, and arrays in the object graph.
 * @param {Object} objOne the first object
 * @param {Object} objTwo the second object
 * @return {Boolean} result
 */

// test to check if obj are defined
const isDefined = obj => typeof obj == "object" && obj !== null;

// array test helper function
const isArray = obj => Array.isArray(obj);

// pure object test helper function
const isPlainObject = obj => !isArray(obj) && typeof obj === "object";

// Object compare helper function
const objectCompare = (objOne, objTwo) => {
  const keys1 = Object.keys(objOne);
  const keys2 = Object.keys(objTwo);

  if (keys1.length !== keys2.length) {
    return false;
  }

  const keysMatch = keys1.every(key => keys2.includes(key));
  if (!keysMatch) {
    return false;
  }

  return keys1.every(key => baseDeepCompare(objOne[key], objTwo[key]));
};

// Array compare helper function
const arrayCompare = (objOne, objTwo) => {
  if (objOne.length !== objTwo.length) {
    return false;
  }

  return objOne.every((el, index) => baseDeepCompare(el, objTwo[index]));
};

/*
 * Recursive deep compare call
 */
const baseDeepCompare = (objOne, objTwo) => {
  if (typeof objOne !== typeof objTwo) {
    return false;
  }

  if (isArray(objOne)) {
    return arrayCompare(objOne, objTwo);
  }

  if (isPlainObject(objOne)) {
    return objectCompare(objOne, objTwo);
  }

  return objOne === objTwo;
};

/*
* Function entry point
* checks for null and undefined
*/
function deepCompare(objOne, objTwo) {
  if (objOne === objTwo) {
    return true;
  }

  return baseDeepCompare(objOne, objTwo);
}

module.exports = deepCompare;
