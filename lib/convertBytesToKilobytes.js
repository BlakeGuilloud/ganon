/**
 * Converts bytes to kilobytes
 * @param {number} bytes
 * @return {number} kilobytes
 */
function convertBytesToKilobytes(bytes) {
  if (typeof bytes === "number") {
    return bytes / 1000;
  } else {
    throw("Invalid data type of bytes");
  }
}

module.exports = convertBytesToKilobytes;
