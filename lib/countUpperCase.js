/**
 * TODO: Write a function that counts all uppercase letters in a string.
 * @param str: string with uppercases
 */

function countUpperCase(str) {
  
	// Your code goes here.
	
	var count=0;

	for(var i=0;i<str.length;++i){
		ch=str.charAt(i);
		if(ch >= 'A' && ch <= 'Z') ++count;
	}
	return count;
}

module.exports = countUpperCase;
