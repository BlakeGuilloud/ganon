const { squareRoot } = require('../lib');

test('square root of 9 to equal 3', () => {
  expect(squareRoot(9)).toBe(3);
});

test('square root of 25 to equal 5', () => {
  expect(squareRoot(25)).toBe(5);
});
