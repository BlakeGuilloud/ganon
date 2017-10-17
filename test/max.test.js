const { max } = require('../lib');

test('max between 10 and 0 to be 10', () => {
  expect(max(10, 0)).toBe(10);
});

test('max between 21.3 and 26 to be 26', () => {
  expect(max(21.3, 26)).toBe(26);
});

test('max between 21544 and 2000 to be 21544', () => {
  expect(max(21544, 200)).toBe(21544);
});
