/**
 * TODO: Write a function that concatenates all the arrays together
 * @param array: our first array
 * @param ...rest: the rest of our arrays
 */
function concatenateArray(array, ...rest) {
  // Your code here
  // Your code here
  if(rest !== undefined){
    for(var sect in rest){
      if(Array.isArray(rest[sect]) === false){
        throw new Error("Argument type not allowed");
      }
    }
  }
  if(Array.isArray(array)){
    for(var element in rest){
      array = array.concat(rest[element]);
    }
    return array;
  }else{
    throw new Error("Argument type not allowed");
  }
}

module.exports = concatenateArray;
