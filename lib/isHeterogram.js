/**
 * This function will only accept strings
 * It should return true if all the letters
 * in the string are unique (ignoring whitespaces)
 * "subdermatoglyphic" -> true
 * "apple" -> false (because p is repeated)
 * @param {String} str
 * @returns {Boolean}
 */
function isHeterogram(str = "") {
  if (typeof str !== "string" || !str.length) {
    return undefined;
  }

  const cache = [];
  const strArr = str.split("");

  return strArr.every(el => {
    if (el.match(/\s/)) {
      return true;
    }
    if (cache.includes(el)) {
      return false;
    }
    cache.push(el);
    return true;
  });
}

module.exports = isHeterogram;
