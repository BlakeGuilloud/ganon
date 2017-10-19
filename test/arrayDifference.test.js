const { arrayDifference } = require("../lib");

test("arrayDifference([2, 1], [2, 3]) should return [1]", () => {
  expect(arrayDifference([1, 2], [2, 3])).toEqual([1]);
});

test("arrayDifference([2, 3, 1, 4], [2, 3]) should return [3, 1]", () => {
  expect(arrayDifference([2, 3, 1, 4], [2, 3])).toEqual([3, 1]);
});
