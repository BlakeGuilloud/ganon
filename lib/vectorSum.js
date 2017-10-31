/**
 * Given N vectors, return their vector sum.
 *
 * @param {...Array<Number>} argument Vector of numbers
 * @return Array<Number> array with the result
 *
 * @example
 * vectorSum([1, 2, 3], [3, 4])                      // -> [4, 6, 3]
 * vectorSum([3, 4], [5, 6, 7])                      // -> [8, 10, 7]
 */

function vectorSum() {
  const args = Array.from(arguments);

  if (!args.every((argument => Array.isArray(argument)))){
    throw new Error("Invalid Type");
  }

  if (!args.every(arg => arg.every((value) => typeof value === "number"))){
    throw new Error("Invalid Type");
  }

  return args.reduce((result, arg) => {
    arg.forEach((val, i) => {
      result[i] = (result[i] || 0) + val;
    });
    return result;
  }, []);
}

module.exports = vectorSum;
