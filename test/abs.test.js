const { abs } = require('../lib');

test('absolute of 0 to equal 0', () => {
  expect(abs(0)).toBe(0);
});

test('absolute of 1 to equal 1', () => {
  expect(abs(1)).toBe(1);
});

test('absolute of -1 to equal 1', () => {
  expect(abs(-1)).toBe(1);
});
