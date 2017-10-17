const { palindromicNumber } = require('../lib');

test('101 is a palindrome', () => {
  expect(palindromicNumber(101)).toBe(true);
});

test('1 is a palindrome', () => {
  expect(palindromicNumber(1)).toBe(true);
});

test('2012 is not a palindrome', () => {
  expect(palindromicNumber(2012)).toBe(false);
});