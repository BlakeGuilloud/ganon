const { take } = require("../lib");

test("Should return empty array if count is zero", () => {
  expect(take([1,2,3],0)).toBe([]);
});

test("Should return first N elements if array length is >= N", () => {
  expect(take([1,2,3],2)).toBe([1,2]);
});

test("Should return whole array if array length is < N", () => {
  expect(take([1,2,3],13)).toBe([1,2,3]);
});
