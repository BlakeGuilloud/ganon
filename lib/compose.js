/**
 * Can be used to compose functions into one large function. When calling the composed function,
 * the value will be put into the last function of @param funcs. The result of this will be put in
 * the function before that and so on. This is the reverse of {@link flow}.
 * @param {Function[]} funcs: functions that will be composed to a new function.
 * @returns {Function} Composed function.
 */
function compose(...funcs) {

}

module.exports = compose;
