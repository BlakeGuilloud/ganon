// Write function which takes an array of arrays and flattens it
// example
// flattenArray([[0, 1], [2, 3], [4, 5]]); => [0, 1, 2, 3, 4, 5]

function flattenArray( array ) {
  if(Array.isArray(array)) {
    return array.reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
  }
}

module.exports = flattenArray;
