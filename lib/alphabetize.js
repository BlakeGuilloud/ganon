// Write a function that accepts a String and returns the string in alphabetical order.

function alphabetize(a) {
  return Array.from(a).sort().join('');
}

module.exports = alphabetize;