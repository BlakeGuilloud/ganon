/**
 * Takes an array and a word and returns true if the word is inside the array
 * @param {Array} array
 * @param {String} word
 * @return {Boolean}
 **/
function contain(array, word) {
  return array.indexOf(word) > -1;
}

module.exports = contain;
