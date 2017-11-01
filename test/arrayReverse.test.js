const { arrayReverse } = require("../lib");

describe("arrayReverse", () => {
  test("reverse array of [1, 2, 3, 4] is [4, 3, 2, 1]", () => {
    expect(arrayReverse([1, 2, 3, 4])).toBe([4, 3, 2, 1]);
  });

  test("reverse array of [9, 8, 7, 3] is [3, 7, 8, 9]", () => {
    expect(arrayReverse([9, 8, 7, 3])).toBe([3, 7, 8, 9]);
  });
});

