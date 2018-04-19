/**
 * Given data x, returns value of lastly(f(x), g(x))
 * where lastly, f and g are respective functions themselves
 * could come in handy, when unlike compose,
 * result of 1st operation (g(x))
 * is needed in last operation (lastly())
 *
 * @param {Function} lastly
 * @param {Function} f
 * @param {Function} g
 * @param {*} x
 * @returns {*}
 */

const curry = require("./curry");

const fork = curry((lastly, f, g, x) => lastly(f(x), g(x)));

module.exports = fork;
