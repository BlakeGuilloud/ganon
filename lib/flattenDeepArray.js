// Write function which takes an array of nested arrays of unknown depth
// and flattens it
//
// eg flattenArray([[0, [1, [2]]], [3, [4]], [5]]); => [0, 1, 2, 3, 4, 5]

function flattenDeepArray( array ) {

  var typeError = ("Not an array or number");
  var results = [];

  if (!Array.isArray(array))
    throw typeError;

  array.forEach((e) => {

    if (Array.isArray(e))
      results = results.concat(flattenDeepArray(e));

    else if (isNaN(e))
      throw typeError;

    else
      results.push(e);

  });

  return results;
}

module.exports = flattenDeepArray;