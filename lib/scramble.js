
/**
 * Scrambles a string or array
 * Given a string, return a scrambled string
 * ex. "hello" -> "lheol"
 *
 * Given an array, return a scrambled array
 * ex. [1, 2, "potato", {key1: val1}] -> ["potato", 2, {key1: val1}, 1]
 */
function scramble(input) {
  var list = [], isString = false;
  if(!(typeof input === "string" || input instanceof String) && !(Object.prototype.toString.call(input) === "[object Array]")){
    throw new TypeError("input must be a String or an Array");
  }
  if(input.length < 2 || hasArrayOnlySingleElements(input)){
    return input;
  }
  if(typeof input === "string" || input instanceof String){
    list = input.split("");
    isString = true;
  } else {
    list = input.slice();
  }
  do {
    // Fisher–Yates
    for(var i = list.length - 1; i >= 1; i--){
      var j = Math.floor(Math.random() * list.length);
      var swap = list[i];
      list[i] = list[j];
      list[j] = swap;
    }
  } while (areArraysInTheSameOrder(input, list));
  if(isString){
    list = list.join("");
  }
  return list;
}

/**
 * returns true if all elements of an array are the scramble
 *
 * @param  {Array}  list   The array to check
 * @return {Boolean}       Returns ture if an array contains only the same elements
 */
function hasArrayOnlySingleElements(list){
  if(!list || list.length < 2){
    return true;
  }
  var first = list[0];
  for(var i = 0; i < list.length; i++){
    if(first != list[i]){
      return false;
    }
  }
  return true;
}

/**
 * checks if two arrays are in the same order, need to be the same length
 *
 * @param  {Array} list       the given array
 * @param  {Array} otherArray the other Array
 * @return {Boolean}          returns true if both array are in the same order
 */
function areArraysInTheSameOrder(list, otherArray){
  for(var i = 0; i < list.length; i++){
    if(list[i] != otherArray[i]){
      return false;
    }
  }
  return true;
}

module.exports = scramble;
