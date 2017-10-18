
const { median } = require("../lib");

test("median of [1, 2, 3, 4, 5] to be 3", () => {
  expect(median([1,2,3,4,5])).toBe(3);
});

test("median of [15] to be 15", () => {
  expect(median([15])).toBe(15);
});

test("1,9,3,4 to be 3.5", () => {
  expect(median([1,9,3,4])).toBe(3.5);
});
