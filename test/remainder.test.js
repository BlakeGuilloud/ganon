const { remainder } = require('../lib');

test('remainder of 4 / 2 to equal 0', () => {
  expect(remainder(4, 2)).toBe(0);
});

test('remainder of 2 / 2 to equal 0', () => {
  expect(remainder(2, 2)).toBe(0);
});

test('remainder of 3 / 2 to equal 1', () => {
  expect(remainder(3, 2)).toBe(1);
});

test('remainder of 2 / 3 to equal 2', () => {
  expect(remainder(2, 3)).toBe(2);
});

test('remainder of 2 / 1 to equal 0', () => {
  expect(remainder(2, 1)).toBe(0);
});

test('remainder of 2 / 0 to be NaN', () => {
  expect(remainder(2, 0)).toBeNaN();
});