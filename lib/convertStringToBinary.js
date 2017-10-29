/**
 * Convert any given string to binary
 * @param {string} text
 * @return returned value in binary
 */

function convertStringToBinary(text) {
  if (typeof text !== "string")
    throw new Error("invalid input, should be string");

  return text
    .split("")
    .map(c => c.charCodeAt(0).toString(2))
    .map(padBits)
    .join(" ");
}

function padBits(b) {
  if (b.length <= Math.pow(2, 2)) {
    return b.padStart(4, 0);
  } else {
    var bits = 2;
    //while (b.length > Math.pow(2, bits)) bits++;

    return b.padStart(8, "0");
  }
}

if (!String.prototype.padStart) {
  String.prototype.padStart = function(count, str) {
    return (str || " ").repeat(count - this.length).substr(0, count) + this;
  };
}

module.exports = convertStringToBinary;
