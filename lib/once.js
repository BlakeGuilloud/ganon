/**
 * `once` takes a function and returns a function that executes the 
 * given function once. The first time the returned function is called,
 * its return value is saved. Subsequent calls to the returned function
 * returns the saved value.
 *
 * @param {Function} func The payload function.
 * @returns {Function} A new function with the described behavior.
 *
 * Example:
 * ```
 * const func = () => Date.now()
 * const start = once(func)
 *
 * start() returns 1508654795500
 * start() returns 1508654795500
 * start() returns 1508654795500
 *
 */

function once(func) {
  throw new Error("Method is still a skeleton");
}

module.exports = once;
