/**
 * Given a string, invert case of any given character
 * Ex. invertCase("Hello World") => hELLO wORLD
 * @param {String} str
 * @return {String}
 */
function invertCase(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let s = str.charAt(i);
    if (s.toLowerCase() === s){
      res += s.toUpperCase();
    } else {
      res += s.toLowerCase();
    }
  }
  return res;
}

module.exports = invertCase;
