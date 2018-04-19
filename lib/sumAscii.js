/**
 * Write a function that will return the sum of all characters.
 *
 * @param {String} str
 * @return {Number} sum of all ASCII characters
**/
function sumAscii(str) {
  let sum = 0;
  str.split("").forEach((element) => {
    sum += element.charCodeAt(0);
  });
  return sum;
}

module.exports = sumAscii;