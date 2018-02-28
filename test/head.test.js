const { head } = require("../lib");

describe("head", () => {
  test("returns 1 for [1, 2, 3]", () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  test("return undefined for []", () => {
    expect(head([])).toBe(undefined);
  });
});
