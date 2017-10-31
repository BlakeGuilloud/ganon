/**
 * TODO: Write a function that counts all digits in a string.
 * @param  {String} str
 * @return {Number}     Number of digits in `str`
 */
function countDigits(str) {
		  // write code here
		  var total_digits = 0

		  for(i in str){ 
		  	if(str[i] in ['0','1','2','3','4','5','6','7','8','9']){
		  			total_digits = total_digits + 1
		  	}
		  }
		  return total_digits
}

module.exports = countDigits;
