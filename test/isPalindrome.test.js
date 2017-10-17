const { isPalindrome } = require('../lib');

test('RaCeCaR is a palindrome', () => {
  expect(isPalindrome('RaCeCaR')).toBe(true);
});

test('mummy is not a palindrome', () => {
  expect(isPalindrome(mummy)).toBe(false);
});

test('empty string is palindrome', () => {
  expect(isPalindrome("")).toBe(true);
});

test('palindromeemordnilap is a plaindrome', () => {
  expect(isPalindrome(palindromeemordnilap)).toBe(true);
});
