const { decrement } = require("../lib");

describe("decrement", () => {
  test("decrement of 1 to equal 0", () => {
    expect(decrement(1)).toBe(0);
  });

  test("decrement of 2 to equal 1", () => {
    expect(decrement(2)).toBe(1);
  });

  test("decrement of 0 to equal -1", () => {
    expect(decrement(0)).toBe(-1);
  });
});
