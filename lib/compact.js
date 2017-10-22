/**
 * Returns copy of array without falsy values.
 * FYI in JS falsy values are: null, false, undefined, NaN, 0, ""
 *
 * @param {Array} arr
 * @returns {Array}
 */

function isFalsy(val) {

  if (val == null || val == undefined) {
    return true;
  }

  let first =  (val == false || val == 0 || val == "");
  let second = isNaN(val) && val.constructor == Number;

  if (val.constructor != Number) {
    return first;
  }

  return first || second;
}

function compact(arr) {

  if (arr == null) {
    return new Array();
  }
  
  var newArray = new Array();
  arr.forEach(function(val) {
  	if (isFalsy(val) == false){
  	  newArray.push(val);
  	}
  });

  return newArray;
}

module.exports = compact;
