const { removeLast } = require("../lib");

test("duck is removed from array", () => {
  expect(removeLast(["cat", "dog", "fish", "duck"])).toBe(["cat", "dog", "fish"]);
});

test("d is removed from array", () => {
  expect(removeLast(["a", "b", "c", "d"])).toBe(["a", "b", "c"]);
});

test("4 is removed from array", () => {
  expect(removeLast([1, 2, 3, 4])).toBe([1, 2, 3]);
});
