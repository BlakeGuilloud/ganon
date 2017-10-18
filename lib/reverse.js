// Write a number that accepts on parameter and returns the reverse of it. (String or Integer)

function reverse(value) {
  var str = "" + value;
  var res = "";
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  if (typeof value === "number") {
    return parseInt(res);
  }
  return res;
}

module.exports = reverse;