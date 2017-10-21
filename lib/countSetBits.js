// Write a function that returns the number of 1s in the binary representation of the integer (first parameter)
// Brian Khernigan's algorithm
function countSetBits(n) {
  let count = 0;
  while(n) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

module.exports = countSetBits;