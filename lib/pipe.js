/**
 * Create a pipe with an initial value. This uses {@link flow} internally to create a composed function.
 * After calling the function with the initialValue, a function is returned, that takes multiple functions.
 * When this returned function is called with multiple functions, it returns the result of piping the
 * initial value through all functions.
 * @param {any} initialValue This is the initial value that will be pulled through the functions.
 * @returns {Function} returns a function that takes multiple functions. The initial value
 *    will be pulled through those functions.
 */
function pipe(initialValue) {

}

module.exports = pipe;
