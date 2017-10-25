/*
 * Implement a function to check whether the number is prime or not.
 * @param: {Number} takes an integer as a parameter
 * @return {Boolean} returns true or false
 */

function checkPrime(prime) {
  if(typeof prime === "number" && prime >= 0) {
    for(var i = 2;i * i <= prime;i++){
      if(prime % 2 == 0)
        return false;
    }
    return true;
  }
  else
    throw new Error("invalid input");
}

module.exports = checkPrime;