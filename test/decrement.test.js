const { decrement } = require('../lib');

test('decrement of 1 to equal 0', () => {
  expect(increment(1)).toBe(0);
});

test('increment of 2 to equal 1', () => {
  expect(increment(2)).toBe(1);
});

test('increment of 0 to equal -1', () => {
  expect(increment(0)).toBe(-1);
});
