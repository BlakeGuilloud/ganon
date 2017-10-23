const { not } = require("../lib");

describe("not", () => {
  test("returns the ! value of the argument", () => {
    expect(not(true)).toBe(false);
    expect(not()).toBe(true);
    expect(not(false)).toBe(true);
  });
});
