// write a function that returns the string str with inverted case per character (stR <> STr)
// numeric and special characters shall be ignored

function swapCase(str) {
  var retVal = "";
  if( 0 == str.length ){
    return retVal;
  }
  else{
    for(var i = 0; i < str.length ; i++){
      var char = str.charAt( i );
      if(char == char.toLowerCase()){
        retVal += char.toUpperCase();
      }
      else{
        retVal += char.toLowerCase();
      }
    }
  }
  return retVal;
}

module.exports = swapCase;
