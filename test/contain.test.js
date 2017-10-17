
const { contain } = require('../lib');

test('array does not contain potato', () => {
  expect(contain([], 'potato')).toBe(false);
});

test('array does not contain empty string', () => {
  expect(contain(['banana', 'orange', 'carrot', 'melon', 'grape'], '')).toBe(false);
});

test('array contains watermelon', () => {
  expect(contain(['banana', 'orange', 'carrot', 'melon', 'grape', 'watermelon'], 'watermelon')).toBe(true);
});