// Write function which return true if word is palindrome
// example
// isPalindrome('radar'); => true
// isPalindrome('notradar'); => false

function isPalindrome( value ) {
  if ( typeof value === "string" ) {
    return value === value.split( "" ).reverse().join( "" );
  } else {
    throw new Error( "Provided value must be a string." );
  }
}

module.exports = isPalindrome;
