/**
 * @param array: Array to take all the elements except the first
 */
function tail(array) {

  return array.slice(1, array.length);
}

module.exports = tail;
