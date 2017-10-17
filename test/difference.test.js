/*Commit Three*/
const { difference } = require('../lib');

test('subtracts 1 - 3 to equal -2', () => {
  expect(difference(1, 3)).toBe(-2);
});

test('subtracts 10 - 3 to equal 7', () => {
  expect(difference(10, 3)).toBe(7);
});
