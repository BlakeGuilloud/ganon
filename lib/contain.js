// Write a function that returns true if a word is inside an array,
//otherwise false
function contain(array, word) {
  return array.indexOf(word) > -1;
}

module.exports = contain;