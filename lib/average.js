// Write a function that returns the average of the numbers in an array

function average(arr) {
  let numbers = 0;

  let sum = arr.reduce((a, b) => {
    if(Number.isInteger(b)){
      numbers++;
      return a + b;
    }else{
      return a
    }
  }, 0);
  
  if(!numbers){
    return undefined;
  }else{
    return sum / numbers;
  }
}

module.exports = average;
