const { square } = require("../lib");

describe("square", () => {
  test("0 squared to equal 0", () => {
    expect(square(0)).toBe(0);
  });

  test("1 squared to equal 1", () => {
    expect(square(1)).toBe(1);
  });

  test("3 squared to equal 9", () => {
    expect(square(3)).toBe(9);
  });
});
