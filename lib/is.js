/**
 * A functional monadic method which returns a function when
 * a provided string correspond with to an existing
 * boolean determinant. Invalid arguments throw Error.
 * @param {String} type a case-insensitive string which corresponds with an existing boolean determinant.
 * @returns {boolean}
 *
 * returns isPrime
 * is("Prime");
 * returns true
 * is("Prime")(2);
 */

function is(type) {
  if (typeof type === "string"){
    var functionName = "is" + type;
    try{
      const fn = require("./" + functionName);
      return fn;
    }
    catch(err){
      throw new Error("Invalid Argument");
    }
  }
  throw new Error("Invalid Type");
}

module.exports = is;
