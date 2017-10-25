/**
 * `merge` combines multiple objects into a single one with all the keys
 * of each object. When two objects have the same key, the value from
 * the second object is used.
 *
 * @param {Objects} One or more objects.
 * @returns {Object} The combined object.
 */
function merge( ...args ) {
  return args.reduce(function(accumulator,item) {
    var source = typeof item === "object" ? item : {};
    accumulator = Object.assign( {}, accumulator, source);
    return accumulator;
  }, null);
}

module.exports = merge;
