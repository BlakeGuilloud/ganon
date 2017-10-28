/**
 * Write a function that returns the same string without spaces
 * @param {str} string
 * @return {string}
 */
function removeWhitespace(str){
  if (typeof str !== "string") throw new Error("Invalid Argument");
  let newNewStr = str;
  newNewStr = newNewStr.replace(/\s/g, "");
  return newNewStr;
}

module.exports = removeWhitespace;
