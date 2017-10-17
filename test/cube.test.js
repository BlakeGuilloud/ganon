const { cube } = require('../lib');

test('0 cube to equal 0', () => {
  expect(cube(0)).toBe(0);
});

test('1 cube to equal 1', () => {
  expect(cube(1)).toBe(1);
});

test('3 cube to equal 27', () => {
  expect(cube(3)).toBe(27);
});