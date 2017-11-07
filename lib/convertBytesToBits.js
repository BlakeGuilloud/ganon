/**
 * Converts bytes to bits
 * @param {number} bytes
 * @return {number} bits
 */
function convertBytesToBits(bytes) {
  if (typeof bytes != "number") {
    throw new Error("Paramter must be a number.");
  }
  return bytes * 8;
}

module.exports = convertBytesToBits;
