/** 
 * Returns the first element of an Array.
 * Casts Strings into Arrays if passed.
 *
 * @param {Array|String} arr
 * @return {*}
 *
 */

function arrayHead(arr) {
  if(Array.isArray(arr) && arr.length > 0){
    return arr[0];
  }
  else{
    return arr[0];
  }
}

module.exports = arrayHead;
