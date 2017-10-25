/**
  Find all occurances of given element in an array and return list of its
  indices or empty array if not present.
  @param {array} arr
  @param {*} b
  @returns {array} indices of a given parameter b in array arr
*/

function findAll(arr, b) {
  if(!Array.isArray(arr)) throw new TypeError("First argument must be an array.");
  if(b === undefined) throw new ReferenceError("Please provide a second argument.");

  let indices = [];
  arr.forEach( (elem, index) => {
    if(elem === b) indices.push(index);
  });

  return indices;
}

module.exports = findAll;
