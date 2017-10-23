/**
 * TODO: Write a function that concatenates all the arrays together
 * @param array: our first array
 * @param ...rest: the rest of our arrays
 */
function concatenateArray(array, ...rest) {
  rest.forEach(r => {
    array.push(...r);
  });
  return array;
}

module.exports = concatenateArray;
