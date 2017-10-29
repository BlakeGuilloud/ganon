/**
 * Converts bytes to kilobytes
 * @param {number} bytes
 * @return {number} kilobytes
 */
function convertBytesToKilobytes(bytes) {
  // Your code goes here
    if(parseInt(bytes) > 0)
    {
      retrun bytes/1000;
    }
    return 0;
}

module.exports = convertBytesToKilobytes;
