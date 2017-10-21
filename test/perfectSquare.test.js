const { perfectSquare } = require("../lib");

describe("perfectSquare", () => {
  test("Number 1 is a perfect square", () => {
    expect(perfectSquare(1)).toBe(true);
  });

  test("Number 9 is a perfect square", () => {
    expect(perfectSquare(9)).toBe(true);
  });

  test("Number 3 is not a perfect square", () => {
    expect(perfectSquare(3)).toBe(false);
  });

  test("Number 37 is not a perfect square", () => {
    expect(perfectSquare(37)).toBe(false);
  });
});