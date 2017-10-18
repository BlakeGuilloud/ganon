const { fibonacci } = require('../lib');

test('first Fibonacci number (index 0) is 0', () => {
  expect(fibonacci(0)).toBe(1);
});

test('Tenth Fibonacci number (index 9) is 34', () => {
  expect(fibonacci(9)).toBe(34);
});

test('Hundedth Fibonacci number (index 99) is 218922995834555169026', () => {
  expect(fibonacci(99)).toBe(218922995834555169026);
});

test('Negative index produces error', () => {
  expect(fibonacci(-1)).toThrowError('Index cannot be negative');
});
