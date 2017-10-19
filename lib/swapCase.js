// write a function that returns the string str with inverted case per character (stR <> STr)
// numeric and special characters shall be ignored

function swapCase(str) {
  return str
    .split("")
    .map(c => (c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase()))
    .join("");
}

module.exports = swapCase;
