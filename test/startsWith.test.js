const { startsWith } = require("../lib");

describe("startsWith(targetString, substring)", () => {
  it("returns true when targetString starts with substring", () => {
    expect(startsWith("hello", "hell")).toBe(true);
    expect(startsWith("with spaces", "with sp")).toBe(true);
    expect(startsWith("a", "a")).toBe(true);
  });

  it("returns false when targetString does not start with substring", () => {
    expect(startsWith("hey", "ey")).toBe(false);
    expect(startsWith("cammelCase", "Cammel")).toBe(false);
    expect(startsWith("", "test")).toBe(false);
  });
});
