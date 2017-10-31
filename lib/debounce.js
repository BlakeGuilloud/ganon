/**
 * @description
 *   debounce takes a function and wait time (ms) and returns a debounced
 *   version of that function.
 *   A debounced function will only fire after a specified amount of time
 *   has elapsed without being called again.  If the debounced function is
 *   called again before that time has elapsed, the timout is reset.
 * @param {function} callback function to be debounced
 * @param {number} time in ms to wait before invoking the callback
 * @return {function} the debounced function
 */

function debounce(fn, wait) {
  if (typeof fn !== "function") {
    throw new Error("First argument is not a function");
  }
  if (typeof wait !== "number") {
    throw new Error("Second argument is not a number");
  }
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      fn.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

module.exports = debounce;
