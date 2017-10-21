// Write a function that determines if a number is an integer
// @param {any data type}
// @returns {Boolean}

function isInteger(param) {
  try {
    return Number.isInteger(param)  
  } catch (err) {
    console.error('error in integer checking: ' + err)
    return false
  }
}

module.exports.isInteger;
