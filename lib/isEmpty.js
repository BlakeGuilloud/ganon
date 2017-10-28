/**
 * A function which returns a true when
 * a given array or object is empty
 * @param {Array or Object} type
 * @returns {boolean}
 *
 * Examples:
 *  isEmpty([]) === true
 *  isEmpty([1, 2, 3]) === false
 *  isEmpty({}) === true
 *  isEmpty({"key": "value"}) === false
 */
export function isEmpty(value) {
  //Check for not null
  if(typeof value != "undefined" && value != null){
    //Check for input is array
    if(Array.isArray(value)){
      return value.length == 0;
    }else {
      for(var prop in value){
        if(value.hasOwnProperty(prop))
          return false;
      }
      return JSON.stringify(value) === JSON.stringify({});
    }
  }
    else{
      return false;
    }
}

module.exports = isEmpty;
