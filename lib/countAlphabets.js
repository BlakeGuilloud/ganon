// Write a function that returns a number of occurence of alphabets in a given string.
//   * aaa -> a:3
//   * apple -> a:1,p:2,e:1
//   * apple pie -> a:1,p:3,l:1,e:2,i:1

// Ignores non-alphabetic characters
// Case-insensitive
// Returns string of key-value pairs

function countAlphabets(str) {
  if (typeof str !== "string") throw new TypeError("Invalid Type");

  const count = {};

  str.toLowerCase().split("").forEach(char => {
    if (/[a-zA-Z]/.test(char)) {
      if (count[char]) count[char]++;
      else count[char] = 1;
    }
  });

  return Object.keys(count).map(key => `${key}:${count[key]}`).join(",");
}

module.exports = countAlphabets;
