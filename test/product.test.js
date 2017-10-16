const { product } = require('../lib');

test('multiplies 1 * 2 to equal 2', () => {
  expect(product(1, 2)).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(product(3, 4)).toBe(12);
});