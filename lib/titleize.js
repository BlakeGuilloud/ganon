/**
   Takes a string and return the same string with all the words capitalized and replaces some characters in order to create a nice title
   @param {string} str
   @returns {string} titleized str
   ex. titleize("man from the boondocks") -> "Man From The Boondocks"
*/

function titleize(str) {
  if(typeof str !== "string") {
    throw new TypeError();
  }
  return str.split(/_|-|\s+/g).map((s) => s[0].toUpperCase() + s.slice(1)).join(" ");
}

module.exports = titleize;
