/**
 * Converts bits to bytes
 * @param {number} bits
 * @return {number} bytes
 */
function convertBitsToBytes(bits) {
  if (typeof bits === "number") {
    return bits / 8;
  } else {
    throw("Invalid Type");
  }
}

module.exports = convertBitsToBytes;
