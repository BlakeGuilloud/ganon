/**
 * Can be used to compose functions into one large function. When calling the composed function,
 * the value will be put into the first function of @param funcs. The result of this will be put in
 * the function after that and so on. This is the reverse of {@link compose}.
 * @param {Function[]} funcs: functions that will be composed to a new function.
 * @returns {Function} Composed function.
 */

function flow(...funcs) {
  funcs.forEach(func => {
    if (typeof func !== "function") throw "not a function";
  });
  if (funcs.length === 0) {
    return (initialValue) => initialValue;
  }
  return (initialValue) => {
    let value = initialValue;
    funcs.forEach((f) => {
      value = f(value);
    });
    return value;
  };
}

module.exports = flow;