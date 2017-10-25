// Write a function that returns octal state of decimal number

function dec2oct(a) {
  var number = a;
  var octal = "";
  var remainder;

  if (number === 0) {
    octal = 0;
  } else {
    while(number > 0) {
      remainder = number % 8;
      octal = remainder + octal;
      number = Math.floor(number / 8);
    }
  }

  return parseInt(octal);
}

module.exports = dec2oct;
