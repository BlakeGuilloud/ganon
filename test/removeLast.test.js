const { removeLast } = require("../lib");

describe("removeLast", () => {
  test("duck is removed from array", () => {
    expect(removeLast(["cat", "dog", "fish", "duck"])).toEqual(["cat", "dog", "fish"]);
  });

  test("d is removed from array", () => {
    expect(removeLast(["a", "b", "c", "d"])).toEqual(["a", "b", "c"]);
  });

  test("4 is removed from array", () => {
    expect(removeLast([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });
});
