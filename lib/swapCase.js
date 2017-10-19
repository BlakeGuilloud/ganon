// write a function that returns the string str with inverted case per character (stR <> STr)
// numeric and special characters shall be ignored


function swapCase(str) {
  var newStr = "";
  var letters = /^[A-Za-z]+$/;

  if(str === ""){
    return "";
  }
  for(var i = 0;i < str.length;i++)
  {
	     if(str[i].match(letters)){

      if(str[i] == str[i].toLowerCase()){
        newStr += str[i].toUpperCase();
	        }
      else{
        newStr += str[i].toLowerCase();
      }
	     }
	     else{
      newStr += str[i];
	     }

  }
  return newStr;
}


module.exports = swapCase;
