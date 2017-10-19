const { endsWith } = require("../lib");

describe("endsWith(targetString, substring)", () => {
  it("returns true when targetString ends with substring", () => {
    expect(endsWith("hello", "lo")).toBe(true);
    expect(endsWith("with spaces", "th spaces")).toBe(true);
    expect(endsWith("a", "a")).toBe(true);
  });

  it("returns false when targetString does not end with substring", () => {
    expect("hey", "he").toBe(false);
    expect("cammelCase", "case").toBe(false);
    expect("", "test").toBe(false);
  });
});
