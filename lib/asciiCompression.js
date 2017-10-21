// Write a function that returns a string with a compressed representation of the original string
//   * a -> a1
//   * aa -> a2
//   * aaa -> a3
//   * aabb -> a2b2

function asciiCompression(a) {
  // Your code goes here.
  const arrChars = a.split("");
  let arr = [];
  const arrCharsCount = arrChars.length;
  if (arrCharsCount > 0) {
    for (let i = 0; i < arrCharsCount; i++) {
      if (i == 0) {
        arr.push(arrChars[0], 1);
      } else if (i > 0) {
        if (arrChars[i] == arrChars[i - 1]) {
          //if this char is same as previous one, increment count of previous element in arr
          const last = arr.length - 1;
          arr[last] = arr[last] + 1;
        } else {
          arr.push(arrChars[i], 1);
        }
      }
    }
    // print out elements in arr
    let output = arr.join("");
    console.log(output);
    return output;
  }
  return undefined;
}

module.exports = asciiCompression;
