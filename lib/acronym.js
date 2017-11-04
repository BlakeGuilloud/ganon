/**
  Takes a string and return an acronym (string based on the first letters of each word in the string)
  @param {string} str
  @returns {string} acronym string
  ex. acronym("I like chocolate") -> "ILC"
*/

function acronym(a) {
  return a.split(/ |_|-|,/).map((s) => { return s[0].toUpperCase(); }).join("");
}

module.exports = acronym;
