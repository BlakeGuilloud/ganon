const { cubeRoot } = require('../lib');

test('cube-root of 27 to equal 3', () => {
  expect(squareRoot(27)).toBe(3);
});

test('cube-root of 125 to equal 5', () => {
  expect(cubeRoot(125)).toBe(5);
});
