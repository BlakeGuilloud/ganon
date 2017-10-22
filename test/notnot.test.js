const { not } = require("../lib");

describe("not", () => {
  test("returns the ! value of the argument", () => {
    expect(not(true)).toBe(true);
    expect(not()).toBe(false);
    expect(not(false)).toBe(false);
  });
});
