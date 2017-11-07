/**
 * Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")",
 * "[", "]", "{", "}", and "|" in string.
 * @param {String} String to escape, set default "" if passed null/undefined
 * @return {String} Returns the escaped string
 **/
function escapeRegExp(str) {
  if(typeof str === "string") {
    return str.replace(/[.*+?^"${}()|[\]\\]/g, "\\$&");
  }
  return "";
}

module.exports = escapeRegExp;
