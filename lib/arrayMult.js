/**
 * This method should not modify the original array.
 * It will ignore anything that is not a number
 * It will take an array of numbers an return the result of all
 * the items multiplied
 * [1, 2, 3, 4] => 24
 * ["pen", "pineapple", "apple", "pen"] => 0
 * @param {Array} the array to multiply
 * @returns {Number} the result of the multiplication
 */

function arrayMult(arr) {
  var firstFlag = false; // To identify the presence of atleast one number
  var result = 1;
  for (var counter = 0; counter < arr.length;counter++){
    var data = arr[counter];
    if(typeof(data) != "number"){ // To eliminate everything except number
      data = 1;
    }else{
      firstFlag = true;
    }
    result *= data;
  }
  return firstFlag ? result : 0;
}

module.exports = arrayMult;
