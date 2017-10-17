const { odd } = require('../lib');

test('7 is odd', () => {
  expect(odd(7)).toBe(true);
});

test('8 is not odd', () => {
  expect(odd(8)).toBe(false);
});

test('4681 is odd', () => {
  expect(odd(4681)).toBe(true);
});