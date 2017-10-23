/*
 * Implement a function to check whether the number is prime or not.
 * @param: {Number} takes an integer as a parameter
 * @return {Boolean} returns true or false
 */

function checkPrime(number) {
 
  if (number===1)
  {
    return false;
  }
  else if(number === 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < number; x++)
    {
      if(number % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

module.exports = checkPrime;
