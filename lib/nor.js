/**
 * Write a function that looks at both params and returns true
 * if both params are true or false, but returns false otherwise.
 * @param {Boolean} a
 * @param {Boolean} b
 */
function nor() {
  if (a === true && b === true || a === false && b === false){
    return true;
  } else {
    return false;
  }
  
}

module.exports = nor;

