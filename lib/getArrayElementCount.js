/**
  Get count for all occurances of given element or array in an array
  If b is an array then it will count the occurrence of all elements in the given first array
  @param {array} a
  @param {array|number} b
  @returns {number} count value of element
*/

function getArrayElementCount(a, b) {
  //throw new Error("this method is still a skeleton");
  // Verify args types
  if (!Array.isArray(a)) {
    throw new Error("First argument should be an array");
  }

  if (typeof b !== "number" && !Array.isArray(b)) {
    throw new Error("Second argument should be number");
  }

  a.forEach(element => {
    if(typeof element !== "number") {
      throw new Error("First argument should be an array");
    }
  });

  if (Array.isArray(b)) {
    b.forEach(element => {
      if(typeof element !== "number") {
        throw new Error("Second argument should be number");
      }
    });
  }
  var arr = Array.isArray(b) ? b : [ b ];

  return arr.reduce((prev, curr) =>
    prev += a.filter(element => element === curr).length, 0);
}

module.exports = getArrayElementCount;
