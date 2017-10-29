/** Write a function that returns the correct phrase
 *  'Fizz' (multiple of 3),
 *	'Buzz' (multiple of 5),
 *   or 'FizzBuzz' (multiple of 3 and 5) for the given number.
 *   These rules are further described here:
 *   https://en.wikipedia.org/wiki/Fizz_buzz
 */
function fizzBuzz(num) {
  let result = "";
  if ( !(num % 3) ) result += "Fizz";
  if ( !(num % 5) ) result += "Buzz";
  return result || num;
}

module.exports = fizzBuzz;