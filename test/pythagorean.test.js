const { pythagorean } = require('../lib');

test('A right triangle with sides 3 and 4 have a hypotonuse of 5', () => {
  expect(pythagorean(3, 4)).toBe(5);
});

test('A right triangle with sides 1 and 1 have a hypotonuse of square root of 2', () => {
  expect(pythagorean(1, 1)).toBe(Math.sqrt(2));
});
