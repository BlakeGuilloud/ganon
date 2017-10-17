const { average } = require('../lib');

test('average of [1, 2, 3] to equal 2', () => {
  expect(average([1, 2, -3])).toBe(0);
});

test('average of [] to equal undefined', () => {
  expect(average([])).toBe(undefined);
});

test('average of ["hello world"] to equal undefined', () => {
  expect(average(['hello world'])).toBe(undefined);
});

test('average of ["hello world", 2, 3] to equal 2.5', () => {
  expect(average(["hello world", 2, 3])).toBe(2.5);
});
