const { power } = require('../lib');

test('1 raised to 2 to equal 1', () => {
  expect(power(1, 2)).toBe(1);
});

test('2 raised to 3 to equal 8', () => {
  expect(power(2, 3)).toBe(8);
});

test('3 raised to -4 to equal 0', () => {
  expect(power(3, -4)).toBe(0);
});

test('5 raised to 0 to equal 1', () => {
  expect(power(5, 0)).toBe(1);
});
