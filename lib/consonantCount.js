/**
 * Write a function that accepts a string and returns the number of consonants in the string
 * @param {String} str
 * @return {Number}
 */

const isConsonant = (char) =>
  (char !== "A" && char !== "E" && char !== "I" && char !== "O" && char !== "U" && char !== " ");

function consonantCount(str) {
  if(str.length != 0)
    str = str.toUpperCase();
  else
    return 0;

  let consonantCount = 0;

  for(let i = 0; i < str.length; i++) {
    if(isConsonant(str[i]))
      consonantCount ++;
  }

  return consonantCount;
}

module.exports = consonantCount;
