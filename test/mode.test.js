
const { mode } = require("../lib");

test("mode of [1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3] to be [3]", () => {
  expect(mode([1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3])).toEqual([3]);
});

test("mode of [3, 5, 4, 4, 1, 1, 2, 3] to be [1, 3, 4]", () => {
  expect(mode([3, 5, 4, 4, 1, 1, 2, 3])).toEqual([1, 3, 4]);
});

test("mode of [1, 2, 3, 4] to be [1, 2, 3, 4]", () => {
  expect(mode([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});
