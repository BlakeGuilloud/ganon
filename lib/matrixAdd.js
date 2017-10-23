/**
 * Write a function that takes 2 Matrices as arguments and returns the sum of the two matrices.
*/

function matrixAdd(a, b){
  if (!Array.isArray(a) || a[0].constructor !== Array) {
    return 0;
  }

  if (b == null) {
    return a;
  }

  return a.map(function(n, i){
    return n.map(function(o, j){
      return o + b[i][j];
    });
  });
}

module.exports = matrixAdd;
