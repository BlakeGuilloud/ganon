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

  test("Number 18.16 is not a perfect square", () => {
    expect(perfectSquare(18.16)).toBe(false);
  });

  test("Number Infinity is not a perfect square", () => {
    expect(perfectSquare(Infinity)).toBe(false);
  });

  test("String foo is not a perfect square", () => {
    expect(perfectSquare("foo")).toBe(false);
  });

  test("[] is not a perfect square", () => {
    expect(perfectSquare([])).toBe(false);
  });
});
