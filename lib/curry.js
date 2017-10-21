//  returns a function that invoked with params either:
//      - invokes func with params, if params length matches func's arity
//      - a new (curried) function, accepting func's remaining parameters

function curry(func, ...args) {
  if (typeof func !== "function") {
    throw new Error("func is not a function");
  }

  const arity = func.length;

  if (arity === 0) {
    return func;
  }

  if (args.length < arity) {
    return curry.bind(null, func, ...args);
  }

  return func(...args);
}

module.exports = curry;