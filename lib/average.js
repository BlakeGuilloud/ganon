/**
 * Takes an array and returns the average of the numbers in it
 * that are in one array but not in the other one.
 * @param {Array} arr
 * @return {Int or decimal} sum
 **/
function average(arr) {
  let numbers = 0;

  let sum = arr.reduce((a, b) => {
    if(Number.isInteger(b)){
      numbers++;
      return a + b;
    }else{
      return a;
    }
  }, 0);

  if(!numbers){
    return undefined;
  }else{
    return sum / numbers;
  }
}

module.exports = average;
