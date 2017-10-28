const { arrayMult } = require("../lib");

describe("arrayMult", () => {
  test("multipy 1 * 2 * 3 * 4 to equal 24", () => {
    expect(arrayMult([1, 2, 3, 4])).toBe(24);
  });

  test("adds 3 * 0 * 4 to equal 0", () => {
    expect(arrayMult([3, "test", 0, 4])).toBe(0);
  });

  test("Empty array must be equal to 0", () => {
    expect(arrayMult([])).toBe(0);
  });

  test("['pen', 'pineapple', 'apple', 'pen'] must be equal to 0", () => {
    expect(arrayMult(["pen", "pineapple", "apple", "pen"])).toBe(0);
  });
});
