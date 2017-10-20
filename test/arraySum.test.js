const { arraySum } = require("../lib");

describe("arraySum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(arraySum([1, 2])).toBe(3);
  });

  test("adds 3 + 0 + 4 to equal 7", () => {
    expect(arraySum([3, "test", 0, 4])).toBe(7);
  });
});
