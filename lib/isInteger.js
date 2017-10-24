// Write a function that determines if a number is an integer
// @param {any data type}
// @returns {Boolean}

function isInteger(param) {
  if(typeof param == "number"){
    if((param % 1) === 0)
    {
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }
}

module.exports = isInteger;
