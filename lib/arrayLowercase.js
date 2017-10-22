/**
 * [arrayLowercase description]
 * @param array: An array of strings
 * @return Array of lowercase strings
 */
function arrayLowercase(array) {
  if (!Array.isArray(array)) throw "The first argument is not an array.";
  if (array.length === 0) return [];
  if (typeof array[0] !== "string") throw "The first value of the array is not a string.";

  let arrayWithLowercase = array.filter(v => typeof v === "string");
  arrayWithLowercase = arrayWithLowercase.map(v => v.toLowerCase());
  return arrayWithLowercase;
}

module.exports = arrayLowercase;
