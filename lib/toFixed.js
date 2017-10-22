// Write a function that returns a string representing the given number using fixed-point notation.
// Parameter value can be the number, and parameter digits is the number of digits after the decimal place.
function toFixed(value, digits = 0) {
  //return Number(value).toFixed(digits); // the easy way
  var orignial = String(value);
  var slices = orignial.split(".");
  var cut = slices[0];
  if (digits > 0) {
    cut += ".";
    var digitsAdded = 0;
    while (digits >= digitsAdded) {
      if (slices[1].length >= digitsAdded) {
        cut += slices[1].charAt(digitsAdded - 1);
      } else {
        cut += "0";
      }
      digitsAdded++;
    }
  }
  var lastNum = Number(cut.charAt(cut.length - 1));
  if (lastNum >= 5) {
    cut = cut.substring(0, cut.length - 1) + String(lastNum + 1);
  }
  return cut;
}

module.exports = toFixed;
