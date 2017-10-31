/**
 * TODO: Write a function that counts all digits in a string.
 * @param  {String} str
 * @return {Number}     Number of digits in `str`
 */
function countDigits(str){
  // write code here
  var totalDigits = 0;
  var i;
  for(i in str){ 
    if(str[i] in ["0","1","2","3","4","5","6","7","8","9"]){
       totalDigits = totalDigits + 1
    }
  }
  return totalDigits
}

module.exports = countDigits;
