const { notnot } = require("../lib");

describe("notnot", () => {
  test("returns the ! value of the argument", () => {
    expect(notnot(true)).toBe(true);
    expect(notnot()).toBe(false);
    expect(notnot(false)).toBe(false);
  });
});
