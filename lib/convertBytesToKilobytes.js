/**
 * Converts bytes to kilobytes
 * @param {number} bytes
 * @return {number} kilobytes
 */
function convertBytesToKilobytes(bytes) {
  var kilobytes = bytes / 1000;
  return kilobytes;
}

module.exports = convertBytesToKilobytes;
