// Write a function to count number of spaces in a string

function countSpaces(str){
  //Your code goes here
  var ans = str.split(" ").length - 1;
  return ans;
}

module.exports = countSpaces;