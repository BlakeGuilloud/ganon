const  isodd  = require('../lib/isodd');
test('is  1 an odd number', () => {
  expect(isodd(1)).toBe(true);
});

test('is  2 an odd number', () => {
  expect(isodd(2)).toBe(false);
});

test('is  3 an odd number', () => {
  expect(isodd(3)).toBe(true);
});