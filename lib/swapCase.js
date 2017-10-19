// write a function that returns the string str with inverted case per character (stR <> STr)
// numeric and special characters shall be ignored

function swapCase(str) {
  return str.split("").map(ch => ch == ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join("");
}

module.exports = swapCase;
