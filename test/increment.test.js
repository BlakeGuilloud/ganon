const { increment } = require("../lib");

describe("increment", () => {
  test("increment of 0 to equal 1", () => {
    expect(increment(0)).toBe(1);
  });

  test("increment of 1 to equal 2", () => {
    expect(increment(1)).toBe(2);
  });

  test("increment of -1 to equal 0", () => {
    expect(increment(-1)).toBe(0);
  });
});
