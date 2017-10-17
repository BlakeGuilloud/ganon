const {
  find
} = require('../lib');

test('Basic: index of first occurence of 3 is 2', () => {
  expect(find([1,2,3,4], 3)).toBe(2);
});

test('More than one occurence: find of 2 in [1,2,2,3,4] is 1', () => {
  expect(find([1,2,2,3,4], 2)).toBe(1);
});

test('Find not found: find of 2 in [1,3,4,5,6] should return -1', () => {
  expect(find([1,3,4,5,6], 2)).toBe(-1);
});
