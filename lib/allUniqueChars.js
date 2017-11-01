/**
* @description Returns true if all characters in the provided string are unique.
* @param {string} str
* @returns {boolean} allUnique
**/

function allUniqueChars(str) {
  if (str === "") return true;
  if (typeof str !== "string") throw new Error("Invalid type");
  return new Set(str).size == str.length;
}

module.exports = allUniqueChars;
