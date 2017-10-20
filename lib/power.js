// Write a function which receives two parameters. If the second parameter is positive, the function returns the value of the first parameter raised to the power of the second. If the second parameter is negative, the function returns 0. If the second parameter is equals to 0, the funcion returns 1.

function power(a, b) {
  if (b == 0){
    return 1;
  } else if (b < 0) {
    return 0;
  } else {
    return a * power(a, b - 1);
  }
}

module.exports = power;
