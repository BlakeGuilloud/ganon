/**
 * Returns bitwise AND of all parameters.
 * Given only booleans, the result is a logical AND.
 * Parameters can be as many as you wish.
 * Parameters can be simple integers, booleans or array
 * of such types. They can even be a mix of those.
 * NOTE: Nested arrays are not supported.
 */
function and(...args) {
  const isAllBoolean = args.reduce((isAllBoolean, val) => isAllBoolean &&
    (Array.isArray(val)
      ? val.reduce((isAllBoolean, val) => isAllBoolean && (typeof val === "boolean"), true)
      : (typeof val === "boolean")), true);

  return isAllBoolean
    ? args.reduce((andProduct, val) => andProduct &&
    (Array.isArray(val) ? val.reduce((andProduct, val) => andProduct && val, true) : val), true)
    : args.reduce((andProduct, val) => andProduct &
    (Array.isArray(val) ? val.reduce((andProduct, val) => andProduct & val, ~0) : val), ~0);
}

module.exports = and;
