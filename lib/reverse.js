// Write a number that accepts on parameter and returns the reverse of it. (String or Integer)

function reverse(value) {
  switch(typeof value) {
  case "string":
    return value.split("").reverse().join("");
  case "number":
    return Number(value.toString().split("").reverse().join(""));
  default:
    throw new Error("Type not allowed");
  }
}

module.exports = reverse;
