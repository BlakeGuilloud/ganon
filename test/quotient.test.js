const { quotient } = require('../lib');

test('divides 1 / 2 to equal .5', () => {
  expect(quotient(1, 2)).toBe(.5);
});

test('divides 12 / 4 to equal 3', () => {
  expect(quotient(12, 4)).toBe(3);
});