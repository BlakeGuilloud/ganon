/**
 * Wrap a function f and return a new function g that when invoked,
 * will call f with the arguments provided to `partial` prepended
 * to the argument list provided to g.
 * @param {Function} f
 * @param {...any} fixedArgs
 * @return {Function} wrapped function
 */



function partial(f, ...fixedArgs) {
  if (typeof f !== "function") {
    throw new TypeError("The first argument of partial must be a function");
  }
  if (fixedArgs.length <= 0) {
    return f;
  }
  return function(...moreArgs) {
    return f.apply(this, fixedArgs.concat(moreArgs));
  };
}

module.exports = partial;