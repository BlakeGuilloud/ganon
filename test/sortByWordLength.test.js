const { sortByWordLength } = require("../lib");

describe("sortByWordLength", () => {
  test("sortByWordLength([cat, a, dog, mouse]) should return [a, cat, dog, mouse]", () => {
    expect(sortByWordLength(["cat", "a", "dog", "mouse"])).toEqual(["a", "cat", "dog", "mouse"]);
  });

  test("sortByWordLength([x, xx, x, x]) should return [x, x, x, xx]", () => {
    expect(sortByWordLength(["x", "xx", "x", "x"])).toEqual(["x", "x", "x", "xx"]);
  });

  test("sortByWordLength([x]) should return [x]", () => {
    expect(sortByWordLength(["x"])).toEqual(["x"]);
  });
});
