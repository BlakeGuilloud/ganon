/**
 * Converts bytes to kilobytes
 * @param {number} bytes
 * @return {number} kilobytes
 */
function convertBytesToKilobytes(bytes) {
  if (typeof(bytes) != "number" || !bytes)
    throw new Error("Input must be a number");
  if (bytes < 0)
    throw new Error("Input must be non-negative.");
  return bytes / 1000;
}

module.exports = convertBytesToKilobytes;
