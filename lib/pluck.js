/**
 * Extract a list of object values at given key
 *
 * @param {String} key
 * @param {Array} array of object
 * @return {Array} array of object values at given key
 *
 * @example
 * pluck("id","test")                       // -> []
 * pluck(["id",[{id:1},{id:2},{id:3}]])     // -> [1,2,3]
 * pluck("id",[{name:"John Doe"},{id:1},5]) // -> [undefined,1,undefined]
 */
function pluck(value) {
  throw new Error("not implemented");
}

module.exports = pluck;
