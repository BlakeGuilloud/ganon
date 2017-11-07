/**
 * `weaveArrays` takes two arrays and combines them into a new array
 * by alternating values from the first and second arrays.
 *
 * The resulting array should begin with the first element from the first array,
 * followed by the first element from the second array, then the second element from the first array,
 * and so on, until the end of either the first or the second array has been reached and
 * the resulting array ends with an element from the second array.
 *
 * Example: weaveArrays( [1, 2, 3], [4, 5, 6, 7, 8] ) === [1, 4, 2, 5, 3, 6]
 *
 * The function should combine the given arrays only if all values in the first array AND
 * all values in the second array are of the same type. Otherwise it should throw an error
 * indicating that mismatched types have been provided.
 *
 * @param   { Array } firstArray: an array containing any type of values
 * @param   { Array } secondArray: an array containing any type of values
 * @returns { Array } a new array containing values from both of the given arrays
 **/

function weaveArrays(firstArray, secondArray) {

  if(arguments.length !== 2){
    throw new Error("Expected 2 arguments, didn't get 2.");
  }

  if(!Array.isArray(firstArray) || !Array.isArray(secondArray)){
    throw new TypeError("One of the arguments was not an array.");
  }

  if(firstArray.length === 0 || secondArray.length === 0){
    return [];
  }

  if(!firstArray.every((el) => typeof el === typeof firstArray[0]) || !secondArray.every((el) => typeof el === typeof firstArray[0])){
    throw new TypeError("All array elements must be of same type.");
  }

  let weavedArray = [];

  for (let i = 0; i < Math.min(firstArray.length, secondArray.length); i++){
    weavedArray.push(firstArray[i]);
    weavedArray.push(secondArray[i]);
  }

  return weavedArray;
}

module.exports = weaveArrays;
