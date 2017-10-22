/** Write a function that returns the correct phrase 
 *  'Fizz' (multiple of 3), 
 *	'Buzz' (multiple of 5), 
 *   or 'FizzBuzz' (multiple of 3 and 5) for the given number.
 *   These rules are further described here:
 *   https://en.wikipedia.org/wiki/Fizz_buzz
 */
function fizzBuzz(num) {
  let inputArray = [];
  for(let i=1; i<=num; i++){
    if(i % 15 === 0){
      inputArray.push('FizzBuzz');
    } else if(i % 5 === 0){
      inputArray.push('Buzz');
    } else if(i % 3 === 0){
      inputArray.push('Fizz');
    } else {
      inputArray.push(i);
    }
  };
  return inputArray;
}

module.exports = fizzBuzz;
