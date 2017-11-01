/**
 * `curryPartial` is a generic function that allows either currying (see lib/curry.js)
 * or partial application (see lib/partial.js). The function should be very flexible.
 * After being invoked on a function (mandatory), the function returned by curryPartial(fn) can take arguments or nested calls to `curryPartial`.
 * See test/curryPartial.test.js for details.
 * Inspired by https://codewars.com/kata/currying-vs-partial-application
 *
 * @params {Function} fn The function to be transformed into a curryPartial'ed function.
 * @returns {Function} A version of the input function that allows for both currying and partial application.
 */

function curryPartial(fn) {

}

module.exports = curryPartial;
