const { last } = require('../lib');

test('last of [1, 2, 3] to equal 3', () => {
  expect(last([1, 2, 3])).toBe(3);
});

test('last of [] to equal undefined', () => {
  expect(last([])).toBe(undefined);
});

test('last of "hello" to equal "o"', () => {
  expect(last('hello')).toBe('o');
});
