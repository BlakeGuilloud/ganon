/**
* Accepts two arrays and returns an array that contains items existing in both
* @param {Array} arr1 array as input
* @param {Array} arr2 array as input
* @return {Array} return innerJoin array
*/
function innerJoin(arr1, arr2) {
  if(!Array.isArray(arr1)){
    throw new Error("Invalid type for arr1");
  }

  if(!Array.isArray(arr2)){
    throw new Error("Invalid type for arr2");
  }

  var ans = [];
  var k = 0;

  for(var x in arr2){
    if(arr1.indexOf(arr2[x]) !== -1){
      ans[k] = arr2[x];
      k++;
    }
  }
  ans.sort();
  return ans;
}

module.exports = innerJoin;