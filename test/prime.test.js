const { prime } = require('../lib');

test('7 is prime', () => {
  expect(prime(7)).toBe(true);
});

test('1 is not prime', () => {
  expect(prime(1)).toBe(false);
});

test('49 is not prime', () => {
  expect(prime(49)).toBe(false);
});

test('95279 is prime', () => {
  expect(prime(95279)).toBe(true);
});
