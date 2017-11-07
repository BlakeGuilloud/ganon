/**
 * It receive a function f and return the arity of the function
 * Check https://en.wikipedia.org/wiki/Arity
 * @param {Function} f
 * @return {number} The arity of the function
 */



function arity(f) {
  if (typeof f !== "function") {
    throw "f should be a function";
  }
  return f.length;
}

module.exports = arity;
