/**
 * Replace any instance of a specific string in another word
 * @param {String} word
 * @param {String} replace
 * @param {String} replacement
 * @param {Bool}   g
 * @return {String}
 **/
function regexReplace( word, replace, replacement, g ) {
  return word.replace(new RegExp(replace, Boolean(g) === true ? "g" : undefined), replacement);
}

module.exports = regexReplace;
