//write a function that takes in an array and an element and returns the index of that element
//if the element doesn't exist returns -1

function indexOf(arr, element){
  for (var i = 0, n = arr.length; i < n; i += 1) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

module.exports = indexOf;
